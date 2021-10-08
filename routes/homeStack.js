import { createStackNavigator } from "react-navigation-stack";
import React from 'react';
import Login from '../src/screens/loginPage';
import Home from '../src/screens/homePage';
import Scoreboard from "../src/screens/scoreboard";
import Setting from "../src/screens/settings";
import Header from "../shared/header";
import QuizPage from "../src/Tquiz/QuizPage";
import QuizLevel from "../src/Tquiz/QuizLevel";
import Profile from "../src/screens/Profile";

const screens ={
    Login:{
        screen:Login,
        navigationOptions: {
           header:null, 
        }
    },
    
    Profile:{
        screen: Profile
    },

    Home:{
        screen: Home,
        navigationOptions:({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} />,
                headerLeft: () => {
                    return null;
                  }
            }   
         },
    },
    Settings:{
        screen: Setting
    },

    QuizLevel:{
        screen: QuizLevel
    },

    Quizpage:{
        screen: QuizPage,
        navigationOptions: {
           header:null, 
        }
    },

    
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;