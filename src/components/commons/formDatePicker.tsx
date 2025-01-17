import { Box, Column, FormControl, Text } from "native-base";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

export default function FormDatePicker({value, onChange}: any) {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const handleConfirm = (date: Date) => {
        onChange(date);
        hideDatePicker();
    }
    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    }
    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    }
    return (
        <>
            <DateTimePicker 
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Column>
                <FormControl.Label _text={{ color: "primary.600", fontWeight: "medium" }}>
                    Ngày sinh
                </FormControl.Label>
                <TouchableOpacity onPress={showDatePicker}>
                    <Box bg="coolGray.500" px="3" py="3" shadow="8" rounded="full">
                        <Text color="white" fontWeight="medium">
                            {moment(value).format("DD-MM-YYYY")}
                        </Text>
                    </Box>
                </TouchableOpacity>
            </Column>
        </>
    );
}