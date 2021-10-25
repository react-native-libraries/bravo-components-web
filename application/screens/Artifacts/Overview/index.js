import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const Overview = ({ navigation }) => {
    const breadcrumbs = {
        navigator: 'Artifacts',
        routes: [
            {
                title: 'Artifacts',
                route: 'Overview'
            },
            {
                title: 'Overview',
                route: 'Overview'
            }
        ]
    };

    return (
        <WebLayout
            title="Artefatos"
            breadcrumbs={breadcrumbs}
            navigation={navigation}
        >
            <View>
                <Text>Overview</Text>
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

export default Overview;
