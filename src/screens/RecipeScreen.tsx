import React from 'react';
import { View, ScrollView, } from 'react-native';
import { List } from 'react-native-paper';
import SimularRecipes from '../components/SimularRecipes';
import Step from '../components/Step';
import RecipeHeader from '../components/RecipeHeader';
import { useSelector } from 'react-redux';

export const RecipeScreen = () =>
{
    const { analyzedInstructions } = useSelector((state) => state.recipe );

    return (

        <View style={{ flex: 1 }}>

            <ScrollView>
                <RecipeHeader />
                <List.Section title="Instructions">
                    {analyzedInstructions[0]?.steps?.map((object: step) =>
                    {
                        return (
                            <Step key={object.number} number={object.number} ingredients={object.ingredients} equipment={object.equipment} instructions={object.step}/> 
                        )
                    })}

                </List.Section>
                <SimularRecipes />
            </ScrollView>

        </View>

    );
};


