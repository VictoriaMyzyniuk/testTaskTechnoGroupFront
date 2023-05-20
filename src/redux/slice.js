import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllClients,
  fetchAllProjects,
  addNewProject,
} from 'redux/operations';

const initialState = {
  clients: [],
  projects: [],
  addedProject: '',
  error: false,
  isLoading: false,
};

const infoSlice = createSlice({
  name: 'info',
  initialState: initialState,

  extraReducers: {
    [fetchAllClients.pending](state, action) {
      state.isLoading = true;
    },
    [fetchAllClients.fulfilled](state, action) {
      state.clients = action.payload;
    },
    [fetchAllClients.rejected](state, action) {
      state.error = true;
    },

    [fetchAllProjects.pending](state, action) {
      state.isLoading = true;
    },
    [fetchAllProjects.fulfilled](state, action) {
      state.projects = action.payload;
    },
    [fetchAllProjects.rejected](state, action) {
      state.error = true;
    },

    [addNewProject.pending](state, action) {
      state.isLoading = true;
    },
    [addNewProject.fulfilled](state, action) {
      state.projects = [...state.projects, action.payload];
    },
    [addNewProject.rejected](state, action) {
      state.error = true;
    },
  },
});

export const infoReducer = infoSlice.reducer;
