import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { getRecipeImageUri } from '../utils/images';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../state';
import { useDispatch } from "react-redux";


const SimilarRecipeCard = ({ item }: { item: Simular }) =>
{
  const dispatch = useDispatch();
  const { setRecipeID } = bindActionCreators(actionCreators, dispatch);

  return (
    <Card style={styles.cardContainer}>
      <TouchableOpacity onPress={() => setRecipeID(item.id, undefined)}>
        <Card.Content>
        </Card.Content>
        <Card.Cover style={styles.cardImage} source={{ uri: getRecipeImageUri('small', item.id, item.imageType) }} />
        <Text >{item.title}</Text>
      </TouchableOpacity>
    </Card>
  )

};

const styles = StyleSheet.create({
  cardContainer: {
    height: 220,
    width: 200,
    alignItems: 'center'

  },
  cardImage: {
    height: 180,
    width: 180
  }
});

export default SimilarRecipeCard;