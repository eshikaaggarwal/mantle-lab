
<template>
  <div :class="{ 'dark': darkMode }" class="bg-gray-100 dark:bg-gray-800 min-h-screen p-4">
    <header class="mb-4">
      <h1 class="text-3xl font-semibold text-primary">Task Tracker</h1>
      <label class="cursor-pointer">
        <input type="checkbox" v-model="darkMode" class="mr-2">
        Dark Mode
      </label>
    </header>
    
    <TaskList :tasks="tasks" @editTask="editTask" @deleteTask="deleteTask" />

    <AddTaskForm @addTask="addTask" />

    <EditTaskForm v-if="editingTask" :task="editingTask" @updateTask="updateTask" />

  </div>
</template>

<script>
import { ref } from 'vue';
import TaskList from './components/TaskList.vue';
import AddTaskForm from './components/AddTaskForm.vue';
import EditTaskForm from './components/EditTaskForm.vue';

export default {
  name: 'App',
  components: {
    TaskList,
    AddTaskForm,
    EditTaskForm
  },
  setup() {
    const tasks = ref([]);
    const editingTask = ref(null);
    const darkMode = ref(false);

    const addTask = (task) => {
      tasks.value.push(task);
    };

    const editTask = (task) => {
      editingTask.value = task;
    };

    const updateTask = (updatedTask) => {
      const index = tasks.value.findIndex(task => task === editingTask.value);
      if (index !== -1) {
        tasks.value[index] = updatedTask;
        editingTask.value = null;
      }
    };

    const deleteTask = (task) => {
      if (window.confirm('Are you sure you want to delete this task?')) {
        tasks.value = tasks.value.filter(t => t !== task);
        editingTask.value = null;
      }
    };

    return {
      tasks,
      addTask,
      editTask,
      updateTask,
      deleteTask,
      editingTask,
      darkMode
    };
  }
}
</script>


