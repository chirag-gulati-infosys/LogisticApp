import { CommonActions } from "@react-navigation/native";
let _navigator;

//Setting top level navigator from App.js
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef
}

//Navigate to a particular screen
//params -> (Name of screen, parameters)
function navigate(routeName, params = {}) {
    _navigator.dispatch(
        CommonActions.navigate({
          name: routeName,
          params
        })
      );
}

function reset(routeName, params) {
    _navigator.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: routeName }],
        })
    );
}

function back() {
    _navigator.dispatch(
        CommonActions.goBack()
    );
}

export default {
    navigate,
    setTopLevelNavigator,
    reset,
    back
};