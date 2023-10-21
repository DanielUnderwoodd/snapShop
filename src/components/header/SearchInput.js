import React, { useContext } from "react";
import { FormControl } from "react-bootstrap";
import {
  SearchBarContext,
  SearchBarContextDispatchContext,
} from "../../context/SearchProductContext";

export default function SearchInput() {
  const dispatch = useContext(SearchBarContextDispatchContext);
  const state = useContext(SearchBarContext);
  let { input } = state;

  function onChange(e) {
    dispatch({ type: "SET_INPUT", payload: e.target.value });
    if (e.target.value === "") {
      dispatch({ type: "SET_EXPAND", payload: false });
    } else {
      dispatch({ type: "SET_EXPAND", payload: true });
    }
  }
  return (
    <>
      {" "}
      <FormControl
        onChange={(e) => onChange(e)}
        placeholder="Serach for product"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={input}
      />
    </>
  );
}
