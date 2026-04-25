// === Navagation Menu Button (Mobile) === //
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuBtn.classList.toggle("change");
    });
}

// === Blog Posts === //
const posts = [
    {
        title: "My First Post",
        date: "April 21, 2026",
        content: "This is my first blog post made with JavaScript and HTML."
    }
];

const blogContainer = document.querySelector("#blog-container");

if (blogContainer) {
    posts.forEach(post => {
        const article = document.createElement("article");

        article.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>${post.date}</strong></p>
            <p>${post.content}</p>
        `;

        blogContainer.appendChild(article);
    });
}

// === Comments Section with Giscus === //
const commentsContainer = document.querySelector("#comments-container");

if (commentsContainer) {
    const commentsTitle = document.createElement("h2");
    commentsTitle.textContent = "Comments";
    commentsContainer.appendChild(commentsTitle);

    const giscusScript = document.createElement("script");
    giscusScript.src = "https://giscus.app/client.js";

    giscusScript.setAttribute("data-repo", "STCrosland/family-relations-blog");
    giscusScript.setAttribute("data-repo-id", "R_kgDOxxxxxx"); 
    giscusScript.setAttribute("data-category", "General");
    giscusScript.setAttribute("data-category-id", "DIC_kwDOxxxxxx");
    giscusScript.setAttribute("data-mapping", "pathname");
    giscusScript.setAttribute("data-strict", "0");
    giscusScript.setAttribute("data-reactions-enabled", "1");
    giscusScript.setAttribute("data-emit-metadata", "0");
    giscusScript.setAttribute("data-input-position", "bottom");
    giscusScript.setAttribute("data-theme", "preferred_color_scheme");
    giscusScript.setAttribute("data-lang", "en");
    giscusScript.setAttribute("crossorigin", "anonymous");
    giscusScript.async = true;

    commentsContainer.appendChild(giscusScript);
}