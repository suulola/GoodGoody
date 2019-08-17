import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from "react-native-image-picker";
import { COLOR } from '../../components/helpers/helpers';
// import RNTextDetector from "react-native-text-detector"

const {height, width} = Dimensions.get("window")

const ButtonWithLabel = (props) => (
  <TouchableOpacity
  style={{
    backgroundColor: COLOR.buttonBackground,
    width: 100,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10

  }}
        onPress={props.onPress}
        >
          <Text
          style={{
            textAlign:"center",
            color: COLOR.buttonText
          }}
          >{props.text}</Text>
        </TouchableOpacity>

)

export class ImageToText extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ flex: 1, paddingHorizontal: 20, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={ () => navigation.navigate("tabDashboard") }>
        <Icon name="md-arrow-back" size={30} style={{marginLeft: 10, marginRight: 10}} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, marginHorizontal: 10}}>Image Converter</Text>
      </View>
    )
  });

  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({
      title:"Pick an image"
    }, res => {
      this.setState({pickedImage: {uri: res.uri}  })
    })
  }

  analyzeImage = async () => {
    // to detect text
    // try {
    //   const visionResp = await RNTextDetector.detectFromUri(this.state.pickedImage)
    //   console.log(visionResp)

    // } catch (error) {
    //   console.log(error)
    //   console.log(error.message)
    // }

  }









  render() {
    return (
      <View>
        <Text> Coming Soon </Text>
        {this.state.pickedImage !== null && (
          <View  style={{
            marginHorizontal: 30,
            marginVertical: 30
          }} >
            <Image
          source={this.state.pickedImage}
          style={{
            width: "100%",
            height: 300
          }}

          />
          </View>

          )  }

          <View
          style={{
            flexDirection:"row",
            justifyContent:"space-around"
          }}
          >
            <ButtonWithLabel
            text="Pick Image"
            onPress={this.pickImageHandler}
            />
     { this.state.pickedImage !== null &&    <ButtonWithLabel
            text="Analyze Image"
            onPress={this.analyzeImage}
            />}
          </View>

      </View>
    )
  }
}

export default ImageToText
