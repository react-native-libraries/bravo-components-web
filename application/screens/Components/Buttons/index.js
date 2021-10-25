import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const Buttons = ({ navigation }) => {
    const breadcrumbs = {
        navigator: 'Components',
        routes: [
            {
                title: 'Components',
                route: 'Overview'
            },
            {
                title: 'Botões',
                route: 'Buttons'
            }
        ]
    };

    return (
        <WebLayout
            title="Botões"
            breadcrumbs={breadcrumbs}
            navigation={navigation}
        >
            <View>
                <Text>Buttons</Text>
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
