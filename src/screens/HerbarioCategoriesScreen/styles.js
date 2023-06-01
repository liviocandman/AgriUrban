import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
  },

  cardRadius:{
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    marginTop: -40,
    paddingTop: 24
  },
  paddingHorizontal:{
    paddingHorizontal: 20
  },
  titleName:{
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: 'bold',
  },
  desc:{
    marginTop: 10,
    color: THEME.COLORS.CAPTION_500,
  },
  cardPlants: {
    marginTop: 50
  }
});