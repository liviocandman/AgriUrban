import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/agriurbanlogo.svg';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

export function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationMessage, setValidationMessage] = useState('')

  const validateAndSet = (value, valueToCompare, setValue) =>{
    if (value !== valueToCompare) {
      setValidationMessage("Senhas não combinam.");
    }else {
      setValidationMessage("")
    }
    setValue(value);
  }

  const handleSignUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigation.navigate("home", {user: userCredential.user})
      })
      .catch((error) => {
        setValidationMessage(error.message);
      });
    }
  }
  
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
    <View style={styles.padding}>
      <View style={styles.logo}>
        <Image
          source={logoImg}
          style={styles.logoImg}
        />
      </View>

      <Text style={styles.text}>
        Registrar
      </Text>
      
      <View style={styles.input}> 
        <MaterialIcons name='alternate-email' size={20} color='#666' style={styles.inputIcons}/>
        <TextInput 
          placeholder='Email ID'
          value={email}
          onChangeText={text => setEmail(text)} 
          keyboardType='email-address' 
          style={styles.inputText}
        />
      </View>
      <View style={styles.input}>
        <MaterialIcons
          name='lock-outline' size={20} color='#666' style={styles.inputIcons}
        />
        <TextInput 
          placeholder='Senha'
          value={password} 
          onChangeText={(value) => validateAndSet(value, confirmPassword, setPassword)}
          secureTextEntry
          style={styles.inputText}
        />
      </View>
      <View style={styles.input}>
        <MaterialIcons
          name='lock-outline' size={20} color='#666' style={styles.inputIcons}
        />
        <TextInput 
          placeholder='Confirmar Senha'
          value={confirmPassword} 
          onChangeText={(value) => validateAndSet(value, password, setConfirmPassword)}
          secureTextEntry={true} 
          style={styles.inputText}
        />
      </View>
      <Text style={styles.errorText}>{validationMessage}</Text>
      <TouchableOpacity onPress={handleSignUp} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>
          Registrar
        </Text>
      </TouchableOpacity>
    
      <Text style={{textAlign: 'center', color: '#666', marginBottom:30}}>Ou, registre-se com...</Text>
    
      <View style={styles.socialLogin}>
        <TouchableOpacity onPress={() => {}} style={styles.socialLoginIcon}>
          <AntDesign size={24} name='google'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.socialLoginIcon}>
          <AntDesign size={24} name='facebook-square'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.socialLoginIcon}>
          <AntDesign size={24} name='twitter'/>
        </TouchableOpacity>
      </View>
      <View style={styles.register}>
      <Text>Já possui uma conta?</Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text style={styles.registerText}> Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  </KeyboardAvoidingView> 
  );
}