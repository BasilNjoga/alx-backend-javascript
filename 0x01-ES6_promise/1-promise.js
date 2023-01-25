export default function getFullResponseFromAPI(success) {
  const p = new Promise((resolve, reject) => {
    if (success) {
      resolve('stuff workded');
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
  return p;
}

console.log(getFullResponseFromAPI(false));
