import React from 'react';

import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#7159c1' />
            <View style={styles.container}>
                <Text style={styles.bigText}>Hello World!</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7159c1',
    },
    bigText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
});