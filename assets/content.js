/* content.js — everything that changes often lives here.
 * Projects:  add newest first. "preview" is a 1280x720 screenshot in img/projects/.
 * Blog:      "slug" becomes the link (#blog/slug); "body" is HTML.
 * Gallery:   [file in img/, description]; thumbnails live in img/gallery/ (run: npm run images).
 */
window.SITE = {
  whatsapp: '254716358703',
  youtube: [
    { handle: 'teddylumidi', id: 'UCFIUN1hJgmmCK5ytaXuQnxg', type: 'Tech · Web · Digital', about: "Dev tips, digital marketing insights, and everything tech — from a developer's perspective." },
    { handle: 'teddylumidimusic', id: 'UCME4llAMpRmY3tiieXOamrg', type: 'Music · Beats · Creative', about: 'Original music, beats, and creative audio — a different, rhythmic side of Teddy Lumidi.', music: true }
  ],
  projects: [
    {
      "id": "wahito-musonge-advocates",
      "title": "Wahito Musonge & Company Advocates LLP",
      "summary": "Law firm website for a Kenyan advocates practice, presenting practice areas, insights and a Legal Nuggets knowledge section for businesses and individuals.",
      "tech": [
        "React",
        "Vite",
        "SEO"
      ],
      "preview": "img/projects/wahito-musonge-advocates.webp",
      "url": "https://wahitomusongeadvocates.co.ke/"
    },
    {
      "id": "kanya-interior",
      "title": "Kanya Interior",
      "summary": "Interior design and renovation website with a filterable project portfolio, services, and a WhatsApp quote form for a Nairobi fit-out company.",
      "tech": [
        "Web Design",
        "Responsive UI",
        "SEO"
      ],
      "preview": "img/projects/kanya-interior.webp",
      "url": "https://kanyainterior.co.ke/"
    },
    {
      "id": "remax-safaris",
      "title": "Remax Safaris",
      "summary": "Safari travel website presenting memorable Kenyan experiences, destinations, and booking-focused content.",
      "tech": [
        "Web Design",
        "UX",
        "SEO"
      ],
      "preview": "img/projects/remax-safaris.webp",
      "url": "https://remaxsafaris.com/"
    },
    {
      "id": "lonah-maiko-foundation",
      "title": "The Lonah Maiko Foundation",
      "summary": "Non-profit organisation website supporting community development, impact storytelling, and outreach.",
      "tech": [
        "WordPress",
        "Web Design",
        "SEO"
      ],
      "preview": "img/projects/lonah-maiko-foundation.webp",
      "url": "https://thelonahmaikofoundation.com/"
    },
    {
      "id": "mwalali-homes",
      "title": "Mwalali Homes",
      "summary": "Real estate website showcasing property listings and housing solutions for buyers and homeowners in Kenya.",
      "tech": [
        "WordPress",
        "Elementor",
        "CSS"
      ],
      "preview": "img/projects/mwalali-homes.webp",
      "url": "https://mwalalihomes.co.ke/"
    },
    {
      "id": "donovans-heavy-metal-recycling",
      "title": "Donovan's Heavy Metal Recycling",
      "summary": "Industrial recycling website for a Canadian metal recovery and responsible material processing business.",
      "tech": [
        "Web Design",
        "Responsive UI",
        "Content"
      ],
      "preview": "img/projects/donovans-heavy-metal-recycling.webp",
      "url": "https://donovansheavymetalrecycling.ca/"
    }
  ],
  gallery: [
    {
      "file": "1.jpg",
      "alt": "Teddy Lumidi in a red T-shirt in front of a colourful mural"
    },
    {
      "file": "background.webp",
      "alt": "Teddy Lumidi in front of a neon mural"
    },
    {
      "file": "figure@2x.jpg",
      "alt": "Teddy Lumidi standing in front of a colourful mural"
    },
    {
      "file": "avatar@2x.jpg",
      "alt": "Close-up portrait of Teddy Lumidi"
    },
    {
      "file": "IMG_20211226_160817_280 - Copy (2) - Copy.jpg",
      "alt": "Close-up of Teddy Lumidi looking to the side"
    },
    {
      "file": "IMG_20211226_160810_191.jpg",
      "alt": "Teddy Lumidi beside a mural"
    },
    {
      "file": "IMG_20211226_160817_280 - Copy.jpg",
      "alt": "Teddy Lumidi beside a mural, hands clasped"
    },
    {
      "file": "2.webp",
      "alt": "Teddy Lumidi with arms crossed beside a Vivo display"
    },
    {
      "file": "3.webp",
      "alt": "Teddy Lumidi beside a Vivo advertising display"
    },
    {
      "file": "offer-4@2x.jpg",
      "alt": "Teddy Lumidi posing in front of a Vivo display"
    },
    {
      "file": "aboutme-card.webp",
      "alt": "Teddy Lumidi in profile, wearing earphones"
    },
    {
      "file": "IMG_20211226_160723_721.jpg",
      "alt": "Teddy Lumidi in profile in a hallway"
    },
    {
      "file": "5.png",
      "alt": "Teddy Lumidi in an open-plan office"
    },
    {
      "file": "110233210_147145637002858_5351350956077992794_o.jpg",
      "alt": "Teddy Lumidi leaning against a brick wall"
    },
    {
      "file": "4.jpg",
      "alt": "Teddy Lumidi with friends on a staircase"
    },
    {
      "file": "ddf.webp",
      "alt": "Teddy Lumidi with friends seated on a staircase"
    },
    {
      "file": "IMG_20211226_160824_614.jpg",
      "alt": "Teddy Lumidi with friends at a cyber café"
    },
    {
      "file": "offer-1@2x.jpg",
      "alt": "Teddy Lumidi with three friends"
    }
  ],
  posts: [
    {
      "slug": "the-journey-of-teddy-lumidi",
      "title": "The Journey of Teddy Lumidi",
      "cat": "personal",
      "date": "2022",
      "excerpt": "Hello world! It took me a long time to start this journey — a journey full of thorns and procrastination. But it starts now.",
      "img": "img/aboutme-card.webp",
      "body": "<p>Hello world! It took me a long time to start this journey. The journey has been full of thorns and procrastination — but it starts now.</p>\n<p>All my life I have dreamed of putting my name on the internet, but I just didn't know where to start. No matter how much I tried, it just didn't work out. It was a painful experience knowing that I had unfinished tasks that I simply had to work through.</p>\n<p>I was so caught up in the hustle and bustle of life that most of my childhood dreams turned into nightmares — but I never gave up. I wanted to show the world my story. The internet was my playground. Having grown up moving from neighbourhood to neighbourhood, it really disrupted my childhood. I wanted the poems, the books, the stories, and the drawings I worked on in my room to be read globally.</p>\n<p>2011 was the start of my painful journey, the year I joined college. I was still recovering from childhood fixations, now as an adult. As I start my blogging journey in 2022 — eleven years later — I hope I will finally heal from my childhood nightmares.</p>"
    },
    {
      "slug": "making-of-a-nerd-childhood-memories-part-1-1996-2004",
      "title": "Making of a Nerd: Childhood Memories Part 1 (1996–2004)",
      "cat": "personal",
      "date": "2022",
      "excerpt": "Growing up as a nerd in Africa — in Kisumu, Kenya — had its challenges and its joys. Here is where it all began.",
      "img": "img/1.jpg",
      "body": "<p>Growing up as a nerd in Africa (Kenya) comes with a million setbacks. Every day you get older and more frustrated. I grew up in a cool neighbourhood called Gudka Estate, named after early Indian settlers of Kisumu City in Western Kenya. I loved the neighbourhood. It was one of the best places to experience childhood because it was a mix of well-off and average families.</p>\n<p>As kids we experienced some of the best indoor and outdoor childhood experiences — toys, cartoons, movies, video games, art, stories, education, and all the things a child could hope for. Born in the late 1980s (1989), I did experience some of the 1990s childhood, especially the late 90s. It was wonderful growing up watching Sinbad, Tarzan, Mowgli, and wrestling, alongside great cartoons like Popeye, Tintin, Voltron, Samurai Pizza Cats, and X-Men. I loved Batman and Superman movies. I enjoyed reading The Secret Seven, The Famous Five, Alice in Wonderland, and many other childhood books. We used to enjoy cartoons every Saturday morning and movies every Sunday afternoon after church.</p>\n<p>Then came the 2000s. 2002 was my favourite year — I was 13, a proper adolescent. I learnt more during that period than at almost any other time in my life. Apart from riding a bike and experiencing my first kiss, I absorbed so much about life. That era was wonderful. Then I joined Pinocchio Academy — and that was peak nerdy life. That school shaped my nerd and geeky identity more than anywhere else I had ever been. Thank you, Pinocchio Academy, Kisumu.</p>\n<p>Learning at Pinocchio was fun. Some days we would simply read books during the double English lessons, then swap with other students. We were also given drawing books. It was there that I met some of my greatest friends — Bill and Lawrence Tolo. Bill and Lawrence had joined Pinocchio before me and they were both nerds. Bill loved DC Comics and enjoyed drawing Batman. Lawrence loved Marvel Comics and drew constantly. Lawrence was the more gifted artist of the two.</p>\n<p>We talked endlessly about Beano, Bananaman, and Dennis the Menace, among other things. Lawrence was my best friend. His family was well-off and had access to many things, and through him I learned a great deal. He had poor social skills compared to me and would spend much of his time alone — reading, watching, and drawing. On the school bus each morning, Lawrence would read Secret Seven books before we even arrived at school. He was truly a geek. Lawrence understood the meaning of The Matrix long before I was even ready to grasp it. We also obsessed over Titanic and Spider-Man. Some days, Lawrence and I would be punished for skipping the school bus in the evening to go and check out the latest comic books at the mall.</p>\n<p>Lawrence introduced me to Green Lantern and X-Men comic books. I later followed the Justice League and X-Men films well into adulthood. We did so many nerdy and geeky things together. My neighbourhood was lively; his was quiet — which perhaps explains why he was so introverted and shy.</p>\n<p>I was enthusiastic about learning. The more I grew up, the more I sought to absorb. Media was my playground. I read constantly, watched many movies and cartoons, and enjoyed waking up on Saturday mornings just to watch television until the afternoon. I loved Zorro — both the cartoon and the live-action series — The Crow, Walker Texas Ranger, Batman and Superman cartoons, Batman Beyond, The Cadillacs and Dinosaurs, and many other great films. I miss my childhood deeply. My favourite channel was STV — they gave me the cartoons of my lifetime. Thank you, STV. Cartoon Network was my paradise; I almost failed school because of it.</p>"
    },
    {
      "slug": "making-of-a-nerd-high-school-memories-part-2-2005-2009",
      "title": "Making of a Nerd: High School Memories Part 2 (2005–2009)",
      "cat": "personal",
      "date": "2022",
      "excerpt": "High school was the most stressful chapter of my learning journey — but it also shaped me into who I am today.",
      "img": "img/2.webp",
      "body": "<p>In 2004 we moved to a new neighbourhood called Okore. This was just before I finished primary school — I was in Class 8, my final year. Okore Estate was quiet. Unlike Gudka Estate, where houses were clustered together, here every home was separately fenced and getting to know your neighbours required real effort. Everyone minded their own business. I had a hard time maintaining my nerd lifestyle in that environment.</p>\n<p>Fortunately, I had a friend — Shallum Gacheha, my classmate and best friend at the time. Shallum was the person to call if you needed to watch the latest movies. He would take me to movie screenings in his neighbourhood to catch the latest action films, or bring CDs, DVDs, and VHS tapes to watch at my parents' house. He even introduced me to And1 Mixtapes and the basketball lifestyle. We talked extensively about everything happening in the media.</p>\n<p>After finishing primary school in late 2004, I spent about two months savouring my nerdy life before joining high school in February 2005.</p>\n<p>I must confess — my school years are some of the worst years of my life, and high school was particularly difficult. I nearly abandoned my nerdy lifestyle entirely because of the environment I found myself in. I went to boarding school and felt deeply homesick. I was clinically depressed. The thought of staying in school for three straight months made me sick and demoralised. School was, in many ways, a kind of hell for me. I had no choice but to adapt.</p>\n<p>I made many friends in high school — some nerds, some geeks. We exchanged comic books, novels, magazines, gaming CDs and DVDs, and movies. It was the only way I could escape the harshness of school life. Some students and teachers thought we were wasting time with these forms of entertainment. But we would exchange National Geographic magazines, Animorphs books, Need for Speed video game collections, and music CDs. Most evenings during prep time and on weekends I would read novels — The Chronicles of Narnia, John Grisham, Sidney Sheldon. I would also list down Cartoon Network schedules from memory. In music, we would debate the state of hip hop, the influence of the Crunk genre, and the rise of Kapuka music in Kenya.</p>\n<p>During school holidays I would play PlayStation 2 with Shallum, then collect gaming discs to take back and exchange with schoolmates when term began again. We would chat about fast cars, the latest movies, technology, and music, and show each other our drawings.</p>\n<p>In high school I met some truly cool friends — Eamon Mullan and Stephen Mulinya — with whom I could talk at length about art, movies, drawings, cartoons, and music. They made many of my high school days bearable. And we played basketball together. Every Saturday morning we would wake up early just to hoop at the court, talking about the latest trends in sports and culture.</p>\n<p>As I said, my school years are some of the worst years of my life — but the court was always my refuge. Some days we would debate in the computer lab about the latest trends with my urban schoolmates. I remember being fascinated by the Encarta Encyclopedia installed on the lab computers. I also played Beach Head and enjoyed reading PC Gamer magazines.</p>\n<p>I was desperate to finish high school and reclaim my nerdy freedom. Those five years felt like the longest of my life. I wanted that freedom so badly. I remember the day I finished high school I listened to R. Kelly's \"The Storm Is Over\" on repeat. The social media and digital explosion was beginning to be felt in 2009, and I found a new niche for my nerdy lifestyle. I even remember going to internet cafés to download cybersecurity and hacking notes as I prepared to join college. High school remains the most stressful chapter of my entire learning journey.</p>"
    },
    {
      "slug": "return-of-the-nerd-college-life-part-3-2010-2013",
      "title": "Return of the Nerd: College Life Part 3 (2010–2013)",
      "cat": "personal",
      "date": "2022",
      "excerpt": "College brought some freedom — but also the harsh reality of being broke and still chasing a dream of becoming a tech genius.",
      "img": "img/3.webp",
      "body": "<p>The only thing that kept my nerdy life going during college was the promise of freedom afterward — otherwise, I was broke. Nerdiness and brokenness hardly go together.</p>\n<p>In college, I chose an ICT Diploma course to pursue my career path, since I had always been an IT enthusiast. I also started practising computer programming — beginning with the C language. I had very little clue about what I was actually doing, but I was intensely interested in becoming a computer genius and, at one point, a hacker. I began leaning toward a career specialisation.</p>\n<p>I did not do a great deal of academically productive things in college. I watched many movies, walked around classes, and spent time playing GTA: Vice City, Desert Storm, Project IGI, Need for Speed Most Wanted, NFS Porsche, and NFS Underground 2. We were also consumed by the social media explosion of that era, and I found myself signing up for almost every new platform. I even had a MySpace account — though MySpace was already dying by then.</p>\n<p>At the computer labs, I would browse endlessly, jumping from site to site and exploring the internet to what felt like its full potential. I would open around forty browser tabs until the computers crashed. I was a genuinely curious person.</p>\n<p>There is a saying in college: if you want to learn, go to the library; if you want everything else, go to college. Still, the social side of college was never really my priority — the nerd in me would not allow it. After classes I would head home to watch movies, play video games, or go play basketball.</p>\n<p>I eventually quit college after failing my Operating Systems paper twice. I was deeply disappointed. I had enrolled in an ICT Diploma course and studied computer programming without ever owning a laptop — it was a frustrating contradiction. I left college to hustle in the streets and live my nerdy life on my own terms. In fact, I applied for my first job while still in college in November 2012 and was contacted just after finishing my final exams in March 2013. I had big dreams of earning enough money to fund my nerdy passions with some degree of independence.</p>"
    },
    {
      "slug": "return-of-the-nerd-these-streets-part-4-2013-2015",
      "title": "Return of the Nerd: These Streets Part 4 (2013–2015)",
      "cat": "personal",
      "date": "2022",
      "excerpt": "My first salary equalled my rent. What followed were years of depression, deferred dreams, and the slow suffocation of the nerd within me.",
      "img": "img/4.jpg",
      "body": "<p>My ICT Diploma Module I exam results arrived — I had failed two papers: Computational Mathematics and Operating Systems. That is how I left college. But not long after, I received a call about a job I had applied for back in 2012. So I went for it. It was a laboratory supplies role, servicing schools and various institutions. For a moment, I thought my dreams had come true.</p>\n<p>Unfortunately, my first monthly salary was four thousand Kenyan shillings (KSH 4,000) — roughly forty US dollars at today's exchange rate. The most bewildering part? My rent was also KSH 4,000. My friends laughed and felt sorry for me at the same time. (I laugh about it myself now, even in the midst of ongoing struggles.) The pressure to leave home and escape the frustrating people around me at the time had driven me to accept the job regardless. As they say: if you wait until everything is perfect before acting, you may never act at all. And since my school years had been so difficult, I had every reason to take risks and pursue my dreams.</p>\n<p>The journey was far from easy. I started feeling mounting pressure, convinced that things would eventually improve. But my depression returned. I disliked the job intensely — and the environment around it. I hoped to use even my small salary to search for better opportunities, but things went from bad to worse without ever improving.</p>\n<p>My nerdy lifestyle was under serious threat. I spent most of my time at work and came home exhausted. To preserve some semblance of that life, I began gathering resources to consume during whatever free time I had. I started downloading eBooks, video games, movies, and music for later use. But on the rare free days I did have, I was often too tired to even finish a single episode of my favourite TV shows. Welcome to adulthood.</p>\n<p>I started feeling a deep sense of missing out. More and more time was consumed by work, leaving less and less space for myself. I almost abandoned the nerdy life entirely — but I believe it chose me, not the other way around. Most of my days between 2013 and 2015 were spent bookmarking websites, downloading books and films for later consumption, and telling myself I would explore them when I had the time. The anxiety of knowing those resources were waiting — and that I could not yet access them fully — was consuming me.</p>\n<p>The other major problem was money. Nerd culture becomes more expensive as you grow older. Gaming, technology, books, events — the costs escalate. I started postponing more and more of my passions, and it made me deeply sad. In Grand Theft Auto: Vice City there is a cheat code called \"life is passing me by.\" That is precisely how I felt throughout 2013 to 2015. The years in which I felt I was not being a nerd or a geek were, to me, wasted years. I thought each year was supposed to be better than the last — but they only grew harder.</p>"
    },
    {
      "slug": "return-of-the-nerd-unfinished-fixation-playing-catch-up-part-6-2022",
      "title": "Return of the Nerd: Unfinished Fixation — Playing Catch-Up Part 6 (2022)",
      "cat": "personal",
      "date": "2022",
      "excerpt": "In 2022, I made a painful but calculated decision — to quit my hustle and go back to fix everything I felt I had left unfinished in life.",
      "img": "img/offer-2.jpg",
      "body": "<p>No matter what I did, I still felt incomplete — weighed down by the many things I had left unfinished in my past. I felt that before I could truly move forward with my life, I needed to go back and address everything that had been left undone. This fixation on the past heavily affected my productivity. I grew demoralised working on my present life while knowing how much of my past remained unresolved.</p>\n<p>So in 2022, I made a final, painful decision: I would quit my hustle and dedicate myself to completing my unfinished past — my nerdy past. I quit in April 2022 and relocated to the village. What an unconventional move for someone living a nerd and geek lifestyle. I moved without a laptop or a working desktop computer. But I was determined to make it work against all odds. I wanted to fix everything that had been haunting me.</p>\n<p>I bought my second laptop after seven years of trying. That was one of the greatest achievements of my life — because so much of nerd and geek culture, from career development to entertainment, depends on owning a laptop. My next goal was to gather everything I needed to rebuild my nerdy life. I was committed to playing catch-up on the seven years I felt I had lost.</p>\n<p>I still feel the weight of my life taking a different turn after 2015. That was the period when I was transferred to a different town, away from the city — and it became the beginning of what I consider the most disappointing years of my later life. Everything I had planned for went sideways. Fast forward to 2022: I am determined to make up for lost time. Reading widely, coding more, pursuing my career goals in web development, cybersecurity, and big data, writing blogs, and working on both my weaknesses and strengths.</p>\n<p>The trade-off I had to make was sacrificing active income — I still do not have a steady money-generating business or job. But thanks to my parents, a few clients, and the simplicity of village life, I am managing. On the bright side, I have the time to play catch-up across all areas of my life. I believe it will take roughly three years of hard work and focused talent to genuinely make up for those seven lost years — but I am hopeful I will achieve it in the shortest time possible, and close this dark chapter of my life once and for all. Time will tell.</p>"
    },
    {
      "slug": "a-laptop-a-smartphone-and-a-dream",
      "title": "A Laptop, a Smartphone, and a Dream",
      "cat": "career",
      "date": "2022",
      "excerpt": "I vowed to build a lifestyle that feels like work and vacation at the same time — the digital nomad dream, and how I am chasing it.",
      "img": "img/ddf.webp",
      "body": "<p>I am honest with myself about this: I dislike physical work intensely. Every time I think about what to do with my life, my mind gravitates toward automation. Nothing satisfies me quite like the feeling of automating my existence. I vowed to live a lifestyle that serves simultaneously as work and as a vacation — and the digital nomad life is exactly that vision.</p>\n<p>I have fantasised about this lifestyle for most of my adult career. The two resources that can make it a reality are a laptop and a smartphone. I have long dreamed of combining them with passive income streams to build a life of genuine freedom.</p>\n<p>I started preparing for this lifestyle as far back as 2015. The challenges were clear: I could not afford the right gadgets, and I lacked the specific skills needed to execute the mission. For years, preparation remained trapped in procrastination — until I finally decided to quit my job and begin planning in earnest.</p>\n<p>The other major obstacle was a lack of knowledge. I had no monetisable skill set that could sustainably support a digital nomad lifestyle, let alone multiple income streams. So I began to build. First, I gathered as much knowledge as possible about the lifestyle — its advantages, its challenges, its realities. I adopted the freelance model. I started reading and researching extensively, and training myself in various skills.</p>\n<p>Another challenge was the lack of funding. As a freelancer you need resources; as a digital nomad you need flexibility and capital to move, find clients, and travel. To minimise costs, I decided to build a professional website and a portfolio site — learning as I go. I started reading programming and web design books, practising coding daily, and spending most of my time at my laptop. I have been straining hard to master computer programming — a skill that has taken me decades to feel genuinely competent in. I also began taking online certification courses to develop competitive credentials.</p>\n<p>The journey has been full of thorns, but giving up is not an option. I have a great deal of catching up to do — but one step at a time. I have been blogging, developing vlogging ideas, researching industry best practices, and training myself every day as I work toward launching my digital nomad journey.</p>\n<p>With a smartphone, a laptop, and new ideas, I am hoping to monetise my skills in the freelance world and build a life that is truly satisfying. I plan to travel, vlog, blog, code, and work in this growing gig economy. I hope my dreams will come true.</p>"
    },
    {
      "slug": "if-dreams-won-t-come-true",
      "title": "If Dreams Won't Come True",
      "cat": "personal",
      "date": "2022",
      "excerpt": "What do you do when you work hard and your dreams still don't materialise? A reflection on resilience, redirection, and refusing to quit.",
      "img": "img/figure.jpg",
      "body": "<p>It is a common saying that \"if your dreams don't come true, it is because you didn't work hard enough.\" But what if you did work hard — and your dreams still didn't come true? What if you did everything right and it still didn't work out?</p>\n<p>It is easy to feel like a failure when your dreams don't materialise. You might feel like you are not good enough, or that you don't deserve success. But the truth is, sometimes things simply don't work out the way we want them to — and that is okay. Just because one dream doesn't come true doesn't mean all your dreams are doomed. You may have to adjust your plans or change direction, but don't give up on dreaming altogether.</p>\n<p>If your dreams don't come true, it doesn't make you a failure. It doesn't mean you're not good enough. It just means that sometimes life doesn't follow the script we wrote for it. We all carry dreams — of becoming something great, of making a difference. And when those dreams remain out of reach, it can be incredibly disheartening. But that is not a reason to abandon them. Even if a specific dream doesn't come true, we can still find happiness and fulfilment in our lives.</p>\n<p>So if you're feeling down because your dreams seem out of reach, remember: keep going. Keep fighting for what matters to you.</p>\n<p>Sometimes a dream seems so enormous and unattainable that it feels impossible. What do you do when you've been chasing something for years and it still seems just beyond your grasp? If the dream is something you are truly passionate about, you don't give up — you keep pushing, even when progress feels invisible.</p>\n<p>But sometimes, no matter how badly you want something, it simply doesn't happen. Here is what I believe you should do then:</p>\n<p><strong>First,</strong> accept that it might not happen in the form you imagined. That is not giving up — that is being honest. If you've been working toward a goal for a long time and it's still not arriving, it may be time to reassess your approach or try something new.</p>\n<p><strong>Second,</strong> find a way to be okay with not achieving that specific dream. This doesn't mean you've surrendered — it means you are not allowing that one thing to define your happiness. You can still live a rich, meaningful life without it.</p>\n<p><strong>Third,</strong> find a new dream. If the old one isn't working, allow yourself to let it go and discover something new to pursue. That is not failure — that is evolution.</p>\n<p><strong>Fourth,</strong> give yourself permission to change your mind. Just because you wanted something once doesn't mean you must want it forever. It is okay to redirect your energy.</p>\n<p><strong>Fifth,</strong> be patient. Dreams don't always come true overnight. Sometimes it takes years of consistent effort. If you're not there yet, don't quit. Keep working.</p>\n<p><strong>Finally,</strong> remember that even if a dream doesn't come true, you are still a success. You are still capable of extraordinary things. One unfulfilled dream does not define your worth. So if you're feeling lost, keep going. You are still amazing.</p>"
    },
    {
      "slug": "growing-up-with-cartoons-cartoon-memories",
      "title": "Growing Up with Cartoons: Cartoon Memories",
      "cat": "personal",
      "date": "2022",
      "excerpt": "Do you remember rushing through Saturday chores just to spend the rest of the day watching cartoons? Here are mine — and why they still matter.",
      "img": "img/offer-1@2x.jpg",
      "body": "<p>Do you remember waking up early on a Saturday morning, rushing through breakfast and chores just so you could spend the rest of the day glued to the television, watching your favourite cartoons? If so, you are not alone. For many of us, cartoons were a central part of childhood. From bright colours and goofy characters to surprisingly intricate storylines, cartoons captured our hearts and imaginations and left a lasting impression.</p>\n<p>Growing up, I was a huge fan of cartoons. I would wake up early on Saturdays and spend hours watching shows like Rugrats, The Magic School Bus, Voltron, Ned's Newt, Bugs Bunny, Daffy Duck, Mickey Mouse, Dexter's Laboratory, Johnny Bravo, and many others. I loved getting lost in those worlds — and I still do.</p>\n<p>Cartoon Network was my favourite channel, and I remember spending endless hours in front of the screen. Cartoons weren't just entertainment for me; they were a way to bond with my siblings and friends. We would sometimes skip school to watch our favourite shows, knowing full well we would face consequences from our parents and teachers. Drawing cartoons was another passion. I was always fairly good at it, and my parents would warn me against spending too much time on it — yet we always found ourselves drawing in our free time, bonding over our favourite characters.</p>\n<p>One of my earliest cartoon memories is waking up on a Saturday morning, stumbling bleary-eyed into the living room, switching on the TV, inviting friends over, and watching from early morning until midday. It was a treat — because on weekdays, my screen time was strictly limited to one hour after school before homework and chores. But on Saturdays, the cartoons were mine. And I wanted as many of them as I could get.</p>\n<p>Cartoons were a form of escapism that genuinely shaped my thinking — my imagination, my love for storytelling, and my appreciation for visual creativity. Nowadays, I am not quite as obsessed as I was as a child, but I still enjoy watching them when nostalgia calls. And reading comic books still brings back fond memories of simpler times, when my greatest worry was whether I would stay awake long enough for one more episode.</p>"
    },
    {
      "slug": "childhood-nerd-curiosity-adulthood-geek-career-specialisation",
      "title": "Childhood Nerd Curiosity, Adulthood Geek Career Specialisation",
      "cat": "career",
      "date": "2022",
      "excerpt": "Being a geek is not just a label — it is a lifelong passion that, when nurtured, becomes the foundation of a meaningful and valuable career.",
      "img": "img/offer-2@2x.jpg",
      "body": "<p>Being a geek is not simply about being labelled a \"nerd\" by your peers. It is about having a deep, lifelong passion for a particular subject — and using that passion to make meaningful contributions in any field you choose.</p>\n<p>As children, many of us were intensely curious about the world around us. For some, that curiosity gravitated toward science, technology, engineering, and mathematics, earning us the \"nerd\" or \"geek\" label from classmates. But as we grew older, that passion didn't fade — it grew stronger, guiding us toward careers built around our childhood interests.</p>\n<p>Whether it is research science, software engineering, literature, history, or the arts, having deep knowledge and genuine expertise in a particular area makes you a valuable asset in any professional environment. The curiosity you had as a child — that restless need to understand how things work, to pull systems apart and put them back together, to ask questions others weren't asking — is not a weakness. It is a gift.</p>\n<p>So if you have a passion for a particular subject, do not be afraid to embrace your inner nerd. That passion, nurtured over time and combined with deliberate skill development, could be the foundation of a fulfilling and rewarding career. Childhood curiosity and adult specialisation are not opposites — they are two chapters of the same story.</p>"
    },
    {
      "slug": "passion-for-video-games",
      "title": "Passion for Video Games",
      "cat": "personal",
      "date": "2022",
      "excerpt": "From watching Mortal Kombat in a cyber café as a child to chasing the dream of a state-of-the-art gaming setup — this is my gaming story.",
      "img": "img/4.jpg",
      "body": "<p>Growing up in the early 2000s, video games were not as accessible as they are today. I fell in love with them as a child when I visited a friend's neighbourhood and witnessed a group of older guys playing Mortal Kombat on PlayStation 2 in a cyber gaming café. It was a thrilling experience, and I was instantly hooked.</p>\n<p>From that moment, I started frequenting cyber cafés to watch and eventually play simpler games — the chess game, brick games, Nintendo Game Boy, Tetris on television, and Pac-Man. My passion for gaming grew rapidly. Around 2003, I purchased an Enduro keyboard gaming device, sometimes skipping school to play Duck Hunt and Adventure Island. I was genuinely addicted.</p>\n<p>In late 2004, I played Mortal Kombat on PS2 with my friend Shallum Gacheha — an exhilarating experience. But as the years went by, games became increasingly expensive, and I could no longer afford to keep up with the latest releases, let alone purchase consoles. With PlayStation 3 launching on November 11, 2006, and PlayStation 4 on November 15, 2013, I found myself unable to access console gaming and pivoted entirely to PC games.</p>\n<p>Without access to online gaming, I enjoyed offline PC games on CD — Hitman, Grand Theft Auto, Freedom Fighters, the Need for Speed series, Desert Storm, and more. But PC gaming also became progressively expensive, and I struggled to keep pace with new releases.</p>\n<p>Despite the financial challenges, I never surrendered my passion for video games. I spent much of my college and working years trying to catch up, even when it proved too costly. I was disappointed — but never defeated. I continue to work toward improving my financial position, with the hope of one day owning a high-end gaming setup worthy of everything I missed.</p>\n<p>The release of PlayStation 5 on November 12, 2020, was a wake-up call — a reminder of what I had been chasing for years, and a renewed motivation to get back to it. Video games have been a significant part of my life since childhood. I have never given up on this passion, and I am committed to pursuing it more seriously in the years ahead.</p>"
    },
    {
      "slug": "basketball-broken-dreams",
      "title": "Basketball: Broken Dreams",
      "cat": "personal",
      "date": "2023",
      "excerpt": "A knee injury in 2008 shattered my basketball dreams — but it also taught me something more valuable: resilience.",
      "img": "img/figure@2x.jpg",
      "body": "<p>Basketball is more than just a sport. For some, it is a passion, a way of life. For me, it was a dream — a dream that was cut short by a devastating knee injury that still affects me to this day.</p>\n<p>My love for basketball started in 2004, thanks to my friend Shallum Gacheha. He introduced me to underground hip hop culture and And1 basketball mixtapes, and I was instantly captivated. I spent countless hours watching And1 footage and NBA games, admiring the skill, athleticism, and finesse of the players.</p>\n<p>When I joined high school in 2005, I finally had the opportunity to play regularly. Although my school was not a basketball powerhouse, I loved the game and practised as often as I could. During school holidays, I would follow NBA games and study the moves of players like Kobe Bryant, trying to incorporate elements of their game into my own.</p>\n<p>But in 2008, my dreams were shattered. During an inter-school tournament, I suffered a knee injury that left me unable to play at the same level ever again. It was a devastating blow. I had poured so much time and effort into developing my game — and it came crashing down in a single moment.</p>\n<p>The injury affected me not only physically but emotionally. Basketball was a central part of my identity, and suddenly it had been taken from me. I struggled to come to terms with the reality that I could no longer compete at the level I had been working toward, and it took a significant toll on my mental health.</p>\n<p>But even in the face of that adversity, I refused to abandon the sport. I continued to watch games and follow my favourite players, even when I could not play myself. I collected more And1 mixtapes and watched them with a sense of longing and nostalgia.</p>\n<p>Today, in 2023, my knee still causes me pain and limits my mobility. But I refuse to give up on the dream of returning to the court. I am determined to explore the possibility of surgery and do everything in my power to play again. Basketball may have broken my dreams — but it has also taught me resilience and perseverance. In the end, basketball is more than a game. It is a way of life, a passion that never truly dies. And even though my dreams were broken, I will never stop loving the sport that gave me so much joy and inspiration.</p>"
    },
    {
      "slug": "high-school-diaries-dreams-and-nightmares",
      "title": "High School Diaries: Dreams and Nightmares",
      "cat": "personal",
      "date": "2022",
      "excerpt": "High school can be a time of discovery and joy — or of bullying, depression, and broken expectations. For me, it was both.",
      "img": "img/offer-4@2x.jpg",
      "body": "<p>High school can be a time of both dreams and nightmares — and for me, it was no exception. I joined Shikunga High School in 2005, and I immediately felt homesick. By Form 1 and Form 2 (2005–2006), I was dealing with clinical depression. The one saving grace during that period was the friends I made — fellow comic book lovers, book readers, technology enthusiasts, and basketball players. I remember standing in front of my classmates and answering questions about world affairs — and feeling genuinely intelligent for the first time in a school environment.</p>\n<p>In 2006, I spent much of my time geeking out with friends: drawing comic books, exploring the Encarta Encyclopedia in the school computer club, reading Time Magazine, Newsweek, and National Geographic. Most students did not approve of these activities, dismissing them as a waste of time. But these were the foundations of my career pursuits, and I pursued them regardless.</p>\n<p>High school life was far from rosy. I struggled with poverty, teachers who seemed to actively dislike me, and school prefects who bullied without accountability. One prefect accused me of stealing bananas from the school farm — a crime I did not commit. I was suspended, and my parents were forced to bring a full bunch of bananas to school to prove my innocence. Other students were punished for sneaking out, some forced to bring barbed wire as part of their punishment. In high school, three things dominated life: teachers who hated, prefects who bullied, and the pressure to please parents with your grades.</p>\n<p>I was broke for most of my high school years. Sometimes, nobody would visit me at the boarding school at all. The prefects could make life miserable for students they disliked — and this was particularly depressing because these were people I shared a dormitory and classroom with every single day.</p>\n<p>In 2007, during a high school basketball tournament, I sustained the knee injury that I have never fully recovered from to this day. I had also been set to represent the school in the 100-metre race, but dislocated my knee while preparing for the inter-class games.</p>\n<p>In 2008, before being promoted to the next class, students were ranked by academic index. I missed the required mark by a narrow margin. My suspicion that foul play was involved was later reinforced when my computer teacher came to wake me up playfully in class and I, thinking it was a fellow student, made an inappropriate gesture — only to realise too late it was a teacher. My classmates found it hilarious and he forgave me — but my class teacher, who suspected me of having a romantic interest in a girl I frequently spoke with, began finding reasons to punish me regularly. It felt like a coordinated effort to make me repeat the year. It made me both angry and deeply depressed.</p>\n<p>High school was a mixture of dreams and nightmares. While I pursued my intellectual interests and found meaningful friendships, I also faced serious challenges — financial hardship, bullying, academic politics, and emotional struggles. These experiences made me stronger and gave me a thicker skin. But they also left marks on my life that took years to begin to heal.</p>"
    }
  ]
};
