const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("title").textContent = data.title;
      document.getElementById("body").textContent = data.body;
    })
    .catch(err => console.error("Error loading post:", err));
