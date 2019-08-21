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
    width: 140,
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
    text: "",
    path: "",
    analyzeButton: "Analyze Image"
  }



  analyzeImage = async (imgPath = this.state.path) => {
    const tessOptions = {
      whitelist: null,
      blacklist: null
    };
    //to detect text
    try {
      this.setState({analyzeButton: "Processing. . . "})
    const processImage = await Ocr.recognize(this.state.path, "LANG_ENGLISH", tessOptions)
    this.setState({
      text: processImage,
      analyzeButton: "Done"
     })

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
        this.setState({
          pickedImage: {uri: res.uri},
          analyzeButton: "Analyze Image",
          path: res.path
        })
      }

    })
  }

  render() {
    return (
      <View
      style={{
        flex: 1
      }}
      >
        <ScrollView
        contentContainerStyle={{
          minHeight: "100%"
        }}
        >
        <View  style={{
          // alignItems:"center",
          justifyContent:"center",
          flex: 1,
          // borderWidth: 1,
        }} >
        {this.state.pickedImage !== null && (
          <View  style={{
            marginHorizontal: 10,
            marginVertical: 10,
            // minHeight: 300
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
            justifyContent:"space-around",
            alignItems:"center"
          }}
          >
            <ButtonWithLabel
            text="Pick Image"
            onPress={this.pickImageHandler}
            />
     { this.state.pickedImage !== null &&
     <ButtonWithLabel
            text={this.state.analyzeButton}
            onPress={this.analyzeImage}
            />}
          </View>

      </View>
    { this.state.text !== "" &&  <Text
      style={{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign:"center",
        marginTop: 20,
        marginBottom: 5,
      }}
      >Extracted Text</Text>}
      <Text
      style={{
        paddingHorizontal: 10
      }}
      >{this.state.text}</Text>
      </ScrollView>
      </View>
      )
  }
}

export default ImageToText
