
<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Add Task</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-600 dark:text-gray-400">Title</label>
          <input v-model="title" type="text" id="title" name="title" class="mt-1 p-2 w-full rounded-md bg-gray-100 dark:bg-gray-700">
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-600 dark:text-gray-400">Description</label>
          <textarea v-model="description" id="description" name="description" class="mt-1 p-2 w-full rounded-md bg-gray-100 dark:bg-gray-700"></textarea>
        </div>
        <button type="submit" class="bg-primary text-white p-2 rounded-md">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';

export default {
  setup(props, { emit }) {
    const title = ref('');
    const description = ref('');

    const submitForm = () => {
      if (title.value.trim() === '' || description.value.trim() === '') {
        alert('Please fill in all fields');
        return;
      }

      const newTask = {
        id: Date.now(),
        title: title.value,
        description: description.value,
      };

      title.value = '';
      description.value = '';

      emit('addTask', newTask);
    };

    return {
      title,
      description,
      submitForm,
    };
  }
};
</script>

  