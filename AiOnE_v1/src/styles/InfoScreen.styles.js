import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#432344',
        justifyContent: 'center',
        alignItems: 'center',
    },

    topContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: '100%',
        flexDirection: "row",

    },

    midContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomContainer: {
        flex: 1,
        width: '100%',
        justifyContent: "flex-start",
        alignItems: "center"
    },

    imageStyle: {
        resizeMode:'center',
        width: 200,
        height: 200
    },

    backButton: {
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
    },

    versionText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20,
        color: '#ffffff',
    }
});