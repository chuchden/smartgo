
import React, { Component } from 'react';
import {View,Text,TouchableOpacity, TextInput} from 'react-native';
import { Images } from '../Themes';
import Icons from 'native-base/node_modules/react-native-vector-icons/Entypo'
import reactotronReactNative from 'reactotron-react-native';
import {Input, InputGroup} from 'native-base';

export default class LoginAndRegisterScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            countNumber: 0,
            displayFormLogin: true,
            phoneLogin: '',
            phoneRegister: '',
            idRegister: '',
        }
    }

    handleTapRegister = ()=>{
        this.setState({displayFormLogin: false});
    }
    handleTapLogin = ()=>{
        this.setState({displayFormLogin: true});
    }

    handlePhoneLogin = (value) => {
        if (/^\d+$/.test(value)) {
          this.setState({
            phoneLogin: value
          });
        }
        if(value=='')
        {
            this.setState({
                phoneLogin: value
              });
        }
      }
    handlePhoneRegister = (value) => {
        if (/^\d+$/.test(value)) {
          this.setState({
            phoneRegister: value
          });
        }
        if(value=='')
        {
            this.setState({
                phoneRegister: value
              });
        }
      }
    handleIdRegister = (value) => {
        if (/^\d+$/.test(value)) {
          this.setState({
            idRegister: value
          });
        }
        if(value=='')
        {
            this.setState({
                idRegister: value
              });
        }
      }

  render() {
    
    return (
        <View style={{flex:1, backgroundColor: '#fff'}}>
          <View style={{alignItems:'center',justifyContent:'center', padding: 30}}>
             <Text style={{fontSize:40,color:'#009648', fontWeight: 'bold'}}>SMARTGO+</Text>
          </View>

          <View style={{flexDirection:'row', paddingLeft: 30, paddingRight: 30, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={this.handleTapLogin} style={{flex: 1, backgroundColor: this.state.displayFormLogin? '#009648':'#fff'}}><Text style={{ height: 50, borderWidth: 1, borderColor:this.state.displayFormLogin? '#009648':'#bcbcbc', fontSize: 16, color:this.state.displayFormLogin? '#fff': '#848484', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}}>LOG IN</Text></TouchableOpacity>
                <TouchableOpacity onPress={this.handleTapRegister} style={{flex: 1, backgroundColor: !this.state.displayFormLogin? '#009648':'#fff'}}><Text style={{ height: 50, borderWidth: 1, borderColor:!this.state.displayFormLogin? '#009648':'#bcbcbc', fontSize: 16, color:!this.state.displayFormLogin? '#fff': '#848484', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}}>REGISTER</Text></TouchableOpacity>
          </View>

{/* login */}
{this.state.displayFormLogin?
        <View style={{  paddingLeft: 30, paddingRight:30}}>

            <InputGroup
                    regular={true}
                        style={{
                        borderColor:'#bcbcbc',
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        // borderTopWidth:0.5,
                        // borderBottomWidth:0.5,
                        }}>
                    <Input
                        style={{flex:5}}
                        placeholder="phone"
                        ref='mobileNo'
                        keyboardType = 'numeric'
                        value={this.state.phoneLogin}
                        onChangeText={this.handlePhoneLogin}
                        />
                </InputGroup>
                <InputGroup
                    regular={true}
                        style={{
                        borderColor:'#bcbcbc',
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        }}>
                    <Input
                        style={{flex: 5}}
                        secureTextEntry={true}
                        placeholder="password"
                        onChangeText={this.handleChangeOldPassword}
                        />
                </InputGroup>
            </View> 
            :
            // form register
            <View style={{  paddingLeft: 30, paddingRight:30}}>
            <InputGroup
                    regular={true}
                        style={{
                        borderColor:'#bcbcbc',
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        // borderTopWidth:0.5,
                        // borderBottomWidth:0.5,
                        }}>
                    <Input
                        style={{flex:5}}
                        placeholder="name"
                        onChangeText={this.handleChangeOldPassword}
                        />
                </InputGroup>
                <InputGroup
                    regular={true}
                        style={{
                        borderColor:'#bcbcbc',
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        }}>
                    <Input
                        style={{flex: 5}}
                        ref='mobileNo'
                        keyboardType = 'numeric'
                        placeholder="phone"
                        value={this.state.phoneRegister}
                        onChangeText={this.handlePhoneRegister}
                        />
                </InputGroup>
                <InputGroup
                    regular={true}
                        style={{
                        borderColor:'#bcbcbc',
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        // borderTopWidth:1,
                        // borderBottomWidth:1,
                        }}>
                    <Input
                        style={{flex: 5}}
                        secureTextEntry={true}
                        placeholder="password"
                        onChangeText={this.handleChangeOldPassword}
                        />
                </InputGroup>
                <InputGroup
                    regular={true}
                        style={{
                        borderColor:'#bcbcbc',
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderTopWidth:1,
                        borderBottomWidth:1,
                        }}>
                    <Input
                        style={{flex: 5}}
                        placeholder="ID"
                        ref='mobileNo'
                        keyboardType = 'numeric'
                        value={this.state.idRegister}
                        onChangeText={this.handleIdRegister}
                        />
                </InputGroup>
                
                
            </View> 
            }
{/* end login */}
{this.state.displayFormLogin?
            
            <View style={{flex: 1, paddingLeft: 30, paddingRight:30, top: 10}}>
                <TouchableOpacity onPress={this.handlePressConfirm}><Text style={{height: 50, borderWidth: 1, borderColor: '#bcbcbc', fontSize: 16, color: '#009648', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}}>LOG IN</Text></TouchableOpacity>
            </View>
            :
            <View style={{flex: 1, paddingLeft: 30, paddingRight:30, top: 10}}>
                <TouchableOpacity onPress={this.handlePressConfirm} ><Text style={{height: 50, borderWidth: 1, borderColor: '#bcbcbc', fontSize: 16, color: '#009648', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}}>REGISTER</Text></TouchableOpacity>
            </View>
            }
          
        </View>

    );
  }
}