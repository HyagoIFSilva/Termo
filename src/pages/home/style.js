const styles = StyleSheet.create({
  geral: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'black', 
    borderRadius: 10,
    width: '90%',
    height: '100%',  
  },
  elementos: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 30,
  },
  box: {
    width: 70,
    height: 70,
    backgroundColor: 'blue',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto:{
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',

  },

   sombra:{
    width:200,
    height:100,
    borderRadius:5,
    backgroundColor:"#00000080",

  },

  card: {
    width:200,
    height:100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#ccc",
    borderRadius:5
  },
});