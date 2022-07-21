import { configureStore } from "@reduxjs/toolkit";
import photoReducer from "./photo";

export default configureStore({
  reducer: {
    photo: photoReducer
  }
});