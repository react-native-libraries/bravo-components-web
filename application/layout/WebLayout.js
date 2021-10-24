import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BtnDropdown from '@components/Buttons/BtnDropdown';


const WebLayout = ({ navigation, children }) => {

    const [navigator, setNavigator] = useState("Home");
    const [route, setRoute] = useState("Home");

    // ==========================================================================
    const navigate = (_navigator, _route) => {
        console.log(`${_navigator} -> ${_route}`);
        if (_navigator != navigator) {
            console.log(`NAV: INDO DE ${navigator} PARA ${_navigator}`);
            setNavigator(_navigator);
            navigation.navigate(_navigator);
        }

        if (_route) {
            if (_route != route) {
                console.log(`ROUTE: INDO DE ${route} PARA ${_route}`);
                setRoute(_route);
                navigation.navigate(_route);
            }
        }
    };

    const renderTop = () => {
        return (
            <View
                style={styles.sidebarTop}
            >

            </View>
        );
    };

    const renderMenu = () => {
        const items = [
            {
                title: 'Home',
                route: 'Home'
            },
            {
                title: 'Dashboard',
                route: 'Dashboard'
            },
            {
                title: 'Artefatos',
                multi: true,
                navigator: 'Artifacts',
                routes: [
                    {
                        title: 'Overview',
                        route: 'Overview'
                    },
                    {
                        title: 'Evolog Motorista',
                        route: 'EvologMotorista'
                    },
                    {
                        title: 'Evolog Checklist',
                        route: 'EvologChecklist'
                    },
                    {
                        title: 'Evolog Comercial',
                        route: 'EvologComercial'
                    },
                    {
                        title: 'Evolog Checkin',
                        route: 'EvologCheckin'
                    }
                ]
            }
        ];

        const prepareRoutes = (_items, _nav) => {
            return _items.map((i) => {
                return (
                    <TouchableOpacity
                        style={styles.sidebarDropdownLink}
                        onPress={() => { navigate(_nav, i.route) }}
                    >
                        <Text style={styles.sidebarDropdownLinkText} >{i.title}</Text>
                    </TouchableOpacity>
                );
            });
        };

        return items.map((i) => {
            if (i.multi) {
                return (
                    <BtnDropdown
                        text="Artefatos"
                        textStyle={styles.sidebarLinkText}
                        buttonStyle={styles.sidebarLink}
                        containerStyle={styles.sidebarLinkContainer}
                    >
                        {prepareRoutes(i.routes, i.navigator)}
                    </BtnDropdown>
                );
            } else {
                return (
                    <TouchableOpacity
                        style={styles.sidebarLink}
                        onPress={() => { navigate(i.route, i.route) }}
                    >
                        <Text style={styles.sidebarLinkText} >{i.title}</Text>
                    </TouchableOpacity>
                );
            }
        });

    };

    return (
        <View style={styles.body}>
            <View style={styles.sidebar}>
                <View style={styles.sidebarTop}>
                    {renderTop()}
                </View>
                <ScrollView style={styles.sidebarScrollView}>
                    {renderMenu()}
                </ScrollView>
            </View>
            <ScrollView style={styles.contentView}>
                <View style={styles.contentWrapper}>
                    {children}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        minWidth: '100vw',
        backgroundColor: '#eee'
    },
    sidebar: {
        position: 'fixed',
        top: 0,
        left: 25,
        width: 250,
        height: '100%',
        backgroundColor: '#fff',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
        zIndex: 10
    },
    sidebarTop: {

    },
    sidebarScrollView: {
        flexDirection: 'column',
        padding: '1rem',
        backgroundColor: '#eee'
    },
    sidebarLink: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: '1vw',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    sidebarLinkText: {
        color: '#777',
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    sidebarLinkContainer: {
        marginHorizontal: 'auto',
        width: '90%',
        height: 'wrap-content',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderColor: '#ccc',
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    sidebarDropdownLink: {
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderBottomWidth: 1
    },
    sidebarDropdownLinkText: {
        color: '#777',
        fontWeight: 'normal',
        fontSize: '0.8rem'
    },  
    contentView: {
        position: 'fixed',
        top: 0,
        height: '100%',
        left: 275,
        width: 'calc(100% - 275px)',
        backgroundColor: '#ddd'
    },
    contentWrapper: {
        margin: '1rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '1vw',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
});

export default WebLayout;
