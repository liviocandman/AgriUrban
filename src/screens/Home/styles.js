import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  topBackground: {
    flex:1,
    position: 'relative',
  },  
  greenBackground: {
    width: '100%',
    position: 'absolute',
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
    color: THEME.COLORS.ACCENT_200
  },
  searchBar:{
    marginHorizontal: 20,
    marginTop: 56,
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
    marginTop: 46,
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
  produtosCard: {
 
    paddingVertical: 8
  }
});