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
    },
  
    miniIconStyle: {
      height: 30,
      width: 30,
      marginLeft: 20,
    },
  
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      justifyContent: 'center',
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
      borderRadius: 24,
      height: 50,
      width: 100,
      alignSelf: 'center',
      alignItems: 'center',
      padding: 10,
      marginRight: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
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
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  
    tilesText: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 28,
      color: '#000000',
      marginLeft: 15,
      marginTop: 15,
    },

    spinnerContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // dim out background
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1, 
    },
  });  