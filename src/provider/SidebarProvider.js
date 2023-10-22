import React, { useReducer } from "react";
import {
  SiderbarContext,
  SiderbarContextDispatchContext,
} from "../context/SidebarContext";
import { initialState, sidebarReducer } from "../reducers/sidebar";

export default function SiderbarProvider({ children }) {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);
  return (
    <SiderbarContext.Provider value={state}>
      <SiderbarContextDispatchContext.Provider value={dispatch}>
        {children}
      </SiderbarContextDispatchContext.Provider>
    </SiderbarContext.Provider>
  );
}
