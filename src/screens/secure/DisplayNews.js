import React, { Component } from 'react'
import { Text, View, Image, Dimensions,ScrollView ,TouchableOpacity, Linking } from 'react-native'

const {height, width} = Dimensions.get("window")
export class DisplayNews extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Read News</Text>
      </View>
    )
  });

  render() {
    const {article} = this.props.navigation.state.params;
    return (
      <ScrollView>
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
      </ScrollView>
    )
  }
}

export default DisplayNews
