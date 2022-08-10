// import * as Sentry from "sentry-expo";

import axios from './axios';
import { ENDPOINTS } from './endpoints';

const MAX_RECIPES = 10;
//Whether the recipes should have an open license that allows display with proper attribution.

const LIMIT_LICENSE = true;

//Whether to ignore typical pantry items, such as water, salt, flour, etc.

const IGNORE_PANTRY = false;
//	Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
const RANKING = 2;

export const getRecipesByIngredients = (ingredients: string) => {
    return axios
      .get(`${ENDPOINTS.recipes.findByIngredients}?apiKey=b001fff46a8e4dafadc90afde144c8c4`, 
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
