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
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E8E8E8'
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
        flex: 3,
        width: '100%',
        height: 200,
        backgroundColor: '#ffffff',
        alignItems: "center",
        borderRadius: 12,
        marginBottom: 20,
        padding: 10,
        flexDirection: "row",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    FormContainer: {
        flex: 3,
        width: '100%',
        height: 250,
        backgroundColor: '#ffffff',
        alignItems: "center",
        borderRadius: 12,
        marginBottom: 20,
        padding: 10,
        flexDirection: "row",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "column",
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
        width: 100,
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
});