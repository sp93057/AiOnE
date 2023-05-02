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

    ProfileContainer: {
        flex: 5,
        width: '100%',
        alignSelf: "flex-start",
        backgroundColor: '#ffffff',
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
    },

    ImageContainer: {
        height:'100%',
        width: 120,
        borderRadius: 12,
        marginRight: 15
    },

    topTileTextContainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "flex-start",
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

    AddressContainer: {
        flex: 4,
        width: '100%',
        alignSelf: "flex-start",
        backgroundColor: '#ffffff',
        justifyContent: "center",
        marginBottom: 30,
        borderRadius: 12,
        padding: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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

    nameText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#000000',
        marginBottom: 10,
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

    button: {
        borderRadius: 24,
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

    logoutButton: {
        borderRadius: 24,
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
        backgroundColor: '#CB5952',
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    
    buttonText: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 17,
        color: '#ffffff'
    },
});