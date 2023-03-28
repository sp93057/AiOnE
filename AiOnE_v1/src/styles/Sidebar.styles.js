import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      backgroundColor: '#432344',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },
  
    subContainer: {
      width: '100%',
      marginTop: 50,
      marginBottom: 20,
      marginLeft: 20,
      alignItems: 'center',
      // backgroundColor: '#000000'
    },

    topCrossContainer: {
      width:'100%',
      // backgroundColor: '#000000',
      marginTop: 50,
      padding: 30,
      flexDirection: "row",
      justifyContent: "flex-start"
    },
  
    miniContainer: {
      height: 50,
      width: 50,
      borderRadius: 12,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 5,
      flex: 1,
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
      flex: 9,
    },
  
    button: {
      marginTop: 15,
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