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

    FeedContainer: {
        flex: 5,
        width: '100%',
        height: 100,
        backgroundColor: '#ffffff',
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:10,
        paddingRight: 10,
        flexDirection: "row",
        overflow: "hidden",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    ImageContainer: {
        flex:1,
        height: 70,
        width: 70,
        marginRight:15,
        justifyContent: "center",
        alignItems: "center",
    },

    ImageStyle: {
        height: 70, 
        width: 70, 
        borderRadius: 35 
    },

    TextContainer: {
        flex:3,
        width: '100%',
        height: 80,
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

    titleText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 15,
        color: '#000000'
    },

    descText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: '#8A8A8A'
    },
});