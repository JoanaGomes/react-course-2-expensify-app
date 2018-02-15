const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('This is my resolved data'), 1500);
});

promise
  .then((ret) => {
    console.log(ret);

    return 'some data';
  })
  .then((str) => {
    console.log(str);
  })
  .catch((err) => {
    console.error(err);
  });