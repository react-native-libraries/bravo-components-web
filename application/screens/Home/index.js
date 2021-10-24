import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WebLayout from '@layout/WebLayout';

const Home = ({ navigation }) => {


    return (
        <WebLayout
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
