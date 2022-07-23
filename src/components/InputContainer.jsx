import { useObservableCallback, useSubscription } from "observable-hooks";
import React, { useEffect, useRef } from "react";
import { debounceTime, distinctUntilChanged, map, tap } from "rxjs";
import styled from "styled-components";
import { searchTerm$ } from "../rxjs/rxjs";
import * as responsive from "../utils/responsive";
const SearchContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90vw;
  max-width: 675px;
  gap: 18px;
  margin-bottom: 60px;
  ${responsive.mobile({ maxWidth: 308 })}
`;
const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
  width: 250px;
  ${responsive.mobile({ width: 308 })}
`;
const Input = styled.input`
  background-color: #ffffff;
  box-shadow: 0px 4px 16px -3px rgba(0, 0, 0, 0.07);
  border-radius: 18px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  color: #c4c4c4;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  border: 0;
  transition: all 350ms linear;
  &[name="name"] {
    width: 90vw;
    max-width: 405px;
    ${responsive.mobile({ maxWidth: 308 })}
  }
  &[name="number"] {
    width: 100px;
  }
  &[name="type"] {
    width: 130px;
    ${responsive.mobile({ width: 186 })};
  }
  &:focus {
    outline: 2px solid rgba(0, 0, 0, 0.15);
  }
`;
const InputContainer = () => {
  const nameEl = useRef(null);
  const numberEl = useRef(null);
  const typeEl = useRef(null);
  const [handleSearch, search$] = useObservableCallback((e$) =>
    e$.pipe(
      debounceTime(500),
      map((e) => ({
        name: e.target.name,
        value: e.target.value,
      })),
      tap((v) => {
        switch (v.name) {
          case "name":
            numberEl.current.value = "";
            typeEl.current.value = "";
            break;
          case "number":
            nameEl.current.value = "";
            typeEl.current.value = "";
            break;
          case "type":
            nameEl.current.value = "";
            numberEl.current.value = "";
            break;
          default:
            break;
        }
      }),
      distinctUntilChanged((prev, cur) => prev.value === cur.value)
    )
  );
  useSubscription(search$, (v) => {
    searchTerm$.next(v);
  });
  return (
    <SearchContainer>
      <Input
        name="name"
        type="search"
        placeholder="Search"
        onChange={handleSearch}
        ref={nameEl}
      />
      <Right>
        <Input
          name="number"
          type="search"
          placeholder="Number"
          onChange={handleSearch}
          ref={numberEl}
        />
        <Input
          name="type"
          type="search"
          placeholder="Type"
          onChange={handleSearch}
          ref={typeEl}
        />
      </Right>
    </SearchContainer>
  );
};

export default InputContainer;
