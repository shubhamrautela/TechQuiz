import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import LoginStack from "./loginStack";
import HomeStack from "./homeStack";
import SettingStack from "./settingstack";
import friendStack from "./friendStack";
import profileStack from "./profilestack";
import Login from "../src/screens/loginPage";

const RootDrawerNavigator = createDrawerNavigator({
    
    Home:{
        screen: HomeStack,
    },
    Profile:{
        screen: profileStack
    },
    
    Scoreboard: {
        screen: SettingStack,
    },

    Friends: {
        screen: friendStack,
    },

    Settings:{
        screen: SettingStack,
    },
    Login:{
        screen: LoginStack,
        navigationOptions: {
            drawerLabel: () => null,
        }
    },
    Logout: {
        screen: Login,
        
    },
    
});

export default createAppContainer(RootDrawerNavigator);