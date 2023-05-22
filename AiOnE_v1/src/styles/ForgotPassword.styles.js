import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      backgroundColor: '#432344',
      flexGrow:1,
      justifyContent: "center",
      alignItems: 'center',
    },

    textStyle: {
        marginLeft: 20,
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: '#ffffff',
        marginRight: 5,
    },

    headingContainer: {
        marginBottom: 50,
    },

    topContainer: {
        flex:1,
        width: '100%',
        marginTop: 50,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    middleContainer: {
        flex:9,
        backgroundColor: 'transparent',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },

    backButton: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    tiles: {
        width: 320,
        height: 50,
        marginTop: 30,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        alignSelf: 'center',
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
        borderRadius: 15,
        height: 50,
        width: 200,
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
        backgroundColor: '#52CB5E',
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 17,
        color: '#ffffff'
    },

    ButtonContainer: {
        flex: 1,
        width: '100%',
        height: 200,
        backgroundColor: 'transparent',
        justifyContent: "flex-start",
        alignItems: "center"
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