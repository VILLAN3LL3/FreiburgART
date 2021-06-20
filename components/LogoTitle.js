import React from 'react';
import { Image } from 'react-native';

const LogoTitle = (props) => {
    return <Image source={require('../assets/logo.png')} style={{ height: 50, width: 200 }} />;
}

export default LogoTitle;