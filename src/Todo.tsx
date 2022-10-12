import React from 'react';
import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';

export const Todo = () => {
  const [text, setText] = React.useState<String>('');
  const [todos, setTodos] = React.useState<Array<String>>([]);
  const addTodo = () => {
    setTodos([...todos, text]);
    setText('');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        marginTop: 100,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        Todo List
      </Text>
      <View>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderColor: 'gray',
            borderWidth: 1,
            marginTop: 20,
          }}
          onChangeText={text => setText(text)}></TextInput>
        <Button
          title="Add Todo"
          onPress={() => {
            addTodo();
          }}></Button>
      </View>
      <View>
        {todos.map((todo, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 300,
                marginTop: 10,
                borderColor: 'gray',
                borderWidth: 1,
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,

                  marginTop: 20,
                  alignContent: 'center',
                  marginLeft: 10,
                  marginBottom: 20,
                }}>
                {todo}
              </Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
