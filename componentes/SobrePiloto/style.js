import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
   containerYes: {
      flex: 1,
      backgroundColor: '#fff',
   },

   containerFilho: {
      padding: 20,
   },
   titulo: {
      fontSize: 22,
      fontWeight: 'bold',
      margin: 10,
   },

   image: {
      borderRadius: 5,
      height: 200,
      marginBottom: 10,
      width: '100%',
   },

   texto: {
      color: '#757575',
      fontWeight: 'bold',
      marginBottom: 20,
   },

   img: {
      width: 100,
      height: 100,
   },

   container: {
      flexDirection: 'row',
      marginBottom: 20,
      borderTopColor: '#d5d5d5',
      borderBottomColor: '#d5d5d5',
      borderWidth: 1,
      paddingHorizontal: 20,
   },
   
   subtitulo: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   card: {
      padding: 10,
      flex: 1,
   }

});
export default estilos;