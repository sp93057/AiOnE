import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      height: '100%',
      paddingHorizontal: 30,
      paddingTop: 80,
      paddingBottom: 40,
      backgroundColor: '#432344',
    },
  
    mainHeader: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 32,
      color: '#ffffff',
      paddingTop: 40,
      paddingBottom: 20,
      alignSelf: 'center',
    },
  
    inputContainer: {
      alignItems: 'center',
      marginTop: 30,
    },
  
    miniContainer: {
      height: 50,
      width: 50,
      backgroundColor: '#FFC03D',
      borderRadius: 12,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  
    inputStyle: {
      borderWidth: 1,
      borderColor: '#ffffff',
      backgroundColor: '#ffffff',
      fontFamily: 'Poppins-Medium',
      paddingVertical: 7,
      borderRadius: 12,
      width: 270,
      height: 50,
    },
  
    button: {
      marginTop: 30,
      backgroundColor: '#FFC03D',
      borderRadius: 12,
      height: 50,
      width: 320,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      flexDirection: 'row',
    },
  
    buttonText: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      color: '#000000',
      marginRight: 5,
    },
  
    icons: {
      height: 40,
      width: 40,
    },
  
    imageStyle: {
      width: 263,
      height: 141,
      alignSelf: 'center',
    },
  
    forgotPassText: {
      fontFamily: 'Poppins-Medium',
      textDecorationLine: 'underline',
      fontSize: 16,
      color: '#ffffff',
    },
  
    tiles: {
      width: 320,
      height: 50,
      marginTop: 30,
      backgroundColor: '#ffffff',
      borderRadius: 12,
      alignSelf: 'center',
      flexDirection: 'row',
    },
  });