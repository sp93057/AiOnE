import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      backgroundColor: '#432344',
      height: '100%',
      width: '100%',
      justifyContent: "center",
      alignItems: 'center',
    },
  
    subContainer: {
      width: '100%',
      justifyContent: "center",
      alignItems: 'center',
      // backgroundColor: '#000000'
    },
  
    miniContainer: {
      width: '100%',
      borderRadius: 12,
      overflow: 'hidden',
      flexDirection: "row",
      justifyContent: 'flex-start',
      flex: 1
    },
  
    tiles: {
      marginTop: 10,
      marginLeft: 15,
      backgroundColor: 'transparent',
      borderRadius: 12,
      height: 50,
      width: '100%',
      justifyContent: "center",
      alignItems:"center"
    },
  
    tilesText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 21,
      color: '#ffffff',
      marginLeft: 15,
    },
  
    button: {
      marginTop: 15,
      backgroundColor: '#FFC03D',
      borderRadius: 12,
      height: 50,
      width: 230,
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
  });