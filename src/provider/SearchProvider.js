import React, { useReducer } from "react";
import {
  SearchBarContext,
  SearchBarContextDispatchContext,
} from "../context/SearchProductContext";
import { initialState, searchReducer } from "../reducers/searchBar";

export default function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <SearchBarContext.Provider value={state}>
      <SearchBarContextDispatchContext.Provider value={dispatch}>
        {children}
      </SearchBarContextDispatchContext.Provider>
    </SearchBarContext.Provider>
  );
}
