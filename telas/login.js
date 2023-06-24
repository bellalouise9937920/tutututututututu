import React, {Component} from "react";
import {View,
StyleSheet,
ImageBackGround,
Image,
TextInput,
TouchableOpacity,
Text,
Alert,
KeyboardAvoidingView
} from "react-native";
import firebase from "firebase";

const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component {
    constructor(porps) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleLogin = (email, password) => {
        firebase
        .auth ()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            this.props.navigation.navigate("BottomTab");
        })
        .catch(error => {
            Alert.alert(error.message);
        });
    };
}