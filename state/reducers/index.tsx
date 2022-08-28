import {combineReducers} from "redux"
import recipeRedicer from "./Recipe"

const reducers = combineReducers<State>({
    recipe: recipeRedicer,


})

export default reducers;

