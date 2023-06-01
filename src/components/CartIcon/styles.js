import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({

  buyNowLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, 
    marginHorizontal: 20,
    zIndex: 50,
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
});