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
        content: `Family science research is both a siren and a double-edged sword. 
        Psychological studies pique the societal interest in positive and negative ways 
        based on positive or negative outcomes. The outcome, however, is not always a 
        definite truth. Psychology is a young science that piques our interest because it 
        helps us understand the behaviors of each other, but when we look at a study we 
        often do not thoroughly examine them for their own flaws and shortcomings. Rather, 
        we take them as doctrine for life, and we typically walk away with a warped reality 
        over the truth.

        When taking a look at a 2005 American Psychiatric Association (APA) brief on 
        same-sex marriage and child outcomes, a bold claim is stated that same-sex marriage 
        has no effect on children. For some, this will support their lifestyle or views and 
        for others it will be just the opposite. Most people on either side will in fact 
        choose to accept or ignore it without even looking at the evidence. Yet the evidence 
        is key to understanding how accurate this claim is.

        Diving deeper with the article “Same-sex parenting and children’s outcomes: A closer 
        examination of the American Psychological Association’s brief on lesbian and gay 
        parenting” by Loren Marks actually addresses the data issues from this APA brief. 
        Well, the outcomes claimed in the brief are recorded in the study. There happens to 
        be quite a few problems with the way the data was collected. Many of the families' 
        backgrounds come from more economically well-off, are dominantly Caucasian in race, 
        small groups of surveyed individuals, and even show bias by throwing out a study from 
        teachers in favor of information gathered by the parents alone.

        A rational person analyzing this data can conclude that it is actually far better to 
        ask a teacher who has no desire to improve or justify their reputation for parenting; 
        the teacher is simply there to pass on the grades. An irrational person can also 
        conclude that it is better to use a larger pool of individuals than a smaller pool 
        because you will get a greater understanding of societal norms. Things like this are 
        obvious when we look at the research, but unfortunately, if we never have to look at 
        the research, we can’t determine why it may be correct or incorrect.

        I myself have found the 2005 APA brief on same-sex marriage and child outcomes to be 
        an accurate interpretation; however, because of the data collection methods, I would 
        not ever use this brief to convince someone else. Like the data in the brief, my 
        experiences are limited to a small pool of individuals rather than a majority of the 
        country or even the world. So me seeing a reflection of this APA brief does not mean 
        that it is 100% true. Having seen the data, I’m aware of that, and I can understand 
        that well. These instances may be true. There are possibly children out there who are 
        suffering or are disadvantaged due to same-sex marriage and because of that thought, I 
        am actually more intrigued and more determined. So my motivation to go seek out newer 
        and better studies just to satisfy my curiosity or improve my community is far greater 
        by knowing the data quality of the APA brief. So I am analyzing the data in a study 
        rather than accepting it as doctrine. I’m not only finding out the possible truth, 
        but I am also developing a habit of understanding more about the world, rather than 
        just blindly accepting or denying something. That makes me a more active participant 
        in society, in the sciences, and even in my community.`
    },

    {
        title: "Family Systems Theory",
        date: "May 9, 2026",
        image: "images/blog-entries/post-2.jpg",
        summary: "The impact of relationships in a fmaily",
        content: `Family system theory is like the Frenchman from the 2003 film “The Matrix 
        Reloaded”. It is fixated on cause and effect, but in this case, it deals only with t
        he relationships within your family. For this reason, it stands to be more of a 
        model tool than a theory for most observers.

        The first essence of Family Systems Theory is its boundary system. There are 
        various relationships within your family unit, from parents to children to 
        grandparents and even friends. All these relationships have a different value or 
        boundary for the intimacy involved. Intimacy in this case means anything, from how 
        you love one another to sharing responsibility with one another. For example, it 
        could be a friendly hug and kiss with each other, or it could mean that you share 
        the burden of the household like financial plans or disciplinary action for other 
        members in the house. 

        The boundary system inherently sets core members, usually the mother and the father,
        that share all intimacy and then disseminate outward. Children are next to recieve 
        love and affection as well as discipline and acted upon them, but do not act 
        discipline upon the core unit. The children and the core unit, then disseminate 
        that to extended family and friends. For example, if the children enact discipline
        towards their grandmother, it would be house rules; such as taking your shoes off 
        before you enter the house, or they would give a hug to grandma and maybe a 
        hi-five to a friend entering the home.

        The second essence of family systems is how the different relationships interact. The 
        ideal system has a wife and husband at the center as a core unit and then children 
        slightly below them with a boundary of intimacy in between. This boundary ensures 
        household responsibilities are primarily taken care of by the mother and father. The 
        children will have small roles, like doing their own dishes, making their beds, 
        informing guests of the house rules when they invite them over. Parents would educate 
        and support the children, and the children would grow from their parental unit for 
        guidance. However, not every family is like this. With my own personal experience, my 
        mother tends to put a lot more responsibility, both financial and housework, on me and 
        my sister. This resulted in almost no boundary between the core unit and the children in 
        our home. The result was my stepfather and mother were more of a peer group rather than 
        superiors. I often obtained more life lessons from school and personal experience than I 
        did from my parents. This resulted in a unique relationship where I typically, after the 
        age of fifthteen, would educate my mother on the responsibilities of being an adult 
        in the United States of America—- she is an Australian citizen and somewhat of a 
        recluse, meaning she constantly needed guidance in these matters even today.

        As stated earlier, family systems is a cause-and-effect scenario. The cause is my 
        mother treats me like a peer by putting more responsibility on me and the effect is 
        I do become more independent to observers. However, the negative effect is I am 
        subject to my own experiences rather than the guidance of others. This means not 
        only do I have to grow up faster, but it is also far more difficult for me to do so. 
        WhiIe turned out to be a decently successful member of society. It has resulted in the 
        opposite for my sister, who has substance dependencies and did not leave home until she 
        was 31 years old. I myself left home before I was 18 and began engaging as an active 
        adult at that same time. 

        Our family system may seem like it instills superior traits in a child, however, when 
        compared to the traditional upbringing that my father was encompassed in. You can see 
        that they had far more success through the range of his ten siblings. Each of them went 
        to college and obtained a degree, and have only been unemployed when in between jobs 
        that they had already applied for and obtained. They all have successful families and 
        have traveled to the world and lived within their means. They also are very social and 
        interact with their communities in positive ways, such as service friendships and even 
        hosting events like music festivals. The difference between my father and I is he has 
        been far more socially interacting with a community and more confident in pressing 
        forward in his career. Because he had the boundary between the core unit and the 
        children and his family. This family system allowed him to be a kid and gain the 
        experience he needed to interact with the people around him, as well as plot his 
        career and household responsibilities. `
    },

    {
        title: "Family Systems Thory",
        date: "May 16, 2026",
        image: "images/blog-entries/post-3.jpg",
        summary: "Sharing Culture",
        content: `Today, “culture” is often a word or topic that separates people or places 
        from others. The definition of culture is “the shared set of beliefs, values, 
        customs, behaviors, and artifacts that characterize a group or society”. Modern 
        social norms push individuals not to share their culture because it is key to their individuality, but the essence of culture is in the word “shared”. When looking at family relations, culture is identified among its members is known as familiar culture.  This culture is embedded in the boundaries set by the family system, the rules of the household, and the societal class in which the family functions. 

        Relationships in a family system define the foundation of its culture. 
        Parents can be involved with the kids' lives or outsource the responsibility to a 
        nanny. This will not only determine the memories of a person’s childhood but also 
        instills the perspective and values a person has when they create their own family. 
        For example, in a family where the parents are heavily involved in the kids' 
        education but not their social lives, this will push these children to focus more 
        on grades rather than friendships. This may result in attending Ivy League schools 
        but poor networking skills in their careers and even in finding a spouse. 

        The ideal home has two parents that are united in raising their children. Each of 
        these parents will enter the family with their own family culture from their own 
        childhood. These cultures are often similar but can differ in small ways. These 
        similarities set up the household culture with clearly defined rules that are both 
        spoken and unspoken. For example, if both parents' culture is to have shoes taken off 
        in the house, this will be a clearly defined rule for all who enter the home. Children 
        will not only follow this rule, but are expected to inform guests when they enter the 
        house as well. 

        As parents create the family culture, they will sacrifice and adopt parts of their own 
        culture with their partner. This is done to reinforce the values parents grew up with and to 
        create values that are best for their children in the modern world. If the father comes from a 
        home where he neatly stacks his shoes on a shoe rack and the mother comes from a home where 
        she just kicks them off into the corner, these are two opposing cultures. It is here that 
        the parents will choose to sacrifice one value for the other. 

        A key factor in determining which part of the culture you will adopt or sacrifice 
        is often a family's class within society. In regard to shoe placement, if a family 
        is a higher class, they will place them stacked. This is not just so family members 
        can easily access their shoes but more so for guests who enter the home to see the 
        neat and tidy values of the upper class. lower class and even the beginning of 
        middle class families will find shoes just kicked off into a corner because of the 
        value in this culture. The cultural value is to access your shoes quickly and get 
        them off quickly because the person in this class is always working and on the go.

        One key factor in a family's class of values is their ambition for a higher class 
        as well. If families are lower or middle class trying to rise above and improve 
        their family's station they will often adopt the principles and values of the upper 
        class. Just like with the example of two parents bringing in separate cultures, a 
        family seeking a higher class will then meld the original family culture with the 
        new values of the class they are seeking to be a part of. In the example of shoes, 
        a family that is used to kicking them off would then start stacking them neatly in 
        the corner, in cubbies, or on a shelf for proper presentation. This family does not 
        start with the cubby, but they could start with neat rows of shoes to practice and 
        take a step forward to a new class system values. These values are not just found 
        in shoe habits but also in education, finances, and topics of conversation.
                
        When all is said and done, the modern belief that culture is a person's 
        individuality and is not meant to be shared proves to be wrong. Individually, 
        everyone does have their own familiar culture, but they share it with other members 
        of their family and their class. Each person shares it with those they invite into 
        their homes, and they meet on the street every day. Culture is meant to be shared as 
        it does not separate people as independents, but rather unites groups within the 
        same values, beliefs, and principles.`

    },

    {
        title: "Coming Soon",
        date: "May 23, 2026",
        image: "images/blog-entries/coming-soon.jpg",
        summary: "",
        content: ``

    },

    {
        title: "Coming Soon",
        date: "May 30, 2026",
        image: "images/blog-entries/coming-soon.jpg",
        summary: "",
        content: ``

    },

    {
        title: "Coming Soon",
        date: "June 6, 2026",
        image: "images/blog-entries/coming-soon.jpg",
        summary: "",
        content: ``

    },

     {
        title: "Coming Soon",
        date: "June 13, 2026",
        image: "images/blog-entries/coming-soon.jpg",
        summary: "",
        content: ``

    },

     {
        title: "Coming Soon",
        date: "June 27, 2026",
        image: "images/blog-entries/coming-soon.jpg",
        summary: "",
        content: ``

    },

     {
        title: "Coming Soon",
        date: "July 4, 2026",
        image: "images/blog-entries/coming-soon.jpg",
        summary: "",
        content: ``

    },

     {
        title: "Coming Soon",
        date: "June 11, 2026",
        image: "images/blog-entries/coming-soon.jpg",
        summary: "",
        content: ``

    },
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