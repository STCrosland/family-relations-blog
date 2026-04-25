// === Navigation Menu === //
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
        menuBtn.classList.toggle("change");
    });
}

// === BLOG ENTRIES === //
const posts = [
    {
        title: "The Value & Challenges of Family Science Research",
        date: "April 21, 2026",
        image: "images/blog-entries/post-1.jpg",
        summary: "First blog post summary.",
        content: "This is my first blog post made with JavaScript and HTML."
    }
];

const blogContainer = document.querySelector("#blog-container");
const detailPanel = document.querySelector("#detail-panel");

// === LOAD GISCUS COMMENTS === //
function loadGiscus(container, postTitle) {
    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";

    script.setAttribute("data-repo", "STCrosland/family-relations-blog");
    script.setAttribute("data-repo-id", "R_kgDOSI_f8w");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOSI_f884C7qFM");

    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", postTitle);

    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light_high_contrast");
    script.setAttribute("data-lang", "en");

    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);
}

if (blogContainer && detailPanel) {
    posts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("entry-card");

        article.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
        `;

        article.addEventListener("click", () => {
            detailPanel.innerHTML = `
                <button id="close-panel" aria-label="Close">&times;</button>

                <h2>${post.title}</h2>
                <img src="${post.image}" alt="${post.title}">
                <p><strong>${post.date}</strong></p>
                <p>${post.content}</p>

                <h3>Comments</h3>
                <div id="comments-container"></div>
            `;

            detailPanel.hidden = false;

            const commentsContainer = document.querySelector("#comments-container");
            loadGiscus(commentsContainer, post.title);

            document.querySelector("#close-panel").addEventListener("click", () => {
                detailPanel.hidden = true;
                detailPanel.innerHTML = "";
            });
        });

        blogContainer.appendChild(article);
    });
}