import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  FlatList 
} from 'react-native';
import { List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';


const COLORS = {primary: '#1f145c', white: '#fff'};

const App =() => {
  const [todos, setTodos] = React.useState([
    {id: 1, task: 'First todo', completed: true},
    {id: 2, task: 'Second todo', completed: false},
  ]);

  const ListItem = ({todo}) => {
    return (
      <View style={styles.listItems}>
        <View style={{flex: 1}}>
          <Text style={{
            fontWeight: 'bold', 
            fontSize: 15, 
            color: COLORS.primary, 
            textDecorationLine: todo?.completed?"line-through":"none",
            }}>
              {todo?.task}
              </Text>
        </View>
        <TouchableOpacity style={[styles.actionIcon]}>
          <Icon name='done' fontSize={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
       <View style={styles.header}>
         <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.primary}}>TODO APP</Text>
         <Icon name="delete"  size={25} color="red" />
       </View>
       <FlatList
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 100}}
         data={todos}
         renderItem={({item}) => <ListItem todo={item} />}
        />
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
  actionIcon: {
    height: 25,
    width: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    borderRadius: 3,
  },
  listItems: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10
  },
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
