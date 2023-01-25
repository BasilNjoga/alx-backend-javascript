function getFullResponseFromAPI(success) {
  if(success) {
    resolve("status: 200\nbody: 'Success'")
  } else {
    reject("The fake API is not working currently")
  }

}