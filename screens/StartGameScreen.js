import {TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.numberInput} 
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}><PrimaryButton>Reset</PrimaryButton></View>
            <View style={styles.buttonContainer}><PrimaryButton>Confirm</PrimaryButton></View>
        </View>
    </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#27063c',
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width:0 , height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1,
    }
});
