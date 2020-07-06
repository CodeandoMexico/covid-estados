import axios from "axios";
import { csvToJson } from "../utils";
import { LOAD, SUCCESS, ERROR } from "../reducers/Estados";

// Auxiliar function for routes
function urlify(str) {
  var map = {
      '-' : ' ',
      'a' : 'á|à|ã|â|À|Á|Ã|Â',
      'e' : 'é|è|ê|É|È|Ê',
      'i' : 'í|ì|î|Í|Ì|Î',
      'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
      'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
      'c' : 'ç|Ç',
      'n' : 'ñ|Ñ'
  };

  str = str.toLowerCase();

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], 'g'), pattern);
  };

  return str;
};

//Actions
export const getEstados = () => async (dispatch, getState) => {
  dispatch({
    type: LOAD,
  });
  try {
    const {
      data: { records: estados },
    } = await axios.get(
      "https://api.airtable.com/v0/appelr2zBXKCJPWJS/covidmx?api_key=keymOwmuSwgNcTH7p&sort%5B0%5D%5Bfield%5D=estado"
    );
    const responseDetil = await axios
      .get(
        "https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos/estados_hoy.csv"
      )
      .then((response) => csvToJson(response.data));
    const lisEstados = estados.map((s) => {
      return {
        option: s.fields.estado,
        url: `/estado/${urlify(s.fields.estado)}`,
        id: urlify(s.fields.estado),
        ...s.fields,
      };
    });
    dispatch({
      type: SUCCESS,
      payload: {
        data: lisEstados,
        details: responseDetil,
      },
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
