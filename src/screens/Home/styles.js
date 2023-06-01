import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  content: {
    flex:1,
    position: 'relative',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
  },  
  header:{
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text:{
    fontSize: THEME.FONT_SIZE.MD,
    fontWeight: '600',
    color: THEME.COLORS.ACCENT_100
  },
  title:{
    marginTop: 16,
    paddingHorizontal: 16
  },
  textTitle:{
    fontWeight: 'bold',
    fontSize: THEME.FONT_SIZE.LG
  },
  textSubTitle:{
    fontWeight: '400',
    fontSize: THEME.FONT_SIZE.SM,

  },

  searchBar:{
    marginHorizontal: 20,
    marginTop: 30,
  },
  search:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#e6e6e6',
    paddingHorizontal: 5
  },
  searchInput:{
    padding: 12,
    flex: 1,
    fontWeight: '400',

  },
  searchButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.ACCENT_100
  },
  
  titleCard:{
    fontWeight: 'bold',
    paddingHorizontal: 20,
    fontSize: THEME.FONT_SIZE.LG,
 
  },
  card: {
    marginTop: 30,
  },

});