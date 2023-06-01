import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 82,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  shadowImage:{
    shadowColor: 'black',
    shadowRadius: 30,
    shadowOffset: {width: 0, height: 30},
    shadowOpacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
  
  },
  storeImage:{
    width: 60, 
    height: 60, 
    borderRadius: 50, 
    borderWidth: 0.8,
    borderColor: THEME.COLORS.CAPTION_300
  },
  infoCard:{
    paddingHorizontal: 20,
    gap: 1
  },
  titleCardText:{
    fontWeight: '500',
    fontSize: THEME.FONT_SIZE.SM,
  },
  produtosStars:{
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    gap: 4,
  },
  starsText:{
    color: THEME.COLORS.ACCENT_100
  },
  storeCategory:{
    color: THEME.COLORS.PRIMARY_300,
    fontWeight: '600',
    marginLeft: 5,
  
  },
  contact:{
    gap: 4,
    flexDirection:  'row',
    alignItems: 'center', 
  },
  contactPhone:{
    color: THEME.COLORS.CAPTION_500,
    fontSize: THEME.FONT_SIZE.SM
  }

});