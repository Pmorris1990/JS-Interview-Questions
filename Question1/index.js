// 1. The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable 
// have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that rejects.
// Replicate this functionality by implementing a method named myPromiseAll.

function myPromiseAll(){
if (!Promise.each) {
    Promise.each = function(promises, callback, error) {
      if (promises && Array.isArray(promises)) {
        promises.forEach(p => {
          p.then((res => {
            callback(res)
          }, err => {
            if (error) {
                error(err);
            } else {
                console.log(err);
            }          
          })
        )});
      }
    }
  }
}
  // Usage
  let updateState = "Status update";
  Promise.each([recordVideoOne, recordVideoTwo, recordVideoThree], updateState);
  console.log(updateState);