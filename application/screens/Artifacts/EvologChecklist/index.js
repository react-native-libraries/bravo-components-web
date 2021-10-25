import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const EvologChecklist = ({ navigation }) => {
    const breadcrumbs = {
        navigator: 'Artifacts',
        routes: [
            {
                title: 'Artifacts',
                route: 'Overview'
            },
            {
                title: 'Evolog Checklist',
                route: 'EvologChecklist'
            }
        ]
    };

    return (
        <WebLayout
            title="Evolog Checklist"
            breadcrumbs={breadcrumbs}
            navigation={navigation}
        >
            <View>
                <Text>Evolog Checklist</Text>
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
