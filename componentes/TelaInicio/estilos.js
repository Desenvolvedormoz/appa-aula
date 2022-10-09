import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},

image: {
    width: 250,
    height: 250,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: '#202020',
    marginBottom: 50,
},

container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
},

miniContainer: {
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.9)',
    padding: 20,
    width: 340,
    borderRadius: 20,
},

titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
},

texto : {
    fontSize: 16,
    color: '#a6a6a6',
    textAlign: 'center',
}
});
export default estilos;