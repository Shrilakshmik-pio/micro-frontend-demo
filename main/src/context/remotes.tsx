import React, { createContext, useContext, useState } from "react";

export const STORAGE_KEY = "mfe_remotes";

const RemotesContext = createContext({
  remotes: {}
});

export function RemotesProvider(props: any) {
  const [remotes] = useState({});

  return (
    <RemotesContext.Provider value={{ remotes }}>
      {props.children}
    </RemotesContext.Provider>
  );
}

export function useRemotes() {
  return useContext(RemotesContext);
}

