import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";

const Header = (props) => {
    let mainHeader = null;
    let backButton = <View>
        <TouchableOpacity onPress={() => {props.navigate(props.backButtonAction)}}>
            <Icon size={30} style={styles.pageHeaderBack} color={"#1f6a7a"} name="ios-arrow-back" />
        </TouchableOpacity>
    </View>
    if(props.headerText){
        mainHeader = <View style={styles.pageHeader} visible={props.headerText}>
            <View style={styles.pageHeaderRow}>
                {props.backButtonAction && backButton}
                <Icon size={30} style={styles.pageHeaderIcon} color="#1f6a7a" name={props.icon}/>
                <Text style={styles.pageHeaderText}>{props.headerText}</Text>
            </View>
        </View>
    }
    return (
        <View style={{width: "100%"}}>
            {mainHeader}
        </View>
    );
};

const styles = StyleSheet.create({

    pageHeader: {
        height: 42,
        backgroundColor: "#e5e5e5",
        width: "100%",
    },
    pageHeaderRow: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },
    pageHeaderIcon: {
        marginLeft: 25,
        marginRight: 30
    },
    pageHeaderBack: {
        marginLeft: 25
    },
    pageHeaderText: {
        color: "#000",
        fontSize: 21
    },
});

export default Header;