import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Platform, Text, Image } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class LaunchScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      WelcomeScreen: true,
    };
  }
  componentWillMount = () => {
    StatusBar.setBackgroundColor("#fff", true);
    setTimeout(function () {
      this.setState({ WelcomeScreen: false });
      StatusBar.setBackgroundColor("#009648", true)

    }.bind(this), 2000);
  };
  
  render() {
    const StatusBarAPP = (
      Platform.select({ ios: 
        <MyStatusBar backgroundColor={this.state.WelcomeScreen?"#fff":"#009648"} barStyle="light-content" />
      , android: 
        <StatusBar backgroundColor="#fff" barStyle="light-content"/>
       })
    );

    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
      {StatusBarAPP}
        <View style={styles.content}>
        {this.state.WelcomeScreen?
            <View style={{ padding: 20, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
               <Image resizeMode="contain" source={require('../Images/ignite_logo.png')} style={{ width: '100%', height: 145, justifyContent: 'center'}}/>
            </View>
        :
          <NavigationRouter/>
        }
        </View>
      </View>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#f7f7f7',
    height: APPBAR_HEIGHT,
    // alignItems:'center',
    justifyContent:'center'
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
});