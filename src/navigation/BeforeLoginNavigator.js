import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";
import CarrierPage from "../screens/Carrier/CarrierPage";
import HomeTabs from "./HomeTabs";
import SearchCriteria from "../screens/Search/SearchCriteria";

const BeforeLoginStack = createNativeStackNavigator();


const BeforeLoginNavigator = () => {

    return (
        <BeforeLoginStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <BeforeLoginStack.Screen name="Auth" component={Auth}/>
            <BeforeLoginStack.Screen name="CarrierPage" component={CarrierPage}/>
            <BeforeLoginStack.Screen name="Home" component={HomeTabs}/>
            <BeforeLoginStack.Screen name="SearchCriteria" component={SearchCriteria}/>
            
        </BeforeLoginStack.Navigator>
    )
}

export default BeforeLoginNavigator;