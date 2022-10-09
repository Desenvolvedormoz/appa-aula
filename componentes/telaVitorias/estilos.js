import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
   titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center'
   },

   containerImage: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
   },

   containerFirst: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: 20,
      height: 340,
      marginBottom: 50,
   },
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
   },

   numero: {
      color: '#eecb01',
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 10,
      marginRight: 5
   }, 
   texto: {
      fontSize: 16,
      color: '#a6a6a6'
   },
   containeri: {
      backgroundColor: 'rgba(0,0,0,0.6)',
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
   },

   tex: {
      color: '#a6a6a6',
      textAlign: 'center',
      marginBottom: 5
   },

   text: {
      fontSize: 16,
      padding: 15,
      color: '#fff',
      textAlign: 'center',
   },

   img: {
      width: 300,
      height: 200,
   }
});
export default estilos;