// import * as Sentry from "sentry-expo";

import axios from './axios';
import { ENDPOINTS } from './endpoints';

const MAX_RECIPES = 8;
const MAX_SIMULAR_RECIPES = 5;

//Whether the recipes should have an open license that allows display with proper attribution.

const LIMIT_LICENSE = true;

//Whether to ignore typical pantry items, such as water, salt, flour, etc.

const IGNORE_PANTRY = false;
//	Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
const RANKING = 2;

export const getRecipesByIngredients = (ingredients: string) => {
    return axios
      .get(`${ENDPOINTS.recipes.findByIngredients}`, 
        {
            params: {
              ingredients: ingredients,
              number: MAX_RECIPES,
              limitLicense: LIMIT_LICENSE,
              ranking: RANKING,
              ignorePantry: IGNORE_PANTRY,
            },})
      .then((response) => {
        
        return response.data
      })
      .catch((e) => {
        console.error(' error', e);
        return null;
      });
  };

  export const getIngredientsById = (id: number) => {
    return axios
      .get(`/recipes/${id}/${ENDPOINTS.recipes.ingredientsById}`)
      .then((response) => {
       
        return response.data.ingredients as ingredient[]
      })
      .catch((e) => {
        console.error(' error', e);
        return null;
      });
  };

  export const getNutritionById = (id: number) => {
    return axios
      .get(`/recipes/${id}/${ENDPOINTS.recipes.getNutrition}`)
      .then((response) => {
        return response.data as nutritionalInformation
      })
      .catch((e) => {
        console.error(' error', e);
        return null;
      });
  };


  export const getSimularRecipes = (id: number) => {
    return axios
      .get(`recipes/${id}/${ENDPOINTS.recipes.simularRecipes}?number=${MAX_SIMULAR_RECIPES}`)
      .then((response) => {
        return response.data 
      })
      .catch((e) => {
        console.error(' error', e);
        return null;
      });
  };

  export const getRecipeInformation = (id: number) => {
    return axios
      .get(`recipes/${id}/${ENDPOINTS.recipes.getRecipeInformation}`)
      .then((response) => {
        return response.data as Recipe_Information
      })
      .catch((e) => {
        console.error(' error', e);
        return null;
      });
    };

  export const getRecipeInstructions = (id: number) => {
    return axios
      .get(`/recipes/${id}/${ENDPOINTS.recipes.getInstructions}`)
      .then((response) => {
        return response.data[0] as instructions
      })
      .catch((e) => {
        console.error(' error', e);
        return null;
      });
  };