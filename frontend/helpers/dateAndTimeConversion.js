

function formatDate(isoDateString) {
    if (!isoDateString) {
        return 'Invalid Date';
      }
      return isoDateString.split('T')[0];
}


export default formatDate