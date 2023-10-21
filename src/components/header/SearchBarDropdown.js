import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {
  SearchBarContext,
  SearchBarContextDispatchContext,
} from "../../context/SearchProductContext";
import shortid from "shortid";

export default function SearchBarDropdown(props) {
  const dispatch = useContext(SearchBarContextDispatchContext);
  const state = useContext(SearchBarContext);
  let { expand, productList } = state;
  let { getCurrentProduct } = props;
  return (
    <DropdownButton
      variant="outline-secondary"
      title=""
      id="input-group-dropdown-1"
      bsPrefix="customize-dropdown"
      show={expand}
      onToggle={() => dispatch({ type: "SET_EXPAND", payload: !expand })}>
      {productList.length === 0 ? (
        <Dropdown.Item>No Results</Dropdown.Item>
      ) : (
        productList.map((list, i) => {
          if (i + 1 === productList.length) {
            return (
              <Dropdown.Item key={shortid.generate()}>
                {" "}
                <Link to={`/products/${list.id}`}> {list.title} </Link>
              </Dropdown.Item>
            );
          } else {
            return (
              <>
                <Dropdown.Item key={shortid.generate()}>
                  {" "}
                  <Link to={`/products/${list.id}`}> {list.title} </Link>
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            );
          }
        })
      )}
    </DropdownButton>
  );
}
