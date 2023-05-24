import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        flexDirection: 'column',
        padding: 20
    },

    topContainer: {
        width: '100%',
        marginTop: 50,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    ScrollContainer: {
        //to be filled if other styling is necessary
    },

    headingContainer: {
        // backgroundColor: '#fff000',
        flex:1,
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15

    },

    headingTextStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: '#000000',
    },

    parkingTileContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        flex:1,
        width: '100%',
        height: 74,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15
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

    textStyle: {
        marginLeft: 20,
        fontFamily: 'Poppins-Bold',
        fontSize: 28,
        color: '#000000',
        marginRight: 5,
    },


    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
        paddingHorizontal: 8,
      },

      button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
      },

      quantityText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      },

      submitbutton: {
        backgroundColor: '#007bff',
        height: 50,
        width: 120,
        backgroundColor: "#52CB5E",
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
      },

      submitbuttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },

      submitButtonView: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",

        // backgroundColor: '#000000',

    },

    totalAmountText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: '#000000',
    }
});