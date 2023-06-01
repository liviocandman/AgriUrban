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
    margin: 10,
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.SM,
  },
  cardPlants: {
    marginTop: 50
  },
  datasheet: {
    backgroundColor: THEME.COLORS.ACCENT_200,
    marginVertical: 20,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10
  },
  inLine:{
    flexDirection: 'row'
  },
  datasheetTitles:{
    fontWeight: '600',
  },

});