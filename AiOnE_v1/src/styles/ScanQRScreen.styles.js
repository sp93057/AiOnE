import { StyleSheet } from "react-native";
export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#E8E8E8',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    topContainer: {
        flex:1,
        width:'100%',
        padding: 30,
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position:"absolute",
        zIndex: 1,
        backgroundColor: '#E8E8E8'
    },

    middleContainer: {
        flex:1
    },

    bottomContainer: {
        height: 150,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },

    bottomBarTextStyle: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 22,
        color: '#000000',
    },

    bottomScrollSection: {
        margin: 20
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