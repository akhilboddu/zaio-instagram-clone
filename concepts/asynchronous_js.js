// Code in JS is asynchronous
// console.log("1");
// let a = 0;
// setTimeout(() => {
//   console.log("2");
//   a = 2;
// }, 2000);
// console.log("3");
// console.log(a * 20)

const url = "https://jsonplaceholder.typicode.com/posts";

const fetchPostsWithPromises = () => {
  console.log("fetching posts...");
  fetch(url)
    .then((response) => response.json()) //a promise is being returned
    .then((data) => { // anytime a promise is returned we can use the .then chaining to access the data from the promise
      console.log(data[0]);
    })
};

const fetchPostsWithAsync = async () => {
    console.log("fetching posts...");
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);
}

fetchPostsWithAsync()
