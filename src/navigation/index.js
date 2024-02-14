import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import BeforeLoginNavigator from "./BeforeLoginNavigator";
import NavigationService from "./NavigationService";
import AfterLoginNavigator from "./AfterLoginNavigator";

const AppNavigator = () => {

    return (
        <NavigationContainer
            ref={(navigatorRef) => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}>
            <BeforeLoginNavigator/>
            {/* <AfterLoginNavigator/> */}
        </NavigationContainer>
    )
}

export default AppNavigator;