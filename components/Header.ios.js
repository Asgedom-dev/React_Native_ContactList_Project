import React from 'react';
import { Text, View, Image } from 'react-native';

import HeaderStyle from '../styles/HeaderStyle'
import CourseImage from '../images/course.png';
import Course from './Course';

const Header = () => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Image source={require('../images/course.png')} />
      </View>
      <Text style={HeaderStyle.ios}>Courses Review</Text>
    </View>
  )
};

export default Header;
