import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator, List } from 'react-native-paper';
import SimilarRecipes from '../components/SimilarRecipes';
import Step from '../components/Step';
import RecipeHeader from '../components/RecipeHeader';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { getRecipeInformation } from '../api/recipe.api';

export const RecipeScreen = () =>
{
    const { id, analyzedInstructions } = useSelector((state: State) => state.recipe);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false)


    const { setRecipe_Information } =
        bindActionCreators(actionCreators, dispatch);

    React.useEffect(() =>
    {
        console.log(id)
        getRecipeInformationByID()

    }, [id]);

    const getRecipeInformationByID = async () =>
    {

        setLoading(true)
        const response = await getRecipeInformation(id) as Recipe_Information;

        if (response)
        {
            setRecipe_Information(response as Recipe_Information)
        }
        setLoading(false)

    };
    return (

        <View style={{ flex: 1 }}>
            {loading ?
                <ActivityIndicator style={styles.loader} size='large' animating={true} />
                :
                <ScrollView>

                    <RecipeHeader />
                    <List.Section title="Instructions">
                        {analyzedInstructions[0]?.steps?.map((object: step) =>
                        {
                            return (
                                <Step key={object.number} number={object.number} ingredients={object.ingredients} equipment={object.equipment} instructions={object.step} />
                            )
                        })}

                    </List.Section>
                    <SimilarRecipes />
                </ScrollView>
            }

        </View>

    );
};
const styles = StyleSheet.create({
    loader: {
        top: 0, left: 0, right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
});


