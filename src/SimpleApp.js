import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, doApiCall } from "./slice/simpleReducer";
export const SimpleApp = () => {
  const simpleState = createSelector((state) => state.simple);
  const store = useSelector((simple) => simple.simple);
  const dispatch = useDispatch();
  console.log(store, "store", simpleState.prototype);
  return (
    <>
      <button
        onClick={() => {
          dispatch(changeName("vis"));
        }}
      >
        click
      </button>
    </>
  );
};
