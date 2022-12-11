import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button, Text, View} from 'react-native';
import {NativeModules} from 'react-native';
const {RSAModule} = NativeModules;

function App() {
  const [privateK, setPrivateK] = useState('');
  const [publicK, setPublicK] = useState('');

  const onPress = async () => {
    const { privateKey, publicKey } = await RSAModule.keyPairGenerator();
    setPrivateK(privateKey);
    setPublicK(publicKey)
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{ padding: 10 }}>
          <Button
            title="Key Pair Generator"
            color="#841584"
            onPress={onPress}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text style={{ padding: 5}}>privateK: {privateK}</Text>
          <Text style={{ padding: 5}}>publicK: {publicK}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
