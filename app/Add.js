import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,
    RefreshControl
} from 'react-native'
import {SearchBar} from 'react-native-elements'
import { theme } from './qjstyle';
import {Top} from './compont/compont' 
import {Button} from 'react-native-elements'

export default class Add extends  Component{
    constructor(props){
        super(props)
        this.state={
        
        }
    }
componentDidMount(){
    fetch('https://easy-mock.com/mock/5d1472a93b2ae07e7cd63f3d/lllst')
    .then(res=>res.json())
    .then(res=>{})
    .catch(eree=>{})
}
    render(){
        let tytt=[
            {
            tit:'Working time',
            con:'Monday through Friday,09:00-06:00'
            },
            {
            tit:'Contact phone number',
            con:'+861879837684',
            },
            {
             tit:'Address',
             con:'24 laifu road, honghu district, wuhan city, hubei province, China'
            },
            {
              tit:'Email',
              tit:'ralt479@gmail.com'  
            }


        ]
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
                <View style={{backgroundColor:theme.theme_bg,flex:1,width:'100%'}}>
             <Top title='Here we are'/>

                    <ScrollView contentContainerStyle={{
                        alignItems:'center'
                    }}>

                    <Image source={require('./img/ditu.png')} 
                     style={{width:theme.sc_w,height:theme.sc_h*.2}}
                    />

          {
              tytt.map((i,l)=>{
                 return(
                     <View style={{width:theme.sc_w*.95,marginTop:10}}>
                     <Button title={i.tit} 
                      buttonStyle={{backgroundColor:theme.theme_Color}}/>
                     <Text style={{marginTop:5,fontSize:theme.sc_w*.05,color:theme.themehui2}}>{i.con}</Text>
                     </View>
                 )
              })

          }

                    </ScrollView>
         
                </View>
            </SafeAreaView>
        )
    }  


}
const styles=StyleSheet.create({
    aacallout:{
        width:theme.sc_w*.5,
        padding:6,
        opacity:.7
    },
    dt:{
        width:theme.sc_w,
        height:theme.sc_h*.25,
        marginTop:3
     },
})