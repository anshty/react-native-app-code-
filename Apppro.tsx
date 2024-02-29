import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme

}from 'react-native'

function Apppro(): JSX.Element{
    const isDark_or_light =useColorScheme()==='dark'
    return(<View style={styles.container}>
        <Text style={isDark_or_light ? styles.whiteText : 
        styles.whiteText}>hello rea </Text>
        
    </View>)
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    whiteText:{
        color:'#FFFFFF'
    },
    darkText:{
        color:'#000000'
    }

})

export default Apppro