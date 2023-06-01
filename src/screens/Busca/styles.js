import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: THEME.COLORS.BACKGROUND_900,
      },
      topBackground: {
        flex:1,
        position: 'absolute',
       
      },  
      header:{
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center',
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
        fontSize: 15
    
      },

      textCategories:{
        fontWeight: '500',
        fontSize: THEME.FONT_SIZE.MD,
    
      },
      titleCard:{
        fontWeight: '700',
        paddingHorizontal: 20,
        fontSize: THEME.FONT_SIZE.MD
      },
      searchBar:{
        margin: 20,
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
        top: -10,
        gap:8

      },
      categoriesButtons:{
        padding: 10,
        paddingVertical:8,
        shadowOpacity: 1,
      },
      activeCategories:{
        borderBottomWidth: 2,
        borderBottomColor: THEME.COLORS.ACCENT_100,
        padding: 10,
        paddingVertical:8,
        shadowOpacity: 1,
      },
      categoriesText: {
        fontWeight: '700',
        color: THEME.COLORS.CAPTION_500,
        fontSize: THEME.FONT_SIZE.SM
      },
      activeCategoriesText:{
        color: THEME.COLORS.ACCENT_100,
        fontWeight: '700',
        fontSize: THEME.FONT_SIZE.SM
      },
      map:{
        flex: 1,
        width: "100%",
      },
      mark: {
        backgroundColor: THEME.COLORS.PRIMARY_100
      },
      callout:{
        backgroundColor: THEME.COLORS.BACKGROUND_900,
    
      },
      bubble:{
        alignSelf:'flex-start',
        backgroundColor: THEME.COLORS.BACKGROUND_900,
        borderRadius:10,
        width: 180,
        height: 150
      },
  
      infoStore:{
        padding:10,
      },  
      arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: THEME.COLORS.BACKGROUND_900,
        borderWidth: 16,
        alignSelf: 'center',
        marginTop:-32,
      },
      arrowBorder:{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: THEME.COLORS.BACKGROUND_900,
        borderWidth: 16,
        alignSelf: 'center',
        marginTop:-0.5,
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
        fontSize: THEME.FONT_SIZE.SM,
      },
      imageWrapperAndroid: {
     
     
   
   
      },
});