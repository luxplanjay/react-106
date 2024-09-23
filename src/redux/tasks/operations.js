import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// GET @ /tasks
export const fetchTasks = createAsyncThunk('tasks/fetchAll', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/tasks');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// POST @ /tasks
export const addTask = createAsyncThunk('tasks/addTask', async (text, thunkAPI) => {
  try {
    const { data } = await axios.post('/tasks', { text });
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/tasks/${taskId}`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
