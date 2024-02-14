import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Button, Modal, Flex, Center } from "native-base";
import CalendarPicker from "react-native-calendar-picker";;
import moment, { isMoment } from "moment";
import FlatButton from "../FlatButton";
import { isEmpty } from "../../utils/utils";
import colors from "../../styleConstants/colors";
import labels from "../../localization/localization";
import * as images from "../../assets/ImageProperties";

const fontStyle = {
  fontFamily: "Poppins-SemiBold",
  fontWeight: "semibold",
};

const DateRangePicker = (
  {
    onChange,
    selectedStartDate = null,
    selectedEndDate = null,
    leftIcon = null,
    placeholder = labels.PLACEHOLDER,
    allowRangeSelection = true,
    onPress = () => {},
    showRedBorder,
    maxDate,
    fromPage = "",
    margintop = 0,
    editable = true,
    setMinDate = null,
    width = null,
    textLeftMargin = 3.5,
    rightComponent = null,
    title = labels.HEADER,
  },
  ref
) => {
  if (!isEmpty(selectedStartDate)) {
    if (isMoment(selectedStartDate)) {
      selectedStartDate = selectedStartDate.isValid()
        ? selectedStartDate
        : null;
    } else {
      selectedStartDate = moment(selectedStartDate);
    }
  } else {
    selectedStartDate = null;
  }

  if (!isEmpty(selectedEndDate)) {
    if (isMoment(selectedEndDate)) {
      selectedEndDate = selectedEndDate.isValid() ? selectedEndDate : null;
    } else {
      selectedEndDate = moment(selectedEndDate);
    }
  } else {
    selectedEndDate = null;
  }
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(selectedStartDate);
  const [endDate, setEndDate] = useState(selectedEndDate);
  const [placeholderText, setPlaceholderText] = useState(placeholder);
  const minDate = setMinDate ? setMinDate : new Date();

  const [displayText, setDisplayText] = useState("");
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    updateDisplayText();
  }, []);

  useEffect(() => {
    if (isChange) {
      updateDisplayText();
      setIsChange(false);
    }
  }, [isChange]);

  useEffect(() => {
    //Reset date only on clear event trigger.
    if (!showModal && !startDate && selectedStartDate) {
      setStartDate(selectedStartDate);
    }
  }, [selectedStartDate]);

  useEffect(() => {
    //Reset date only on clear event trigger.
    if (!showModal && !endDate && selectedEndDate) {
      setEndDate(selectedEndDate);
    }
  }, [selectedEndDate]);

  useEffect(() => {
    if (!showModal) {
      updateDisplayText();
    }
  }, [startDate, endDate]);

  const onDateChange = (date, type) => {
    if (type === labels.END_DATE) {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const onDone = () => {
    onChange({ startDate, endDate });
    updateDisplayText();
    setShowModal(false);
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      setPlaceholderText(placeholder);
      setStartDate(null);
      setEndDate(null);
      setIsChange(true);
    },
    /**
     * To set the a custom date.
     * @param {*} date
     */
    initWithStartDate: (date) => {
      setStartDate(date);
      setEndDate(null);
    },
  }));

  const NextComponent = () => {
    return (
      <images.Images.Icon_Right_Chevron_Gray
        height={"14px"}
        width={"14px"}
      ></images.Images.Icon_Right_Chevron_Gray>
    );
  };

  const PreviousComponent = () => {
    return (
      <images.Images.Icon_Left_Chevron_Gray
        height={"14px"}
        width={"14px"}
      ></images.Images.Icon_Left_Chevron_Gray>
    );
  };

  const updateDisplayText = () => {
    if (!startDate) {
      setDisplayText(placeholderText);
    } else if (startDate && !endDate && !allowRangeSelection) {
      setDisplayText(startDate.format("MM/DD/YY"));
    } else if (startDate && !endDate && allowRangeSelection) {
      if (fromPage == "PostTruck" || fromPage == "SearchCriteria") {
        setDisplayText(startDate.format("ll"));
      } else {
        setDisplayText(startDate.format("LL"));
      }
    } else if (startDate && endDate && allowRangeSelection) {
      if (fromPage == "PostTruck" || fromPage == "SearchCriteria") {
        setDisplayText(startDate.format("ll") + " - " + endDate.format("ll"));
      } else {
        setDisplayText(startDate.format("LL") + " - " + endDate.format("LL"));
      }
    }
  };

  return (
    <>
      {fromPage == "PostTruck" ? (
        <FlatButton
          borderColor={
            showRedBorder ? colors.txt_Error : colors.default_view_background
          }
          borderWidth={1}
          label={displayText}
          leftIcon={leftIcon && <>{leftIcon}</>}
          onPress={() => {
            setShowModal(true);
            //To reset the date to the selected date.
            setStartDate(selectedStartDate);
            setEndDate(selectedEndDate);
            onPress();
          }}
          h={"40px"}
          mt={"15px"}
        />
      ) : (
        <FlatButton
          borderColor={colors.txt_Error}
          h={10}
          w={width}
          mt={margintop}
          borderWidth={showRedBorder ? 1 : 0}
          label={displayText}
          textLeftMargin={textLeftMargin}
          leftIcon={leftIcon && <>{leftIcon}</>}
          rightComponent={rightComponent}
          onPress={() => {
            if (editable) {
              setShowModal(true);
              //To reset the date to the selected date.
              setStartDate(selectedStartDate);
              setEndDate(selectedEndDate);
              onPress();
            }
          }}
        />
      )}
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          alignSelf={"center"}
          width={"94%"}
        >
          <Modal.CloseButton
            _light={{ _icon: { color: "white" } }}
            position={"relative"}
            alignSelf={"flex-end"}
            pb={"6"}
            _icon={{ size: "6" }}
          />
          <Modal.Content >
            <Modal.Header style={{ borderBottomWidth: 0 }}>
              <Center
                height="8"
                _text={{
                  ...fontStyle,
                  fontSize: "xl",
                }}
              >
                {title}
              </Center>
            </Modal.Header>
            <Modal.Body>
              {showModal && (
                <CalendarPicker
                  selectedRangeStyle={{
                    backgroundColor: colors.primary_green,
                  }}
                  onDateChange={onDateChange}
                  allowRangeSelection={allowRangeSelection}
                  selectedStartDate={startDate}
                  selectedEndDate={endDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  nextComponent={<NextComponent />}
                  previousComponent={<PreviousComponent />}
                  restrictMonthNavigation
                  textStyle={{ fontFamily: "Poppins-Regular" }}
                />
              )}
            </Modal.Body>
            <Modal.Footer style={{ borderTopWidth: 0 }}>
              <Flex
                direction="row"
                mb="2.5"
                mt="1.5"
              >
                <Button
                  variant={"driveOutline"}
                  colorScheme={"black"}
                  _text={{
                    ...fontStyle,
                    fontSize: "sm",
                  }}
                  width="50%"
                  mr="1"
                  onPress={() => {
                    setStartDate(null);
                    setEndDate(null);
                  }}
                >
                  {labels.CLEAR}
                </Button>
                <Button
                  variant={"driveBlue"}
                  _text={{
                    ...fontStyle,
                    fontSize: "sm",
                  }}
                  width="50%"
                  ml="1"
                  onPress={onDone}
                >
                  {labels.DONE}
                </Button>
              </Flex>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
};

export default forwardRef(DateRangePicker);
