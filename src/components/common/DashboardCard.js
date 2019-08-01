import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { COLOR } from '../helpers/helpers';

const DashboardCard = props => {
  return (
   <TouchableOpacity style={{}} >
            <View style={[styles.row, {
       borderRadius: 15,
       flexDirection: "row",
       paddingHorizontal: 20,
       paddingVertical: 20,
       marginHorizontal: 10,
       marginVertical: 10,
       height: 210,
       backgroundColor: props.backgroundColor }]}>
         <View style={{justifyContent: "center", alignItems: "center", marginHorizontal: 10}}>
           <Icon name={props.iconName} size={55} style={{marginRight: 10}}  />
         </View>

       <View style={{justifyContent: "space-around"}}>
         <Text style={{fontSize: 20, fontFamily: "Roboto"}}>{props.cardTitle}</Text>
         <Text style={{color: 'white', marginRight: 25, fontFamily: "san-serif-thin" }} >{props.cardText}</Text>
         <TouchableOpacity
         onPress={props.onPress}
         style={{
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
