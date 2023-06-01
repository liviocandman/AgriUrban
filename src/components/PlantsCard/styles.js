import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    borderRadius: 10,
    height: 90,
  },
  image:{
    width: 90,
    height: 90,
    borderRadius: 10
  },
  info: {
    width: 250,
    height: 90,
  },
  name:{
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: 'bold',
  },
  desc:{
    color: THEME.COLORS.CAPTION_500,
  }
});