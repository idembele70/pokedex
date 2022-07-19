import React from "react";
import { data } from "../utils/utils";
import Cards from "./card";

const StateDefault = () => {
  return <Cards pokemonsList={data} />;
};

export default StateDefault;
