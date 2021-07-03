import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0072b1",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 35,
  },
  img: {
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  imgShare: {
    height: 125,
    width: 125,
    backgroundColor: "#ffffff",
  },
  btnLogin: {
    backgroundColor: "#009821",
    marginTop: 10,
    paddingVertical: 5,
    width: 280,
    marginBottom: 20,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 25,
    textAlign: "center",
  },
  searchSection: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#cacaca",
    marginBottom: 20,
    width: 280,
  },
  searchIcon: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    paddingRight: 70,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});

const RegistrosStyles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
    paddingTop: 40,
  },
  containerHeader2: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 25,
  },
  titleReport: {
    fontSize: 35,
    color: "#0072b1",
    fontWeight: "bold",
  },
  titleCalculator: {
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  btnCalculator: {
    backgroundColor: "#0072b1",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  img: {
    height: 100,
    width: 150,
    resizeMode: "contain",
  },
});

const ReportListStyles = StyleSheet.create({
  containerId: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#009821",
    padding: 10,
  },
  containerBody: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cacaca",
    marginBottom: 20,
  },
  textIndex: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  textOp: {
    fontSize: 20,
    color: "#cacaca",
    fontWeight: "bold",
    marginLeft: 20,
  },
});

const CalculatorStyles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    // padding: 20,
    // paddingTop: 40,
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 115,
    borderBottomRightRadius: 115,
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#009821",
    fontWeight: "bold",
    fontSize: 20,
  },
  img: {
    height: 100,
    width: 150,
    resizeMode: "contain",
  },
  container: {
    flex: 2,
    // color: "#a7a7a7",
    backgroundColor: "#0072b1",
  },
  resultContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#0072b1",
    paddingTop: 30,
    paddingBottom: 20,
  },
  inputContainer: {
    flex: 9,
    backgroundColor: "#f4f4f4",
    // color: "#a7a7a7",
  },
  resultText: {
    color: "#ffffff",
    fontSize: 70,
    textAlign: "center",
  },
  inputRow: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    // color: "#009821",
  },
});

export { LoginStyles, RegistrosStyles, ReportListStyles, CalculatorStyles };
