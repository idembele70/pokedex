import React, { useRef } from "react";
import { Container, Input, Right } from "./SearchContainer.style";

const SearchContainer = () => {
  const nameEl = useRef(null);
  const numberEl = useRef(null);
  const typeEl = useRef(null);

  return (
    <Container>
      <Input
        name="name"
        type="search"
        placeholder="Search"
        onChange={() => {}}
        ref={nameEl}
        autoComplete="off"
      />
      <Right>
        <Input
          name="number"
          type="search"
          placeholder="Number"
          onChange={() => {}}
          ref={numberEl}
          autoComplete="off"
        />
        <Input
          name="type"
          type="search"
          placeholder="Type"
          onChange={() => {}}
          ref={typeEl}
          autoComplete="off"
        />
      </Right>
    </Container>
  );
};

export default SearchContainer;
