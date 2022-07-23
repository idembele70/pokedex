import {
  useObservable,
  useObservableState,
  useSubscription,
} from "observable-hooks";
import React from "react";
import { of, switchMap, tap, timer } from "rxjs";
import { loading$, searchTerm$ } from "../rxjs/rxjs";
import { filterPokemons } from "../utils/globalFunctions";
import Cards from "./card";
import StateDefault from "./tools/StateDefault";

const PokemonsSuggest = (props) => {
  const [searchInfo, setSearchInfo] = React.useState({
    type: "",
    value: "",
  });
  const search$ = useObservable(
    (e$) =>
      e$.pipe(
        tap(() => loading$.next(true)),
        switchMap(([searchInfo]) => {
          if (searchInfo.value)
            return timer(0).pipe(
              switchMap(() => {
                const searchedPokemons = filterPokemons(
                  searchInfo?.name,
                  searchInfo?.value
                );
                return of(<Cards pokemonsList={searchedPokemons} />);
              })
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
