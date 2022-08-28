import * as React from 'react';
import { IngredientsScreen } from '../screens/IngredientsScreen';
import { NutritionalScreen } from '../screens/NutritionalScreen.';
import { RecipeScreen } from '../screens/RecipeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const RecipeNav = () =>
{
  const Tab = createBottomTabNavigator();
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>

      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarStyle: {

            backgroundColor: theme.colors.primary,

          },
          tabBarIcon: ({ focused, color, size }) =>
          {
            let iconName: keyof typeof MaterialCommunityIcons.glyphMap;
            let iconColor = focused ? 'white' : 'rgba(116, 155, 132, 1.0)'
            iconName = 'menu'
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
            return <MaterialCommunityIcons name={iconName} size={40} color={iconColor} />;
          },

          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        })}
      >
        <Tab.Screen options={{ headerShown: false }}
          name="Recipe" component={RecipeScreen} />
        <Tab.Screen options={{ headerShown: false }}
          name="Ingredients" component={IngredientsScreen} />
        <Tab.Screen options={{ headerShown: false }}
          name="Nutrition" component={NutritionalScreen} />

      </Tab.Navigator>

    </View>
  );
};

export default RecipeNav;