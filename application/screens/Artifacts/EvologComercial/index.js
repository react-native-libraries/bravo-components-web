import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const EvologComercial = ({ navigation }) => {
    const breadcrumbs = {
        navigator: 'Artifacts',
        routes: [
            {
                title: 'Artifacts',
                route: 'Overview'
            },
            {
                title: 'Evolog Comercial',
                route: 'EvologComercial'
            }
        ]
    };

    return (
        <WebLayout
            title="Evolog Comercial"
            breadcrumbs={breadcrumbs}
            navigation={navigation}
        >
            <View>
                <Text>Evolog Comercial</Text>
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

export default EvologComercial;
