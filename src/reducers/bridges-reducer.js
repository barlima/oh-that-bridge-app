export const INITIAL_STATE = [];

export const SET_BRIDGES = 'SET_BRIDGES';

export const setBridges = (bridges) => ({
  type: SET_BRIDGES,
  bridges
})

const bridgesReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_BRIDGES:
      return action.bridges;
    default:
      return state;
  }
};

export default bridgesReducer