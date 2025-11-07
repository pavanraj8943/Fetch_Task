document.getElementById("click").addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json())
        .then((data) => {
            str = ""
            data.forEach(ele => {
                str += `
    <li><a href="./add.html?id=${ele.id}">${ele.title}</a></li>`
            });
            document.getElementById("list").innerHTML = str
        })
        .catch(err => console.error("Error fetching posts:", err));
})