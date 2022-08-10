import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import React, { useRef, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { recipeAPI } from '../api';

 

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const searchBarRef = useRef();
  const [term, setTerm] = useState("");
  const [recipes, setRecipes] = useState([])

  const updateSearch = async () => {
    
    console.log('Term')
    console.log(term)
      const response =await  recipeAPI.getRecipesByIngredients(term);
      console.log(response);
      setRecipes(response)

   


//call api
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Search ingredients</Text>
      <SearchBar
          searchBarRef={searchBarRef}
          term={term}
          onTermChange={setTerm}
          onTermSubmit={updateSearch}
        />
         {recipes ?  recipes.map((recipe) => {
            return (
              <View><Text>{recipe.title}</Text></View>
            )
          })
        : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
