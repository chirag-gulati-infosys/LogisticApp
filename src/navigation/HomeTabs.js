import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from "../assets/ImageProperties";
import InsetShadow from "react-native-inset-shadow";
import { Box, Image, Text } from "native-base";
import labels from "../localization/localization";
import { Platform } from "react-native";
import RecommendLoads from "../screens/RecommendLoad/RecommendLoads";
import FindLoads from "../screens/FindLoads/FindLoads";
import More from "../screens/More/More";


const Tab = createBottomTabNavigator()

const bottomTabBarNavigationOptions = (
    navigation,
    tabLabel,
    tabIcon,
    tabIconActive
  ) => {

    return {
      tabBarIcon: ({ focused }) => (
        <Box
          borderTopColor={focused ? "view_theme.400" : "brand.50"}
          borderTopWidth={3}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={focused ? "brand.1100" : "white"}
          flex={1}
          minWidth={0}
        >
          {focused ? (
            <InsetShadow
              shadowOpacity={Platform.OS == "android" ? 0.3 : 0.2}
              top={false}
              bottom={false}
              left={true}
              right={true}
              containerStyle={{
                width: "100%",
                padding: 0,
                m: 0,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "brand.1100",
              }}
            >
              <Image
                source={
                  focused
                    ? Images[tabIconActive]
                    : Images[tabIcon]
                }
                alt="image"
              />
              <Text
                color="text.1200"
                variant={focused ? "semibold2xs" : "regular2xs"}
                textAlign={"center"}
              >
                {tabLabel}
              </Text>
            </InsetShadow>
          ) : (
            <>
              <Image
                source={
                  focused
                    ? Images[tabIconActive]
                    : Images[tabIcon]
                }
                alt="image"
              />
              <Text
                color="text.1200"
                variant={focused ? "semibold2xs" : "regular2xs"}
                textAlign={"center"}
              >
                {tabLabel}
              </Text>
            </>
          )}
        </Box>
      ),
    };
  };

const HomeTabs = () => {

    return (
        <Tab.Navigator
        initialRouteName={"For You"}
        screenOptions={{
            headerShown: false
        }}
        tabBarOptions={{
          keyboardHidesTabBar: Platform.OS == "android",
          showLabel: false,
        }}
      >
        <Tab.Screen
          name={"For You"}
          component={RecommendLoads}
          options={(navigation) =>
            bottomTabBarNavigationOptions(
              navigation,
              labels.recommendedloads_tab,
              "recommendedloads_tab",
              "recommendedloads_active_tab"
            )
          }
        />
        <Tab.Screen
          name={"Find Loads"}
          component={FindLoads}
          options={(navigation) =>
            bottomTabBarNavigationOptions(
              navigation,
              labels.findloads_tab,
              "findloads_tab",
              "findloads_active_tab"
            )
          }
        />
        <Tab.Screen
          name={"My Bids"}
          component={RecommendLoads}
          options={(navigation) =>
            bottomTabBarNavigationOptions(
              navigation,
              labels.mybids_tab,
              "mybids_tab",
              "mybids_active_tab"
            )
          }
        />
        <Tab.Screen
          name={"My Loads"}
          component={RecommendLoads}
          options={(navigation) =>
            bottomTabBarNavigationOptions(
              navigation,
              labels.myloads_tab,
              "myloads_tab",
              "myloads_active_tab"
            )
          }
        />
        <Tab.Screen
          name={"Fuel"}
          component={RecommendLoads}
          options={(navigation) =>
            bottomTabBarNavigationOptions(
              navigation,
              labels.fuel_tab,
              "findfuel_tab",
              "findfuel_tab_active"
            )
          }
        />
        <Tab.Screen
          name={"More"}
          component={More}
          options={(navigation) =>
            bottomTabBarNavigationOptions(
              navigation,
              labels.more_tab,
              "more_tab",
              "more_tab_active"
            )
          }
        />
      </Tab.Navigator>
    )
}

export default HomeTabs