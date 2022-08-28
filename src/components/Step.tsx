import * as React from 'react';
import { View } from 'react-native';
import { Paragraph, Text, List, Divider } from 'react-native-paper';
import { getEquipmentImageUri, getIngredientImageUri } from '../utils/images';
import RecipeRequiredList from './RecipeRequiredList';


const Step = ({ number, ingredients, equipment, instructions }: { number: number, ingredients: any, equipment: any, instructions: string }) =>
{
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <List.Accordion
                expanded={expanded}
                onPress={handlePress}
                title={`Step${number}`}
            >
                <View style={{ marginHorizontal: 20, backgroundColor: 'white' }}>
                    {ingredients.length > 0 ?
                        <RecipeRequiredList title={'Ingredients'} requiredList={ingredients} retrieveImageUri={getIngredientImageUri}/>
                        : null}
                    {equipment.length > 0 ?

                        <RecipeRequiredList title={'Equipment'} requiredList={equipment} retrieveImageUri={getEquipmentImageUri}/>
                        : null}
                    <View style={{ backgroundColor: 'white' }}>
                        <Text>Instructions:</Text>
                        <Paragraph>{instructions}</Paragraph>
                    </View>
                </View>

                <Divider></Divider>
            </List.Accordion>

        </View>
    )
};

export default Step;