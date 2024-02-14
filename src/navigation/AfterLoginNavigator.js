import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./HomeTabs";

const AfterLoginStack = createNativeStackNavigator();

const AfterLoginNavigator = () => {

    return (
        <AfterLoginStack.Navigator screenOptions={{
            headerShown: false
          }}>
            <AfterLoginStack.Screen name="HomeTab" component={HomeTabs} />
        </AfterLoginStack.Navigator>
    )
}

export default AfterLoginNavigator