import React, { useState, useEffect } from 'react';
import { ImageBackground, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BtnDropdown from '@components/Buttons/BtnDropdown';
import { routes } from '@routes/'
import { images } from '@assets/';
import { Scrollbars } from 'react-custom-scrollbars';

const WebLayout = ({ navigation, children }) => {
    
    console.log(images);

    // const [navigator, setNavigator] = useState("Home");
    // const [route, setRoute] = useState("Home");

    // ==========================================================================
    const navigate = (_navigator, _route) => {
        console.log(`${_navigator} -> ${_route}`);
        // if (_navigator != navigator) {
            //setNavigator(_navigator);
            navigation.navigate(_navigator);
        // }

        if (_route) {
            // if (_route != route) {
                //setRoute(_route);
                navigation.navigate(_route);
            // }
        }
    };

    const renderTop = () => {
        return (
            <>
                <Image source={{uri: images.LOGO_EVOLOG}} style={{width: '80%', height: 62}} />
                <View style={styles.sidebarTopMenu}>
                    <Text style={styles.sidebarTopMenuText}>Convidado</Text>
                    <TouchableOpacity style={styles.sidebarTopMenuAction}>
                        <Image source={{uri: images.ICON_SIGNIN}} style={{width: 20, height: 20}} />
                    </TouchableOpacity>
                </View>
            </>
        );
    };

    const renderMenu = () => {

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

        return routes.map((i) => {
            if (i.multi) {
                return (
                    <BtnDropdown
                        text={i.title}
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
            <ImageBackground source={{uri: images.BG_DARK}} style={styles.sidebar}>
                <View style={styles.sidebarTop}>
                    {renderTop()}
                </View>
                <Scrollbars style={styles.sidebarScrollView}>
                    <View style={styles.sidebarScrollViewChild}>
                        {renderMenu()}
                    </View>
                </Scrollbars>
            </ImageBackground>
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
        height: '30%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    sidebarTopMenu: {
        marginTop: 30,
        width: '75%',
        height: 35,
        borderRadius: '1vw',
        backgroundColor: '#fff',

        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        
        alignItems: 'center',
        gap: '1rem'
    },
    sidebarTopMenuText: {
        flex: 70,
        textAlign: 'center',
        color: '#bbb',
        fontSize: '1.1rem'
    },
    sidebarTopMenuAction: {
        flex: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebarScrollView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebarScrollViewChild: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    sidebarLink: {
        width: '80%',
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
