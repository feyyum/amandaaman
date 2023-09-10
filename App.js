import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {requestCameraPermission} from './lib/Permissions';

const App = () => {
  requestCameraPermission();

  const devices = useCameraDevices();
  const device = devices.back;

  if (device == null) {
    return (
      <View>
        <Text>Yükleniyor</Text>
      </View>
    );
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default App;
