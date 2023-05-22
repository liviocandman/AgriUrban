import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import { styles } from './styles';
import logoImg from '../../assets/agriurbanlogo.svg';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

export function LoginScreen( {navigation}) {
  
  
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigation.navigate("home", {user: userCredential.user});
      })
      .catch((error) => {
       setErrorMessage(error.message);
      });
    } else {
      setErrorMessage("Por favor insira o email e a senha")
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
          Login
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
            placeholder='Password'
            value={password} 
            onChangeText={text => setPassword(text)}
            secureTextEntry={true} 
            style={styles.inputText}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.textPassword}> Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.errorText}>{errorMessage}</Text>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>
            Login
          </Text>
        </TouchableOpacity>
      
        <Text style={{textAlign: 'center', color: '#666', marginBottom:30}}>Ou, realize login com...</Text>
      
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
        <Text>Ainda não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.registerText}> Cadastrar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView> 
  );
}