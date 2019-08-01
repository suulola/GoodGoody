import React, { Component } from 'react'
import { Text, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native'
import {  } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get("window")
export class DisplayNews extends Component {
  render() {
    const {article} = this.props.navigation.state.params;
    return (
      <View style={{flex: 1, alignItems: "center", paddingHorizontal: 50, paddingVertical: 30}}>
        <Text style={{ fontSize: 30, textAlign: "center", padding: 20}}>  {article.title} </Text>
         <Image
          source={{uri: article.urlToImage}}
          style={{width: width - 50, height: 400, marginBottom: 2 }}
          />
        <Text style={{fontSize: 10, fontStyle: "italic"}}>  {article.description} </Text>

        <Text style={{textAlign: "center", textAlign: "justify", paddingVertical: 20}} >  {article.content.slice(0,260)}
        <Text style={{color: "rgb(13, 141, 226)", }} onPress={() => Linking.openURL(article.url) }>  Read More in Browser </Text>
        </Text>

        <View style={{flexDirection: "row", justifyContent:"space-around", width: "100%"}}>
        <Text style={{fontSize: 10, fontStyle: "italic"}}>  {article.publishedAt.slice(0,10)} </Text>
        <Text style={{fontSize: 10, fontStyle:"italic"}}>  {article.author} </Text>
        </View>
      </View>
    )
  }
}

export default DisplayNews
