import { createStore } from 'vuex';

const store = createStore({
  state: {
    sectionsPositions: {},
    activePage: ''
  },
  getters: {
    getSectionPosition: (state) => (sectionId) => state.sectionsPositions[sectionId],
    getActivePage: (state) => state.activePage
  },
  mutations: {
    ADD_POSITION(state, value) {
      state.sectionsPositions[value[0]] = value[1];
    },
    UPDATE_ACTIVE_PAGE(state, value) {
      state.activePage = value;
    }
  },
  actions: {
    addPosition(state, value) {
      state.commit('ADD_POSITION', value);
    },
    updateActivePage(state, value) {
      state.commit('UPDATE_ACTIVE_PAGE', value);
    }
  },
  modules: {},
});

export default store;
