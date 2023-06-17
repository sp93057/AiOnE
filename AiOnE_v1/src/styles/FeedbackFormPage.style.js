import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexDirection: "column",
        padding: 20
    },

    topContainer: {
        flex:1,
        width:'100%',
        // backgroundColor: '#000000',
        padding: 10,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: "hidden"
    },

    bodyContainer: {
        flex:1,
        flexGrow:5,
        marginTop:15,
    },

    bottomContainer: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#000fff'
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
          marginTop: 20,
    },

    headingStyle: {
        marginLeft: 20,
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: '#000000',
        marginRight: 5,
        marginTop:20,
    },

    ProfileContainer: {
        flexDirection: "row",
        width: '100%',
        height: 300,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 40,
        marginBottom:20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    FormContainer: {
        width: '100%',
        height: 250,
        backgroundColor: '#ffffff',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 12,
        padding: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom:20,
    },

    topTileTextContainer: {
        height: 180,
        justifyContent:"center",
        alignItems: "flex-start"
    },

    nameText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#000000',
        marginBottom: 10
    },

    miniHeadingText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#8A8A8A',
    },

    miniValueText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: '#000000',
        marginBottom: 5
    },

    input: {
        height: 50,
        width: 300,
        fontSize: 16,
        backgroundColor: '#f2f2f2',
        borderRadius: 12,
        paddingLeft: 10,
        marginBottom: 20,
        marginTop:20
      },

      button: {
        backgroundColor: '#007bff',
        height: 50,
        width: 120,
        backgroundColor: "#52CB5E",
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      },

      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },

      checkboxContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },

      pickerStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderColor: '#000000',
        borderWidth: 2,
        justifyContent: "center",
        marginBottom: 25,
      },

      pickerText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#ffffff'
      },

      pickerHeadingText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: '#000000',
        margin: 5,
    },

    descriptionBox: {
        width: '100%',
        height: 100,
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderColor: '#000000',
        borderWidth: 2,
        marginBottom: 25,
        overflow: 'hidden',
    },

    feedbackDescStyle: {
        width: '100%',
        height: 100,
    },

    DescriptionContainer: {
        width: '100%',
        height: 200,
        backgroundColor: '#ffffff',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 12,
        padding: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom:20,
    },

    submitButton: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        // backgroundColor: '#000000',
    }
});