import React, { useContext, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchBarDropdown from "./SearchBarDropdown";
import { connect } from "react-redux";
import { search_product } from "../../actions/public/publicAction";
import {
  SearchBarContext,
  SearchBarContextDispatchContext,
} from "../../context/SearchProductContext";

function SearchBar({ search_product }) {
  const state = useContext(SearchBarContext);
  const dispatch = useContext(SearchBarContextDispatchContext);

  let { input } = state;
  useEffect(() => {
    console.log(input);
    async function searchProduct() {
      if (input !== "") {
        await search_product(dispatch, input);
      }
    }
    searchProduct();
  }, [input]);
  return (
    <>
      <SearchInput />
      <SearchBarDropdown />
    </>
  );
}

export default connect(null, { search_product })(SearchBar);
