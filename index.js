/**
 * @format
 * @flow
 */
 
import {AppRegistry} from 'react-native';
import App from './comp/App.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
