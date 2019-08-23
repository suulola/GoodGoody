import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


class NewsFeed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={ () => navigation.navigate("tabDashboard") }>
        <Icon name="md-arrow-back" size={30} style={{marginLeft: 10, marginRight: 10}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>News</Text>
      </View>
    )
  });

  state = {
    articles: []

  }

  getNewsArticle = async() => {
    try {
      const response = await fetch("https://newsapi.org/v2/top-headlines?country=ng&apiKey=f3cf2516cb8846199ef5f7cebfa1454f")
      const responseJSON = await response.json()
      this.setState({
        articles: responseJSON.articles
      })
    } catch (error) {
      alert(error)
    }
  }

  componentDidMount() {
    this.getNewsArticle()
  }

  render() {
    let newsFeed
    this.state.articles.length === 0 ? (
      newsFeed = <ActivityIndicator size="large" color="rgb(38, 226, 13)" />
    ) : (
     newsFeed = this.state.articles.map((article, i) => (
       <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate("DisplayNews", {
         article: article
       })}>
          <View style={{
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center",
            width: '95%',
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            marginVertical: 20,
            borderTopEndRadius: 5,
            borderBottomRightRadius: 5
            }}>
         <View style={{ width: "40%" }}>
         <Image
          source={{uri: article.urlToImage}}
          style={{
            width: '100%',
            height: 200,
            resizeMode: "cover"
            }}

          />
         </View>
         <View style={{ width: '60%', padding: 30 }} >
         <Text> {article.title}</Text>
         </View>

        </View>
       </TouchableOpacity>

      ))
    )
    return (
      <View style={styles.container}>
        <Text style={{ paddingVertical: 20 }} > TOP NEWS IN NIGERIA </Text>
          <ScrollView>
          {newsFeed}
          </ScrollView>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})


export default NewsFeed
