import {View, Text, Pressable} from 'react-native'

function PrimaryButton({children}){
    function pressHandler(){
        console.log('Pressed!');
    }

    return( 
        <View style={styles.buttonOuterContainer}>
          <Pressable 
            style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            onPress={pressHandler} 
            android_ripple={{color: '#640233'}}>
            <Text style={styles.buttonText}>{children}</Text>
          </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2,
    },
    buttonText:{
        color: 'white',
        textAlign: 'center'
    },
    pressed:{
        opacity: 0.75
    }
})
