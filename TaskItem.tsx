import React from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';


interface Task {
  id: string;
  title: string;
  status: 'due' | 'done';
}


interface TaskItemProps {
  task: Task;
  toggleStatus: (id: string) => void;
  deleteTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleStatus, deleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      {}
      <Text style={[styles.taskTitle, task.status === 'done' && styles.doneTask]}>
        {task.title}
      </Text>

      {}
      <Switch
        value={task.status === 'done'}
        onValueChange={() => toggleStatus(task.id)}
      />

      {}
      <TouchableOpacity onPress={() => deleteTask(task.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
  },
  doneTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    marginLeft: 10,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TaskItem;
