import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
    const[text1,settext1]=useState('');
  const[text2,settext2]=useState('');
    const[text3,settext3]=useState('');
  const[text4,settext4]=useState('');
  const[resultado,setresultado]=useState('');

  function Sumar(var1:any,var2:any){
    var a = parseFloat(var1);
    var b= parseFloat(var2);
    var c= a+b;
    var resul="resultado:"+a+"+"+b+"="+c;
    setresultado(resul); }

  return (
 <View style={styles.container}>
      <Text style={{padding:15, fontSize:24, backgroundColor:'#333300',color:'white', textAlign:'center'}}>
        Calcular el mayor y menor de 4 numeros. 
      </Text>
      <Text style={{padding:15, fontSize:24, backgroundColor:'#4d4d00',color:'white', textAlign:'center'}}>
       Nota: 1. No se aceptan numeros negativos ni el numero 0
      </Text>
      <TextInput style={{padding:5,
      height:40,
      borderColor:'#999966',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Ingrese el primer valor'
      keyboardType='numeric'
      onChangeText={(text1)=>settext1(text1)}
      />
          <TextInput style={{padding:5,
      height:40,
      borderColor:'#999966',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Ingrese el segundo valor'
      keyboardType='numeric'
      onChangeText={(text2)=>settext2(text2)}
      />
            <TextInput style={{padding:5,
      height:40,
      borderColor:'#999966',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Ingrese el tercer valor'
      keyboardType='numeric'
      onChangeText={(text3)=>settext3(text3)}
      />
      <TextInput style={{padding:5,
      height:40,
      borderColor:'#999966',
      borderWidth:2,
      marginTop:10
      }}
      placeholder='Ingrese el cuarto valor'
      keyboardType='numeric'
      onChangeText={(text4)=>settext4(text4)}
      />        
<TouchableOpacity
style={{height:60, backgroundColor:'#999966', marginTop:10}}
onPress={()=>{Sumar(text1,text2)}}
>
<Text style={{color:'white',fontSize:24,textAlign:'center'}}>
  Calcular
</Text>
</TouchableOpacity>


<Text style={{fontSize:32}}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
      justifyContent: 'center',
      
    flex: 1,
    backgroundColor: '#b3b3b3',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});