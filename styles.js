import { StyleSheet, Platform, PlatformColor } from "react-native";

export const styles = StyleSheet.create({
  home: {
    display: "flex",
    // flex: 1,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },

  nav: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#345",
    height: 40,
    marginTop: 20,
    marginBottom: 20,
  },

  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    // backgroundColor: '#fff',
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: 80,
    marginBottom: 20,
  },
  subContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  topView: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    // backgroundColor: 'blue',
  },

  image: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },

  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "darkcyan",
    borderRadius: 30,
    marginBottom: 20,
  },

  disable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    backgroundColor: "lightgray",
    borderRadius: 30,
  },

  btnText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
    textTransform: "capitalize",
  },

  name: {
    marginTop: 10,
    marginBottom: 5,
    color: "#333",
    backgroundColor: "#ddd",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    borderRadius: 30,
  },

  bio: {
    fontFamily: "monospace",
    fontSize: 16,
    marginBottom: 10,
  },

  addDetails: {
    width: "100%",
    padding: 20,
    height: 200,
    // backgroundColor: 'yellow',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },

  add: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  emailLabel: {
    backgroundColor: "#333",
    margin: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
    color: "#fff",
  },

  mobileLabel: {
    backgroundColor: "#902",
    margin: 5,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 10,
    color: "#fff",
  },

  fruitContainer: {
    display: "flex",
    width: "100%",
    backgroundColor: "#00efdd",
    height: 60,
    marginTop: 20,
    justifyContent: "center",
  },

  fruit: {
    fontSize: 20,
    color: "#fff",
  },

  dice: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },

  img: {
    margin: 10,
    width: "40%",
    height: 140,
  },

  dismissView: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  customBtn: {
    padding: 10,
    backgroundColor: "#000",
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    width: 150,
  },

  number: {
    fontSize: 40,
    color: "#333",
  },

  btnView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 20,
  },

  flexView: {
    flex: 1,
  },

  inner_up: {
    flex: 1,
    backgroundColor: "blue",
  },

  inner_middle: {
    flex: 1,
    backgroundColor: "yellow",
  },

  inner_bottom: {
    flex: 1,
    backgroundColor: "green",
  },

  textView: {
    fontFamily: "monospace",
    width: "86%",
    fontSize: 30,
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    padding: 30,
  },

  regularText: {
    fontFamily: "monospace",
    fontSize: 20,
    textTransform: "capitalize",
    color: "#333",
    textDecorationLine: "underline",
    letterSpacing: 1,
    textDecorationColor: "blue",
    textTransform: "lowercase",
  },

  modal: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },

  wave: {
    width: 60,
    height: 60,
    borderRadius: "50%",
  },

  section: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#fff",
  },

  item: {
    backgroundColor: "#eee",
    padding: 15,
    marginVertical: 10,
  },
  header: {
    fontSize: 25,
  },
  title: {
    fontSize: 20,
  },
  touchable: {
    flex: 0.5,
    borderColor: "black",
    borderWidth: 1,
  },
  container2: {
    display: "flex",
    width: "100%",
    height: "100%",
    // backgroundColor: "blue",
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 2,
    marginVertical: 5,
  },
  value: {
    fontWeight: "bold",
    padding: 5,
    marginBottom: 10,
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "azure",
  },
  fadingText: {
    fontSize: 30,
  },
  buttonRow: {
    justifyContent: "center",
    marginVertical: 15,
  },
  label: {
    padding: 20,
    ...Platform.select({
      ios: {
        color: PlatformColor("label"),
        backgroundColor: PlatformColor("systemTealColor"),
      },
      android: {
        color: PlatformColor("?android:attr/textColor"),
        backgroundColor: PlatformColor("@android:color/holo_blue_bright"),
      },
      default: {
        color: "black",
      },
    }),
  },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  navigationContainer: {
    backgroundColor: "white",
  },
  paragraph: {
    padding: 15,
    fontSize: 15,
    textAlign: "center",
  },
  scrollContentContainer: {
    // alignItems: "center",
    paddingBottom: 60,
  },
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    alignItems: "center",
    backgroundColor: "yellow",
    justifyContent: "center",
  },
  textView2: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  btn2: {
   marginBottom:10,
   backgroundColor:"blue",
   padding:20,
   width:"40%"
  },
});
