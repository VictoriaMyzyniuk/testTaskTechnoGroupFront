import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://api.novaposhta.ua/v2.0/json/';

export const fetchAllClients = createAsyncThunk(
  'api/clients',

  async thunkAPI => {
    try {
      const response = await axios.get('http://localhost:3001/api/clients');

      return response.data.data.result;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllProjects = createAsyncThunk(
  'api/projects',

  async thunkAPI => {
    try {
      const response = await axios.get('http://localhost:3001/api/projects');

      return response.data.data.result;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewProject = createAsyncThunk(
  'api/addProject',

  async (client, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/api/projects', {
        client,
      });

      return response.data.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
