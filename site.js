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
        title: "Sharing Culture",
        date: "May 16, 2026",
        image: "images/blog-entries/post-3.jpg",
        summary: "Culture is ment to be shared to build healthy families",
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
        title: "Empathetic Listening & Child Development",
        date: "May 23, 2026",
        image: "images/blog-entries/post-4.jpg",
        summary: "The impact our assumtions have on childen vs. listening to encourage their divelopment",
        content: `Society currently moves at miles a minute. That leaves so many people 
        feeling lost or even confused. These disrupting feelings stem from the lack of 
        empathetic listening in society. With the invention of the smartphone and 
        dependency on so many other technologies, people have become more biased in their 
        assumptions and wave off the responsibilities at a whim.

        When raising children, empathetic listening is a key construct. Empathetic 
        listening allows the adult to understand not only the child but the best path to 
        raise them to adulthood. All adults, from parents to on-lookers have a lasting 
        impact on children even with short interactions. 

        Traditional parenting sees a kid throwing a tantrum and adults determine they need 
        to give this child responsibility, such as an extra chore or a thought exercise. 
        This teaches the child discipline and a role within their household. Today, 
        however, many adults go online and diagnose their child with autism, homosexuality, 
        asperger‘s, or any kind of label that frees said adult from any responsibility. 
        Adults today are happier finding information that will back their own opinions, 
        rather than empathetic listening when raising a child.

        A great example of this is often seen in young boys before pre-adolescence. Many 
        boys like to play with what is typically considered female oriented toys or choose 
        to wear bright colors like neon pink. These actions typically lead to a label that 
        the child is gay. There’s no evidence to suggest that these activities at a young 
        age bring harm to the child. Many adults will simply label a child gay. This 
        internship allows the adult to not teach the child to stop playing with toys as 
        they get older or to dress more appropriately for certain circumstances, like going 
        to a business meeting. The gay label conveniently removes the child-rearing 
        responsibility from the adult but not the responsibility to function in society 
        from the child.

        When looking at Daryl Bem’s Theory of Sexual Orientation, it is actually quite 
        clear that labels like gay are not possible for children before pre-adolescence. 
        The definition of homosexuality is in fact a sexual attraction to the same gender. 
        If a four year-old is playing with a Barbie, they do not have sexual attraction 
        towards the same gender. These children are actually experiencing sex-typical/atypical 
        activity and playmate preference. Simply put, they are figuring out what type of people 
        and things they like in and out of their gender roles. Traditionally, boys would be out 
        playing cops and robbers pretending to shoot guns and destroying things while girls 
        would be inside painting coloring or dressing up their Barbies. However, any child can 
        enter into the atypical gender role for play preference and enjoy things opposite to 
        their role without being homosexual.

        Having an atypical preference for your gender role of play does not mean you will turn 
        out to be gay. If we look at a boy who is hanging out with his sisters and helping 
        them do makeovers all the time this child could in fact one day become an artist or a 
        graphic designer, but it does not mean that they are gay. Now the adults that put the 
        homosexual label on their children will often affect the next stage in the theory of 
        sexual orientation: feeling different from opposite/same-sex peers. 

        By placing a label on someone at such a young age, they will have nearly a lifetime of 
        bias reinforcement. This means that they could experience sexual attraction during 
        puberty because of a flush of hormones going through their body rather than a physical 
        trigger in the outside world. These children will interpret it that they are attracted 
        to the same sex because there happens to be same-sex members around them.

        A simple assumption or personal opinion can have a lifelong lasting effect on 
        children. Rather than expressing "your truth", which is just simply an opinion, 
        adults need to seek out facts before they act. As mentioned in a previous blog, they 
        must check studies and these facts, so they can choose the right ones and formulate a 
        plan for their family. This way, when they raise children, these adults, whether they 
        be an uncle, a sibling, and especially a parent, will know exactly how to prepare the 
        child not only for the adult world but to rear a family themselves. By putting down 
        phones and AI and simply listening to a child we can figure out why children are doing 
        the things they're doing and even how to take those aspects and incorporate them into 
        chores and other responsibilities to help prepare them for the future. There's 
        absolutely no need to write them off with a thirty second assumption they will define 
        the rest of their lives.`

    },

    {
        title: "Preparing For Marriage",
        date: "May 30, 2026",
        image: "images/blog-entries/post-5.jpg",
        summary: "Stages of commpaninship that prepare for marriage",
        content: `Over the last thirty years in the United States, necessities have 
        increased in cost while most luxuries have become significantly cheaper. Housing 
        costs, gas prices, and food have increased while smartphones, fancy clothes, and 
        smartwatches have become wildly available for everyone. This is also the case with 
        how people are dating and preparing for marriage. 

        Modern dating currently consists of two individual people hanging out as much as 
        they can. This is done rather than using the traditional dating model. These 
        couples will often sit and do individual tasks like homework, binge-watching TV, 
        and doom scrolling social media as they hang out with one another. These instances 
        will occur multiple days per week to every single day with a traditional outing 
        which as a date occurring once a month or even not at all. The luxury of constant 
        companionship that marriage has to offer has now become regularly available with 
        this practice of hanging out. Yet the necessary outing to get to know each other 
        on a date has nearly disappeared from the modern relationship.

        Traditionally, a person goes through four stages of companionship: dating, 
        courting, engagement, and marriage. Dating is the first stage of companionship and 
        is a non-committal stage. This is just like the term for an outing, darting, 
        because the individuals will begin to get to know each other. During a dating 
        stage, the best practice is to speak to many potential partners and learn what is
        the best match for the individual before committing to the next stage. This i
        ncludes understanding desires, goals, and dislikes for a portal future family.

        Courting is the second stage and where real a commitment occurs in the 
        relationship. In this step, individuals become a couple, but they are still getting 
        to know each other through dates. Dates are key because they provide weekly outings 
        to get to know each other and grow the relationship. This allows the individuals to 
        understand themselves and their participation the couple. While commitment is 
        established in this stage, the modern practice of hanging out is detrimental. 

        Couples still need to grow as individuals to learn how to share themselves with one 
        another. Otherwise, all the couple does is become one being mentally and emotionally. 
        This is dangerous because the couple is two physically separate people. They each have 
        different roles in life and as well as have different roles in their future family. 
        So learning to function separately and together is crucial.

        The third stage is engagement, where the commitment goes from getting to know each 
        other to forming a family. It is this stage that relies on the necessity of dating. 
        Without a solid foundation that dating and initial growth provide, an engagement 
        can fail or even set up an unstable marriage.  Committing to making a family 
        requires understanding your individual roles and understanding how the couple 
        functions as well. This prepares everyone to many the culture, values, and goals 
        for your new family. 

        The final stage is marriage, where the luxury of constant companionship arrives. 
        The companionship is brought in at this point because the two Indians have taken 
        their time to understand what they want, need, and can give in their new family. 
        This luxury is earned just like saving for a luxury thirty years ago was saved for. 
        It makes the end product more cherished and last longer. 

        To prepare for the best possible marriage, it is vital that individual do not rush 
        into the luxury of constant companionship. Building lasting families depends on 
        taking time to personally prepare for the future. To raise a child it can take a 
        minimum of eighteen years and still parents will be involved after. So creating a 
        lasting family should take a significant time as well.`

    },

    {
        title: "Marriage Preperation",
        date: "June 6, 2026",
        image: "images/blog-entries/post-6.jpg",
        summary: "Marriage can have different goals and will have differnet reslts because of those goals. Preparing yourself and your partner with the same goals is key to the successful marriage of your choice",
        content: `Modern society provides an app, a machine, or even a service to handle the most complex to the most mundane aspects of daily life. The original thought was this would bring more independence to the average American as they would have more free time to do as they wish. In execution, this concept has made modern generations less prepared in every aspect of their lives. This is seen heavily in the marriage and population rates of the United States.
        
        Since the early 2000s, there has been a concept that maturity is required for the i
        deal marriage. Most people assume this maturity comes after finishing higher 
        education, developing a career, and discovering one’s own inner identity. Well, 
        this can make a person more mature, but it does not guarantee preparation nor an 
        ideal marriage. In fact, at times it can create boundaries and biases from a long 
        life of habits with end goals in mind. 

        The study “A state of our unions 2022” found that those who engage in marriage are 
        young tend to be more satisfied. Unlike people who are 25 or older, these young 
        couples do not have expectations of not only the marriage itself but how their life 
        must be. These expectations are biases that an individual forms by committing to a 
        single life plan such as a career or a certain education path. Younger couples tend 
        to be more flexible about their individuality as they grow more as a couple than an 
        individual.

        Well, this study does suggest that younger couples are the happier individuals. It 
        is also inferred that they are more codependent. This is because the changes they 
        go through our changes and sacrifices for the marriage and family unit itself. This 
        is not necessarily a bad thing to do if family is your ultimate goal. However, that 
        also means marrying late is not always the most important thing to do and is key to 
        success in marriage. Preparation and maturity are the keys to marriage, but the 
        first question you need to ask yourself is what is the goal of your marriage?

        For those looking to rear a family and produce happy, healthy children, marrying 
        young is definitely a great option. For individuals looking to be a power couple 
        and influence the world around them or even just travel the world endlessly with no 
        specific goal of children in mind, marrying late can be the preferred option. By 
        marrying late, individuals will make their self discovery and their career achieved. 
        This will provide money and influence in their daily lives for whatever goals they 
        choose.

        So, to avoid an unhappy marriage it is not necessarily about age, but it’s about 
        your personal preparation and goals. If an individual prepares themselves to be part 
        of a relationship and family at a young age to rear children, they will succeed at 
        18 or even 16 years old. If an individual seeks a partner to help influence the 
        politics in their state or country, they can spend their entire 20s choosing the 
        right partner just like they chose the right majors in classes at college. 

        The "State of the Union" study focused on traditional nuclear family values, but 
        that is not all there is to life. As long as an individual puts in the work rather 
        than giving it up to some app or technology, they can prepare themselves for 
        whatever outcome they prefer. Even if they want to be married later and still 
        raise a family, they need only mentally prepare themselves to let go of the biases 
        of their accomplishments and we find equal happiness by sacrificing their lives to 
        be part of others. So the ideal from the early 2000s is correct, but the execution 
        in which many American people have done it has often been misguided.`

    },

     {
        title: "Opposites",
        date: "June 13, 2026",
        image: "images/blog-entries/post-7.jpg",
        summary: "Opposites of men and women may cause confilict but are ment to bring us closer together",
        content: `Relationships are like a birthday cake with one portion a sweet grain that rises into a loaf and the other portion sweet delicious frosting compressed out of sugar. Separately, these two could be no more different than each other and yet together they make something absolutely delicious that we cherish with every celebration or milestone in life. Men and women are just like that; complete opposites that that together make a beautiful relationship or family. These opposites can often cause conflict in a relationship but are also the balance that completes a man or a woman in life.

        When we look at the physical composition of men and women, we can see a difference, 
        particularly in their sexual experiences. Well, women are notoriously known for 
        developing earlier than men. It is men who develop their sexual drive first. Men 
        develop a sex drive at its peak when they are eighteen years old and women will 
        achieve this same peak at thirty-five years old. 

        This alone causes conflicts in couples having sexual experiences at younger ages. 
        Men can go twenty-four to forty-eight hours after sexual experience and they are 
        fully charged again. Women, however, can go a whole week or more without feeling an 
        urge for sexual experience when they are younger. This physical issue of sexual a 
        person's desires and needs then creates psychological problems. Women can feel that 
        they are only objects to be used sexually or that the love they share is based more 
        on a physical attraction than an emotional one.

        When we think of this in terms of balance, we can see that the man’s peak sex drive 
        at an early age is actually the driving force for population growth. It ensures 
        that while women are young and fertile that they will actually produce many children. 
        This will then replace the two individuals in this relationship and potentially even 
        increase the population with the number of children had. However, the balance also 
        comes into play with the lack of emotion from the man’s part and demand from the woman’s.

        For women to have a climax in their sexual experience, they actually need a fair 
        amount of emotional connection. To get this emotional connection, they have to feel 
        safe, warm, and welcomed by their partner. Men, on the other hand, will have the 
        sexual desire and afterward feel safe, warm, welcomed. Effort has to be put in on 
        the male side to introduce the emotion at the end and women have to put an effort 
        to sustain it at the end. However, the opposite will be able to maintain it with 
        ease at the given time. This balance allows the couple to fulfill each other’s 
        needs as well as also provide growth in their relationship at all times. It solves 
        the previous psychological problem of lack of emotion.

        Just like the birthday cake we used to celebrate milestones in life, men and women 
        work in unison when they are part of a couple. These two must overcome their 
        personal needs and desires to meet the needs of their partner. Each partner must go 
        out of their way to be willing to see outside themselves and become more than just 
        a single person. These two individuals must become a single couple that drives one 
        another when they look outside themselves and at the needs of each other. Like the 
        ancient symbol Yin and Yang, the two partners are a balance of opposites that are 
        constantly driving the other to move forward and stay present in the relationship. 
        This is the keep to a successful romantic relationship.`

    },

     {
        title: "Dealing with Stress",
        date: "June 20, 2026",
        image: "images/blog-entries/post-8.jpg",
        summary: "Family Stress is eased by the purpous of parenthood",
        content: `From religion to film, modern society is filled with the universal 
        question of purpose. People will often question their existence, their role in 
        society for the world, their career choices, and even their families' situation. 
        These questions of purpose deeply affect our personal stress. In the setting of a 
        family, a clear and major purpose is creating life for the next generation and 
        becoming a parent.

        Becoming a parent is written into an individual's DNA. Every single person on this 
        planet has a biological desire encoded within themselves to replicate. Some call 
        this a need for personal survival by passing on an individual's self through DNA. 
        Others call it I need to contribute to the species or the preservation of a society. In the end, it comes down to two major factors in our modern society: loneliness and the purpose of work.

        During Covid-19, many individuals experienced existential crisis, depression, and 
        fear; more often or not, many people called all these feelings bundled together 
        loneliness. Whether there was separation from friends, coworkers, or even their 
        religious communities, people felt cut off and hopeless throughout the Covid-19 
        sanctions. 

        A YouGov survey found, however, that forty-five percent of adults in the parenting 
        role felt lonely. The YouGov survey also found that sixty percent of adults with no 
        children reported loneliness. The difference between these two groups is tenth 
        percent; almost a whole quarter. This shows that the purpose of raising children is 
        not just self-preservation. Raising children is also a way to increase individuals' 
        happiness and difficult situations.

        Raising children is not a process that ends after 10 or even 18 years. 
        Child-rearing is a lifelong purpose but has consistent difficulty throughout. At 
        the start, there are more physical and financial burdens upon a parent and make it 
        seem almost impossible. When the child is an adult of their own with their own 
        family and children, an individual does not suddenly stop being a parent because 
        their kid is all grown-up. In fact, they can often look back on what they taught 
        their children and see their own mistakes to help them improve even as adults. No 
        matter how a person looks at their children, they are both biologically and 
        psychologically attached on an emotional level. From the day a person’s child is 
        born to the day that parent dies, they actively seek the best for their children.

        This lifelong purpose may feel like a struggle but, as mentioned before, it also 
        reduces stress. A key reason behind the reduction of this stress is because a 
        parent will find that having a child is significantly meaningful to their existence. This concept is found in the study by YouGov with eighty-three percent of parents reporting that raising children has brought meaning into their lives. This meaning and purpose is reported in the same study to have brought eighty-two percent of the parents raising children happiness throughout their lives. This shows that indeed having a child brings joy into a person’s life despite all the difficulties that I believed to accompany raising a child.

        In contrast, the same YouGov survey found that not all married couples have the 
        same happiness. According to the survey, seventy-two percent of married couples 
        without children experience happiness throughout their lives. This shows that other 
        purposes, such as careers, influence, or traveling the world, can bring individuals 
        joy throughout their lives. It also shows that children are likely to bring about 
        ten percent more joy to an individual's life. There are many ways to remain happy 
        and stress-free and a person’s existence, but the facts keep coming up that raising 
        children is a high guarantee of fulfillment, stress relief, and happiness for the 
        human experience.
`

    },
   {
        title: "Communication",
        date: "June 17, 2026",
        image: "images/blog-entries/post-9.jpg",
        summary: "How to use EAR for communication",
        content: `Since the dawn of time the most crucial aspect in any relationship from war to the running of a family household has been proper communication. Misunderstandings can lead to conflict, misunderstandings, and even generational shortcomings. When proper communication is achieved, however, it’s not only relieve stress on the relationship but achieve goals, boost resources, and provides more opportunities going forward.

        The truth is well that is an important aspect for understanding it is not the most 
        important aspect for maintaining the relationship goals through communication. 
        David D Burns created a checklist of three values for good communication called 
        The E.A.R. Checklist. These values are empathy, assertiveness, and respect.

        By utilizing these three values in communication with others and individual cannot 
        only maintain effectiveness of their message but also sustain a positive 
        relationship. This is important because without a positive relationship things such 
        as resentment, insubordination, and challenging a person’s character or decisions 
        can occur. This is not only will prevent your message from being passed along but 
        it also prevents the message from being absorbed by the individual to which you 
        gave it.

        Empathy is a key value because it shows connection to the individual throughout the 
        conversation. This empathy can make the message giver not only relatable but also 
        allows for ethical credentials to be given. For example when speaking with someone 
        in the medical field from a brand new medic to a specialized doctor patients are 
        often comforted when a doctor explains a situation they lived through that was 
        similar. If a patient goes in with knees that are always clicking but the doctor 
        has the same thing since the age of 12 and it proves to be harmless it reassures 
        the patient that they are simply just growing pains from childhood.

        Another core reason behind the value of empathy is that it can be a comfort 
        emotionally to individuals. When emotions are high from loss of a family friend or 
        family member empathy is often used to console individuals. Whether the individual 
        has been through the same experience or not it helps these emotions calm down and 
        show that they are willing to not only speak with them but that these people are 
        also willing to stand by them throughout the conversation and their hardship. This 
        is helpful during arguments with a spouse or even someone’s children so that they 
        know that despite disagreements they will always have each other in the end.

        Assertiveness is another core value in communication because it provides a basis 
        for your message. When a young child comes home from school and begins their 
        homework assertiveness can make or break whether or not they enjoy the class. If a 
        child makes it through more than half of their spelling test homework with correct 
        answers they’re going to enjoy English. Now if that same child we’re only to get a 
        small portion of the words correct and frustrated they would become a nonproductive 
        student in the course and grow to hate it. This is because of assertiveness build 
        confidence.

        The confidence behind assertiveness not only show is that you are capable and 
        knowledgeable but it also reveals that you have a passion for the topic. In 
        communication when people are assertive they show that it is not just a topic they 
        are passionate and knowledgeable about that it is also a fact in which they live 
        their life by. This ensures the others they are communicating with that they have a 
        truth behind their statements. However blind passion can lead to over aggression 
        and too much assertiveness. Balancing this value is key to communication. 

        Respect is the final value for effective communication. It is what helps 
        individuals from stepping beyond balanced assertiveness or invasive empathy. Just 
        like the boundaries created in a family unit respect creates a boundary in 
        communication. It allows individuals to acknowledge each other’s points of view, 
        feelings, and points. It’s what makes arguments into a conversation rather than a 
        yelling match.

        Respect is showing each other that value is found not only in their words but in 
        the person themselves. While an individual may disagree with the point their wife 
        or child is trying to make they still care about the individual and their ideas. 
        This care show through respect gives value not just to the arguments in the 
        conversation but to the individual themselves. This is what brings assertiveness 
        down to balance. And the boundary of respect is also what pulls everyone in the 
        conversation away from being over invasive. 

        By utilizing all three of these values a family cannot only effectively communicate 
        but grow closer together. They better understand each other intellectually as well 
        as emotionally with this method. A family can build love instead of malice.`

    },
     {
        title: "Budgetting",
        date: "July 4, 2026",
        image: "images/blog-entries/post-10.jpg",
        summary: "Budgetting is a key resorce to a family",
        content: `Weather it is the 1800s with a modern era a family survival has always
         relied upon a stable budget. A budget in the modern era is focused solely on 
         finances where in the past those finances were an abundance of resources, from 
         food and water to tools and medicine that were readily available. Today, the 
         average family is lucky enough to only have to focus on finance.

        Even with the average family only having to focus upon a financial aspect of a 
        budget, most families tend to struggle. This is because the world we live in is 
        filled with so many luxuries such as phones and televisions, it is easy to 
        misappropriate funds. At every return as well, each individual in a family unit 
        faces tremendous amounts of advertising. This only increases the odds that an 
        individual or misappropriates their share of the finances.

        To combat this potential over spending, a family should create a budget. The 
        parental units will have the greatest understanding of the budget and put it into 
        practice. As for the children in the family, they should also understand the budget 
        more and more as they get older. As well as important to maintain boundaries 
        between the parental units and the children, it is also vital important that the 
        parents share the budget with the children overtime. This will teach the children 
        not just how to make a budget and keep to it, but also the value of the dollar and 
        the value of the resources that dollars purchase.

        The first part of a budget is to track every single resource. Whether a family is 
        making a budget for the first time or they are sticking to their budget, it is 
        important to know what you spend. This allows complete assessment of every 
        financial expense, from grocery shopping and eating out to accessing streaming 
        services or toys purchased throughout the month. Using a bank account to see all 
        your digital purchases can be helpful but does not often show you your monthly 
        track. Tracking expenses on a monthly or weekly basis allows a family to see not 
        only their income but their expenses at the same rate as money flows in and out of 
        the household.

        The next step is to distinguish the needs of the household versus the desires. So 
        things like housing costs, food, and monthly medical necessities will have the 
        highest priority. Well, clothes are essential, they are not essential every single 
        month out of the year, so they will be put on a lower priority. Entertainment 
        options such as streaming services, theme park tickets and even outings to a local 
        laser tag facility will have some of the lowest priorities. 

        Once all the priorities are assessed for each expense, the family can review its 
        income to see how much it can spend. A key factor is that 10 to 20% of the monthly 
        income should be set aside for savings. The savings can be part of a retirement 
        fund or more importantly, an emergency fund that is readily available for any 
        fires, car crashes, and unforeseen medical. After that, the highest priorities 
        should be paid for, and it can trickle down to the lowest priorities.

        It iss estimated about twenty percent of a family's expenses can be cut without a 
        major lifestyle change. Things like DoorDash or a premium Disney+ account can be 
        cut when you have multiple streaming services or food at home. Buying that extra 
        action figure for a child when they have 10 similar ones at home well nice can be 
        better applied. When making a budget, it is key to find this twenty percent,  so 
        the best outcome can occur for the budget. This should occur not only in the 
        initial budget making process but any reassessments such as a yearly overview of the 
        finances.

        Practicing these budgetary habits will not only help the family with expenses, but 
        it will also improve their financial ability overtime. As stated earlier, will also 
        teach children how to understand the value of dollars and the things that dollars buy. 
        This intern helps children prepare for their own family one day with great financial 
        habits.`

    },

     {
        title: "Parenting",
        date: "June 11, 2026",
        image: "images/blog-entries/post-11.jpg",
        summary: "The Diffences in timing for parenting",
        content: `For the average person, since the start of time to this modern era, the 
        bulk of a family mission has been parenting. There are many styles and choices when 
        it comes to parenting such as religious values, life goals, and is it only the 
        parents teaching the lesson or older siblings as well. One of the key choices of 
        parenting is when a couple begins their family by having their first child. 

        Having children young or even later in life can have many differences advantages. 
        However, it also creates a trade off.  Those who start off creating a family at a 
        young age will be able to approach the mission with more energy. Parents that have 
        children later in life tend to trade that energy for more financial resources and 
        life experience. These two paths will lead to different family outcomes, like the 
        number of children and even the relationships between the family members. 

        Young parents with more energy will be able to actively engage with their children 
        more. This means they will not only be able to chase their toddler around the house 
        with greater ease, but they will also be able to stay up later for their children. 
        These later hours can allow the parent to catch a child in a crisis; whether that 
        crisis is from an emotional breakup or even experimentation with drugs. These 
        things may also be addressed and caught by older parents as well, but the energy 
        that keeps young parents up later allows them a more regular chance to engage. 

        While young parents may have more energy to engage with their children because of 
        their age, their age is likely to make them similar to their children. This may 
        seem like a huge advantage since parents could relate to their children more often; 
        however, this is not always the case. The general age gap between a young parent 
        and their child may make them relatable in some ways, but it will also be a large 
        enough age gap to create vital differences--especially in the adolescent years. 
        A pitfall here is that a young parent may engage the child in a childish way like 
        a screaming match, co outs, and faulty logic that has become outdated to the child. 

        For example, a parent frustrated with a child obtaining a job to learn about money. 
        Over the course of the last few decades, traditional jobs for teenagers have begun 
        disappearing in cities due to labor regulation. So a parent that had a teenage job 
        may expect the same of their child and scold or punish their child for not getting 
        a job. Yet the advantage here with an older partner is they will have more 
        experience in life to see economic, societal, and technological changes. This 
        allows the older parent to be more understanding of the world's circumstances 
        rather than fixate on the recent experiences of youth. 

        This same understanding that comes with elder parents allows them to impart more 
        wisdom to their children. These parents will not only know who they are and have 
        plenty of mistakes to warn about or provide corrections for, but they will know 
        their spouses more, which allows them to utilize both their experiences while they 
        are parent. The downside of having all this knowledge to impart on their children 
        is that these parents are not as relatable as the young. They will have grown up in 
        a time so distant from the child that the children see their parents with less 
        relevant authority on a subject.

        A great example of this would be with technology in school assignments. A parent 
        that grew up with desktops and floppy disk may be well versed in the technology of 
        the day, but many of the initial skills they learned are irelavent as well as 
        elective. Today children are expected to know how to operate phones, computers, 
        websites, and numerous other technologies. Even young parents have to constantly 
        keep up with the ever evolving technology of the day, but elder parents can be 
        written off by their children with ease because these kids believe they struggle 
        more due to the generational gap. 

        The timing of children in a person's life will present very different trails, but 
        each path has constant trials. Whether it is a choice or circumstance, the best 
        thing to do is to lean into the advantages of the age group. Be aware of the 
        pitfalls of the age gaps as well and, above all else, allow consequences of life to 
        be more prominent than the consequences given out by individuals. Conversations are 
        far more impactful than consequences for children. 
`

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