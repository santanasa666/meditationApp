import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Platform, Alert, TextInput, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from 'react-native-calendars';
import * as Notifications from "expo-notifications";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SIZES } from "../../constants";
import { useTheme } from "../context/ThemeContext";
import VolumetricButton from "../../assets/button";
import ScreenHeaderBtn from '../../components/ScreenHeaderBtn';


const DailyReminders = () => {

    const { colors, theme } = useTheme();

    const themedStyles = styles(colors);


    const [reminders, setReminders] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [manualTime, setManualTime] = useState("");
    const [userDetails, setUserDetails] = useState(null);

    const requestPermissions = async () => {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission not granted', 'Please allow notifications to recieve reminders');
        }
    };

    useEffect(() => {
        requestPermissions();
        loadUserDetails();
        loadReminders();
    }, []);

    const loadUserDetails = async () => {

        const user = await AsyncStorage.getItem("userDetails");
        setUserDetails(user ? JSON.parse(user) : {});
    };

    const loadReminders = async () => {

        const storedReminders = await AsyncStorage.getItem("reminders");
        const allReminders = storedReminders ? JSON.parse(storedReminders) : [];
        const futureReminders = allReminders.filter((reminder) => new Date(reminder.triggerDate) > new Date());
        setReminders(futureReminders);

    };

    const handleAddReminder = async () => {

        if (!selectedDate) {
            alert("Please select date");
            return;
        }

        const [inputHours, inputMinutes] = manualTime.split(":").map((item) => parseInt(item, 10));
        const triggerDate = new Date(selectedDate);

        if (!isNaN(inputHours) && !isNaN(inputMinutes)) {
            triggerDate.setHours(inputHours, inputMinutes, 0, 0);
        } else {
            triggerDate.setHours(selectedTime.getHours(), selectedTime.getMinutes(), 0, 0);
        }
        if (triggerDate <= new Date()) {
            alert("Please select a future time");
            return;
        }

        const newReminder = {
            id: Date.now(),
            date: selectedDate,
            time: manualTime || triggerDate.toLocaleDateString([], { hour: "2-digit", minute: "2-digit" }),
            description: `Reminder: Time for your daily task!`,
            triggerDate: triggerDate.toISOString(),


        }

        try {
            const updateReminders = [...reminders, newReminder];
            await AsyncStorage.setItem("reminders", JSON.stringify(updateReminders));
            setReminders(updateReminders);
            await scheduleNotification(newReminder);
            alert("Reminder added successfully!");
        }
        catch (error) {
            alert("Error adding reminder");
        }
    };

    const scheduleNotification = async (reminder) => {
        const triggerDate = new Date(reminder.triggerDate);

        if (Platform.OS === "web") {
            setTimeout(() => {
                new Notification("Reminder", { body: reminder.description });
            }, triggerDate - new Date());
        } else {
            await Notifications.scheduleNotificationAsync({
                content: { title: "Reminder", body: reminder.description },
                trigger: { date: triggerDate },
            });
        }
    };

    const deleteReminder = async (id) => {
        const updateReminders = reminders.filter((reminder) => reminder.id !== id);
        await AsyncStorage.setItem("reminders", JSON.stringify(updateReminders));
        setReminders(updateReminders);
    };
    const Reminder = ({ item }) => (
        <View style={themedStyles.reminderContainer}>
            <Text style={themedStyles.description}>{item.description}</Text>
            <Text style={themedStyles.date}>{item.date} - {item.time}</Text>
            <TouchableOpacity onPress={() => deleteReminder(item.id)} style={themedStyles.deleteButton}>
                <Text style={themedStyles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.gray3 }}>
            <ScreenHeaderBtn />
            <Stack.Screen options={{ headerTitle: "Daily Reminders" }} />
            <ScrollView contentContainerStyle={{ padding: SIZES.medium }}>
                <Calendar
                    // Specify the current date
                    current={selectedDate || new Date().toISOString().split('T')[0]}
                    // Callback that gets called when a day is pressed
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                    // Mark the selected date
                    markedDates={{
                        [selectedDate]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: colors.text

                        }
                    }}

                    style={{
                        borderRadius: SIZES.xMedium,
                        overflow: 'hidden', // Essential to ensure the background follows the radius
                        elevation: 5,       // Optional: adds shadow on Android
                        borderWidth:2,
                        borderColor:colors.gray1,
                    }}

                    theme={{
                        calendarBackground: colors.backgroundColor,
                        textSectionTitleColor: colors.mainText,
                        selectedDayBackgroundColor: colors.primary,
                        selectedDayTextColor: colors.white,
                        todayTextColor: colors.primary,
                        dayTextColor: colors.darkText,
                        monthTextColor: colors.primary,
                        arrowColor: colors.primary,          
                        textDayFontWeight: '200',            
                        textMonthFontWeight: '300',        
                        textDayHeaderFontWeight: '500',     

                    }}
                />

                {showTimePicker && (
                    <DateTimePicker
                        value={selectedTime}
                        mode="time"
                        onChange={(event, selected) => {
                            setSelectedTime(selected || selectedTime);
                            setShowTimePicker(false);
                        }}
                    />
                )}

                <TextInput
                    placeholder="Enter Time (HH:mm)"
                    value={manualTime}
                    onChangeText={setManualTime}
                    keyboardType="numeric"
                    maxLength={5}
                    style={themedStyles.input}
                />
                <View style={themedStyles.timeInfoContainer}>
                    <View>
                        <Text style={themedStyles.selected}>Date: </Text>
                        <Text style={themedStyles.infoTitle}>{selectedDate || "None"}</Text>
                    </View>
                    <View>
                        <Text style={themedStyles.selected}>Time: </Text>
                        <Text style={themedStyles.infoTitle}>{manualTime || selectedTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Text>
                    </View>
                </View>
                <VolumetricButton title="Add Reminder" onPress={handleAddReminder} />


                <Text style={themedStyles.reminderHeader}>All Reminders:</Text>
                {reminders.length > 0 ? reminders.map((rem) => <Reminder key={rem.id} item={rem} />) : <Text style={themedStyles.remindersInfo}>No reminders yet.</Text>}
            </ScrollView>
        </SafeAreaView>


    );



};
const styles = (themeColors) => StyleSheet.create({
    reminderContainer: {
        backgroundColor: themeColors.primary,
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        marginVertical: SIZES.small
    },
    description: { color: themeColors.lightWhite, fontWeight: "bold" },
    date: {
        color: themeColors.darkText,
        fontSize: SIZES.small
    },
    input: {
        borderColor: themeColors.gray2,
        borderWidth: 2,
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.small,
        marginTop: SIZES.small,
        marginBottom: SIZES.medium,
        borderRadius: SIZES.medium,
        backgroundColor: themeColors.white,
        textAlign: "center"
    },
    selected: {
        fontSize: SIZES.small,
        marginVertical: SIZES.xxxSmall,
        color: themeColors.text,
        textAlign: "center",
    },
    button: {
        backgroundColor: themeColors.primary,
        padding: SIZES.medium,
        borderRadius: SIZES.medium,
        alignItems: "center"
    },
    buttonText: {
        color: themeColors.lightWhite,
        fontWeight: "bold"
    },
    deleteButton: {
        marginTop: SIZES.small,
        alignSelf: "flex-end"
    },
    deleteText: {
        color: "#FE7654",
        fontWeight: "bold"
    },
    reminderHeader: {
        fontSize: SIZES.medium,
        fontWeight: "bold",
        color: themeColors.text,
        marginVertical: SIZES.medium,
        textAlign: "center",
    },

    timeInfoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        textAlign: "center",
        marginBottom: SIZES.medium,
    },
    infoTitle: {
        fontSize: SIZES.large,
        textAlign: "center",
        fontWeight: "600",
    },
    remindersInfo: {
        textAlign: "center",
    },
});


export default DailyReminders;