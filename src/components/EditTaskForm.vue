
<template>
    <div>
      <h2 class="text-2xl font-semibold mb-4">Edit Task</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="editTitle" class="block text-sm font-medium text-gray-600 dark:text-gray-400">Title</label>
          <input v-model="editedTask.title" type="text" id="editTitle" name="editTitle" class="mt-1 p-2 w-full rounded-md bg-gray-100 dark:bg-gray-700">
        </div>
        <div class="mb-4">
          <label for="editDescription" class="block text-sm font-medium text-gray-600 dark:text-gray-400">Description</label>
          <textarea v-model="editedTask.description" id="editDescription" name="editDescription" class="mt-1 p-2 w-full rounded-md bg-gray-100 dark:bg-gray-700"></textarea>
        </div>
        <button type="submit" class="bg-primary text-white p-2 rounded-md">Update Task</button>
      </form>
    </div>
  </template>
  
  <script>
import { ref } from 'vue';

export default {
  props: {
    task: Object
  },
  setup(props, { emit }) {
    const editedTask = ref({ ...props.task });

    const submitForm = () => {
      if (editedTask.value.title.trim() === '' || editedTask.value.description.trim() === '') {
        alert('Please fill in all fields');
        return;
      }

      emit('updateTask', editedTask.value);
    };

    return {
      editedTask,
      submitForm,
    };
  }
};
</script>


  
 