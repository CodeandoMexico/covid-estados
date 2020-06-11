const initialState = {
  estadosArr: [],
  estadosObj: {},
};

const arrToObj = arr => {
  const obj = {};
  arr.forEach(v => {
    obj[v.id] = v.fields
  })
  return obj;
}

export default (state = initialState, action) => {
  // let estados = state.estados.slice(1);
  switch (action.type) {

    case "FETCH_ESTADOS":
      return {
        ...state,
        estadosArr: action.payload,
        estadosObj: arrToObj(action.payload),
      }
    default: return state;
      // estados = estados.concat(action.payload)
      // console.log(action.payload)
      // console.log( estados )
      // return {
      //   ...state,
      //   estados
      // };
  }
}
