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
  titleNameStore:{
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: 'bold'
  },
  infoStore:{
    justifyContent: 'space-between',
    flexDirection:  'row'
  },
  produtosStars:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    gap: 4,
  },
  storeCategory:{
    color: THEME.COLORS.PRIMARY_300,
    fontWeight: '600',
    marginLeft: 5
  },
  contact:{
    gap: 4,
    flexDirection:  'row',
    alignItems: 'center',
  },
  contactPhone:{
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.SM,
  },
  storeMenu:{
    padding: 20,
    paddingBottom: 144,
  },
  titleMenu:{
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: '500',
    marginBottom: 15
  },
});