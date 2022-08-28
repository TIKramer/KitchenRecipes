import React from "react";
import { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Card, Divider, Title } from "react-native-paper";

import HideWithKeyboard from "react-native-hide-with-keyboard";

const EmptyRecipeList = () =>
{

    const [images, setimages] = useState([

        require('../../assets/images/BlurredFood/food1.jpeg'),
        require('../../assets/images/BlurredFood/food2.jpeg'),
        require('../../assets/images/BlurredFood/food3.jpeg'),
        require('../../assets/images/BlurredFood/food4.jpeg'),
        require('../../assets/images/BlurredFood/food5.jpeg'),
        require('../../assets/images/BlurredFood/food6.jpeg'),
        require('../../assets/images/BlurredFood/food7.jpeg'),
        require('../../assets/images/BlurredFood/food8.jpeg'),


    ]);


    return (
        <View>
            <FlatList style={{ flex: 1 }}
                data={images}
                numColumns={2}
                keyExtractor={(item, index) => 'key' + index}
                scrollEnabled={false}

                renderItem={({ item }) =>
                    <Card style={{ width: '45%', marginHorizontal: 5, marginVertical: 5 }}>


                        <Card.Content>

                        </Card.Content>
                        <Card.Cover style={{ height: 100 }} source={item} />
                        <Divider />

                    </Card>
                }
            ></FlatList>
                <View style={styles.textContainer}>
                <HideWithKeyboard>

                    <View style={
                        styles.textBackgroundEffect}>

                        <Title style={{
                        }}> Search ingredients to find recipes </Title>
                    </View>
                    </HideWithKeyboard>

                </View>
        </View>
    )

};

const styles = StyleSheet.create({
    textContainer: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBackgroundEffect: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(185, 181, 183, 0.78)',
        borderRadius: 6,
        shadowColor: "black",
        elevation: 5
    }

});
export default EmptyRecipeList;


