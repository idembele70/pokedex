import React, { useContext, useLayoutEffect, useRef } from "react";
import { Container, Input, Right } from "./SearchContainer.style";
import { useObservableCallback, useSubscription } from "observable-hooks";
import { debounceTime, distinctUntilChanged, map, tap } from "rxjs";
import { useAppContext } from "../../context/AppContext";
import { gsap } from "gsap";

const SearchContainer = () => {
  interface ISearch {
    name: string;
    value: string;
  }
  const nameEl = useRef<HTMLInputElement>(null);
  const numberEl = useRef<HTMLInputElement>(null);
  const typeEl = useRef<HTMLInputElement>(null);

  // inputs search handler
  const [handleSearch, search$] = useObservableCallback<
    ISearch,
    React.ChangeEvent<HTMLInputElement>
  >((e$) =>
    e$.pipe(
      debounceTime(500),
      map((e) => ({
        name: e.target.name,
        value: e.target.value,
      })),
      tap(({ name }) => {
        switch (name) {
          case "name":
            numberEl.current && (numberEl.current.value = "");
            typeEl.current && (typeEl.current.value = "");
            break;
          case "number":
            nameEl.current && (nameEl.current.value = "");
            typeEl.current && (typeEl.current.value = "");
            break;
          case "type":
            nameEl.current && (nameEl.current.value = "");
            numberEl.current && (numberEl.current.value = "");
            break;
          default:
            break;
        }
      }),
      distinctUntilChanged((prev, cur) => prev.value === cur.value)
    )
  );
  // observable change listener
  const { setCtxValue } = useAppContext();
  useSubscription(search$, ({ value, name }) => {
    setCtxValue(value, name);
  });
  // GSAP ScrollTrigger
  const containerEl = useRef<HTMLFormElement>(null);
  useLayoutEffect(() => {
    const tween = gsap.from(containerEl.current, {
      opacity: 0,
      duration: 1,
    });
    return () => {
      tween.scrollTrigger?.kill();
    };
  }, []);
  return (
    <Container ref={containerEl}>
      <Input
        name="name"
        type="search"
        placeholder="Search"
        onChange={handleSearch}
        ref={nameEl}
        autoComplete="off"
      />
      <Right>
        <Input
          name="number"
          type="search"
          placeholder="Number"
          onChange={handleSearch}
          ref={numberEl}
          autoComplete="off"
        />
        <Input
          name="type"
          type="search"
          placeholder="Type"
          onChange={handleSearch}
          ref={typeEl}
          autoComplete="off"
        />
      </Right>
    </Container>
  );
};

export default SearchContainer;
