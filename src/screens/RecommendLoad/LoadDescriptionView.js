import React from "react";
import { Box, Text, View } from "native-base";
import { Grey_Oval, Expand_Right } from "@config/ImageProperties";
import { Images } from "../../assets/ImageProperties";
import labels from "../../localization/localization";


const BulletPoint = ({ ...rest }) => {
  return (
    <View
      width={"2"}
      height={"2"}
      borderRadius={"15"}
      mr="2"
      {...rest}
    />
  );
};

const LoadDescriptionView = ({
  loadDescription,
  isDropAndHook,
  showExpandIcon = true,
  isSold = false
}) => {
  return (
    <Box
      flexDirection={"row"}
      px={"18px"}
      py={"10px"}
      justifyContent={"space-between"}
      opacity={isSold ? 0.5 : 1}
    >
      <Box width="90%">
        {loadDescription.map((bulletPoint, index) => (
          <Box
            alignItems={"center"}
            flexDirection={"row"}
            key={`${bulletPoint}_${index}`}
          >
            <BulletPoint backgroundColor={"brand.500"} />
            {isDropAndHook && index === 1 ? (
              <Box width={'94%'}
                flexDirection={"row"}
              >
                <Text
                  _light={{ color: "text_theme.600" }}
                  variant={"boldsm"}
                  lineHeight={"20px"}
                  px={"6px"}
                  py={"2px"}
                >
                  {bulletPoint.split("•")[0]}
                </Text>
                <Text
                  variant={"regularsm"}
                  py={"2px"}
                  ml={-2}
                  _light={{ color: "view_theme.300" }}
                >
                  {labels.dot_unicode}
                </Text>
                <Text variant={"regularsm"} py={"2px"} style={{flex: 1, flexWrap: 'wrap'}} numberOfLines={1}>
                  {bulletPoint.split("•")[1]}
                </Text>
              </Box>
            ) : (
              <Box
                flexDirection={"row"}
                px={"6px"}
                py={"2px"}
                alignItems={"center"}
              >
                    <Text
                      lineHeight={"20px"}
                      noOfLines={index == 2 ? 2 : 1}
                      variant={index == 1 ? "boldsm" : "regularsm"}
                      
                    >
                      {bulletPoint.split("•")[0]}
                    </Text>
                    <Text
                      lineHeight={"20px"}
                      
                      variant={"regularsm"}
                    >
                      {labels.dot_unicode}

                      {bulletPoint.split("•")[1].length > 28
                        ? bulletPoint.split("•")[1].substring(0, 28) + "..."
                        : bulletPoint.split("•")[1]}
                    </Text>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      {showExpandIcon && (
        <Images.Expand_Right
          alignSelf="center"
          mb={5}
        />
      )}
    </Box>
  );
};

export default LoadDescriptionView;
