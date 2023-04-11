
type DefaultDataProps = {
  img: string;
  id: string;
  name: string;
}

type BasicDataProps = DefaultDataProps & {
  type: string[]
}
interface ITypes {
  color: string;
  name: string;
}
export type PokemonItemProps = DefaultDataProps & {
  types: ITypes[]
  alt: string;
}
const mapPokemonDataToCardProps = <T extends BasicDataProps>(data: T[]): PokemonItemProps[] => {
  const newData: PokemonItemProps[] = []
  data.forEach(({ id, name, img, type }) => {
    const types = type?.map((t) => {
      let color = null;
      switch (t) {
        case "Electric":
          color = "FFE175";
          break;
        case "Grass":
          color = "B4FE7B";
          break;
        case "Poisson":
          color = "BF8CD1";
          break;
        case "Bug":
          color = "D1E16F";
          break;
        case "Ghost":
          color = "805594";
          break;
        case "Rock":
          color = "898373";
          break;
        case "Ground":
          color = "CA9F5E";
          break;
        case "water":
          color = "FFE175";
          break;
        case "Fire":
          color = "FF8A8A";
          break;
        case "Ice":
          color = "C6EAFF";
          break;
        case "Fighting":
          color = "FFB169";
          break;
        case "Steel":
          color = "E4E4E4";
          break;
        case "Psychic":
          color = "FFB7FC";
          break;
        case "Flying":
          color = "5F9FFF";
          break;
        case "Dragon":
          color = "C699FF";
          break;
        case "Normal":
          color = "88D1FB";
          break;
        default:
          color = "CACACA";
          break;
      }
      return { color, name: t };
    });
    const cardProps = { id, name, img, types, alt: name };
    newData.push(cardProps)
  });
  return newData
};

interface FilterOptions<T> {
  searchName: string,
  searchTerm: string,
  data: T[]
}
const filterPokemonDataToCardProps = <T extends BasicDataProps>({ data, searchName, searchTerm }: FilterOptions<T>): PokemonItemProps[] => {
  let filteredPokemons: T[] = [];
  if (searchName === "name") {
    filteredPokemons = data.filter((p) => p.name.toLowerCase().includes(searchTerm));
  } else if (searchName === "number") {
    filteredPokemons = data.filter((p) => p.id.includes(searchTerm));
  } else if (searchName === "type") {
    const match = new RegExp(searchTerm, "ig");
    filteredPokemons = data.filter((p) => p.type.find((t) => t.match(match)));
  }
  return mapPokemonDataToCardProps(filteredPokemons);
};
/*
const addToLocalStorage = (data) =>
  localStorage.setItem("likedPokemons", JSON.stringify(data));

const getFromLocalStorage = (name) => JSON.parse(localStorage.getItem(name));

const filterPokemonsByIds = (d, ids) =>
  d.filter((pokemon) => ids.includes(pokemon.id)); */

export {
  mapPokemonDataToCardProps,
  filterPokemonDataToCardProps,
  /* 
  addToLocalStorage,
  getFromLocalStorage,
  filterPokemonsByIds,
   */
};
