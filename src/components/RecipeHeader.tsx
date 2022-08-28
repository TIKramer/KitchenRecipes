import { View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import
{
  Subheading,
  Title,
} from "react-native-paper";
import React from "react";
import { useSelector } from "react-redux";

const RecipeHeader = () =>
{
  const { missedIngredientCount, title, image, sourceName, readyInMinutes, aggregateLikes } = useSelector((state: State) => state.recipe);


  return (
    <View style={{
      top: 0, alignItems: 'center',
      justifyContent: 'center',
    }}>

      <Image
        style={styles.recipeImage}
        source={{ uri: image }}
      />
      <View style={styles.recipeInfoContainer}>
        <View style={{ marginHorizontal: 10 }}>
          <View
            style={
              styles.recipeInfoContainerDivider
            }
          >
            <Title>
              {title}
            </Title>

            <Subheading>
              {sourceName}
            </Subheading>
          </View>
          {missedIngredientCount ?
            missedIngredientCount > 0 ?
              <Text>You are missing {missedIngredientCount} ingredients</Text>
              :
              <Text>You have all the ingredients</Text>
            : null}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {aggregateLikes > 0 ?
                <><Text>{aggregateLikes}</Text><Ionicons name="heart" size={30} color="green" /></>
                : null}

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

              <Ionicons name="time-outline" size={30} color="green" />
              <Text>{readyInMinutes} mins</Text>
            </View>


          </View>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  recipeInfoContainerDivider:
  {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  recipeInfoContainer:
  {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    width: '90%',
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  recipeImage: {
    height: 240,
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 90
  }

});

export default RecipeHeader;
