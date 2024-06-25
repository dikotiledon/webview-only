import { StatusBar } from 'expo-status-bar';
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { StyleSheet, Text, View, SafeAreaView, BackHandler, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {

  const webViewRef = useRef(null);
  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      // return true; // prevent default behavior (exit app)
    }
    return false;
  };


  return (
    <WebView 
    originWhiteList={['107.102.8.149']}
    source={{ uri: 'http://107.102.8.149/eclinic' }} 
    ref={webViewRef}
    javaScriptEnabled={true}
    style={styles.container}
    textZoom={85}
    setBuiltInZoomControls={true}
    setDisplayZoomControls={false}
    onNavigationStateChange={(navState) => {
      // Keep track of going back navigation within component
      console.log(navState);
      this.canGoBack = navState.canGoBack;
    }}
    injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, 
    maximum-scale=1.0, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
    scalesPageToFit={false}
  />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
