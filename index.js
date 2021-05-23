import { registerRootComponent } from 'expo';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/crashlytics';
import '@react-native-firebase/analytics';
import App from './App';
import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
AppRegistry.registerComponent(appName, () => App);
