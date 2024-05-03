const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  function formatDate(date) {
    const month = months[date.getMonth()];
    const day = date.getDay();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }
  
  module.exports = { formatDate };