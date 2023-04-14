import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
      backgroundColor: '#E8E8E8',
      height: '100%',
      width: '100%',
      alignItems: 'center',
    },

    headerText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: '#000000',
    },

    headingContainer: {
        marginBottom: 50,
    },

    topContainer: {
        width: '100%',
        marginTop: 50,
        marginBottom: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    backButton: {
        height: 50,
        width: 50,
        marginTop: 20,
        marginLeft: 10,
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
        flex: 4,
        width: '100%',
        height: 200,
        backgroundColor: 'transparent',
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 12,
        alignItems: "center"
    },

  });