import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const EvologCheckin = ({ navigation }) => {
    const breadcrumbs = {
        navigator: 'Artifacts',
        routes: [
            {
                title: 'Artifacts',
                route: 'Overview'
            },
            {
                title: 'Evolog Checkin',
                route: 'EvologCheckin'
            }
        ]
    };

    return (
        <WebLayout
            title="Evolog Checkin"
            breadcrumbs={breadcrumbs}
            navigation={navigation}
        >
            <View>
                <Text>Evolog Checkin</Text>
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

export default EvologCheckin;
