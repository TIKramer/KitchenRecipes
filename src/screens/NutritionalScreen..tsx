import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { List, ProgressBar, useTheme } from 'react-native-paper';
import { getNutritionById } from '../api/recipe.api';
import { useSelector } from "react-redux";
import RecipeHeader from '../components/RecipeHeader';
import Loader from '../components/Loader';


export const NutritionalScreen = () =>
{
    const { colors } = useTheme();
    const [nutritionalValues, setNutritionalValues] = useState<nutritionalInformation>()
    const [loading, setLoading] = useState<boolean>(false)
    const { id } = useSelector((state: State) => state.recipe);


    const getNutritionalInfo = async () =>
    {

        setLoading(true)
        const response = await getNutritionById(id) as nutritionalInformation;
        if (response)
        {
            setNutritionalValues(response);
        }

        setLoading(false)
    };

    useEffect(() =>
    {

        getNutritionalInfo(
        )
    }, [id]);


    return (

        <View style={styles.container}>

            <ScrollView>

                <RecipeHeader />
                {loading ?
                    <Loader /> :
                    <View style={{ flex: 1 }}>
                        <List.Subheader>Nutritional Values</List.Subheader>
                        {nutritionalValues?.good.map(object =>
                        {

                            return (
                                <View key={object.title} style={styles.progressBarContainer}>
                                    <Text style={{ flex: 1 }}>{object.title}</Text>
                                    <ProgressBar style={styles.progressBar} progress={object.percentOfDailyNeeds / 100} color={colors.accent} />
                                    <Text style={{ flex: 1 }}> {object.amount}</Text>

                                </View>
                            )
                        })
                        }


                    </View>
                }


            </ScrollView>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    progressBarContainer:
    {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    progressBar: {
        marginHorizontal: 10,
        height: 8,
        width: 200,
    }

});


