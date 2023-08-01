import { View, Image, StyleSheet, Text } from "react-native";
import { ListItem, Avatar } from "@react-native-material/core";


const FeedList = ({feedtext, keys}) => {
  return (
    <View style={style.card} >
      <View style={style.carddata} >
        <Text >{keys}</Text>
      </View>
      <View style={style.carddata}>
        <Text>{feedtext}</Text>
      </View>
    </View>
  );
};

export default FeedList;

const style = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginVertical:19,
  },
  carddata:{
    flex:1,
    marginHorizontal:20
  }
});
