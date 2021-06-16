import { Component } from "react";
import React from "react";
import { View, Text, Image, Dimensions, AsyncStorage, FlatList } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
    navigation: any;
}
interface State {
    caseStudy: any
}

export default class DetailPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            caseStudy: []
        }

    }
    componentDidMount() {
        const { params } = this.props.navigation.state
        this.setState({
            caseStudy: !!params ? (!!params.data ? params.data : {}) : {}
        })
    }
    renderBodyElements = (items: any) => {
        let item = items.item
        console.log('llll ', item.image_url);

        return (
            <View>
                {!!item.image_url ? <View style={{ margin: 10, elevation: 10, }}>
                    <Image style={{ backgroundColor: '#000', resizeMode: 'stretch', height: 50, width: 50 }}
                        source={{
                            uri: item.image_url,
                        }} />
                </View> : null}
            </View>

        )
    }
    renderItem = (items: any) => {
        let item = items.item
        return (
            <View style={{ margin: 5, elevation: 5, backgroundColor: '#fff', flexDirection: 'column' }}>
                <Text style={{ color: '#000', fontSize: 14, marginLeft: 10, fontWeight: 'bold' }}>{!!item.title ? item.title : ''}</Text>

                <View style={{}}>
                    <FlatList
                        key={Math.random()}
                        horizontal={true}
                        data={item.body_elements}
                        renderItem={(item: any) => this.renderBodyElements(item)}
                    />
                </View>

            </View>
        )

    }
    renderDetails = () => {
        return (
            <View>
                <Image style={{ margin: 10, height: 100, }}
                    source={{
                        uri: this.state.caseStudy.hero_image,
                    }} />
                <Text style={{ color: '#000', fontSize: 14, margin: 10, }}>{this.state.caseStudy.title}</Text>
                <FlatList
                    key={Math.random()}
                    data={this.state.caseStudy.sections}
                    renderItem={(item: any) => this.renderItem(item)}
                />
            </View>
        )
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: '#689EDB', height: 50, padding: 10 }}>
                    <Image style={{ width: 30, height: 30 }}
                        source={require('../assets/splash.png')} />
                    <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold', textAlign: 'center', marginLeft: 10, marginTop: 5 }}>Case Study</Text>
                </View>
                {this.renderDetails()}
            </View>
        )
    }
}