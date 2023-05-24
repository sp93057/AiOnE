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
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        padding: 10

    },

    headingTextStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        color: '#000000',
    },

    authorTextStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
    },

    parkingTileContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        flex:1,
        width: '100%',
        height: 74,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
        padding: 10
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
});