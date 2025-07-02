import { View, Text, Platform, Button, BackHandler, StyleSheet } from 'react-native';
import React from 'react';

export default function ErrorScreen() {
    const arrayOfPoints = [
        '• Try again in a moment.',
        '• Check your internet connection.',
        '• If the problem persists, contact support.',
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.errorTitleText}>Uh-oh! An error has occurred.</Text>
            <Text style={styles.errorSubTitleText}>
                This might be due to a temporary issue or a bug.
            </Text>
            <View style={styles.bulletPointsWrapper}>
                {arrayOfPoints.map((point, index) => (
                    <Text style={styles.bulletPointsText} key={index}>
                        {point}
                    </Text>
                ))}
            </View>
            {Platform.OS === 'android' ? (
                <Button title="Close App" onPress={BackHandler.exitApp} />
            ) : null}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
    },
    errorTitleText: {
        color: 'red',
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '600',
        letterSpacing: 2,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
    errorSubTitleText: {
        color: 'black',
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        textAlign: 'center',
    },
    bulletPointsWrapper: {
        gap: 12,
        marginBottom: 20,
    },
    bulletPointsText: {
        color: 'black',
        fontSize: 14,
        lineHeight: 14,
    },
})
