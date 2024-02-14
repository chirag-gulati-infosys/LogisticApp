import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Select,
  Center,
  Actionsheet,
  FlatList,
  View,
  Pressable,
  Image,
} from "native-base";
import { isAndroid } from "../../utils/utils";
import { Platform, SafeAreaView, TouchableHighlight } from "react-native";
import labels from "../../localization/localization";
import { Images } from "../../assets/ImageProperties";
import NavigationService from "../../navigation/NavigationService";

const CarrierPage = () => {
  const [carrier, setCarrier] = useState("");
  const [unselectedCarrier, setUnselectedCarrier] = useState(false);
  const [data, setData] = useState([
    {
      partnerName: "1 GRV LLC",
      partnerIdentifier: "2-2-1GRVLAMD"
    },
    {
      partnerName: "101 TRANSPORT INC",
      partnerIdentifier: "2-2-101TLAMN"
    },
    {
      partnerName: "AFTER FIVE P.M., INC.",
      partnerIdentifier: "2-2-AFTETAFL"
    },
    {
      partnerName: "DNA CARRIERS INC",
      partnerIdentifier: "2-2-DNACNAIL"
    }
  ]);
  const [isCarrierPopupOpen, setisCarrierPopupOpen] = useState(false);
  const [carrierString, setcarrierString] = useState(
    labels.CARRIER_PLACEHOLDER
  );

  const navigateToHome = () => {
    NavigationService.navigate("Home")
  }
  return (
    <Box w="100%" h="100%" bg="brand.50" flexDirection={"column"}>
      
        <>
          <Box width="100%" marginTop="60" px={30}>
          <Image h={100} w={100} source={Images.Logo} resizeMode="contain"/>
          </Box>
          <Center marginTop={10}>
            <Text variant="boldmd">
              {labels.AVAILABLE_ORGANIZATIONS}
            </Text>
          </Center>
          <Box
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            px="30"
            marginTop="45"
            height="30"
          >
            <Box
              flexDirection="column"
              justifyContent="space-between"
              mt="2"
              width={"100%"}
            >
              <Box
                alignSelf="flex-start"
              >
                <Text
                  color={"text.1200"}
                  testID="txtCarrier"
                  accessibilityLabel="txtCarrier"
                  variant={"semiboldsm500"}
                >
                  {labels.CARRIER}
                </Text>
              </Box>
              <Pressable
                onPress={() => {
                  setisCarrierPopupOpen(true);
                }}
              >
                <Box
                  minH={isAndroid() ? "48px" : "44px"}
                  px={3}
                  justifyContent="center"
                  borderWidth="0.8"
                  marginTop={"2"}
                  rounded="8"
                  _light={{ borderColor: "brand.100" }}
                >
                  <Text
                    alignItems="flex-start"
                    variant={"regularmd"}
                    numberOfLines={1}
                    color={
                      carrierString == labels.CARRIER_PLACEHOLDER
                        ? "brand.500"
                        : "text.1200"
                    }
                  >
                    {carrierString}
                  </Text>
                </Box>
              </Pressable>
              {unselectedCarrier && (
                <Text
                  h={4}
                  color={colors.txt_Error}
                  fontSize="2xs"
                  marginTop={3}
                  testID="errorCarrier"
                  accessibilityLabel="errorCarrier"
                >
                  {labels.REQUIRED_INFORMATION}
                </Text>
              )}
            </Box>
          </Box>
          <Box px="30" mt={10}>
            <Button
              mt="3"
              variant={"driveSecondary"}
              _text={{ variant: "boldmd" }}
              onPress={navigateToHome}
            >
              {labels.SELECT_CARRIER}
            </Button>
          </Box>
          <SafeAreaView>
            <Actionsheet
              isOpen={isCarrierPopupOpen}
              collapsable
              animationPreset="slide"
              safeAreaBottom={0}
              onClose={() => {
                setisCarrierPopupOpen(false);
              }}
            >
              <Actionsheet.Content>
                <Text
                  mx="4"
                  my={"4"}
                  alignSelf="flex-start"
                  variant="regularmd"
                  color={"screen_bg.700"}
                >
                  {labels.SELECT_CARRIER_LABEL}
                </Text>
                <FlatList
                  width={"100%"}
                  estimatedItemSize={350}
                  data={data}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableHighlight
                        underlayColor="#DDDDDD"
                        onPress={() => {
                          setcarrierString(item.partnerName);
                          setCarrier(item.partnerIdentifier);
                          setisCarrierPopupOpen(false);
                        }}
                      >
                        <View
                          mx="4"
                          py="2"
                          flexDirection={"column"}
                        >
                          <Text
                            width={"100%"}
                            alignSelf="flex-start"
                            variant="regularmd"
                            color={"text.1200"}
                          >
                            {item.partnerName}
                          </Text>
                          <Text
                            width={"100%"}
                            alignSelf="flex-start"
                            variant={"regularsm"}
                            color={"text.1200"}
                          >
                            {item.partnerIdentifier}
                          </Text>
                        </View>
                      </TouchableHighlight>
                    );
                  }}
                ></FlatList>
              </Actionsheet.Content>
            </Actionsheet>
          </SafeAreaView>
        </>
    </Box>
  );
};
export default CarrierPage;
