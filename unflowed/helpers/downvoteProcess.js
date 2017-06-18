//      

const downvoteProcess = (qual        )         => {
  let result = '';
  if (qual === 'Genius') {
    result = 'Plausible';
  } else if (qual === 'Plausible') {
    result = 'Swill';
  }
  return result || qual;
};

export default downvoteProcess;
