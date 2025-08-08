import "../global.css";
import { Slot } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import Splash from "./splash";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
      const [loaded, error] = useFonts({
        'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
        'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
        'Poppins': require('../../assets/fonts/Poppins-Black.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-BlackItalic': require('../../assets/fonts/Poppins-BlackItalic.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-BoldItalic': require('../../assets/fonts/Poppins-BoldItalic.ttf'),
        'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return <Splash /> ;
      }
  return <Slot />;
}
