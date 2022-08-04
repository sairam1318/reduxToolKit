// redux store file.

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loggerMiiddlWare from "./loggerMiddleWare";
import mobileReducer from "./slice/mobileSlice";
import { simpleReducer } from "./slice/simpleReducer";
// export const store = configureStore({
//   reducer: {
//     mobile: mobileReducer
//   }
// });

export const store = configureStore({
  reducer: {
    simple: simpleReducer
  },
  middleware: defaultMiddleWare => defaultMiddleWare().concat(loggerMiiddlWare),
});
