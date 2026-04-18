export const formatTemperature = (temp) => {
  return temp ? `${temp.toFixed(1)}°C` : "--°C";
};

export const formatHumidity = (hum) => {
  return hum ? `${hum.toFixed(1)}%` : "--%";
};

/**
 * Muestra la hora de la actualización dinámica [cite: 9]
 */
export const formatLastUpdate = (date) => {
  if (!date) return "Sin datos";
  const d = new Date(date);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};