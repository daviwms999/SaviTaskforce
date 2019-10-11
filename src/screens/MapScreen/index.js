import React, { useEffect } from 'react';
import Map from '../../components/Map';
import { View, SafeAreaView, Image, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Appbar, Surface, Button, FAB } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';

//import { } from 'react-navigation';

// import { Container } from './styles';

export default function MapScreen({ navigation }) {
    const food = useSelector(state => state.filterActive.food);
    const documentation = useSelector(state => state.filterActive.documentation);
    const education = useSelector(state => state.filterActive.education);
    const shelter = useSelector(state => state.filterActive.shelter);
    const health = useSelector(state => state.filterActive.health);
    const clothes = useSelector(state => state.filterActive.clothes);
    const job = useSelector(state => state.filterActive.job);
    const acessibility = useSelector(state => state.filterActive.acessibility);
    const nursery = useSelector(state => state.filterActive.nursery);
    const dispatch =  useDispatch();
    const filterTabActive = useSelector(state => state.filterTabActive);

    function changeActive(filter) {
        dispatch({ type: 'FILTER_ACTIVE', filter: filter })
    }

    function changeTabActive() {
        dispatch({ type: 'FILTERTAB_ACTIVE' })
    }

    //useEffect(() => {}, [filterActive]);
    
    return (
        <View style={{flex: 1}}>
            <Appbar style={{ height: hp("8%"), justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                     <Image
                        source={require("../../assets/images/savibrancoicone.png")}
                        resizeMode="contain"
                        resizeMethod="auto"
                        style={{ height: hp("4%"), alignSelf: "flex-end", width: hp("4%"), alignSelf: 'center', marginLeft: wp("3%")}}
                    />
                </TouchableOpacity>
                <Image
                    source={require("../../assets/images/savibrancotitle.png")}
                    resizeMode="contain"
                    resizeMethod="auto"
                    style={{ height: hp("10%"), alignSelf: "flex-end", width: hp("10%"), alignSelf: 'center'}}
                />
                <Appbar.Action icon="more-vert" onPress={()=>{}} color='#fff' />
            </Appbar>
            <View style={{ flex: 1}}>
                <Map />
                <FAB
                    style={styles.fab}
                    icon={filterTabActive ? "search" : "keyboard-arrow-right"}
                    onPress={() => changeTabActive()}
                />
            </View>
            <View style={filterTabActive ? styles.filterTab : styles.filterTabActive}>
                <View style={{ flexDirection: 'column', width: wp("90%"), height: hp("30%"), justifyContent: 'space-between'}}>
                    <ScrollView>
                        <Button onPress={()=>{changeActive("food")}} style={food == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={food==true?styles.filterButtonTextActive:styles.filterButtonText}>ALIMENTAÇÃO</Text></Button>
                        <Button onPress={()=>{changeActive("documentation")}} style={documentation == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={documentation==true?styles.filterButtonTextActive:styles.filterButtonText}>DOCUMENTAÇÃO</Text></Button>
                        <Button onPress={()=>{changeActive("education")}} style={education == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={education==true?styles.filterButtonTextActive:styles.filterButtonText}>EDUCAÇÃO</Text></Button>
                        <Button onPress={()=>{changeActive("shelter")}} style={shelter == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={shelter==true?styles.filterButtonTextActive:styles.filterButtonText}>ABRIGO</Text></Button>
                        <Button onPress={()=>{changeActive("health")}} style={health == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={health==true?styles.filterButtonTextActive:styles.filterButtonText}>SAUDE</Text></Button>
                        <Button onPress={()=>{changeActive("clothes")}} style={clothes == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={clothes==true?styles.filterButtonTextActive:styles.filterButtonText}>ROUPA</Text></Button>
                        <Button onPress={()=>{changeActive("job")}} style={job == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={job==true?styles.filterButtonTextActive:styles.filterButtonText}>EMPREGO</Text></Button>
                        <Button onPress={()=>{changeActive("acessibility")}} style={acessibility == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={acessibility==true?styles.filterButtonTextActive:styles.filterButtonText}>ACESSIBILIDADE</Text></Button>
                        <Button onPress={()=>{changeActive("nursery")}} style={nursery == false ? styles.filterButton : styles.filterButtonActive} mode="outlined"><Text style={nursery==true?styles.filterButtonTextActive:styles.filterButtonText}>CRECHE</Text></Button>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    fab: {
      backgroundColor: '#ff7043',
      color: '#fff',
      //height: hp("6%"),
      //width: wp("30%"),
      //borderRadius: wp("25%"),
      alignSelf: 'center',
      position: 'absolute',
      margin: hp("2%"),
      bottom: 0,
    },
    fabText: {
        height: hp("6%"),
        width: wp("30%"),
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    surface: {
        alignSelf: 'center',
        position: 'absolute',
        margin: hp("2%"),
        bottom: 0,
        borderRadius: wp("25%"),
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
      },
      filterButton: {
        marginTop: hp("2%"),
        borderWidth: 1.5,
        borderColor: '#ff7043',
        backgroundColor: '#242f3e'
      },
      filterButtonText: {
        color: '#ff7043'
      },
      filterButtonActive: {
        marginTop: hp("2%"),
        borderWidth: 1.5,
        borderColor: '#ff7043',
        backgroundColor: '#ff7043',
      },
      filterButtonTextActive: {
        color: '#242f3e'
      },
      filterTabActive: {
        height: hp("30%"), 
        justifyContent:'flex-start', 
        alignItems:'center', 
        backgroundColor: '#242f3e'
      },
      filterTab: {
        height: hp("0%"), 
        justifyContent:'flex-start', 
        alignItems:'center', 
        backgroundColor: '#242f3e'
      }
  })
  
