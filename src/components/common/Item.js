import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from '../helpers/helpers';

const Item = props => {
  return (
   <TouchableOpacity onPress={props.onPress}>
      <View style={{alignItems: "center", justifyContent: "center"}} >
      <Text> {props.labelText} </Text>
      <Icon color={COLOR.icon} name={props.iconName} size={30} />
    </View>
   </TouchableOpacity>
  );
};

export default Item;
