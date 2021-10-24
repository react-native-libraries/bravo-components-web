import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const Buttons = ({ navigation }) => {

    return (
        <WebLayout
            navigation={navigation}
        >
            <View>
                <Text>Components Buttons</Text>
            </View>
        </WebLayout>
    );
};

const styles = StyleSheet.create({
    'text': {
        color: '#fff',
        fontSize: 50
    }
});

export default Buttons;
