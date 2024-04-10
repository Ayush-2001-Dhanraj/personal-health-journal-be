module.exports = function isValidDate(dateString) {
  const date = new Date(dateString);
  const isValid = !isNaN(date.getTime());

  return isValid;
};
