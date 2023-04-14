import { StyleSheet } from "react-native";
export default StyleSheet.create({

  mainContainer: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  topContainer: {
    flex:1,
    width: '100%',
    backgroundColor: '#432344',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    flexDirection: 'row',
    padding: 30,
  },

  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: "space-evenly",
    
  },

  scrollContainer: {
    flex:1,
    flexGrow:5,
    padding: 10,
  },

  bottomContainer: {
    width:'100%',
    height:50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
  },


  sidebarContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems:  "flex-end",
    /*backgroundColor: "#000000" --> flex logic 1+1 = 2, 
    so each flex takes 1/2 i.e half space in a row*/
  },

  iconContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  miniIconStyle: {
    height: 30,
    width: 30,
    marginLeft: 20
  },

  button: {
    borderRadius: 24,
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
  },

  imageStyle: {
    width: 90,
    height: 35,
    alignSelf: 'center',
    padding: 10,
  },

  tiles: {
    margin: 15,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    height: 70,
    width: 340,
    flexDirection: "row",
    justifyContent: "flex-start",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  miniContainer: {
    height: 70,
    width: 70,
    backgroundColor: '#FFC03D',
    borderRadius: 12,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tilesText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 28,
    color: '#000000',
    marginLeft: 15,
    alignSelf: "center"
  },
});  