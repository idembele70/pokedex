import { FC, PropsWithChildren, createContext, useContext } from "react";

type DBContextProps = {
  searchTerm: string;
};

const DBContext = createContext<DBContextProps>({
  searchTerm: "",
});

export const useDBContext = () => useContext(DBContext);

const DBContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const contextValue: DBContextProps = {
    searchTerm: "",
  };
  return (
    <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
  );
};
export default DBContextProvider;
