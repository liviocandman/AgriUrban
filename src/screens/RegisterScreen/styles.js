import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  container: {
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  padding:{
    paddingHorizontal: 25,
  },
  logo:{
    alignItems: 'center',
  },
  logoImg: {
    width: 250,
    height: 250,
    marginTop: 50,
  },
  text: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT_100,
    marginBottom: 30,
    fontWeight: '400'
    
  },
  input: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  inputText: {
    flex:1,
    paddingVertical: 0,
  },
  inputIcons: {
    marginRight: 5,
  },
  errorText: {
    color: THEME.COLORS.ALERT
  },
  textPassword: {
    color: THEME.COLORS.PRIMARY_100,
    fontSize: THEME.FONT_SIZE.SM,
  },
  loginButton:{
    backgroundColor: THEME.COLORS.PRIMARY_100,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  loginButtonText: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.PRIMARY_200,
    fontWeight: 'bold',

  },
  socialLogin:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialLoginIcon: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 30,
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  registerText:{
    color: THEME.COLORS.PRIMARY_100,
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: 'bold',
  }
});