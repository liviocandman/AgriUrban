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
  buyNowLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bagIcon:{
    padding:16,
    borderRadius:50,
    borderColor:THEME.COLORS.CAPTION_400,
    borderWidth: 1
  },
  buyNowButton:{
    backgroundColor: THEME.COLORS.PRIMARY_100,
    padding: 20,
    borderRadius:50,
    flex:1,
    marginLeft: 12,
    alignItems: 'center',
  },
  textButton:{
    color: THEME.COLORS.BACKGROUND_900,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: 'bold'
  },
  bottom:{
    top: 150,
    gap: 20
  }
});