module.exports = function group(json) {
  let groupedJson = json.reduce((prev, curr) => {
    const key = curr.jurisdiccion_codigo_indec;
    if (!prev[key]) {
      prev[key] = curr;
      prev[key].vacunas = [
        {
          vacuna_nombre: curr.vacuna_nombre,
          primera_dosis_cantidad: curr.primera_dosis_cantidad,
          segunda_dosis_cantidad: curr.segunda_dosis_cantidad,
        },
      ];
    } else {
      const prevQty1 = parseInt(prev[key].primera_dosis_cantidad, 10);
      const currQty1 = parseInt(curr.primera_dosis_cantidad, 10);
      prev[key].primera_dosis_cantidad = prevQty1 + currQty1;

      const prevQty2 = parseInt(prev[key].segunda_dosis_cantidad, 10);
      const currQty2 = parseInt(curr.segunda_dosis_cantidad, 10);
      prev[key].segunda_dosis_cantidad = prevQty2 + currQty2;

      prev[key].vacunas = [
        ...prev[key].vacunas,
        {
          vacuna_nombre: curr.vacuna_nombre,
          primera_dosis_cantidad: curr.primera_dosis_cantidad,
          segunda_dosis_cantidad: curr.segunda_dosis_cantidad,
        },
      ];
    }
    return prev;
  }, {});

  const data = Object.keys(groupedJson)
    .map((key) => {
      return groupedJson[key];
    })
    .reverse();

  return data;
};
