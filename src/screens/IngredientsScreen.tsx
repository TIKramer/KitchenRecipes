import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List} from 'react-native-paper';
import { getIngredientsById } from '../api/recipe.api';
import { getIngredientImageUri } from '../utils/images';
import { useSelector } from "react-redux";
import RecipeHeader from '../components/RecipeHeader';
import Loader from '../components/Loader';


export const IngredientsScreen = () =>
{
    // hooks
    const [ingredients, setIngredients] = useState<ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const { id } = useSelector((state: State) => state.recipe);

    useEffect(() =>
    {
        getIngredients(

        )
    }, [id]);

    const getIngredients = async () =>
    {

        setLoading(true)
        const response = await getIngredientsById(id) as ingredient[];
        if (response)
        {
            setIngredients(response)
        }
        setLoading(false)
    };


    return (
        <View style={{ flex: 1 }}>

            <ScrollView>
                <RecipeHeader />
                {loading ?
                    <Loader /> :
                    <List.Section>
                        <List.Subheader>Ingredients</List.Subheader>
                        {ingredients?.map(ingredient =>
                        {
                            return (
                                <List.Item key={ingredient.name} title={ingredient.name} description={`${ingredient.amount?.metric.value} ${ingredient.amount?.metric.unit}`}
                                    left={() => <List.Icon icon={{ uri: getIngredientImageUri('small', ingredient.image) }} />} />
                            )
                        })}
                    </List.Section>

                }
            </ScrollView>

        </View>

    );
};

const styles = StyleSheet.create({

});



