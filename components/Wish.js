import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-web'

const Wish = () => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>SOME WISH</Text> 
            </View>
        </View>
    )
}


const styles = StyleSheet.create ({
 item: {
     backgroundColor: '#6699FF',
     padding: 15,
     borderRadius:10,
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent:'space-between',
     margin: 10
 },
 itemLeft: {
     flexDirection:'row',
     alignItems: 'center',
     flexWrap: 'wrap'
 } ,
 square: {
     width:24,
     height: 24,
     backgroundColor: '#FF6699',
     opacity: 0.5,
     borderRadius: 5,
     marginRight: 15
 },
 itemText: {
  
 }

})


export default Wish