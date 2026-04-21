//=== Blog Posts===//
const posts = [
  {
    title: "My First Post",
    date: "April 21, 2026",
    content: "This is my first blog post made with JavaScript and HTML."
  }
];

const blogContainer = document.querySelector("#blog-container");

posts.forEach(post => {
  const article = document.createElement("article");

  article.innerHTML = `
    <h2>${post.title}</h2>
    <p><strong>${post.date}</strong></p>
    <p>${post.content}</p>
  `;

  blogContainer.appendChild(article);
});