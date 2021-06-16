import { Component } from "react";
import React from "react";
import { View, Text, Image, Dimensions, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

interface Props {
    navigation: any;
}
interface State {
}

export default class LoadingPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {

        let _this = this;
        setTimeout(function timer() {
            _this.props.navigation.navigate('HomePage')
        }, 3000)
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Image style={{width:100, height: 100,alignSelf:'center' ,marginTop:150}}
                    source={require('../assets/splash.png')} />
                    <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center'}}> Kin + Karta</Text>
            </View>
        )
    }
}