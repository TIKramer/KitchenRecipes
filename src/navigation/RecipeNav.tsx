import * as React from 'react';
import { getRecipeInformation } from '../api/recipe.api';
import { IngredientsScreen } from '../screens/IngredientsScreen';
import { NutritionalScreen } from '../screens/NutritionalScreen.';
import { RecipeScreen } from '../screens/RecipeScreen';
import { bindActionCreators } from "redux";
import { actionCreators } from '../../state';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const RecipeNav = () =>
{
  const { id } = useSelector((state) => state.recipe);
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState<boolean>(false)

  const { setRecipe_Information } =
    bindActionCreators(actionCreators, dispatch);

  React.useEffect(() =>
  {
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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {

              backgroundColor: theme.colors.primary,

            },
            tabBarIcon: ({ focused, color, size }) =>
            {
              let iconName;
              let iconColor = focused ? 'white' : 'rgba(116, 155, 132, 1.0)'

              if (route.name === 'Recipe')
              {
                iconName = 'noodles'
              } else if (route.name === 'Ingredients')
              {
                iconName = 'food-variant';
              }
              else if (route.name === 'Nutrition')
              {
                iconName = 'food-apple';
              }
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={40} color={iconColor} />;
            },

            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
          })}
        >
          <Tab.Screen name="Recipe" component={RecipeScreen}/>
          <Tab.Screen name="Ingredients" component={IngredientsScreen} />
          <Tab.Screen name="Nutrition" component={NutritionalScreen} />

        </Tab.Navigator>
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
export default RecipeNav;