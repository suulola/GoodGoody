import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from '../helpers/helpers';

const DashboardCard = props => {
  return (
   <TouchableOpacity>
            <View style={[styles.row, {
       borderRadius: 15,
       flexDirection: "row",
       paddingHorizontal: 20,
       paddingVertical: 20,
       marginHorizontal: 10,
       marginVertical: 10,
       backgroundColor: props.backgroundColor }]}>
       <Icon name={props.iconName} size={30} style={{marginRight: 10}}  />
       <View>
         <Text style={{fontSize: 20}}>{props.cardTitle}</Text>
         <Text style={{color: 'white', marginRight: 25 }} >{props.cardText}</Text>
         <TouchableOpacity  style={{
           width: 150,
           backgroundColor: COLOR.buttonBackground, padding: 10, marginVertical: 10, borderRadius: 50 }} >
           <Text style={{color: 'white', textAlign: "center"}} > {props.buttonText}</Text>
         </TouchableOpacity>

       </View>

        </View>
   </TouchableOpacity>
  );
};

const styles = {
  row: {
    flexDirection: "row"

  }
}

export default DashboardCard;
