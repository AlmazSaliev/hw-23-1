import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { allreducer } from "../logika/Reducer";

export const store=createStore(allreducer, applyMiddleware(thunk))