import { Text,FlatList } from "react-native"
import FeedList from "../component/FeedList";

const Feed = () =>{
    const feedtxt = [
         {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
    ];
    return(
        <>
             <FlatList
              data={feedtxt}
              renderItem={({item}) => {
                return(
                  <FeedList feedtext={item.title} keys={item.id}/>
                )
              }
            }
            keyExtractor={item => item.id}
            />
        </>
    )
}

export default Feed