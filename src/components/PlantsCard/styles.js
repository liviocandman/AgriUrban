import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 10,
    maxHeight: 90,
    marginBottom: 30,
  },
  image:{
    width: 90,
    height: 90,
    borderRadius: 10
  },
  info: {
    width: 250,
    top: -3
  },
  name:{
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: 'bold',
  },
  desc:{
    color: THEME.COLORS.CAPTION_500,
    
  },
  descHeight:{
    height: 69
  }
});