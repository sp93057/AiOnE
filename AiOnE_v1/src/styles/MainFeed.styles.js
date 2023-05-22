import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      width:'100%',
      backgroundColor: '#e8e8e8',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
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
      overflow: "hidden"
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

    miniTextView: {
      padding: 10,
      overflow: "hidden"
    },

    miniTextHeading: {
      fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#000000'
    },
    
    miniTextBody: {
      fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#8A8A8A'
    }
  });
    