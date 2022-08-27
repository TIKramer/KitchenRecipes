import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, Image, View } from "react-native";


const Item = ({ name, imageUri }: { name: string; imageUri: string }) =>
{

    return (
        <View style={styles.itemContainer}>
            <Image style={styles.itemImage} source={{ uri: imageUri }} />
            <Text style={styles.itemText}>{name}</Text>
        </View>
    );
}

const RecipeRequiredList = ({
    requiredList,
    title,
    retrieveImageUri
}: {

    requiredList: requiredItem[]
    title: string
    retrieveImageUri(size: string, uri: string): string;
}) =>
{


    const renderItem = (item: requiredItem) =>
    {
        return (
            <Item
                imageUri={retrieveImageUri('small', item.image)}
                name={item.name}
            />
        );
    };

    return (

        <SafeAreaView style={styles.container}>

            <Text>{title}</Text>
            <FlatList
                data={requiredList}
                horizontal={true}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.name}
            />


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
        backgroundColor: 'white'
    },
    itemContainer: {
        width: 50,
        alignContent: 'center'
    },
    itemImage: {
        height: 30, width: 30,
        alignSelf: 'center'
    },
    itemText: {
        fontSize: 8,
        alignSelf: 'center'
    },


    title: {
        fontSize: 32,
    },
});

export default RecipeRequiredList;