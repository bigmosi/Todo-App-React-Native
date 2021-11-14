import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  FlatList 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const COLORS = {primary: '#1f145c', white: '#fff'};

const App =() => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
       <View style={styles.header}>
         <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.primary}}>TODO APP</Text>
         <Icon name="delete"  size={25} color="red" />
       </View>
       <FlatList />
       <View style={styles.footer}>
         <View style={styles.inputContainer}>
           <TextInput placeholder="Add Todo" />
         </View>
         <TouchableOpacity>
           <View style={styles.iconContainer}>
             <Icon name="add" size={30} color={COLORS.white}/>
           </View>
         </TouchableOpacity>
       </View>
       <View>
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 20,
    paddingHorizontal: 20
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
  
});

export default App;
