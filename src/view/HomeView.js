import React, { useState } from "react";
import PokemonService from "../shared/api/service/PokemonService";

export const HomeView = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const fetchDataFromExternalAPI = () => {
    PokemonService.searchForPokemon(search.toLowerCase())
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };

  const displayData = () => {
    if (data) {
      return (
        <div>
          <h2>name: {data.name}</h2>
          <h2>id: {data.id}</h2>
          <h2>weight: {data.weight}</h2>
          <h2>height: {data.hegiht}</h2>
          <h2>type: {data.types[0].type.name}</h2>
        </div>
      );
    }
  };

  return (
    <div>
      <span>Search for pokemon: </span>
      <input onChange={(event) => setSearch(event.target.value)} />
      <br />

      <button onClick={() => fetchDataFromExternalAPI()}>API Call</button>
      {displayData()}
    </div>
  );
};
