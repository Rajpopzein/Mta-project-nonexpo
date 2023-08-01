import React from 'react';
import RootNavigator from './navigator/RootNavigator';
import { NativeBaseProvider } from 'native-base';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';



function App(): JSX.Element {
  
  return (
    <NativeBaseProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <RootNavigator/>
      </ApplicationProvider>
    </NativeBaseProvider>
  );
}


export default App;
