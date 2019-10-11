import React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import ButtonConfCode from "../../../components/ButtonConfCode";
import ButtonConfNotSend from "../../../components/ButtonConfNotSend";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native';


ConfCode = ({ navigation }) => (
        <SafeAreaView style={styles.container} behavior="position" enabled>
          <Image
            source={require("../../../assets/images/savi.png")}
            resizeMode="contain"
            style={styles.LogoSavi}
          />
          <TextInput placeholder="Insira o Código" style={styles.CodeInput} />
          <ButtonConfCode style={styles.continueButton} onPress={() => navigation.navigate('ConfirmationMap')}/>
          <ButtonConfNotSend style={styles.confNotSendButton} onPress={() => navigation.navigate('ConfirmationNumber')}/>
        </SafeAreaView>
    );

export default ConfCode;

ConfCode.navigationOptions = {
    title: 'ConfirmationCode',
  }

const styles = StyleSheet.create({
  plus: {
    color: "#121212",
    fontSize: 20, 
    textAlignVertical: "center"
  },
  container: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  LogoSavi: {
    width: wp("80%"),
    height: hp("30%"),
    alignSelf: "center",
    justifyContent: "flex-start",
    marginTop: hp("10%")
  },
  DescSavi: {
    color: "#121212",
    alignSelf: "flex-start",
    paddingRight: hp("7%"),
    paddingLeft: hp("7%"),
    fontSize: 24,
    textAlign: "center",
  },
  CodeInput: {
    color: "#121212",
    fontSize: 20,
    alignSelf: 'center'
  },
  DescNumber: {
    color: "#121212",
    alignSelf: "center",
    marginBottom: hp("2%"),
    fontSize: 20,
    textAlign: "center",
    marginTop: hp("7%"),
  },
  continueButton: {
    width: wp("40%"),
    height: hp("6%"),
    alignSelf: "center",
    marginTop: hp("5%"),
  },
  confNotSendButton: {
    alignSelf: "center",
    marginTop: hp("3%")
  },
  DescTerms: { 
    color: "#121212",
    paddingRight: wp("5%"),
    paddingLeft: wp("5%"),
    fontSize: 16,
    textAlign: "center",
    marginBottom: hp("2%")
  }
});

