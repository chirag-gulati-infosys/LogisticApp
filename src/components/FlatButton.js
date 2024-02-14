import React, { memo } from "react";
import { Box, Pressable, Text, Row } from "native-base";
import { testIDperPlatform } from "@utils/utils";

const FlatButton = memo(
  ({
    children,
    label,
    leftIcon,
    rightComponent,
    onPress,
    textColor = "text_theme.700",
    textSize = "md",
    labelTime,
    textLeftMargin = 3.5,
    disable,

    ...rest
  }) => {
    return (
      <Pressable
        h="32px"
        mt="2"
        px="4"
        variant={"driveWhite"}
        disabled={disable}
        onPress={onPress}
        {...rest}
      >
        <Row h="100%">
          <Row
            w={rightComponent ? "80%" : "100%"}
          >
            {leftIcon}
            {label && (
              <Text
                alignSelf={labelTime ? "flex-start" : "center"}
                ml={textLeftMargin}
                color={label == "Start date" ? "text.1300" : textColor}
                numberOfLines={1}
                fontSize={textSize}
              >
                {label}
              </Text>
            )}
            {children}
          </Row>
          {rightComponent && (
            <Box
              w="20%"
              flexDirection={"row"}
              justifyContent={"flex-end"}
            >
              {rightComponent}
            </Box>
          )}
        </Row>
      </Pressable>
    );
  }
);

export default FlatButton;
