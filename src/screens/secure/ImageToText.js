import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from "react-native-image-picker";
import { COLOR } from '../../components/helpers/helpers';
import Ocr from "react-native-tesseract-ocr";


const {height, width} = Dimensions.get("window")

const ButtonWithLabel = (props) => (
  <TouchableOpacity
  style={{
    backgroundColor: COLOR.buttonBackground,
    width: 100,
    marginTop: 10,
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
    pickedImage: null,
    text: ""
  }



  analyzeImage = async (imgPath = this.state.pickedImage.uri) => {
    console.log(imgPath)
    const tessOptions = {
      whitelist: null,
      blacklist: null
    };
    //to detect text
    try {
      console.log('Ocr is', Ocr)
    const processImage = await Ocr.recognize(imgPath, "LANG_ENGLISH", tessOptions)
    console.log(processImage)
    this.setState({ text: processImage })

    } catch (error) {
      console.log(error)
      this.setState({ text: "Error extracting the image" })
    }
  }

  pickImageHandler = () => {

    ImagePicker.showImagePicker({
      title:"Select image Boss"
    }, res => {
      if(res.didCancel) {
        alert("No image selected")
      } else if(res.error) {
        alert('Error uploading image. Please try again later')
      } else {
        this.setState({pickedImage: {uri: res.uri}  })
      }
      console.log(res)

    })
  }

  render() {
    return (
      <ScrollView>
        <View>
        {this.state.pickedImage !== null && (
          <View  style={{
            marginHorizontal: 10,
            // borderWidth: 1,
            // borderColor:"red",
            marginVertical: 10
          }} >
            <Image
            resizeMode="contain"


          source={this.state.pickedImage}
          style={{
            width: "100%",
            height: 300,

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
     { this.state.pickedImage !== null &&
     <ButtonWithLabel
            text="Analyze Image"
            onPress={this.analyzeImage}
            />}
          </View>

      </View>
      <Text
      style={{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:"center",
        marginTop: 20,
        marginBottom: 5,
      }}
      >Displayed Text</Text>
      <Text
      style={{
        paddingHorizontal: 10
      }}
      >{this.state.text}</Text>
      </ScrollView>
      )
  }
}

export default ImageToText
