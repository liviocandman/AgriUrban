import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },
  topBackground: {
    flex:1,
    position: 'relative',
    backgroundColor: THEME.COLORS.BACKGROUND_900,
  },  
  greenBackground: {
    width: '100%',
    position: 'absolute',
    borderBottomEndRadius: 40
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
  textCategories:{
    fontWeight: '500',
    fontSize: THEME.FONT_SIZE.MD,

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
  categories:{
    paddingHorizontal: 20,
    marginTop: 16,
    gap:8
  },
  categoriesButtons:{
    padding: 16,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginRight: 8,
    shadowOpacity: 1,
  },
  categoriesText: {
    fontWeight: '700',
  },
  activeCategoriesText:{
    color: 'white'
  },
  titleCard:{
    fontWeight: '700',
    paddingHorizontal: 20,
    fontSize: THEME.FONT_SIZE.MD
  },
  produtosCard: {
    marginTop: 30,
  },

});