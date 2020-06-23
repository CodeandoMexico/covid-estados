export const LOAD = "estados/load";
export const SUCCESS = "estados/success";
export const ERROR = "estados/error";
export const SET = "estados/set";

const INITIAL_STATE = {
  load: false,
  fetch: false,
  data: [],
  estado: {},
  error: "",
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        load: true,
      };

    case SUCCESS:
      return {
        ...state,
        data: action.payload,
        load: false,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        load: false,
      };
    case SET:
      return {
        ...state,
        estado: action.payload,
      };

    default:
      return state;
  }
  return state;
}
