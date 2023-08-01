import { TextInput, View , StyleSheet,Image} from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";


const IconTextIn = ({icon, placeholder, keytype,changetext,blur,value, name}) => {
    return(
        <View style={style.iconinput}>
            {/* <FontAwesome name={icon} size={15} style={{marginHorizontal:20, color:'#146af5'}}/> */}
            <FontAwesomeIcon icon={icon} style={{marginHorizontal:20, color:'#146af5'}}/>
            <TextInput style={{flex:1}} keyboardType={keytype} onChangeText={changetext} onBlur={blur} value={value} name={name}/>
        </View>
    )
}

export default IconTextIn

const style = StyleSheet.create({
    iconinput : {
        // flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:"gray",
        alignItems:'center',
        paddingBottom:1,
        marginVertical:15,
        color:"#146af5"
    }
})