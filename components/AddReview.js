import React, { useState, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Button,
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from "@react-navigation/core";

const AddReview = ({route:{params:{course}},navigation}) => {

const [comment, setComment] = useState({name:"", rating:1,comment:"", submitting:false})

useEffect(() => {
  retrieveData();
}, []);

const addReview=()=>{
  saveReview()
  setTimeout(()=>{
    navigation.navigate("CoursesList");
  },1000)

setComment({submitting:true})
}
const saveReview = async () => {
  try {
    const jsonValue = JSON.stringify(comment);
    await AsyncStorage.setItem(course.code, jsonValue);     
  } catch (e) {
    console.log(e);
  }
};

const retrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(course.code);
    if (jsonValue !== null) {
      setComment({...comment,...JSON.parse(jsonValue)}) 
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
  <SafeAreaView style={styles.root}>
    <KeyboardAwareScrollView extraScrollHeight={30}>
    <Text style={styles.addReview}>Add Review</Text>
    <TextInput style={styles.input} placeholder="Your full name" value={comment.name} onChangeText={(text)=>setComment({...comment, name:text})}/>
    <Text style={styles.rating}>Your Rating</Text>
  
    
    <Text style={{ alignSelf: "center" }}>
          {[1, 2, 3, 4, 5].map((number, index) =>
            // number > comment.rating ? (
              <TouchableOpacity
                key={index}
                onPress={() => setComment({ ...comment, rating: number })}
              >
                <AntDesign key={index} name="star" size={50} color={number<=comment.rating ?"#FFD64C":"#ccc"} />
              </TouchableOpacity>

          )}
        </Text>

  <TextInput 
  style={styles.input2}  
  textAlignVertical="top" 
  multiline={true} 
  numberOfLines="10" 
  value={comment.comment} 
  onChangeText={(text)=>setComment({...comment, comment:text})}
  />

{
  comment.submitting &&
<ActivityIndicator size="small" color="#0000ff" />
}
 
    <TouchableOpacity style={styles.submitButton} onPress={addReview}>
      <Text style={styles.submitButtonText}>Submit Review</Text>
    </TouchableOpacity>
    </KeyboardAwareScrollView>
    </SafeAreaView>
 
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  button: {
    paddingHorizontal: 10,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  input2: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    height:200,
  },
  rating: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 40,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starButton: {
    padding: 5,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0066cc',
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default AddReview;
