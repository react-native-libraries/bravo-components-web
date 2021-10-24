import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const EvologChecklist = ({ navigation }) => {


    return (
        <WebLayout
            navigation={navigation}
        >
            <View>
                <Text>EvologChecklist</Text>
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

export default EvologChecklist;
