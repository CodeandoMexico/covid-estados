import axios from "axios";
import { csvToJson, urlify } from "../utils";
import { LOAD, SUCCESS, ERROR } from "../reducers/Estados";

const API_URLS = {
  lastUdated:
    "https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos/last_updated.csv",

  airTable:
    "https://api.airtable.com/v0/appelr2zBXKCJPWJS/covidmx?api_key=keymOwmuSwgNcTH7p&sort%5B0%5D%5Bfield%5D=estado",

  dataCovid:
    "https://raw.githubusercontent.com/mexicovid19/Mexico-datos/master/datos/estados_hoy.csv",
};

//Actions
export const getEstados = () => async (dispatch, getState) => {
  dispatch({
    type: LOAD,
  });
  try {
    const lastUdatedData = await axios.get(API_URLS.lastUdated);

    const {
      data: { records: estados },
    } = await axios.get(API_URLS.airTable);

    const responseDetil = await axios
      .get(API_URLS.dataCovid)
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
        lastUdatedData: csvToJson(lastUdatedData.data)[0].updated_at,
      },
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};
