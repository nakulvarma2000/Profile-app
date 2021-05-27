import React from 'react';
import { Page, Text, View, Document,Font,Image, StyleSheet } from '@react-pdf/renderer';
import profileData from '../../../data/profileData.json'
import font1 from './fonts/Poppins-Bold.ttf'
import font2 from './fonts/Poppins-Light.ttf'

Font.register({ family: 'Poppins1', src: font1 });
Font.register({ family: 'Poppins2', src: font2 });
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  View: {
      display: "flex"
  },
  name: {
      fontSize: 20,
      position:'absolute',
      top:"1%",
      left:"5%",
      fontFamily: 'Poppins1',
      color: '#393939',
  },
  body: {
    paddingTop: 35,
    paddingLeft: 25,
    paddingBottom: 65,
    paddingHorizontal: 35,
    backgroundColor: '#DCE1E3',
  },
  propic: {
     width: "20%",
     position: "absolute",
     top: "1%",
     left: "75%",
  },
  email: {
    fontFamily: "Poppins2",
    fontSize: 11,
    top: 45,
    left: "5%"
  },
  phone: {
    fontFamily: "Poppins2",
    fontSize: 11,
    top: 45,
    left: "5%"
  },
  address: {
    fontFamily: "Poppins2",
    fontSize: 10,
    top: 45,
    left: "5%",
    width: "65%"
  },
  education1: {
    fontFamily: "Poppins2",
    fontSize: 14,
    color: 'white',
    marginLeft: '27%',
  },
  education0: {
    fontFamily: "Poppins2",
    fontSize: 14,
    marginTop: "15%",
    color: 'white',
  },
  box1: {
    backgroundColor: '#393939',
    fontFamily: "Poppins2",
    color: 'white',
    marginLeft: "5%",
    padding: 35,
    marginTop: "25%",
    fontSize: 13,
  },
  box2: {
    backgroundColor: '#393939',
    fontFamily: "Poppins2",
    color: 'white',
    marginLeft: "5%",
    padding: 15,
    marginTop: "10%",
    fontSize: 14,
  },
});

const MyDocument = () => (
  <Document title="Resume" >
    <Page size="A4" orientation="portrait" style={styles.body}>
        <View style={styles.View} >
          <Text style={styles.name} >{profileData.name}</Text>
        </View>
        <View >
          <Image src={'/images/NAKUL.jpg'} style={styles.propic} />
          <Text style={styles.email} >email: {profileData.email}</Text>
          <Text style={styles.phone} >phone no. :{profileData.phone}</Text>
          <Text style={styles.address} >address :{profileData.address}</Text>
        </View> 
        <View style={styles.box1}>
          <Text >Summary : {profileData.summary}</Text>
        </View>
        <View style={styles.box2}>
          <Text>Professional Skillset : {profileData.professionalSkillset}</Text>
          <Text style={styles.education0}>Education Details : 1) {profileData.education1}</Text>
          <Text style={styles.education1}>2) {profileData.education2}</Text>
        </View>
        <View style={styles.box2}>
          <Text>Languages Known : {profileData.languages}</Text>
        </View>
    </Page>
  </Document>
);

export default MyDocument;