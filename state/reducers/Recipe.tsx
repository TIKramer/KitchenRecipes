

export enum ActionTypes
{
  SET_RECIPE_ID = 'SET_RECIPE_ID',
  SET_RECIPE_INFORMATION = 'SET_RECIPE_INFORMATION',
  SET_MISSING_COUNT = 'SET_MISSING_COUNT',

}

const INITIAL_STATE: RecipeState = {
  id: 0,
  missedIngredientCount: 0,
  title: "",
  image: "unknown.png",
  imageType: ".png",
  serving: 0,
  readyInMinutes: 0,
  license: "",
  sourceName: "",
  sourceUrl: "",
  sponnacularSourceUrl: "",
  aggregateLikes: 0,
  spoonacularScore: 0,
  pricePerServing: 0,
  analyzedInstructions: [],
};

const reducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) =>
{
  switch (action.type)
  {


    case ActionTypes.SET_RECIPE_ID:
      return {
        ...INITIAL_STATE,
        id: action.payload,
      };

    case ActionTypes.SET_RECIPE_INFORMATION: {
      return {
        ...action.payload,
        missedIngredientCount: state.missedIngredientCount,
      };
    }

    case ActionTypes.SET_MISSING_COUNT:
      return {
        ...state,
        missingCount: action.payload,
      };


    default:
      return state;
  }
};

export default reducer;
