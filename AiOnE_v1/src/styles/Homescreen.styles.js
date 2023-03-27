import { StyleSheet } from "react-native";
export default StyleSheet.create({
    topContainer: {
      height: '20%',
      width: '100%',
      paddingHorizontal: 35,
      paddingTop: 80,
      paddingBottom: 40,
      backgroundColor: '#432344',
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      overflow: 'hidden',
      flexDirection: 'row',
    },
  
    sidebarContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      /*backgroundColor: "#000000" --> flex logic 1+1 = 2, 
      so each flex takes 1/2 i.e half space in a row*/
    },
  
    iconContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      // backgroundColor: "#000000"
    },
  
    miniIconStyle: {
      height: 30,
      width: 30,
      marginLeft: 20,
    },
  
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
    },
  
    bottomContainer: {
      height: '6%',
      overflow: 'hidden',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      justifyContent: 'center',
    },
  
    miniContainer: {
      height: 70,
      width: 70,
      backgroundColor: '#FFC03D',
      borderRadius: 12,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    button: {
      marginTop: 30,
      borderRadius: 24,
      height: 50,
      width: 100,
      alignSelf: 'center',
      alignItems: 'center',
      padding: 10,
      marginRight: 10,
    },
  
    buttonText: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
      color: '#000000',
    },
  
    imageStyle: {
      width: 89,
      height: 34,
      alignSelf: 'center',
      padding: 10,
    },
  
    tiles: {
      margin: 15,
      backgroundColor: '#ffffff',
      borderRadius: 12,
      height: 70,
      width: 340,
      alignSelf: 'center',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
  
    tilesText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 28,
      color: '#000000',
      marginLeft: 15,
      marginTop: 15,
    },
  });  