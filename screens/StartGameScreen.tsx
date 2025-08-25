import PrimaryButton from '@/components/PrimaryButton';
import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

const StartGameScreen = ({ onPickNumber }) => {

    const [enteredValue, setEnteredValue] = useState('');

    function numberInputHandler(enteredText: string) {
        setEnteredValue(enteredText);
    }


    function resetInputHandler() {
        setEnteredValue('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: () => resetInputHandler }]
            );
            return;
        }
        // Proceed with the valid number
        onPickNumber(chosenNumber);
        setEnteredValue('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                // placeholder='00'
                placeholderTextColor='#ddb52f'
                value={enteredValue}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    input: {
        height: 60,
        width: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        fontSize: 32,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flex: 1
    }
});