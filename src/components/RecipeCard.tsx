import { Card, Divider, Paragraph, Text } from "react-native-paper";
import { bindActionCreators } from "redux";
import { actionCreators } from '../../state';
import { useDispatch } from "react-redux";
import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';



const RecipeCard = ({ id, title, image, missingCount }: { id: number, title: string, image: string, missingCount: number | undefined }) =>
{
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { setRecipeID } = bindActionCreators(actionCreators, dispatch);

    const loadRecipe = () =>
    {
        setRecipeID(id)
        navigation.navigate('Recipe')

    }
    return (

        <Card style={styles.card}>
            <TouchableOpacity onPress={() => loadRecipe()}>

                <Card.Content>

                </Card.Content>
                <Card.Cover style={styles.cardImage} source={{ uri: image }} />
                <Divider />
                <Text style={styles.title} variant="bodyMedium">{title}</Text>
                {missingCount ?
                    <Paragraph>{missingCount > 0 ? `missing ${missingCount} ingredients` : 'you have all the ingredients'}</Paragraph>
                    : null}
                <Card.Actions>

                </Card.Actions>
            </TouchableOpacity>
        </Card>

    )

};
const styles = StyleSheet.create({
    card: {
        width: '45%', marginHorizontal: 5, marginVertical: 5
    },
    cardImage: {
        height: 100
    },
    title: {
        fontWeight: 'bold'
    }
});

export default RecipeCard;