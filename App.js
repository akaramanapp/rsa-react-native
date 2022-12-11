import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Button, Text, View} from 'react-native';
import {NativeModules} from 'react-native';
const {RSAModule} = NativeModules;

function App() {
  const [encryptedData, setEncryptedData] = useState('');

  const onPress = async () => {
    const data = await RSAModule.keyPairGenerator('deneme');
    setEncryptedData(data);
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
          <Text>Key: {encryptedData}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
