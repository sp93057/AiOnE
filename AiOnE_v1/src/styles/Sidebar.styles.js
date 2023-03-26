import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      backgroundColor: '#432344',
      height: '100%',
      padding: 30,
      alignItems: 'center',
    },
  
    subContainer: {
      marginTop: 150,
      alignItems: 'center',
    },
  
    miniContainer: {
      height: 50,
      width: 50,
      backgroundColor: 'transparent',
      borderRadius: 12,
      overflow: 'hidden',
    },
  
    tiles: {
      marginTop: 10,
      backgroundColor: 'transparent',
      borderRadius: 12,
      height: 50,
      width: 340,
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
  
    tilesText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 28,
      color: '#ffffff',
      marginLeft: 10,
    },
  
    button: {
      marginTop: 30,
      backgroundColor: '#FFC03D',
      borderRadius: 12,
      height: 50,
      width: 320,
      alignSelf: 'center',
      alignItems: 'center',
      padding: 10,
    },
  
    buttonText: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      color: '#000000',
    },
  });