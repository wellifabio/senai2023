import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item:{
        flex: 1,
        width:'90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
    },
    img:{
        width:100,
        height:100,
        margin: 10,
    },
    text:{
        fontSize:16,
    }
});

export default styles;