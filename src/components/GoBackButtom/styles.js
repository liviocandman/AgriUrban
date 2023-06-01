import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  goBackButtom:{
    position: 'absolute', 
    top: 40, 
    left: 25,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    padding: 5,
    borderRadius: 50,
  },
});