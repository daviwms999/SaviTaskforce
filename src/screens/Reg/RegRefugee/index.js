import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
// import { Container } from './styles';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegRefugee = ({ navigation }) => 
    //<SafeAreaView>
    <KeyboardAwareScrollView
        style={{ backgroundColor: "#FFF" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={false}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
        >
        <Image
            source={require("../../../assets/images/formback.png")}
            resizeMode="stretch"
            resizeMethod="auto"
            style={{
                width: "101%",
                height: hp("65%"),
                position: "absolute",
                //justifyContent: 'flex-start',
                //marginBottom: 10,
                top: 0,
                //zIndex: -1,
            }}
        />
            <Image
                source={require("../../../assets/images/savibranco.png")}
                resizeMode="contain"
                style={styles.LogoSavi}
            />
            <View style={{ flex: 1, justifyContent: 'flex-start'}}>
                <Text style={styles.RegFamilyTitle}>Registrar Família</Text>
                <Text style={styles.RegFamilyText} >Todos os membros da familia devem estar no mesmo lugar, se estão em localizações diferentes devem se registrar em celulares diferentes</Text>
                <Text style={styles.RegFamilySubtitle}>Registrar contato principal da família:</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end'}}>
                <TextInput
                    style={styles.NameInput}
                    label='Nome'
                    mode='outlined'
                />
                <TextInput
                    style={styles.LastnameInput}
                    label='Sobrenome'
                    mode='outlined'
                />
                <View style={{ flexDirection: 'row', justifyContent:'flex-end', marginBottom: hp('2%') }}>
                <Button
                    mode="contained"  
                    style={{
                    height: hp('6%'),
                    width: '45%',
                    marginRight: wp("5%"),
                    color: '#fff'
                    }}
                    labelStyle={{
                        color: '#fff'
                    }}
                    contentStyle={{
                    height: hp('6%'),
                    }}
                    onPress={() => navigation.navigate('MapScreen')}
                >
                    Confirmar
                </Button>
                </View>
            </View>
    </KeyboardAwareScrollView>
    //</SafeAreaView>
;

export default RegRefugee;

RegRefugee.navigationOptions = {
    title: 'RegistrationRefugee',
  }

const styles = StyleSheet.create({
    LogoSavi: {
        width: wp("80%"),
        height: hp("20%"),
        alignSelf: "center",
        justifyContent: "flex-start",
        //marginTop: hp("6%")
      },
      RegFamilyTitle: { 
          fontSize: RFPercentage(5),
          //marginLeft: wp("5%"),
          marginTop: hp("3%"),
          fontWeight: "bold",
          alignSelf: 'center',
          color: '#FFF'
      },
      RegFamilySubtitle: { 
        fontSize: RFPercentage(2.3),
        //marginLeft: wp("5%"),
        marginTop: hp("3%"),
        fontWeight: "bold",
        alignSelf: 'center',
        color: '#FFF',
    },
      RegFamilyText: {
          fontSize: RFPercentage(2.2), 
          alignSelf: "center",
          marginLeft: wp("10%"),
          marginRight: wp("10%"),
          marginTop: hp("4%"),
          color: '#FFF',
          textAlign: 'center',
          marginBottom: hp('3%')
      },
      NameInput: {
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        marginBottom: hp("2%"),
        marginTop: hp("13%")
      },
      LastnameInput: { 
        marginLeft: wp("5%"),
        marginRight: wp("5%"),
        marginBottom: hp("2%")
      }
});