import { createStore } from 'redux';
import initialStateEN from './initialStateEN';
import initialStatePL from './initialStatePL';

//selectors
export const getPageNumber  = (state) => state.activePage;
export const getLanguage  = (state) => state.language;
export const getAbout  = (state) => state.about;
export const getAllProjects = (state) => state.projects;
export const getAllExperience = (state) => state.experience;
export const getAllEducation = (state) => state.education;
export const getSkills = (state) => state.skills;
export const getTechnologies = (state) => state.technologies;
export const getInterfaceElements = (state) => state.interfaceElements;

// action creators
export const changePage = payload => ({type: 'CHANGE_PAGE', payload});
export const changeLanguage = payload => ({type: 'CHANGE_LANGUAGE', payload});

let initialState = initialStateEN;

const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return { ...state, activePage: action.payload};
    case 'CHANGE_LANGUAGE':
      if(action.payload === 'EN'){
        initialState = initialStatePL;
      } else {
        initialState = initialStateEN;
      }
       return {...initialState};
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