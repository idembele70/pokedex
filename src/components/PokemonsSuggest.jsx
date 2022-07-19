import {
  useObservable,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import React from "react";
import { of, startWith, switchMap, timer } from "rxjs";
import { searchTerm$ } from "../rxjs/rxjs";
import { filterPokemons } from "../utils/utils";
import Cards from "./card";
import StateDefault from "./StateDefault";
import StateLoading from "./StateLoading";

const PokemonsSuggest = (props) => {
  const [searchInfo, setSearchInfo] = React.useState({
    type: "",
    value: "",
  });
  const search$ = useObservable(
    (e$) =>
      e$.pipe(
        switchMap(([searchInfo]) => {
          if (searchInfo.value)
            return timer(750).pipe(
              switchMap(() => {
                const searchedPokemons = filterPokemons(
                  searchInfo?.name,
                  searchInfo?.value
                );
                return of(<Cards pokemonsList={searchedPokemons} />);
              }),
              startWith(<StateLoading />)
            );
          else return of(<StateDefault />);
        })
      ),
    [searchInfo]
  );
  useSubscription(searchTerm$, (v) => setSearchInfo(v));
  return useObservableState(search$, <StateDefault />);
};

PokemonsSuggest.propTypes = {};

export default PokemonsSuggest;
