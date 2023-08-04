import { createStore } from 'redux';
import initialState from './initialState';

//selectors
export const getPageNumber  = (state) => state.activePage;
export const getAllProjects = (state) => state.projects;
export const getAllExperience = (state) => state.experience;
export const getAllEducation = (state) => state.education;

// action creators
export const changePage = payload => ({type: 'CHANGE_PAGE', payload});

const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return { ...state, activePage: action.payload};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;