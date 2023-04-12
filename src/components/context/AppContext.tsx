import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface AppContextProps {
  searchTerm: string;
  searchName: string;
  setCtxValue: (term: string, type: string) => void;
  isNoPokemonLiked: boolean;
  setIsNoPokemonLiked: (value: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  searchTerm: "",
  searchName: "",
  setCtxValue: () => {},
  isNoPokemonLiked: false,
  setIsNoPokemonLiked: () => {},
});

export const useAppContext = () => useContext(AppContext);

interface SearchInfoProps {
  searchTerm: string;
  searchName: string;
}

const AppContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [contextValue, setContextValue] = useState<SearchInfoProps>({
    searchTerm: "",
    searchName: "",
  });
  const [isNoPokemonLiked, setIsNoPokemonLiked] = useState(false);
  const handleUpdate = (value: string, type: string) => {
    setContextValue({
      searchTerm: value,
      searchName: type,
    });
  };
  return (
    <AppContext.Provider
      value={{
        ...contextValue,
        setCtxValue: handleUpdate,
        isNoPokemonLiked,
        setIsNoPokemonLiked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
