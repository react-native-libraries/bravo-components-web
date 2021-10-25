import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const EvologMotorista = ({ navigation }) => {
    const breadcrumbs = {
        navigator: 'Artifacts',
        routes: [
            {
                title: 'Artifacts',
                route: 'Overview'
            },
            {
                title: 'Evolog Motorista',
                route: 'EvologMotorista'
            }
        ]
    };

    return (
        <WebLayout
            title="Evolog Motorista"
            breadcrumbs={breadcrumbs}
            navigation={navigation}
        >
            <View>
                <Text>Evolog Motorista</Text>
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

export default EvologMotorista;
