export const formatNumber = (number) =>
  new Intl.NumberFormat('es-AR', {
    maximumFractionDigits: 2,
  }).format(number);
