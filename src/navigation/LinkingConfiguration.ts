/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../ts/navigation';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Search: {
            screens: {
              SearchScreen: 'search',
            },
          },
          About: {
            screens: {
              About: 'about',
            },
          },
         
        },
        },
      Nutrition: 'nutrition',
      Ingredients: 'ingredients',
      Recipe: 'recipe',
      RecipeNav: 'recipeNav',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
