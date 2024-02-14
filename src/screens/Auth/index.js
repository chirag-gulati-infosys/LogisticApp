import { Box, Button, Divider, Image, Row, Text } from "native-base";
import React from "react";
import labels from "../../localization/localization";
import { Images } from "../../assets/ImageProperties";
import NavigationService from "../../navigation/NavigationService";


const Auth = () => {


  const navigateToCarrier = () => {
    NavigationService.navigate("CarrierPage")
  }
  return (
    <Box>
      <Box
        w="100%"
        h="100%"
        bg="brand.50"
        justifyContent={"flex-start"}
        flexDirection="column"
      >
        <Box
          px={"30"}
          py={"34"}
          h="84%"
          justifyContent={"space-evenly"}
          flexDirection="column"
        >
          <Image h={100} w={100} source={Images.Logo} resizeMode="contain"/>
          <Box h="60%">
            <Button
              variant={"drivePrimary"}
              onPress={navigateToCarrier}>
              <Text variant={"boldmd500"}>{labels.SIGN}</Text>
            </Button>
            <Button
              mt="4"
              variant={"driveSecondary"}
            >
              <Text variant={"boldmd500"} color={"white"}>
                {labels.CREATE_AN_ACCOUNT}
              </Text>
            </Button>
            <Row alignItems="center" marginY={9}>
              <Divider flex="1" _light={{ bg: "brand.100" }} />
              <Text variant={"boldsm"} color={"text.1200"} px={3}>
                {labels.OR}
              </Text>
              <Divider flex="1" _light={{ bg: "brand.100" }} />
            </Row>
            <Button
              variant={"driveOutline"}
            >
              <Text variant={"boldmd500"}>
                {labels.TRACK_A_LOAD_WITH_MOBILE_NUMBER}
              </Text>
            </Button>
          </Box>
        </Box>
        <Button
          variant={"driveLink"}
          _text={{ fontSize: "md", fontWeight: "400" }}
        >
          {labels.CONTINUE_AS_A_GUEST}
        </Button>
      </Box>
    </Box>
  );
}

export default Auth;