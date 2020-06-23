import axios from "axios";
import { csvToJson } from "../utils";
import { LOAD, SUCCESS, ERROR } from "../reducers/Estados";

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
        url: `/estado/${s.id}`,
        id: s.id,
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
