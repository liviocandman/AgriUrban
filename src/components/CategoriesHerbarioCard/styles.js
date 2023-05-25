import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 250,
    marginTop: 20
  },
  title:{
    alignItems: 'center',
    marginTop: 35
  
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: THEME.FONT_SIZE.LG
  }
});