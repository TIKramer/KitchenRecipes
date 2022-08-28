import React from 'react';
import { StyleSheet,} from 'react-native';
import { ActivityIndicator } from "react-native-paper";

const Loader = () =>
{

    return (
        <ActivityIndicator style={styles.loader} size='small' animating={true} />
    )

};
const styles = StyleSheet.create({
    loader: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



export default Loader;