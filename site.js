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
        date: "April 30, 2026",
        image: "images/blog-entries/post-1.jpg",
        summary: "Research can enliten or misslead indivuals that do not check the data.",
        content: `Family science research is both a siren and a double-edged sword. Psychological studies pique the societal interest in positive and negative ways based on positive or negative outcomes. The outcome, however, is not always a definite truth. Psychology is a young science that piques our interest because it helps us understand the behaviors of each other, but when we look at a study we often do not thoroughly examine them for their own flaws and shortcomings. Rather, we take them as doctrine for life, and we typically walk away with a warped reality over the truth.

When taking a look at a 2005 American Psychiatric Association (APA) brief on same-sex marriage and child outcomes, a bold claim is stated that same-sex marriage has no effect on children. For some, this will support their lifestyle or views and for others it will be just the opposite. Most people on either side will in fact choose to accept or ignore it without even looking at the evidence. Yet the evidence is key to understanding how accurate this claim is.

Diving deeper with the article “Same-sex parenting and children’s outcomes: A closer examination of the American Psychological Association’s brief on lesbian and gay parenting” by Loren Marks actually addresses the data issues from this APA brief. Well, the outcomes claimed in the brief are recorded in the study. There happens to be quite a few problems with the way the data was collected. Many of the families' backgrounds come from more economically well-off, are dominantly Caucasian in race, small groups of surveyed individuals, and even show bias by throwing out a study from teachers in favor of information gathered by the parents alone.

A rational person analyzing this data can conclude that it is actually far better to ask a teacher who has no desire to improve or justify their reputation for parenting; the teacher is simply there to pass on the grades. An irrational person can also conclude that it is better to use a larger pool of individuals than a smaller pool because you will get a greater understanding of societal norms. Things like this are obvious when we look at the research, but unfortunately, if we never have to look at the research, we can’t determine why it may be correct or incorrect.

I myself have found the 2005 APA brief on same-sex marriage and child outcomes to be an accurate interpretation; however, because of the data collection methods, I would not ever use this brief to convince someone else. Like the data in the brief, my experiences are limited to a small pool of individuals rather than a majority of the country or even the world. So me seeing a reflection of this APA brief does not mean that it is 100% true. Having seen the data, I’m aware of that, and I can understand that well. These instances may be true. There are possibly children out there who are suffering or are disadvantaged due to same-sex marriage and because of that thought, I am actually more intrigued and more determined. So my motivation to go seek out newer and better studies just to satisfy my curiosity or improve my community is far greater by knowing the data quality of the APA brief. So I am analyzing the data in a study rather than accepting it as doctrine. I’m not only finding out the possible truth, but I am also developing a habit of understanding more about the world, rather than just blindly accepting or denying something. That makes me a more active participant in society, in the sciences, and even in my community.`
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
            const paragraphs = post.content
                .split(/\n\s*\n/)
                .map(paragraph => `<p>${paragraph.trim()}</p>`)
                .join("");

            detailPanel.innerHTML = `
                <button id="close-panel" aria-label="Close">&times;</button>

                <h2>${post.title}</h2>
                <img src="${post.image}" alt="${post.title}">
                <p><strong>${post.date}</strong></p>

                ${paragraphs}

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