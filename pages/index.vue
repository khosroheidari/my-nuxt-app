<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-4"
  >
    <h1 class="text-4xl font-bold mb-8">Welcome to Your To Sarafi App</h1>
    <div v-if="user">
      <form @submit.prevent="addTask" class="flex flex-col items-center mb-6">
        <input
          type="text"
          v-model="newTask"
          placeholder="Add a new task"
          class="p-2 rounded-l-md border-2 border-white bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white mb-2"
        />
        <span v-if="error" class="text-red-500 mb-2">{{ error }}</span>
        <button
          type="submit"
          class="bg-white text-blue-500 px-4 rounded-md hover:bg-gray-200 transition duration-300"
        >
          Add Task
        </button>
      </form>
      <ul class="w-full max-w-md">
        <li
          v-for="task in tasks"
          :key="task._id"
          class="bg-white text-blue-500 p-4 mb-2 rounded-lg shadow-md flex justify-between items-center transition-transform transform hover:scale-105"
        >
          {{ task.title }}
          <button
            @click="deleteTask(task._id)"
            class="bg-red-500 text-white px-2 rounded hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </li>
      </ul>

      <button @click="signOut" class="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
        Sign Out
      </button>
    </div>

    <div class="bg-blue-500 clip-bottom"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useAuthStore } from '~/store/useAuthStore';
import { useNuxtApp } from '#app';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';

const { auth } = useNuxtApp(); // Ensure this is defined correctly
const newTask = ref('');
const tasks = ref([]);
const error = ref('');
const authStore = useAuthStore();

const user = computed(() => authStore.user);

// Function to fetch tasks from the backend
const fetchTasks = async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get('http://localhost:5003/api/tasks', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    tasks.value = response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    error.value = 'Failed to fetch tasks. Please try again.';
  }
};

// Function to add a new task
const addTask = async () => {
  if (newTask.value.trim() === '') {
    error.value = 'Task cannot be empty!';
    return;
  }
  try {
    const token = localStorage.getItem('token');

    const response = await axios.post(
      'http://localhost:5003/api/tasks',
      {
        title: newTask.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    tasks.value.push(response.data);
    newTask.value = '';
    error.value = '';
  } catch (error) {
    console.error('Error adding task:', error);
    error.value = 'Failed to add task. Please try again.';
  }
};

// Function to delete a task
const deleteTask = async (taskId) => {
  try {
    const token = localStorage.getItem('token');

    await axios.delete(`http://localhost:5003/api/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    tasks.value = tasks.value.filter((task) => task._id !== taskId);
  } catch (error) {
    console.error('Error deleting task:', error);
    error.value = 'Failed to delete task. Please try again.';
  }
};

// Set up auth state listener on mount
onMounted(() => {
  console.log('Auth instance:', auth);
  if (!auth) {
    console.error('Auth instance is undefined');
    return;
  }

  onAuthStateChanged(auth, (currentUser) => {
    authStore.setUser(currentUser);
    if (currentUser) {
      console.log('User is signed in:', currentUser.uid);
      fetchTasks();
    } else {
      console.log('User is signed out');
      tasks.value = [];
    }
  });
});

// Function to sign out
const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    localStorage.removeItem('token');
    authStore.logUserOut();
  } catch (err) {
    console.error('Error signing out:', err);
    error.value = 'Sign out failed. Please try again.';
  }
};
</script>

<style scoped>
.clip-bottom {
  clip-path: polygon(0 100%, 50% 80%, 100% 100%, 100% 0, 0 0);
  height: 150px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
