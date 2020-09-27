import { StyleSheet } from "react-native"
import { color1, color2, fontTitle } from "../../global/constant/constant"
 
const style = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: '20%',
        paddingBottom: '10%'
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'red'
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: '10%'
    },
    title: {       
        fontSize: 50,
        color: color1,
        fontFamily: fontTitle
    },
    input: {                
        backgroundColor: 'transparent',
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        color: color1,
        fontSize: 16,
        paddingLeft: '15%',
        width: '90%',        
    },
    inputContainer: {
        marginBottom: '5%',
        width: '100%',    
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        left: '10%'
    },
    buttomContainer: {
        width: '100%',
        flexDirection: 'row',        
        justifyContent: 'center'
    },
    buttom: {
        justifyContent: 'center',
        height: 45,        
        width: '40%',
        borderRadius: 5,
        backgroundColor: color1,
        marginTop: '5%',
        marginHorizontal: '5%'
    },
    buttomText: {
        fontSize: 20,
        color: color2,
        // textAlignVertical: 'center',
        textAlign: 'center'
    },
    btnEye: {
        position: 'absolute',
        right: '10%'
    },
})

export const placeHolderStyle = {
    placeholder: {
        color: color1,
        backgroundColor: color2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: color1
    },
    inputAndroid: {
        backgroundColor: color2,
        color: color1,
        height: 50,
        justifyContent: 'center',
        marginHorizontal: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: color1
    },
}

export default style