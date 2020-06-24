import { createSelector } from "reselect";

const getEstateById = (state, id) => {
  const { data: estados, details } = state.estados;
  const estado = estados.find((s) => s.id === id) || {};
  const { option: nameEstado } = estado;
  let nameFindEstate = nameEstado;
  switch (nameEstado) {
    case "Estado de México":
      nameFindEstate = "México";
      break;
    default:
      break;
  }
  const detailByName = details.find(
    (s) => s.estado === nameFindEstate && nameFindEstate.trim()
  );
  return {
    ...estado,
    ...detailByName,
  };
};

export const getEstate = createSelector(getEstateById, (details) => {
  return details;
});
