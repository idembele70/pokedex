import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface SearchContextProps {
  searchTerm: string;
  searchName: string;
  isSearching: boolean;
  setCtxValue: (term: string, type: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  searchTerm: "",
  searchName: "",
  isSearching: false,
  setCtxValue: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

interface SearchInfoProps {
  searchTerm: string;
  searchName: string;
  isSearching: boolean;
}

const SearchContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [contextValue, setContextValue] = useState<SearchInfoProps>({
    searchTerm: "",
    searchName: "",
    isSearching: false,
  });
  const handleUpdate = (value: string, type: string) => {
    setContextValue({
      searchTerm: value,
      searchName: type,
      isSearching: true,
    });
  };
  return (
    <SearchContext.Provider
      value={{ ...contextValue, setCtxValue: handleUpdate }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
