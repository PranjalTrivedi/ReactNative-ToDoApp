/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import TaskItem from './TaskItem';


interface Task {
  id: string;
  title: string;
  status: 'due' | 'done';
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>('');


  const addTask = () => {
    if (taskTitle.trim() === '') {
      Alert.alert('Error', 'Task title cannot be empty');
      return;
    }
    setTasks([...tasks, { id: Date.now().toString(), title: taskTitle, status: 'due' }]);
    setTaskTitle('');
  };


  const toggleStatus = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: task.status === 'due' ? 'done' : 'due' } : task
    ));
  };


  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do App</Text>
      
      {}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          value={taskTitle}
          onChangeText={setTaskTitle}
        />
        <Button title="Add Task" onPress={addTask} disabled={taskTitle.trim() === ''} />
      </View>

      {}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} toggleStatus={toggleStatus} deleteTask={deleteTask} />
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default App;
