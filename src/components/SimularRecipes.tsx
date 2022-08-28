import * as React from 'react';
import { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Text } from 'react-native-paper';
import { getSimularRecipes } from '../api/recipe.api';
import { useSelector } from "react-redux";
import SimularRecipeCard from './SimularRecipeCard';


const SimularRecipes = () =>
{
    const { id } = useSelector((state: State) => state.recipe);
    const [simular, setSimular] = React.useState<Simular[]>([]);


    useEffect(() =>
    {
        getRecipes(

        )
    }, []);

    const getRecipes = async () =>
    {

        const response = await getSimularRecipes(id) as Simular[];

        if (response)
        {
            setSimular(response)
        }

    };
    return (
        <View>
            <Text>Simular Recipes</Text>

            <FlatList
                data={simular}
                horizontal={true}
                keyExtractor={(item) => 'key'+item.id}
                renderItem={({ item }) =>
                    <SimularRecipeCard item={item} />  }
            />

        </View>
    )
};

export default SimularRecipes;