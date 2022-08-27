import { Button, FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native';

import { RootTabScreenProps } from '../../types';
import React, { useEffect, useRef, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { recipeAPI } from '../api';
import { ActivityIndicator } from 'react-native-paper';
import RecipeCard from '../components/RecipeCard';

import EmptyRecipeList from '../components/EmptyRecipeList';



export default function SearchScreen({ }: RootTabScreenProps<'TabOne'>)
{
  const searchBarRef = useRef();
  const [term, setTerm] = useState("");
  const [recipes, setRecipes] = useState<Recipe_Information>()
  const [loading, setLoading] = useState<boolean>(false)


  const updateSearch = async () =>
  {
    setLoading(true)
    const response = await recipeAPI.getRecipesByIngredients(term) as Recipe_Information;
    setRecipes(response)
    setLoading(false)
  };


  return (
    <View style={styles.container}>
      <SearchBar
        searchBarRef={searchBarRef}
        term={term}
        onTermChange={setTerm}
        onTermSubmit={updateSearch}
        placeholder='Search ingredients'
      />



      <View style={{
        flex: 1, alignItems: 'center',
        justifyContent: 'center'
      }}>

        {recipes ?
          <FlatList style={{ flex: 1 }}
            data={recipes}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => <RecipeCard id={item.id} title={item.title} image={item.image} missingCount={item.missedIngredientCount}></RecipeCard>

            }
          /> : <EmptyRecipeList />}

        {loading ?
          <ActivityIndicator style={{
            position: 'absolute',
            top: 0, left: 0,
            right: 0, bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
          }} animating={true} />
          : null}

      </View>

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
