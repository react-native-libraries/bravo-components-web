import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const Home = ({ navigation }) => {

    const breadcrumbs = {
        navigator: 'Home',
        routes: [
            {
                title: 'Home',
                route: 'Home'
            },
            {
                title: 'Home',
                route: 'Home'
            }
        ]
    };

    return (
        <WebLayout
            title="Home"
            breadcrumbs={breadcrumbs}
            navigation={navigation}
        >
            <View>
                <Text>Home</Text>
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

export default Home;
