<!-- components/TaskList.vue -->
<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Task List</h2>
    <ul>
      <h4 v-for="task in tasks" :key="task.id" class="mb-2 p-2 bg-white dark:bg-gray-700 shadow-md rounded-md">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-lg font-semibold">{{ task.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ task.description }}</p>
          </div>
          <div>
            <button @click="editTask(task)" class="mr-2 text-primary">Edit</button>
            <button @click="deleteTask(task)" class="text-red-500">Delete</button>
          </div>
        </div>
      </h4>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    tasks: Array
  },
  setup(props, { emit }) {
    const editTask = (task) => {
      emit('editTask', task);
    };

    const deleteTask = (task) => {
      emit('deleteTask', task);
    };

    return {
      editTask,
      deleteTask,
    };
  }
});
</script>

