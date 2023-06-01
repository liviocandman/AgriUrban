import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginTop: 10,
    borderColor: THEME.COLORS.CAPTION_300
  },

  imageNews: {
    margin: 10,
    marginHorizontal: 20,
  },
  titleNews:{
    fontSize: THEME.FONT_SIZE.LG,
    marginHorizontal: 21,
    marginBottom: 10,
    color: THEME.COLORS.CAPTION_500,
    fontWeight: '500',
    
  },
 
});