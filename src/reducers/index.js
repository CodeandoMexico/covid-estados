const initialState = {
  estados: []
};

export default (state = initialState, action) => {
  let estados = state.estados.slice(1);

  switch (action.type) {

    case "FETCH_ESTADOS":
    default:
      estados = estados.concat(action.payload)
      // console.log(action.payload)

      // console.log( estados )
      return {
        ...state,
        estados
      };

  }
}
