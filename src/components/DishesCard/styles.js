import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center', 
    borderColor: THEME.COLORS.CAPTION_300,
    borderTopWidth: 1,
    paddingVertical: 10
  },
  info:{
    flex: 1,
    gap: 12,
    paddingLeft: 15
  },
  dishName:{
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: '500',
    color: THEME.COLORS.CAPTION_500
  },
  priceLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: '500',
    color: THEME.COLORS.PRIMARY_300
  },
  plusMinusIconsLine:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderRadius: 50,
    paddingHorizontal: 16,
    padding: 4
  },
  plusMinusIcons:{
    padding: 4,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.PRIMARY_100

  },
  priceProduct:{
    fontSize: THEME.FONT_SIZE.SM,
    fontWeight: '500'
  },

});