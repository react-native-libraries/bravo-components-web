import React from 'react';
import { View, Text } from 'react-native';
import WebLayout from '@layout/WebLayout';

const Dashboard = ({ navigation }) => {
    return (
        <WebLayout
            navigation={navigation}
        >
            <View>
                <Text>Dashboard</Text>
            </View>
        </WebLayout>
    );
};

export default Dashboard;
