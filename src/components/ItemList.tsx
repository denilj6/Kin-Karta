import { Component } from "react";
import React from "react";
import { View, Text, Image, Dimensions, AsyncStorage, Platform, PermissionsAndroid, TextInput, Picker, ToastAndroid, FlatList, ActivityIndicator } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/AntDesign';

interface Props {
    navigation?: any;
}
interface State {
    newsList: any,
    isLoading: boolean
}

export default class ItemList extends Component<Props, State> {
    textInputField: TextInput;
    constructor(props: Props) {
        super(props);
        this.state = {
            newsList: [],
            isLoading: true
        }

    }
    componentDidMount() {
        this.fetchItems()
    }
    fetchItems = () => {
        fetch('https://raw.githubusercontent.com/theappbusiness/engineering-challenge/main/endpoints/v1/caseStudies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('iiiii ',responseJson);
                
                this.setState({
                    newsList: responseJson.case_studies,
                    isLoading: false
                })

            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderItem = (items: any) => {
        let item = items.item
        return (
            <View style={{ flex: 1, margin: 5, elevation: 10, backgroundColor: '#fff', padding: 10 }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailPage',{data:item})}>
                    <View >
                        <View style={{flexDirection:'row'}}>
                        <Image style={{ width: 40, height: 40 ,borderRadius:40/2}}
                           source={{
                            uri: item.hero_image,
                          }} />
                          <View>
                          <Text style={{ color: '#000', fontSize: 14, marginLeft: 10, fontWeight: 'bold', }}>{item.teaser}</Text>
                          <Text numberOfLines={2} style={{ color: '#000', fontSize: 14 ,marginLeft:10}}>{item.title}</Text>
                          </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
    renderNewsList = () => {
        return (
            <View>
                <FlatList
                    key={Math.random()}
                    data={this.state.newsList}
                    renderItem={(item: any) => this.renderItem(item)}
                />
            </View>
        )
    }
  

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, backgroundColor: '#E8EBEF' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#689EDB', height: 50, padding: 10 }}>
                        <Image style={{ width: 30, height: 30 }}
                            source={require('../assets/splash.png')} />
                        <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginLeft: 10, marginTop: 5 }}>Case Studies</Text>
                    </View>
                    {!!this.state.isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : <View>

                        {this.state.newsList.length > 0 ? this.renderNewsList() :
                            <Text style={{ color: '#000', marginTop: 10, fontWeight: 'bold', fontSize: 14, textAlign: 'center' }}>{'No item found.....'}</Text>
                        }
                    </View>}
                </View>
            </View>
        )
    }
}