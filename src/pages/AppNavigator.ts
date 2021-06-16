
import { createAppContainer } from 'react-navigation';
import LoadingPage from './LoadingPage';
import HomePage from './HomePage'
import productDetails from './ProductDetails'
import { createStackNavigator } from 'react-navigation-stack';
import DetailPage from './DetailPage'

export const navigator = {
    LoadingPage: {
      screen: LoadingPage,
      navigationOptions: {
        headerShown: false
      }
    },DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        headerShown: false
      }
    },
   
    HomePage:{screen: HomePage,
      navigationOptions: {
        headerShown: false
      }
    },
    productDetails:{screen: productDetails,
      navigationOptions: {
        headerShown: false
      }
    },
  };
  
  const AppNavigator = createStackNavigator(
    navigator, {
    initialRouteName: 'LoadingPage',
    gesturesEnabled: false,  
  }
  );
  
  
  export default createAppContainer(AppNavigator);