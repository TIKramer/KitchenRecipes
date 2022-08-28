import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { ActionTypes } from "../reducers/Recipe";
export const setRecipe_Information = (recipeInformation: Recipe_Information) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({
      type: ActionTypes.SET_RECIPE_INFORMATION,
      payload: recipeInformation ,
    });
  };
};

export const setRecipeID = (id: number) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({
      type: ActionTypes.SET_RECIPE_ID,
      payload: id 
    });
  };
};

export const setMissingCount = (missingCount: number) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    dispatch({
      type: ActionTypes.SET_MISSING_COUNT ,
      payload: missingCount 
    });
  };
};



