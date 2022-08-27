import {configureStore} from "@reduxjs/toolkit";
import reducer from "./reducers/Index";
const store = configureStore({reducer});

export default store