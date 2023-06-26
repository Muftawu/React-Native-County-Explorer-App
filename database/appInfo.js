import React from 'react';
import { Text } from 'react-native';

const AppInfo = () => {
const paragraph = "The React Native app is designed to offer users a convenient way to explore a comprehensive list of countries. The app's main screen presents an intuitive interface where users can tap on a country to access detailed information about it. This includes essential details like capital, population, language, currency, and notable landmarks, accompanied by captivating images and descriptions. The app ensures a seamless experience with responsive navigation, allowing users to easily navigate between screens. Overall, the app provides an engaging and informative experience, serving as a valuable resource for learning about different countries worldwide."
  return (
    <Text>{paragraph}</Text>
  );
}

export default AppInfo;
