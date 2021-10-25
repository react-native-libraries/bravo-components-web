import React from 'react';
import { View, Text } from 'react-native';
import WebLayout from '@layout/WebLayout';

const Dashboard = ({ navigation }) => {
    const breadcrumbs = {
        navigator: 'Dashboard',
        routes: [
            {
                title: 'Dashboard',
                route: 'Dashboard'
            },
            {
                title: 'Dashboard',
                route: 'Dashboard'
            }
        ]
    };

    return (
            <WebLayout
                title="Dashboard"
                breadcrumbs={breadcrumbs}
                navigation={navigation}
            >
                <View>
                    <Text>Dashboard</Text>
                </View>
            </WebLayout>
    );
};

export default Dashboard;
