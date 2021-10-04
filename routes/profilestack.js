import { createStackNavigator } from "react-navigation-stack";
import Profile from "../src/screens/Profile";

const screens ={
    
    Friends:{
        screen: Profile
    },
    
}

const profileStack = createStackNavigator(screens);

export default profileStack;