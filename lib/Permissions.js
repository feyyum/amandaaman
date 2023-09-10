import {Camera} from 'react-native-vision-camera';

export async function requestCameraPermission() {
  const newCameraPermission = await Camera.requestCameraPermission();
  return newCameraPermission;
}
