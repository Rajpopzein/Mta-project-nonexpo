import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import DeviceOrientation from '../statics/DeviceOrientation';
import Card from '../component/Card';
import Tabs from '../component/Tabs/Tabs';
import { useEffect, useState } from 'react';
import RegisterModel from '../component/RegisterModel';
import Registration from './Registration';
import Forgetpwd from './Forgetpwd';

const Login = () => {
  const [mvisibility, setMvisibility] = useState(false);
  const [moduleActive, setModuleActive] = useState(false);
  

  const closeModule = () => {
    setModuleActive(!moduleActive);
  };

  const modulepop = () => {
    setMvisibility(true);
  };

  const forgetmodulepop = () =>{
    setMvisibility(true)
  }

  useEffect(() => {}, [moduleActive,mvisibility]);

  return (
    <View>
      <SafeAreaView>
        <View style={style.modulepopup}>
        <RegisterModel visibility={moduleActive} pressval={closeModule}>
            <Registration  form_visibility={setModuleActive}/>
          </RegisterModel>
        </View>

        <View style={style.modulepopup}>
          <RegisterModel visibility={mvisibility}>
              <Forgetpwd setM={setMvisibility}/>
          </RegisterModel>
        </View>

        <View style={style.image_container}>
          <Image
            style={style.cardImage}
            source={require('../resources/images/09.jpg')}
          />
          <View style={style.form_container}>
            <Card visibility={closeModule} forgetvisibility={forgetmodulepop}/>
          </View>
        </View>
        <View style={style.tabs}>
            <Tabs/>
          </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  cardImage: {
    width: DeviceOrientation.devicewidth,
    height: (40 / 100) * DeviceOrientation.devicehight,
  },
  image_container: {
    position: 'relative',
  },
  form_container: {
    position: 'absolute',
    flex: 1,
    width: DeviceOrientation.devicewidth,
    marginHorizontal: (5 / 100) * DeviceOrientation.devicewidth,
    top: (7 / 100) * DeviceOrientation.devicehight,
  },
  tabs: {
    marginTop: (32 / 100) * DeviceOrientation.devicehight,
    width: DeviceOrientation.devicewidth,
    height:(28/100) * DeviceOrientation.devicehight
  },
  modulepopup: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
