export const useDateFormatter = () => {
    const formatDate = (date) => {
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return new Date(date).toLocaleDateString('en-GB', options).replace(/ /g, '-');
    };
  
    return { formatDate };
  };