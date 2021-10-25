import React from "react";

const StackBuilder = (_options) => {
    let stack = _options.stack;
    let screenOptions = _options.screenOptions;
    let screens = _options.screens;
    return ( 
        <stack.Navigator>
            { screens.map((i) => (<stack.Screen name={i.name} component={i.component} options={screenOptions} />)) }
        </stack.Navigator>
    );
}

export const tools = {
    StackBuilder,
};