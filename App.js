import React, {useState}  from "react";
import {Text, View, TouchableOpacity, TextInput, StyleSheet} from "react-native";

const regisForm = () => {
    const [fname, setfname]=useState('');
    const [lname, setlname]=useState('');
    const[ dob, setdob]=useState('');
    const[age, setage]= useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [phone, setphone] = useState('');
    const [fail, setfail] =useState(false);
    const [success, setsuccess] =useState(false);
    const [onclick, setonclick] = useState(false);

    
const fname1 = (fname) => {
  setfname (fname);
};

const lname1 = (lname) => {
   setlname (lname);
};

const dob1 = (dob) => {
    setdob (dob);
};

const age1 = (age) => {
    setage (age);
};

const email1 = (email) => {
  setemail (email);
};

const address1 = (address) => {
  setaddress (address);
};

const phone1 = (phone) => {
  setphone (phone);
};

const onclick1 = (onclick) => {
  setonclick (!onclick);
};

const Submit = () => {
 
  if (fname.trim() === '') {
       setfail (true);
    return;
  } 

  if (lname.trim() === '' ) {
       setfail (true);
    setonclick(true);
    return;
  } 

  
  if (dob.trim() === '' ) {
        setfail (true);
    return;
  } 

  if (age.trim() === '' ) {
    setfail (true);
    return;
  } 
  
  if (email.trim() === '' ) {
    setfail (true);
    return;
  } 

  if (address.trim() === '' ) {
     setfail (true);
    return;
  } 

  if (phone.trim() === '' || phone.trim().length< 10 ) {
      setfail (true);
    return;
  } 

  setfail (false);
  setsuccess (true);
}

return (
  <View  style = {styles.container}>
    <Text style = {styles. header}> REGISTRATION</Text>
    <Text style = {styles. subheader}> Enter your personal data </Text> <br/><br/><br/>
      <TextInput style = {[styles.text]}
      placeholder="First Name"
      value={fname}
      onChangeText={setfname}
         />
   
    <br/>

      <TextInput style = {styles.text}
      placeholder="Last Name"
      value={lname}
      onChangeText={lname1}
       />

    <br/>

      <TextInput style = {styles.text}
      placeholder="Date of Birth"
      value={dob}
      onChangeText={dob1}
      />

    <br/>

      <TextInput style = {styles.text}
      placeholder="Age"
      value={age}
      onChangeText={age1}/>

    <br/>

      <TextInput style = {styles.text}
      placeholder="E-mail"
      value={email}
      onChangeText={email1}
      />

    <br/>

      <TextInput style = {styles.text}
      placeholder="Address"
      value={address}
      onChangeText={address1}
      styles ={ [
        {borderColor: '#FF0000', borderWidth: '2'},
      ]}/>

    <br/>

      <TextInput style = {styles.text}
      placeholder="Phone"
      value={phone}
      onChangeText={phone1}/> <br/><br/>

    {fail && (
      <Text style={styles.text1}> Please provide the valid details required to complete the form. </Text>
    ) }
     {success && (
      <Text  style={styles.text2}> Form completed! </Text>
    ) }

  
       <br/><br/>
      <TouchableOpacity onPress={Submit}>
        <Text style = {styles.button}>Submit</Text>
      </TouchableOpacity>   
             
   
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  borderColor: 'red',
},

textbox: {

},

button:{
  justifyContent: 'right',
  backgroundColor: '#9400D3',
  fontColor: '#FFFFFF',
  paddingHorizontal: 25,
  paddingVertical: 13,
},

text: {
  opacity: 0.7,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    margin: 5

},

text1: {
  color: '#FF0000',

},

text2: {
  color: '#00FF00', 

},
header: {
  fontSize: 25,
  padding: 3,
  paddingHorizontal: 150,
  backgroundColor: '#9400D3',
},
subheader:{
  fontSize: 13,
  padding: 3,
  paddingHorizontal: 162,
  backgroundColor: '#9400D3',

},

})

export default regisForm;