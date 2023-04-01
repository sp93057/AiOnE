import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      height: '100%',
      backgroundColor: '#e8e8e8',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 15,
    },
  
    innerContainer: {
      height: 300,
      width: 330,
      backgroundColor: '#ffffff',
      margin: 20,
      borderRadius: 15,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  
    miniHeader: {
      flex: 1,
      backgroundColor: '#FFC03D',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
  
    headerText: {
      flex: 1,
      fontFamily: 'Poppins-SemiBold',
      fontSize: 24,
      color: '#000000',
      marginLeft: 10,
    },
  
    contentContainer: {
      flex: 4
    },
  
    imageStyle: {
      width: 263,
      height: 141,
      alignSelf: 'center',
    },
  });
    