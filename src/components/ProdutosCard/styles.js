import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 250,
    width: 200,
    marginTop: 30,
    borderWidth: 1,
    borderColor: THEME.COLORS.CAPTION_300
  },
  shadowImage:{
    shadowColor: 'black',
    shadowRadius: 30,
    shadowOffset: {width: 0, height: 30},
    shadowOpacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -55
  },
  infoCard:{
    paddingHorizontal: 20,
    gap: 4
  },
  titleCardText:{
    color: THEME.COLORS.ACCENT_100,
    fontWeight: '600',
    fontSize: THEME.FONT_SIZE.MD
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
  },
  priceAddLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price:{
    color: THEME.COLORS.PRIMARY_300,
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: '600'
  },
  addBottom:{
    padding:5,
    backgroundColor: THEME.COLORS.ACCENT_100,
    borderRadius: 50,
  }
});