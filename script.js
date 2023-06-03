let display = document.querySelector(".display");

function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts/12355")
    .then((response) => {
      if (!response.ok) {
        throw "Response failed";
      }
      console.log(response.json());
    })
    .then((data) => {
      if (Object.keys(data).length === 0) {
        throw "Empty response";
      }
    })
    .catch((error) => {
      display.textContent = error;
    });
}

getData();
