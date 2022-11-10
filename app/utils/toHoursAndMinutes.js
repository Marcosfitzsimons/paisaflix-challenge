const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours} hr ${minutes > 0 ? minutes + ' mins' : ''}`
};

export default toHoursAndMinutes;
