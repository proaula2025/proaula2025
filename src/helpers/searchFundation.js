export const getFundationByName = (listaFundaciones = [], name = "") => {
  name = name.toLocaleLowerCase().trim();
  if (name.length === 0) return listaFundaciones;

  console.log(listaFundaciones);

  return listaFundaciones.filter(
    (fundation) =>
      fundation.nombreCompleto.toLocaleLowerCase().includes(name) ||
      fundation.email.toLocaleLowerCase().includes(name)
  );
};
