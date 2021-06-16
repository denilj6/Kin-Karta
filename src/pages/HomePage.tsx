import { Component } from "react";
import React from "react";
import { View, Text, Image, Dimensions, AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemList from "../components/ItemList";

interface Props {
    navigation: any;
}
interface State {
    reloadBuffer: number
}

export default class HomePage extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            reloadBuffer: 0
        }

    }
    componentDidMount() {

    }

    renderNewsList = () => {
        return (
            <ItemList navigation={this.props.navigation}></ItemList>
        );
    }


    SettingsScreen = () => {
         let data ='A Privacy Policy is a legal statement that specifies what the business owner does with the personal data collected from users, along with how the data is processed and for what purposes. In 1968, Council of Europe did studies on the threat of the Internet expansion as they were concerned with the effects of technology on human rights. This lead to the development of policies that were to be developed to protect personal data. This marks the start of what we know now as a "Privacy Policy." While the name "Privacy Policy" refers to the legal agreement, the concept of privacy and protecting user data is closely related. This agreement can also be known under these names:'+'A Privacy Policy can be used for both your website and mobile app if its adapted to include the platforms your business operates on.'
        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: '#689EDB', height: 50, padding: 10 }}>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../assets/splash.png')} />
                    <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginLeft: 10, marginTop: 5 }}>Service Policy</Text>
                </View>
                <Text  style={{ color: '#000', fontSize: 15,margin:10 }}>{data}</Text>

            </View>


        );
    }
    render() {
        const Tab = createBottomTabNavigator();

        return (
            <View style={{ flex: 1 }}>
                <NavigationContainer  >
                    <Tab.Navigator

                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === 'Policy') {
                                    iconName = focused ? 'build-sharp' : 'build-outline';
                                } else {
                                    iconName = focused ? 'md-list-circle-sharp' : 'md-list-outline';
                                }

                                return <Ionicons name={iconName} size={size} color={color} />;
                            },
                        })}
                        tabBarOptions={{
                            activeTintColor: 'tomato',
                            inactiveTintColor: 'gray',
                        }}>

                        <Tab.Screen options={{ unmountOnBlur: true }} name="Case Studies" component={this.renderNewsList} />
                        <Tab.Screen options={{ unmountOnBlur: true }} name="Policy" component={this.SettingsScreen} />
                    </Tab.Navigator>
                </NavigationContainer>

            </View>
        )
    }
}
