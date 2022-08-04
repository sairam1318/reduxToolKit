import { createAction, createReducer } from "@reduxjs/toolkit";
// without sliceing
const initalState = {
  name: "sai",
  age: 24
};
export const changeName = createAction("simple/changeName");
export const changeAge = createAction("simple/changeAge");
export const doApiCall = createAction("simple/doApiCall");
export const simpleReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(changeName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(changeAge, (state, action) => {
      state.age = 12;
    })
    .addCase(doApiCall, (state) => {
      console.log("before promise ");
      const data = new Promise(() => {
        return "logger";
      });
      console.log("after promise ");
      data.then((name) => {
        console.log(
          "inside promise which will not be executed as it is not a pure js functn"
        );
        state.name = name;
      });
    });
});
