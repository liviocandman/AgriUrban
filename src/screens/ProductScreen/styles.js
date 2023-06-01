import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  greenBackground: {
    width: '100%',
    position: 'absolute',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  content:{
    gap: 16,
    paddingHorizontal: 20
  },
  topIcons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  produtosStars:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    padding: 4,
    paddingHorizontal:8,
    width: 52,
    backgroundColor:THEME.COLORS.ACCENT_200,
    gap: 4,
    marginTop: -60
  },
  titlePriceLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleProduct:{
    fontSize: THEME.FONT_SIZE.LG,
    fontWeight: 'bold'
  },
  priceProduct:{
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: '600'
  },
  desc:{
    gap: 8,
    height: 240
  },
  textDesc:{
    color: "gray"
  },
  qtdeProduct:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plusMinusIcons:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor:THEME.COLORS.CAPTION_400,
    borderRadius: 50,
    paddingHorizontal: 16,
    padding: 4
  }, 
  bottom:{
    top: 200,
    gap: 20
  }
});