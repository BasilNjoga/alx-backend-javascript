export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve('Success');
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  p.then(("status: 200\nbody: 'Success'")).catch(('The fake API is not working currently'));

}
