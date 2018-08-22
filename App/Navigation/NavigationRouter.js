import React,{Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginAndRegisterScreen from "../Containers/LoginAndRegisterScreen";

export default class NavigationRouter extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        return(
            <Router>
                <Scene key = "root">
                    <Scene  initial={true} key = "LoginAndRegisterScreen" component = {LoginAndRegisterScreen} title = "LoginAndRegisterScreen" hideNavBar={true} />
                </Scene>
            </Router>
        );
    }
}