import React from 'react';
import { Text, View, Image } from 'react-native';

import HeaderStyle from '../styles/HeaderStyle.js';
import CourseImage from '../images/course.png';

const Header = () => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image style={{width:100, height:100}} source={require('../images/course.png')} />
      </View>
      <Text style={HeaderStyle.android}>Courses Review</Text>
    </View>
  )
};

export default Header;
