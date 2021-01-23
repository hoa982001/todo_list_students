const initState = [
  {
    id: 1,
    name: 'Hung',
    sex: 'Nam',
    hobby: 'cau long'
  },
  {
    id: 2,
    name: 'Minh',
    sex: 'Nam',
    hobby: 'da bong'
  },
  {
    id: 3,
    name: 'Manh',
    sex: 'Nam',
    hobby: 'bong ban'
  }
]

const ListPerson = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.payload];
    case 'DELETE_PERSON':
      return state = state.filter(item => item.id != action.payload);
    case 'EDIT_PERSON':
      let newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id == action.payload.id) {
          newState[i].name = action.payload.name;
          newState[i].sex = action.payload.sex;
          newState[i].hobby = action.payload.hobby;
        }
      }
      return newState;
    // let objIndex = newState.findIndex(obj => obj.id === action.payload.id);
    // newState[objIndex].name = action.payload.name;
    // newState[objIndex].sex = action.payload.sex;
    // newState[objIndex].hobby = action.payload.hobby;
    // case 'SEARCH_PERSON':
    //   return state = state.filter();
    default:
      return state;
  }
};

export default ListPerson;