//states 
var top =  document.querySelector("#top"),
    down =  document.querySelector("#down"),
    pagecount = 0,
    pkg = [],
    filters = {
        top: "false",
        down: "false",
    },
        
 // select html elements to display movie details   
    poster = document.querySelector("#poster"),
    title = document.querySelector("#title3"),
    year = document.querySelector("#year"),
    genre = document.querySelector("#genre"),
    scene1 = document.querySelector("#scene1"),
    scene2 = document.querySelector("#scene2"),
    scene3 = document.querySelector("#scene3"),
    scene4 = document.querySelector("#scene4"),
    secondPoster = document.querySelector("#secondPoster"),
    synopsisText = document.querySelector("#synopsisText"),
    portrait = document.querySelector("#portrait"),
    directorname = document.querySelector("#directorname"),
    portrait1 = document.querySelector("#portrait1"),
    firstcast = document.querySelector("#firstcast"),
    firstrole = document.querySelector("#firstrole"),
    portrait2 = document.querySelector("#portrait2"),
    secondcast = document.querySelector("#secondcast"),
    secondrole = document.querySelector("#secondrole"),
    portrait3 = document.querySelector("#portrait3"),
    thirdcast = document.querySelector("#thirdcast"),
    thirdrole = document.querySelector("#thirdrole"),
    firstaward = document.querySelector("#firstaward"),  
    secondaward = document.querySelector("#secondaward"),
    awardImg = document.querySelector(".awardImg"),
    awardImg1 = document.querySelector(".awardImg1"),
    awardTitle = document.querySelector(".awardTitle");
    awardTitle2 = document.querySelector(".awardTitle1");
    thirdaward = document.querySelector("#thirdaward");
    awardTitle3 = document.querySelector(".awardTitle3");

    // packaged movies
var darkest = {
    poster: "./images/darkest/poster1.jpg",
    title: "DARKEST HOUR",
    year: "2017 PG 2H05MIN",
    minyear: 2017,
    genre: "BIOGRAPHY, DRAMA, HISTORY",
    scene1: "./images/darkest/Scene1.jpg",
    scene2: "./images/darkest/Scene2.jpg",
    scene3: "./images/darkest/Scene3.jpg",
    scene4: "./images/darkest/Scene4.jpg",
    poster2: "./images/darkest/2nd_thumbnail.jpg",
    synopsis: "In May 1940, the fate of Western Europe hangs on British Prime Minister Winston Churchill, who must decide whether to negotiate with Adolf Hitler, or fight.",
    portrait: "./images/darkest/Director.jpg",
    name: "Joe Wright",
    portrait1: "./images/darkest/cast1.jpg",
    firstcast: "Gary Oldman",
    firstrole: "as Winston Churchill",
    portrait2: "./images/darkest/cast2.jpg",
    secondcast: "Kristin Scott Thomas",
    secondrole: "as Clemmie",
    portrait3: "./images/darkest/cast3.jpg",
    thirdcast: "Ben Mendelsohn",
    thirdrole: "as King George VI",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Academy Awards 2018",
    secondaward: "Best Actor",
    awardTitle2: "The Golden Globe 2017",
    win:"best actor",
},
manchester = {
    poster: "./images/manchester/poster1.jpg",
    title: "MANCHESTER BY THE SEA",
    year: "2016 15 2H17MIN",
    minyear: 2016,
    genre: "DRAMA",
    scene1: "./images/manchester/Scene1.jpg",
    scene2: "./images/manchester/Scene2.jpg",
    scene3: "./images/manchester/Scene3.jpg",
    scene4: "./images/manchester/Scene4.jpg",
    poster2: "./images/manchester/2nd_thumbnail.jpg",
    synopsis: "A depressed uncle is asked to take care of his teenage nephew after the boy's father dies.",
    portrait: "./images/manchester/Director.jpg",
    name: "Kenneth Lonergan",
    portrait1: "./images/manchester/cast1.jpg",
    firstcast: "Casey Affleck",
    firstrole: "as Lee Chandler",
    portrait2: "./images/manchester/cast2.jpg",
    secondcast: "Ben O'Brien",
    secondrole: "as Young Patrick",
    portrait3: "./images/manchester/cast3.jpg",
    thirdcast: "Kyle Chandler",
    thirdrole: "as Joe Chandler",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Academy Awards 2017",
    secondaward: "Best Actor",
    awardTitle2: "The Golden Globe 2016",
    win:"best actor",
},

la = {
    poster: "./images/la/poster1.jpg",
    title: "LA LA LAND",
    year: "2016 12A 2H8MIN",
    minyear: 2016,
    genre: "DRAMA, COMEDY, MUSIC",
    scene1: "./images/la/Scene1.jpg",
    scene2: "./images/la/Scene2.jpg",
    scene3: "./images/la/Scene3.jpg",
    scene4: "./images/la/Scene4.jpg",
    poster2: "./images/la/2nd_thumbnail.jpg",
    synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    portrait: "./images/la/Director.jpg",
    name: "Damien Chazelle",
    portrait1: "./images/la/cast1.jpg",
    firstcast: "Ryan Gosling",
    firstrole: "as Sebastian",
    portrait2: "./images/la/cast2.jpg",
    secondcast: "Emma Stone",
    secondrole: "as Mia",
    portrait3: "./images/la/cast3.jpg",
    thirdcast: "Terry Walters",
    thirdrole: "as Linda",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Director",
    awardTitle: "The Academy Awards 2017",
    secondaward: "Best Actress",
    awardTitle2: "The Academy Awards 2017",
    thirdaward: "Best Actress",
    awardTitle3: "The Golden Globe 2017",
    fourthaward: "Best Director",
    fifthaward: "Best Picture",
    win: "best actress best director best picture",
},

three = {
    poster: "./images/three/poster1.jpg",
    title: "THREE BILLBOARDS OUTSIDE EBBING, MISSOURI",
    year: "2017 15 1h55MIN",
    minyear: 2017,
    genre: "DRAMA, CRIME",
    scene1: "./images/three/Scene1.jpg",
    scene2: "./images/three/Scene2.jpg",
    scene3: "./images/three/Scene3.jpg",
    scene4: "./images/three/Scene4.jpg",
    poster2: "./images/three/2nd_thumbnail.jpg",
    synopsis: "A mother personally challenges the local authorities to solve her daughter's murder when they fail to catch the culprit.",
    portrait: "./images/three/Director.jpg",
    name: "Martin McDonagh",
    portrait1: "./images/three/cast1.jpg",
    firstcast: "Frances McDormand",
    firstrole: "as 	Mildred",
    portrait2: "./images/three/cast2.jpg",
    secondcast: "Caleb Landry Jones",
    secondrole: "as Red Welby",
    portrait3: "./images/three/cast3.jpg",
    thirdcast: "Kerry Condon",
    thirdrole: "as Pamela",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Academy Awards 2018",
    secondaward: "Best Actress",
    awardTitle2: "The Golden Globe 2018",
    thirdaward: "Best Picture",
    win: "best actress best picture"
},

shapeOfWater = {
    poster: "./images/SOW/poster1.jpg",
    title: "THE SHAPE OF WATER",
    year: "2017 14A 2H3MIN",
    minyear: 2017,
    genre: "DRAMA, ADVENTURE, FANTASY ROMANCE, THRILLER",
    scene1: "./images/SOW/Scene1.jpg",
    scene2: "./images/SOW/Scene2.jpg",
    scene3: "./images/SOW/Scene3.jpg",
    scene4: "./images/SOW/Scene4.jpg",
    poster2: "./images/SOW/2nd_thumbnail.jpg",
    synopsis: " At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
    portrait: "./images/SOW/Director.jpg",
    name: "Guillermo del Toro",
    portrait1: "./images/SOW/cast1.jpg",
    firstcast: "Sally Hawkins",
    firstrole: "as Eliza Esposito",
    portrait2: "./images/SOW/cast2.jpg",
    secondcast: "Michael Shannon",
    secondrole: "as Strickland",
    portrait3: "./images/SOW/cast3.jpg",
    thirdcast: "Octavia Spencer",
    thirdrole: "as Zelda",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Director",
    awardTitle: "The Academy Awards 2018",
    secondaward: "Best Picture",
    awardTitle2: "The Academy Awards 2018",
    thirdaward: "Best Director",
    awardTitle3: "The Golden Globe 2018",
    win: "best director best picture"
},

moonlight = {
    poster: "./images/moonlight/poster1.jpg",
    title: "MOONLIGHT",
    year: "2016 14A 1H51MIN",
    minyear: 2016,
    genre: "DRAMA",
    scene1: "./images/moonlight/Scene1.jpg",
    scene2: "./images/moonlight/Scene2.jpg",
    scene3: "./images/moonlight/Scene3.jpg",
    scene4: "./images/moonlight/Scene4.jpg",
    poster2: "./images/moonlight/2nd_thumbnail.jpg",
    synopsis: "A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.",
    portrait: "./images/moonlight/Director.jpg",
    name: "Barry Jenkins",
    portrait1: "./images/moonlight/cast1.jpg",
    firstcast: "Mahershala Ali",
    firstrole: "as Juan",
    portrait2: "./images/moonlight/cast2.jpg",
    secondcast: "Duan Sanderson",
    secondrole: "as Azu",
    portrait3: "./images/moonlight/cast3.jpg",
    thirdcast: "Alex R. Hibbert",
    thirdrole: "as Little ",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Picture",
    awardTitle: "The Academy Awards 2017",
    secondaward: "Best Picture",
    awardTitle2: "The Golden Globe 2017",
    win: "best picture"
},

getout = {
    poster: "./images/getout/poster1.jpg",
    title: "GET OUT",
    year: "2017 15 1H44MIN",
    minyear: 2017,
    genre: "HORROR, MYSTERY, THRILLER",
    scene1: "./images/getout/Scene1.jpg",
    scene2: "./images/getout/Scene2.jpg",
    scene3: "./images/getout/Scene3.jpg",
    scene4: "./images/getout/Scene4.jpg",
    poster2: "./images/getout/2nd_thumbnail.jpg",
    synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    portrait: "./images/getout/Director.jpg",
    name: "Jordan Peele",
    portrait1: "./images/getout/cast1.jpg",
    firstcast: "Daniel Kaluuya",
    firstrole: "as Chris Washington",
    portrait2: "./images/getout/cast2.jpg",
    secondcast: "Allison Williams",
    secondrole: "as Rose Armitage",
    portrait3: "./images/getout/cast3.jpg",
    thirdcast: "Catherine Keener",
    thirdrole: "as Missy Armitage",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Picture",
    awardTitle: "The Academy Awards 2018",
    win: "best picture",
},

//Best Actors

theory = {
    poster: "./images/theory/poster1.jpg",
    title: "THE THEORY OF EVERYTHING",
    year: "2014 12A 2H3MIN",
    minyear: 2014,
    genre: "BIOGRAPHY, DRAMA, ROMANCE",
    scene1: "./images/theory/Scene1.jpg",
    scene2: "./images/theory/Scene2.jpg",
    scene3: "./images/theory/Scene3.jpg",
    scene4: "./images/theory/Scene4.jpg",
    poster2: "./images/theory/2nd_thumbnail.jpg",
    synopsis: "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
    portrait: "./images/theory/Director.jpg",
    name: "James Marsh",
    portrait1: "./images/theory/cast1.jpg",
    firstcast: "Eddie Redmayne",
    firstrole: "as Stephen Hawking",
    portrait2: "./images/theory/cast2.jpg",
    secondcast: "Felicity Jones",
    secondrole: "as Jane Hawking",
    portrait3: "./images/theory/cast3.jpg",
    thirdcast: "Tom Prior",
    thirdrole: "as Brian",
    awardImg: "./images/OscarAward.png",
    awardImg1: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Academy Awards 2015",
    secondaward: "Best Actor",
    awardTitle2: "The Golden Globe 2015",
    win: "best actor"
},
    
rha = {
    poster: "./images/rha/poster1.jpg",
    title: "BOHEMIAN RHAPSODY",
    year: "2018 12A 2H14MIN",
    minyear: 2018,
    genre: "BIOGRAPHY, DRAMA, MUSIC",
    scene1: "./images/rha/Scene1.jpg",
    scene2: "./images/rha/Scene2.jpg",
    scene3: "./images/rha/Scene3.jpg",
    scene4: "./images/rha/Scene4.jpg",
    poster2: "./images/rha/2nd_thumbnail.jpg",
    synopsis: "The story of the legendary rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).",
    portrait: "./images/rha/Director.jpg",
    name: "Bryan Singer",
    portrait1: "./images/rha/cast1.jpg",
    firstcast: "Rami Malek",
    firstrole: "as Freddie Mercury",
    portrait2: "./images/rha/cast2.jpg",
    secondcast: "Lucy Boynton",
    secondrole: "as Mary Austin",
    portrait3: "./images/rha/cast3.jpg",
    thirdcast: "Gwilym Lee",
    thirdrole: "as Brian May",
    awardImg: "./images/OscarAward.png",
    awardImg1: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Academy Awards 2019",
    secondaward: "Best Actor",
    awardTitle2: "The Golden Globe 2019",
    win: "best actor"
},
//Best Actress
alice = {
    poster: "./images/alice/poster1.jpg",
    title: "STILL ALICE",
    year: "2014 12A 1H41MIN",
    minyear: 2014,
    genre: "DRAMA",
    scene1: "./images/alice/Scene1.jpg",
    scene2: "./images/alice/Scene2.jpg",
    scene3: "./images/alice/Scene3.jpg",
    scene4: "./images/alice/Scene4.jpg",
    poster2: "./images/alice/2nd_thumbnail.jpg",
    synopsis: "A linguistics professor and her family find their bonds tested when she is diagnosed with Alzheimer's Disease.",
    portrait: "./images/alice/Director.jpg",
    name: " Richard Glatzer",
    portrait1: "./images/alice/cast1.jpg",
    firstcast: "Julianne Moore",
    firstrole: "as Alice Howland",
    portrait2: "./images/alice/cast2.jpg",
    secondcast: "Kate Bosworth",
    secondrole: "as Anna Howland-Jones",
    portrait3: "./images/alice/cast3.jpg",
    thirdcast: "Shane McRae",
    thirdrole: "asCharlie Howland-Jones",
    awardImg: "./images/OscarAward.png",
    awardImg1: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Academy Awards 2015",
    secondaward: "Best Actress",
    awardTitle2: "The Golden Globe 2015",
    win: "best actress"
},   
room = {
    poster: "./images/room/poster1.jpg",
    title: "ROOM",
    year: "2015 15 1H58MIN",
    minyear: 2015,
    genre: "DRAMA, THRILLER",
    scene1: "./images/room/Scene1.jpg",
    scene2: "./images/room/Scene2.jpg",
    scene3: "./images/room/Scene3.jpg",
    scene4: "./images/room/Scene4.jpg",
    poster2: "./images/room/2nd_thumbnail.jpg",
    synopsis: "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
    portrait: "./images/room/Director.jpg",
    name: "Lenny Abrahamson",
    portrait1: "./images/room/cast1.jpg",
    firstcast: "Brie Larson",
    firstrole: "as Ma",
    portrait2: "./images/room/cast2.jpg",
    secondcast: "Jacob Tremblay",
    secondrole: "as Jack",
    portrait3: "./images/room/cast3.jpg",
    thirdcast: "Sean Bridgers",
    thirdrole: "as Old Nick",
    awardImg: "./images/OscarAward.png",
    awardImg1: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Academy Awards 2016",
    secondaward: "Best Actress",
    awardTitle2: "The Golden Globe 2016",
    win: "best actress"
},  
fav = {
    poster: "./images/fav/poster1.jpg",
    title: "THE FAVOURITE",
    year: "2018 15 1H59MIN",
    minyear: 2018,
    genre: "DRAMA, BIOGRAPHY, HISTORY",
    scene1: "./images/fav/Scene1.jpg",
    scene2: "./images/fav/Scene2.jpg",
    scene3: "./images/fav/Scene3.jpg",
    scene4: "./images/fav/Scene4.jpg",
    poster2: "./images/fav/2nd_thumbnail.jpg",
    synopsis: "In early 18th century England, a frail Queen Anne occupies the throne and her close friend, Lady Sarah, governs the country in her stead. When a new servant, Abigail, arrives, her charm endears her to Sarah.",
    portrait: "./images/fav/Director.jpg",
    name: "Yorgos Lanthimos",
    portrait1: "./images/fav/cast1.jpg",
    firstcast: "Olivia Colman",
    firstrole: "as Queen Anne",
    portrait2: "./images/fav/cast2.jpg",
    secondcast: "Rachel Weisz",
    secondrole: "as Lady Sarah",
    portrait3: "./images/fav/cast3.jpg",
    thirdcast: "Emma Stone",
    thirdrole: "as Abigail",
    awardImg: "./images/OscarAward.png",
    awardImg1: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Academy Awards 2019",
    secondaward: "Best Actress",
    awardTitle2: "The Golden Globe 2019",
    win: "best actress"
}, 
    
//best pictures
bird = {
    poster: "./images/bird/poster1.jpg",
    title: "BIRDMAN",
    year: "2014 15 1H59MIN",
    minyear: 2014,
    genre: "COMEDY, DRAMA",
    scene1: "./images/bird/Scene1.jpg",
    scene2: "./images/bird/Scene2.jpg",
    scene3: "./images/bird/Scene3.jpg",
    scene4: "./images/bird/Scene4.jpg",
    poster2: "./images/bird/2nd_thumbnail.jpg",
    synopsis: "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
    portrait: "./images/bird/Director.jpg",
    name: "Alejandro G. Inarritu",
    portrait1: "./images/bird/cast1.jpg",
    firstcast: "Michael Keaton",
    firstrole: "as Riggan",
    portrait2: "./images/bird/cast2.jpg",
    secondcast: "Emma Stone",
    secondrole: "as Sam",
    portrait3: "./images/bird/cast3.jpg",
    thirdcast: "Jamahl Garrison-Lowe",
    thirdrole: "as Stagehand (Daniel)",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Picture",
    awardTitle: "The Academy Awards 2015",
    secondaward: "Best Director",
    awardTitle2: "The Golden Globe 2015",
    win: "best picture best director",
},   
greenbook = {
    poster: "./images/greenbook/poster1.jpg",
    title: "GREEN BOOK",
    year: "2018 12A 2H10MIN",
    minyear: 2018,
    genre: "COMEDY, DRAMA, biography",
    scene1: "./images/greenbook/Scene1.jpg",
    scene2: "./images/greenbook/Scene2.jpg",
    scene3: "./images/greenbook/Scene3.jpg",
    scene4: "./images/greenbook/Scene4.jpg",
    poster2: "./images/greenbook/2nd_thumbnail.jpg",
    synopsis: "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
    portrait: "./images/greenbook/Director.jpg",
    name: "Peter Farrelly",
    portrait1: "./images/greenbook/cast1.jpg",
    firstcast: "Mahershala Ali",
    firstrole: "as Dr. Donald Shirley",
    portrait2: "./images/greenbook/cast2.jpg",
    secondcast: "Viggo Mortensen",
    secondrole: "as Tony Lip",
    portrait3: "./images/greenbook/cast3.jpg",
    thirdcast: "Linda Cardellini",
    thirdrole: "as Stagehand (Daniel)",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Picture",
    awardTitle: "The Academy Awards 2019",
    win: "best picture",
},     
roma = {
    poster: "./images/greenbook/poster1.jpg",
    title: "ROMA",
    year: "2018 15 2H15MIN",
    minyear: 2018,
    genre: "DRAMA",
    scene1: "./images/greenbook/Scene1.jpg",
    scene2: "./images/greenbook/Scene2.jpg",
    scene3: "./images/greenbook/Scene3.jpg",
    scene4: "./images/greenbook/Scene4.jpg",
    poster2: "./images/greenbook/2nd_thumbnail.jpg",
    synopsis: "A year in the life of a middle-class family's maid in Mexico City in the early 1970s.",
    portrait: "./images/greenbook/Director.jpg",
    name: "Alfonso Cuarón",
    portrait1: "./images/greenbook/cast1.jpg",
    firstcast: "Yalitza Aparicio",
    firstrole: "as Cleo",
    portrait2: "./images/greenbook/cast2.jpg",
    secondcast: "Marina de Tavira",
    secondrole: "as Sra. Sofía",
    portrait3: "./images/greenbook/cast3.jpg",
    thirdcast: "Diego Cortina Autrey",
    thirdrole: "as Toño",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Director",
    awardTitle: "The Academy Awards 2019",
    secondaward: "Best Director",
    awardTitle2: "The Golden Globe 2019",
    win: "best director",
},
crazy = {
    poster: "./images/crazyheart/poster1.jpg",
    title: "CRAZY HEART",
    year: "2010 PG 1HR52MIN",
    minyear: 2010,
    genre: "MUSIC, DRAMA, ROMANCE",
    scene1: "./images/crazyheart/Scene1.jpg",
    scene2: "./images/crazyheart/Scene2.jpg",
    scene3: "./images/crazyheart/Scene3.jpg",
    scene4: "./images/crazyheart/Scene4.jpg",
    poster2: "./images/crazyheart/2nd_thumbnail.jpg",
    synopsis: "A faded country music musician is forced to reassess his dysfunctional life during a doomed romance that also inspires him.",
    portrait: "./images/crazyheart/Director.jpg",
    name: "Scott Cooper",
    portrait1: "./images/crazyheart/cast1.jpg",
    firstcast: "Maggie Gyllenhaal",
    firstrole: "as Jean Craddock",
    portrait2: "./images/crazyheart/cast2.jpg",
    secondcast: "Robert Duval",
    secondrole: "as Wayne",
    portrait3: "./images/crazyheart/cast3.jpg",
    thirdcast: "Jeff Bridges",
    thirdrole: "as Bad Blake",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Academy Awards 2010",
    secondaward: "Best Actor",
    awardTitle2: "The Golden Globe 2010",
    win:"best actor",
}, 
julie = {
    poster: "./images/julie/poster1.jpg",
    title: "JULIE & JULIA",
    year: "2009 1HR58MIN",
    minyear: 2010,
    genre: "BIOGRAPHY, DRAMA, ROMANCE",
    scene1: "./images/julie/Scene1.jpg",
    scene2: "./images/julie/Scene2.jpg",
    scene3: "./images/julie/Scene3.jpg",
    scene4: "./images/julie/Scene4.jpg",
    poster2: "./images/julie/2nd_thumbnail.jpg",
    synopsis: "Julia Child's story of her start in the cooking profession is intertwined with blogger Julie Powell's 2002 challenge to cook all the recipes in Child's first book.",
    portrait: "./images/julie/Director.jpg",
    name: "Scott Cooper",
    portrait1: "./images/julie/cast1.jpg",
    firstcast: "Meryl Streep",
    firstrole: "as Julia Child",
    portrait2: "./images/julie/cast2.jpg",
    secondcast: "Amy Adams",
    secondrole: "as Julie Powell",
    portrait3: "./images/julie/cast3.jpg",
    thirdcast: "Stanley Tucci",
    thirdrole: "as Paul Child",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Golden Globe 2010",
    win:"best actress",
},  
blind = {
    poster: "./images/blind/poster1.jpg",
    title: "THE BLIND SIDE",
    year: "2009 2HR09MIN",
    minyear: 2010,
    genre: "BIOGRAPHY, DRAMA, SPORT",
    scene1: "./images/blind/Scene1.jpg",
    scene2: "./images/blind/Scene2.jpg",
    scene3: "./images/blind/Scene3.jpg",
    scene4: "./images/blind/Scene4.jpg",
    poster2: "./images/blind/2nd_thumbnail.jpg",
    synopsis: "The story of Michael Oher, a homeless and traumatized boy who became an All American football player and first round NFL draft pick with the help of a caring woman and her family.",
    portrait: "./images/blind/Director.jpg",
    name: "Scott Cooper",
    portrait1: "./images/blind/cast1.jpg",
    firstcast: "Sandra Bullock",
    firstrole: "as Leigh Anne Tuohy",
    portrait2: "./images/blind/cast2.jpg",
    secondcast: "Tim McGraw",
    secondrole: "as Sean Tuohy",
    portrait3: "./images/blind/cast3.jpg",
    thirdcast: "Quinton Aaron",
    thirdrole: "as Michael Oher",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Academy Awards 2010",
    win:"best actress",
},
avatar = {
    poster: "./images/avatar/poster1.jpg",
    title: "AVATAR",
    year: "2009 2HR42MIN",
    minyear: 2010,
    genre: "ACTION, ADVENTURE, FANTASY",
    scene1: "./images/avatar/Scene1.jpg",
    scene2: "./images/avatar/Scene2.jpg",
    scene3: "./images/avatar/Scene3.jpg",
    scene4: "./images/avatar/Scene4.jpg",
    poster2: "./images/avatar/2nd_thumbnail.jpg",
    synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    portrait: "./images/avatar/Director.jpg",
    name: "James Cameron",
    portrait1: "./images/avatar/cast1.jpg",
    firstcast: "Sam Worthington",
    firstrole: "as Jake Sully",
    portrait2: "./images/avatar/cast2.jpg",
    secondcast: "Zoe Saldana",
    secondrole: "as Neytiri",
    portrait3: "./images/avatar/cast3.jpg",
    thirdcast: "Sigourney Weaver",
    thirdrole: "as Dr.Grace Augustine",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Director",
    awardTitle: "The Golden Globe Awards 2010",
    secondaward: "Best Picture",
    awardTitle2: "The Golden Globe Awards 2010",
    win:"best director best picture",
},
hurt = {
    poster: "./images/hurt/poster1.jpg",
    title: "THE HURT LOCKER",
    year: "2009 2HR12MIN",
    minyear: 2010,
    genre: "DRAMA, THRILLER, WAR",
    scene1: "./images/hurt/Scene1.jpg",
    scene2: "./images/hurt/Scene2.jpg",
    scene3: "./images/hurt/Scene3.jpg",
    scene4: "./images/hurt/Scene4.jpg",
    poster2: "./images/hurt/2nd_thumbnail.jpg",
    synopsis: "During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work..",
    portrait: "./images/hurt/Director.jpg",
    name: "Kathryn Bigelow",
    portrait1: "./images/hurt/cast1.jpg",
    firstcast: "Jeremy Renner",
    firstrole: "as William James",
    portrait2: "./images/hurt/cast2.jpg",
    secondcast: "Anthony Mackie",
    secondrole: "as JT Sanborn",
    portrait3: "./images/hurt/cast3.jpg",
    thirdcast: "Brian Geraghty",
    thirdrole: "as Owen Eldridge",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Director",
    awardTitle: "The Academy Awards 2010",
    secondaward: "Best Picture",
    awardTitle2: "The Academy Awards 2010",
    win:"best director best picture",
}, 
king = {
    poster: "./images/king/poster1.jpg",
    title: "THE KING'S SPEECH",
    year: "2010 1HR58MIN",
    minyear: 2011,
    genre: "DRAMA, BIOGRAPHY, HISTORY",
    scene1: "./images/king/Scene1.jpg",
    scene2: "./images/king/Scene2.jpg",
    scene3: "./images/king/Scene3.jpg",
    scene4: "./images/king/Scene4.jpg",
    poster2: "./images/king/2nd_thumbnail.jpg",
    synopsis: "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
    portrait: "./images/king/Director.jpg",
    name: "Tom Hooper",
    portrait1: "./images/king/cast1.jpg",
    firstcast: "Colin Firth",
    firstrole: "as King George VI",
    portrait2: "./images/king/cast2.jpg",
    secondcast: "Helena Bonham Carter",
    secondrole: "as Queen Elizabeth",
    portrait3: "./images/king/cast3.jpg",
    thirdcast: "Derek Jacobi",
    thirdrole: "as Archbishop Cosmo Lang",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Academy Awards 2011",
    secondaward: "Best Director",
    awardTitle2: "The Academy Awards 2011",
    thirdaward: "Best Picture",
    awardTitle3: "The Academy Awards 2011", 
    fourthaward: "Best Actor",
    awardTitle3: "The Golden Globe Awards 2011",
    win:"best director best actor best picture",
},
swan = {
    poster: "./images/swan/poster1.jpg",
    title: "BLACK SWAN",
    year: "2010 1HR48MIN",
    minyear: 2011,
    genre: "DRAMA, THRILLER",
    scene1: "./images/swan/Scene1.jpg",
    scene2: "./images/swan/Scene2.jpg",
    scene3: "./images/swan/Scene3.jpg",
    scene4: "./images/swan/Scene4.jpg",
    poster2: "./images/swan/2nd_thumbnail.jpg",
    synopsis: "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's Swan Lake.",
    portrait: "./images/swan/Director.jpg",
    name: "Darren Aronofsky",
    portrait1: "./images/swan/cast1.jpg",
    firstcast: "Natalie Portman",
    firstrole: "as Nina Sayers",
    portrait2: "./images/swan/cast2.jpg",
    secondcast: "Mila Kunis",
    secondrole: "as Lily",
    portrait3: "./images/swan/cast3.jpg",
    thirdcast: "Vincent Cassel",
    thirdrole: "as Thomas Leroy",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Academy Awards 2011",
    secondaward: "Best Actress",
    awardTitle2: "The Golden Globe Awards 2011",
    win:"best actress",
},  
social = {
    poster: "./images/social/poster1.jpg",
    title: "THE SOCIAL NETWORK",
    year: "2010 1HR48MIN",
    minyear: 2011,
    genre: "DRAMA, BIOGRAPHY",
    scene1: "./images/social/Scene1.jpg",
    scene2: "./images/social/Scene2.jpg",
    scene3: "./images/social/Scene3.jpg",
    scene4: "./images/social/Scene4.jpg",
    poster2: "./images/social/2nd_thumbnail.jpg",
    synopsis: "Harvard student Mark Zuckerberg creates the social networking site. That would become known as Facebook but is later sued by two brothers who claimed he stole their idea",
    portrait: "./images/social/Director.jpg",
    name: "David Fincher",
    portrait1: "./images/social/cast1.jpg",
    firstcast: "Jesse Eisenberg",
    firstrole: "as Mark Zuckerberg",
    portrait2: "./images/social/cast2.jpg",
    secondcast: "Rooney Mara",
    secondrole: "as Erica Albright",
    portrait3: "./images/social/cast3.jpg",
    thirdcast: "Andrew Garfield",
    thirdrole: "as Eduardo Saverin",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Picture",
    awardTitle: "The Golden Globe Awards 2011",
    secondaward: "Best Director",
    awardTitle2: "The Golden Globe Awards 2011",
    win:"best picture best director",
},
artist = {
    poster: "./images/artist/poster1.jpg",
    title: "THE ARTIST",
    year: "2011 1HR40MIN",
    minyear: 2012,
    genre: "DRAMA, ROMANCE, COMEDY",
    scene1: "./images/artist/Scene1.jpg",
    scene2: "./images/artist/Scene2.jpg",
    scene3: "./images/artist/Scene3.jpg",
    scene4: "./images/artist/Scene4.jpg",
    poster2: "./images/artist/2nd_thumbnail.jpg",
    synopsis: "An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywood's silent era.",
    portrait: "./images/artist/Director.jpg",
    name: "Michel Hazanavicius",
    portrait1: "./images/artist/cast1.jpg",
    firstcast: "Jean Dujardin",
    firstrole: "as George Valentin",
    portrait2: "./images/artist/cast2.jpg",
    secondcast: "Berenice Bejo",
    secondrole: "as Peppy Miller",
    portrait3: "./images/artist/cast3.jpg",
    thirdcast: "John Goodman",
    thirdrole: "as Al Zimmer",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Golden Globe Awards 2012",
    secondaward: "Best Actor",
    awardTitle2: "The Academy Awards 2012", 
    thirdaward: "Best Picture",
    awardTitle3: "The Academy Awards 2012",
    fourthaward: "Best Picture",
    awardTitle3: "The Academy Awards 2012",
    fifthaward: "Best Director",
    awardTitle3: "The Academy Awards 2012",
    win:"best picture best actor best director",
},
descendants = {
    poster: "./images/descendants/poster1.jpg",
    title: "THE DESCENDANTS",
    year: "2011 1HR55MIN",
    minyear: 2012,
    genre: "DRAMA, COMEDY",
    scene1: "./images/descendants/Scene1.jpg",
    scene2: "./images/descendants/Scene2.jpg",
    scene3: "./images/descendants/Scene3.jpg",
    scene4: "./images/descendants/Scene4.jpg",
    poster2: "./images/descendants/2nd_thumbnail.jpg",
    synopsis: "A land baron tries to reconnect with his two daughters after his wife is seriously injured in a boating accident.",
    portrait: "./images/descendants/Director.jpg",
    name: "Alexander Payne",
    portrait1: "./images/descendants/cast1.jpg",
    firstcast: "George Clooney",
    firstrole: "as Matt King",
    portrait2: "./images/descendants/cast2.jpg",
    secondcast: "Shailene Woodley",
    secondrole: "as Alexandra King",
    portrait3: "./images/descendants/cast3.jpg",
    thirdcast: "Amara Miller",
    thirdrole: "as Scottie King",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Golden Globe Awards 2012",
    secondaward: "Best Picture",
    awardTitle2: "The Golden Globe Awards 2012", 
    win:"best picture best actor",
}, 
iron = {
    poster: "./images/iron/poster1.jpg",
    title: "THE IRON LADY",
    year: "2011 1HR45MIN",
    minyear: 2012,
    genre: "DRAMA, BIOGRAPHY",
    scene1: "./images/iron/Scene1.jpg",
    scene2: "./images/iron/Scene2.jpg",
    scene3: "./images/iron/Scene3.jpg",
    scene4: "./images/iron/Scene4.jpg",
    poster2: "./images/iron/2nd_thumbnail.jpg",
    synopsis: "An elderly Margaret Thatcher talks to the imagined presence of her recently deceased husband as she struggles to come to terms with his death while scenes from her past life, from girlhood to British prime minister, intervene.",
    portrait: "./images/iron/Director.jpg",
    name: "Phyllida Lloyd",
    portrait1: "./images/iron/cast1.jpg",
    firstcast: "Meryl Streep",
    firstrole: "as Margaret Thatcher",
    portrait2: "./images/iron/cast2.jpg",
    secondcast: "Jim Broadbent",
    secondrole: "as Denis Thatcher",
    portrait3: "./images/iron/cast3.jpg",
    thirdcast: "Susan Brown",
    thirdrole: "as June",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Golden Globe Awards 2012",
    secondaward: "Best Actress",
    awardTitle2: "The Academy Awards 2012", 
    win:"best actress",
}, 
argo = {
    poster: "./images/argo/poster1.jpg",
    title: "ARGO",
    year: "2012 2HR00MIN",
    minyear: 2013,
    genre: "DRAMA, BIOGRAPHY, THRILLER",
    scene1: "./images/argo/Scene1.jpg",
    scene2: "./images/argo/Scene2.jpg",
    scene3: "./images/argo/Scene3.jpg",
    scene4: "./images/argo/Scene4.jpg",
    poster2: "./images/argo/2nd_thumbnail.jpg",
    synopsis: "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.",
    portrait: "./images/argo/Director.jpg",
    name: "Ben Affleck",
    portrait1: "./images/argo/cast1.jpg",
    firstcast: "Ben Affleck",
    firstrole: "as Tony Mendez",
    portrait2: "./images/argo/cast2.jpg",
    secondcast: "Bryan Cranston",
    secondrole: "as Jack O'Donnell",
    portrait3: "./images/argo/cast3.jpg",
    thirdcast: "Alan Arkin",
    thirdrole: "as Lester Siegel",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Picture",
    awardTitle: "The Golden Globe Awards 2013",
    secondaward: "Best Director",
    awardTitle2: "The Golden Globe Awards 2013",
    thirdaward: "Best Picture",
    awardTitle3: "The Academy Awards 2013", 
    win:"best picture",
},
lincoln = {
    poster: "./images/lincoln/poster1.jpg",
    title: "LINCOLN",
    year: "2012 2HR30MIN",
    minyear: 2013,
    genre: "DRAMA, BIOGRAPHY, HISTORY",
    scene1: "./images/lincoln/Scene1.jpg",
    scene2: "./images/lincoln/Scene2.jpg",
    scene3: "./images/lincoln/Scene3.jpg",
    scene4: "./images/lincoln/Scene4.jpg",
    poster2: "./images/lincoln/2nd_thumbnail.jpg",
    synopsis: "As the American Civil War continues to rage, America's president struggles with continuing carnage on the battlefield as he fights with many inside his own cabinet on the decision to emancipate the slaves.",
    portrait: "./images/lincoln/Director.jpg",
    name: "Steven Spielberg",
    portrait1: "./images/lincoln/cast1.jpg",
    firstcast: "Daniel Day-Lewis",
    firstrole: "as Abraham Lincoln",
    portrait2: "./images/lincoln/cast2.jpg",
    secondcast: "Sally Field",
    secondrole: "as Mary Todd Lincoln",
    portrait3: "./images/lincoln/cast3.jpg",
    thirdcast: "David Strathairn",
    thirdrole: "as William Seward",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actor",
    awardTitle: "The Golden Globe Awards 2013",
    secondaward: "Best Actor",
    awardTitle2: "The Academy Awards 2013",
    win:"best actor",
},
pi = {
    poster: "./images/pi/poster1.jpg",
    title: "LIFE OF PI",
    year: "2012 2HR07MIN",
    minyear: 2013,
    genre: "DRAMA, ADVENTURE, FANTASY",
    scene1: "./images/pi/Scene1.jpg",
    scene2: "./images/pi/Scene2.jpg",
    scene3: "./images/pi/Scene3.jpg",
    scene4: "./images/pi/Scene4.jpg",
    poster2: "./images/pi/2nd_thumbnail.jpg",
    synopsis: "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
    portrait: "./images/pi/Director.jpg",
    name: "Ang Lee",
    portrait1: "./images/pi/cast1.jpg",
    firstcast: "Suraj Sharma",
    firstrole: "as Pi Patel",
    portrait2: "./images/pi/cast2.jpg",
    secondcast: "Irrfan Khan",
    secondrole: "as Adult Pi Patel",
    portrait3: "./images/pi/cast3.jpg",
    thirdcast: "Adil Hussain",
    thirdrole: "as Santosh Patel",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Director",
    awardTitle: "The Academy Awards 2013",
    win:"best picture",
}, 
silver = {
    poster: "./images/silver/poster1.jpg",
    title: "SILVER LININGS PLAYBOOK",
    year: "2012 2HR02MIN",
    minyear: 2013,
    genre: "DRAMA, COMEDY, ROMANCE",
    scene1: "./images/silver/Scene1.jpg",
    scene2: "./images/silver/Scene2.jpg",
    scene3: "./images/silver/Scene3.jpg",
    scene4: "./images/silver/Scene4.jpg",
    poster2: "./images/silver/2nd_thumbnail.jpg",
    synopsis: "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife.",
    portrait: "./images/silver/Director.jpg",
    name: "David O. Russell",
    portrait1: "./images/silver/cast1.jpg",
    firstcast: "Suraj Sharma",
    firstrole: "as Pi Patel",
    portrait2: "./images/silver/cast2.jpg",
    secondcast: "Irrfan Khan",
    secondrole: "as Adult Pi Patel",
    portrait3: "./images/silver/cast3.jpg",
    thirdcast: "Adil Hussain",
    thirdrole: "as Santosh Patel",
    awardImg: "./images/OscarAward.png",
    firstaward: "Best Actress",
    awardTitle: "The Academy Awards 2013",
    secondaward: "Best Actress",
    awardTitle2: "The Golden Globes Awards 2013",
    win:"best actress",
}
        

pkg.push(darkest, manchester, la, three, shapeOfWater, moonlight, getout, theory, rha, alice, room, fav, bird, greenbook, roma, julie, crazy, blind, avatar, hurt, king, swan, social, artist, descendants, iron, argo, lincoln, pi, silver);

// select years as first filter 
function Selected() {
   document.querySelector("#Catcontainer").style.display = "block";
   document.querySelector("#container").style.display = "none";  
    filters.top = "true"
    console.log(filters.top)

}

function botSelected(){ 
    document.querySelector("#Catcontainer").style.display = "block";
    document.querySelector("#container").style.display = "none";  
    filters.down = "true"; 
}

//select award categories as second filter

function resultsPageActor(){

    document.querySelector("#Catcontainer").style.display = "none";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#resultsContainer").style.display = "block";
    document.querySelector("#selectionContainer").style.display = "none";
    
    if (filters.down == "true" && filters.top == "false") {
       filterMovie(2013, "best actor");
    } if (filters.down == "false" && filters.top == "true"){
       filterMovie(2014, "best actor");
    } if (filters.down == "false" && filters.top == "false"){
       filterMovie(2009, "best actor");
    }
    
}

function resultsPageActress() {
    document.querySelector("#Catcontainer").style.display = "none";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#resultsContainer").style.display = "block";
    document.querySelector("#selectionContainer").style.display = "none";
    
    if (filters.down == "true" && filters.top == "false") {
       filterMovie(2013, "best actress");
    } if (filters.down == "false" && filters.top == "true"){
       filterMovie(2014, "best actress");
    } if (filters.down == "false" && filters.top == "false"){
       filterMovie(2009, "best actress");
    }
}

function resultsPageDirector(){
    document.querySelector("#Catcontainer").style.display = "none";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#resultsContainer").style.display = "block";
    document.querySelector("#selectionContainer").style.display = "none";
    
    if (filters.down == "true" && filters.top == "false") {
       filterMovie(2013, "best director");
    } if (filters.down == "false" && filters.top == "true"){
       filterMovie(2014, "best director");
    } if (filters.down == "false" && filters.top == "false"){
       filterMovie(2009, "best director");
    }
  pagecount++;
    console.log(pagecount);
}

function resultsPagePicture(){
    document.querySelector("#Catcontainer").style.display = "none";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#resultsContainer").style.display = "block";
    document.querySelector("#selectionContainer").style.display = "none";
     
    if (filters.down == "true" && filters.top == "false") {
       filterMovie(2013, "best picture");
    } if (filters.down == "false" && filters.top == "true"){
       filterMovie(2014, "best picture");
    } if (filters.down == "false" && filters.top == "false"){
       filterMovie(2009, "best picture");
    }
    pagecount++;
    console.log(pagecount);
}

/*filter the new array so that the correct movie posters show
according to the search filters. */
function filterMovie(year,type){
     
    if (filters.down == "true" && filters.top == "false") {
        pkg = pkg.filter(obj => {
           return obj.minyear > year && obj.win.includes(type)
        })
           for(var i=0; i<pkg.length; i++){
               var result = document.createElement('img');
               result.src = pkg[i].poster;
               document.getElementById("pContainer").appendChild(result); 
               result.setAttribute('onclick','toSelection(src)');
               result.setAttribute('id','remove')
           }
    } if(filters.down == "false" && filters.top == "true"){
        pkg = pkg.filter(obj => {
           return obj.minyear < year && obj.win.includes(type)
        })
           for(var i=0; i<pkg.length; i++){
               var result = document.createElement('img');
               result.src = pkg[i].poster;
               document.getElementById("pContainer").appendChild(result); 
               result.setAttribute('onclick','toSelection(src)');
               result.setAttribute('id','remove')
           }
    } if(filters.down == "false" && filters.top == "false"){
        pkg = pkg.filter(obj => {
           return obj.minyear > year && obj.win.includes(type)
        })
           for(var i=0; i<pkg.length; i++){
               var result = document.createElement('img');
               result.src = pkg[i].poster;
               document.getElementById("pContainer").appendChild(result); 
               result.setAttribute('onclick','toSelection(src)');
               result.setAttribute('id','remove')
           }
    }  
}

// move to selected movie page
function toSelection(_src){
    
    document.querySelector("#Catcontainer").style.display = "none";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#resultsContainer").style.display = "none";
    document.querySelector("#selectionContainer").style.display = "block";
    
    //show selected movie based on the string name of the movie
    var str = _src;
    var n = str.includes("darkest");
    var m = str.includes("manchester");
    var l = str.includes("la");
    var t = str.includes("three");
    var s = str.includes("SOW");
    var moon = str.includes("moonlight");
    var g = str.includes("getout");
    var c = str.includes("crazyheart");
    var j = str.includes("julie");
    var b = str.includes("blind");
    var a = str.includes("avatar");
    var k = str.includes("king");
    var sw = str.includes("swan");
    var so = str.includes("social");
    var art = str.includes("artist");
    var desc = str.includes("descendants");
    var ir = str.includes("iron");
    var ar = str.includes("argo");
    var lin = str.includes("lincoln");
    var p = str.includes("pi");
    var si = str.includes("silver");
    var hu = str.includes("hurt");
    var the = str.includes("theory");
    var ra = str.includes("rha");
    var ali = str.includes("alice");
    var roo = str.includes("room");
    var fa = str.includes("fav");
    var bir = str.includes("bird");
    var green = str.includes("greenbook");
    var ma = str.includes("roma");
    
    // populate movie details into html 
     if (ma == true){
        poster.style.backgroundImage = "url("+roma.poster+")";
        title.innerText = roma.title;
        year.innerText = roma.year;
        genre.innerText = roma.genre;
        scene1.style.backgroundImage = "url("+roma.scene1+")";
        scene2.style.backgroundImage = "url("+roma.scene2+")";
        scene3.style.backgroundImage = "url("+roma.scene3+")";
        scene4.style.backgroundImage = "url("+roma.scene4+")";
        secondPoster.style.backgroundImage = "url("+roma.poster2+")";
        synopsisText.innerText = roma.synopsis;
        portrait.style.backgroundImage = "url("+roma.portrait+")";
        directorname.innerText = roma.name;
        portrait1.style.backgroundImage = "url("+roma.portrait1+")";
        firstcast.innerHTML = roma.firstcast;
        firstrole.innerHTML = roma.firstrole;
        portrait2.style.backgroundImage = "url("+roma.portrait2+")";
        secondcast.innerHTML = roma.secondcast;
        secondrole.innerHTML = roma.secondrole;
        portrait3.style.backgroundImage = "url("+roma.portrait3+")";
        thirdcast.innerHTML = roma.thirdcast;
        thirdrole.innerHTML = roma.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ roma.firstaward +"</span> <br> <span class='awardTitle'>"+ roma.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <div   class='awardImg2'></div>  <div> <span class='name' id='secondaward'>"+ roma.secondaward +"</span> <br> <span class='awardTitle'>"+ roma.awardTitle2 +"</span> </div> </div>"; 
    }        
    
    if (green == true){
        poster.style.backgroundImage = "url("+greenbook.poster+")";
        title.innerText = greenbook.title;
        year.innerText = greenbook.year;
        genre.innerText = greenbook.genre;
        scene1.style.backgroundImage = "url("+greenbook.scene1+")";
        scene2.style.backgroundImage = "url("+greenbook.scene2+")";
        scene3.style.backgroundImage = "url("+greenbook.scene3+")";
        scene4.style.backgroundImage = "url("+greenbook.scene4+")";
        secondPoster.style.backgroundImage = "url("+greenbook.poster2+")";
        synopsisText.innerText = greenbook.synopsis;
        portrait.style.backgroundImage = "url("+greenbook.portrait+")";
        directorname.innerText = greenbook.name;
        portrait1.style.backgroundImage = "url("+greenbook.portrait1+")";
        firstcast.innerHTML = greenbook.firstcast;
        firstrole.innerHTML = greenbook.firstrole;
        portrait2.style.backgroundImage = "url("+greenbook.portrait2+")";
        secondcast.innerHTML = greenbook.secondcast;
        secondrole.innerHTML = greenbook.secondrole;
        portrait3.style.backgroundImage = "url("+greenbook.portrait3+")";
        thirdcast.innerHTML = greenbook.thirdcast;
        thirdrole.innerHTML = greenbook.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ greenbook.firstaward +"</span> <br> <span class='awardTitle'>"+ greenbook.awardTitle +"</span> </div> </div>"; 
    }
    if (bir == true){
        poster.style.backgroundImage = "url("+bird.poster+")";
        title.innerText = bird.title;
        year.innerText = bird.year;
        genre.innerText = bird.genre;
        scene1.style.backgroundImage = "url("+bird.scene1+")";
        scene2.style.backgroundImage = "url("+bird.scene2+")";
        scene3.style.backgroundImage = "url("+bird.scene3+")";
        scene4.style.backgroundImage = "url("+bird.scene4+")";
        secondPoster.style.backgroundImage = "url("+bird.poster2+")";
        synopsisText.innerText = bird.synopsis;
        portrait.style.backgroundImage = "url("+bird.portrait+")";
        directorname.innerText = bird.name;
        portrait1.style.backgroundImage = "url("+bird.portrait1+")";
        firstcast.innerHTML = bird.firstcast;
        firstrole.innerHTML = bird.firstrole;
        portrait2.style.backgroundImage = "url("+bird.portrait2+")";
        secondcast.innerHTML = bird.secondcast;
        secondrole.innerHTML = bird.secondrole;
        portrait3.style.backgroundImage = "url("+bird.portrait3+")";
        thirdcast.innerHTML = bird.thirdcast;
        thirdrole.innerHTML = bird.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ bird.firstaward +"</span> <br> <span class='awardTitle'>"+ bird.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <div   class='awardImg2'></div>  <div> <span class='name' id='secondaward'>"+ bird.secondaward +"</span> <br> <span class='awardTitle'>"+ bird.awardTitle2 +"</span> </div> </div>"; 
    }        
    
      if (fa == true){
        poster.style.backgroundImage = "url("+fav.poster+")";
        title.innerText = fav.title;
        year.innerText = fav.year;
        genre.innerText = fav.genre;
        scene1.style.backgroundImage = "url("+fav.scene1+")";
        scene2.style.backgroundImage = "url("+fav.scene2+")";
        scene3.style.backgroundImage = "url("+fav.scene3+")";
        scene4.style.backgroundImage = "url("+fav.scene4+")";
        secondPoster.style.backgroundImage = "url("+fav.poster2+")";
        synopsisText.innerText = fav.synopsis;
        portrait.style.backgroundImage = "url("+fav.portrait+")";
        directorname.innerText = fav.name;
        portrait1.style.backgroundImage = "url("+fav.portrait1+")";
        firstcast.innerHTML = fav.firstcast;
        firstrole.innerHTML = fav.firstrole;
        portrait2.style.backgroundImage = "url("+fav.portrait2+")";
        secondcast.innerHTML = fav.secondcast;
        secondrole.innerHTML = fav.secondrole;
        portrait3.style.backgroundImage = "url("+fav.portrait3+")";
        thirdcast.innerHTML = fav.thirdcast;
        thirdrole.innerHTML = fav.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ fav.firstaward +"</span> <br> <span class='awardTitle'>"+ fav.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <div   class='awardImg2'></div>  <div> <span class='name' id='secondaward'>"+ fav.secondaward +"</span> <br> <span class='awardTitle'>"+ fav.awardTitle2 +"</span> </div> </div>"; 
    }        
    
      if (roo == true){
        poster.style.backgroundImage = "url("+room.poster+")";
        title.innerText = room.title;
        year.innerText = room.year;
        genre.innerText = room.genre;
        scene1.style.backgroundImage = "url("+room.scene1+")";
        scene2.style.backgroundImage = "url("+room.scene2+")";
        scene3.style.backgroundImage = "url("+room.scene3+")";
        scene4.style.backgroundImage = "url("+room.scene4+")";
        secondPoster.style.backgroundImage = "url("+room.poster2+")";
        synopsisText.innerText = room.synopsis;
        portrait.style.backgroundImage = "url("+room.portrait+")";
        directorname.innerText = room.name;
        portrait1.style.backgroundImage = "url("+room.portrait1+")";
        firstcast.innerHTML = room.firstcast;
        firstrole.innerHTML = room.firstrole;
        portrait2.style.backgroundImage = "url("+room.portrait2+")";
        secondcast.innerHTML = room.secondcast;
        secondrole.innerHTML = room.secondrole;
        portrait3.style.backgroundImage = "url("+room.portrait3+")";
        thirdcast.innerHTML = room.thirdcast;
        thirdrole.innerHTML = room.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ room.firstaward +"</span> <br> <span class='awardTitle'>"+ room.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <div   class='awardImg2'></div>  <div> <span class='name' id='secondaward'>"+ room.secondaward +"</span> <br> <span class='awardTitle'>"+ room.awardTitle2 +"</span> </div> </div>"; 
    }        
    
      if (ali == true){
        poster.style.backgroundImage = "url("+alice.poster+")";
        title.innerText = alice.title;
        year.innerText = alice.year;
        genre.innerText = alice.genre;
        scene1.style.backgroundImage = "url("+alice.scene1+")";
        scene2.style.backgroundImage = "url("+alice.scene2+")";
        scene3.style.backgroundImage = "url("+alice.scene3+")";
        scene4.style.backgroundImage = "url("+alice.scene4+")";
        secondPoster.style.backgroundImage = "url("+alice.poster2+")";
        synopsisText.innerText = alice.synopsis;
        portrait.style.backgroundImage = "url("+alice.portrait+")";
        directorname.innerText = alice.name;
        portrait1.style.backgroundImage = "url("+alice.portrait1+")";
        firstcast.innerHTML = alice.firstcast;
        firstrole.innerHTML = alice.firstrole;
        portrait2.style.backgroundImage = "url("+alice.portrait2+")";
        secondcast.innerHTML = alice.secondcast;
        secondrole.innerHTML = alice.secondrole;
        portrait3.style.backgroundImage = "url("+alice.portrait3+")";
        thirdcast.innerHTML = alice.thirdcast;
        thirdrole.innerHTML = alice.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ alice.firstaward +"</span> <br> <span class='awardTitle'>"+ alice.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <div   class='awardImg2'></div>  <div> <span class='name' id='secondaward'>"+ alice.secondaward +"</span> <br> <span class='awardTitle'>"+ alice.awardTitle2 +"</span> </div> </div>"; 
    }        
    
     if (ra == true){
        poster.style.backgroundImage = "url("+rha.poster+")";
        title.innerText = rha.title;
        year.innerText = rha.year;
        genre.innerText = rha.genre;
        scene1.style.backgroundImage = "url("+rha.scene1+")";
        scene2.style.backgroundImage = "url("+rha.scene2+")";
        scene3.style.backgroundImage = "url("+rha.scene3+")";
        scene4.style.backgroundImage = "url("+rha.scene4+")";
        secondPoster.style.backgroundImage = "url("+rha.poster2+")";
        synopsisText.innerText = rha.synopsis;
        portrait.style.backgroundImage = "url("+rha.portrait+")";
        directorname.innerText = rha.name;
        portrait1.style.backgroundImage = "url("+rha.portrait1+")";
        firstcast.innerHTML = rha.firstcast;
        firstrole.innerHTML = rha.firstrole;
        portrait2.style.backgroundImage = "url("+rha.portrait2+")";
        secondcast.innerHTML = rha.secondcast;
        secondrole.innerHTML = rha.secondrole;
        portrait3.style.backgroundImage = "url("+rha.portrait3+")";
        thirdcast.innerHTML = rha.thirdcast;
        thirdrole.innerHTML = rha.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ rha.firstaward +"</span> <br> <span class='awardTitle'>"+ rha.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <div   class='awardImg2'></div>  <div> <span class='name' id='secondaward'>"+ rha.secondaward +"</span> <br> <span class='awardTitle'>"+ rha.awardTitle2 +"</span> </div> </div>"; 
    }        
    
    if (the == true){
        poster.style.backgroundImage = "url("+theory.poster+")";
        title.innerText = theory.title;
        year.innerText = theory.year;
        genre.innerText = theory.genre;
        scene1.style.backgroundImage = "url("+theory.scene1+")";
        scene2.style.backgroundImage = "url("+theory.scene2+")";
        scene3.style.backgroundImage = "url("+theory.scene3+")";
        scene4.style.backgroundImage = "url("+theory.scene4+")";
        secondPoster.style.backgroundImage = "url("+theory.poster2+")";
        synopsisText.innerText = theory.synopsis;
        portrait.style.backgroundImage = "url("+theory.portrait+")";
        directorname.innerText = theory.name;
        portrait1.style.backgroundImage = "url("+theory.portrait1+")";
        firstcast.innerHTML = theory.firstcast;
        firstrole.innerHTML = theory.firstrole;
        portrait2.style.backgroundImage = "url("+theory.portrait2+")";
        secondcast.innerHTML = theory.secondcast;
        secondrole.innerHTML = theory.secondrole;
        portrait3.style.backgroundImage = "url("+theory.portrait3+")";
        thirdcast.innerHTML = theory.thirdcast;
        thirdrole.innerHTML = theory.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ hurt.firstaward +"</span> <br> <span class='awardTitle'>"+ hurt.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <div   class='awardImg2'></div>  <div> <span class='name' id='secondaward'>"+ hurt.secondaward +"</span> <br> <span class='awardTitle'>"+ hurt.awardTitle2 +"</span> </div> </div>"; 
    }        
    
    if (hu == true){
        poster.style.backgroundImage = "url("+hurt.poster+")";
        title.innerText = hurt.title;
        year.innerText = hurt.year;
        genre.innerText = hurt.genre;
        scene1.style.backgroundImage = "url("+hurt.scene1+")";
        scene2.style.backgroundImage = "url("+hurt.scene2+")";
        scene3.style.backgroundImage = "url("+hurt.scene3+")";
        scene4.style.backgroundImage = "url("+hurt.scene4+")";
        secondPoster.style.backgroundImage = "url("+hurt.poster2+")";
        synopsisText.innerText = hurt.synopsis;
        portrait.style.backgroundImage = "url("+hurt.portrait+")";
        directorname.innerText = hurt.name;
        portrait1.style.backgroundImage = "url("+hurt.portrait1+")";
        firstcast.innerHTML = hurt.firstcast;
        firstrole.innerHTML = hurt.firstrole;
        portrait2.style.backgroundImage = "url("+hurt.portrait2+")";
        secondcast.innerHTML = hurt.secondcast;
        secondrole.innerHTML = hurt.secondrole;
        portrait3.style.backgroundImage = "url("+hurt.portrait3+")";
        thirdcast.innerHTML = hurt.thirdcast;
        thirdrole.innerHTML = hurt.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ hurt.firstaward +"</span> <br> <span class='awardTitle'>"+ hurt.awardTitle +"</span> </div> </div>"; 
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='secondaward'>"+ hurt.secondaward +"</span> <br> <span class='awardTitle'>"+ hurt.awardTitle2 +"</span> </div> </div>"; 
    }        
    
       if (si == true){
        poster.style.backgroundImage = "url("+silver.poster+")";
        title.innerText = silver.title;
        year.innerText = silver.year;
        genre.innerText = silver.genre;
        scene1.style.backgroundImage = "url("+silver.scene1+")";
        scene2.style.backgroundImage = "url("+silver.scene2+")";
        scene3.style.backgroundImage = "url("+silver.scene3+")";
        scene4.style.backgroundImage = "url("+silver.scene4+")";
        secondPoster.style.backgroundImage = "url("+silver.poster2+")";
        synopsisText.innerText = silver.synopsis;
        portrait.style.backgroundImage = "url("+silver.portrait+")";
        directorname.innerText = silver.name;
        portrait1.style.backgroundImage = "url("+silver.portrait1+")";
        firstcast.innerHTML = silver.firstcast;
        firstrole.innerHTML = silver.firstrole;
        portrait2.style.backgroundImage = "url("+silver.portrait2+")";
        secondcast.innerHTML = iron.secondcast;
        secondrole.innerHTML = iron.secondrole;
        portrait3.style.backgroundImage = "url("+silver.portrait3+")";
        thirdcast.innerHTML = silver.thirdcast;
        thirdrole.innerHTML = silver.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ silver.firstaward +"</span> <br> <span class='awardTitle'>"+ silver.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='secondaward'>"+ silver.secondaward +"</span> <br> <span class='awardTitle'>"+ silver.awardTitle2 +"</span> </div> </div>"; 
    
    }    
      if (p == true){
        poster.style.backgroundImage = "url("+pi.poster+")";
        title.innerText = pi.title;
        year.innerText = pi.year;
        genre.innerText = pi.genre;
        scene1.style.backgroundImage = "url("+pi.scene1+")";
        scene2.style.backgroundImage = "url("+pi.scene2+")";
        scene3.style.backgroundImage = "url("+pi.scene3+")";
        scene4.style.backgroundImage = "url("+pi.scene4+")";
        secondPoster.style.backgroundImage = "url("+pi.poster2+")";
        synopsisText.innerText = pi.synopsis;
        portrait.style.backgroundImage = "url("+pi.portrait+")";
        directorname.innerText = pi.name;
        portrait1.style.backgroundImage = "url("+pi.portrait1+")";
        firstcast.innerHTML = pi.firstcast;
        firstrole.innerHTML = pi.firstrole;
        portrait2.style.backgroundImage = "url("+pi.portrait2+")";
        secondcast.innerHTML = pi.secondcast;
        secondrole.innerHTML = pi.secondrole;
        portrait3.style.backgroundImage = "url("+pi.portrait3+")";
        thirdcast.innerHTML = pi.thirdcast;
        thirdrole.innerHTML = pi.thirdrole;
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name'>"+ pi.firstaward +"</span> <br> <span class='awardTitle'>"+ pi.awardTitle +"</span> </div> </div>"; 
     }
    
       if (lin == true){
        poster.style.backgroundImage = "url("+lincoln.poster+")";
        title.innerText = lincoln.title;
        year.innerText = lincoln.year;
        genre.innerText = lincoln.genre;
        scene1.style.backgroundImage = "url("+lincoln.scene1+")";
        scene2.style.backgroundImage = "url("+lincoln.scene2+")";
        scene3.style.backgroundImage = "url("+lincoln.scene3+")";
        scene4.style.backgroundImage = "url("+lincoln.scene4+")";
        secondPoster.style.backgroundImage = "url("+lincoln.poster2+")";
        synopsisText.innerText = lincoln.synopsis;
        portrait.style.backgroundImage = "url("+lincoln.portrait+")";
        directorname.innerText = lincoln.name;
        portrait1.style.backgroundImage = "url("+lincoln.portrait1+")";
        firstcast.innerHTML = lincoln.firstcast;
        firstrole.innerHTML = lincoln.firstrole;
        portrait2.style.backgroundImage = "url("+lincoln.portrait2+")";
        secondcast.innerHTML = lincoln.secondcast;
        secondrole.innerHTML = lincoln.secondrole;
        portrait3.style.backgroundImage = "url("+lincoln.portrait3+")";
        thirdcast.innerHTML = lincoln.thirdcast;
        thirdrole.innerHTML = lincoln.thirdrole;
        
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='firstaward'>"+ lincoln.firstaward +"</span> <br> <span class='awardTitle'>"+ lincoln.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg1' src='./images/OscarAward.png'>  <div> <span class='name' id='secondaward'>"+ lincoln.secondaward +"</span> <br> <span class='awardTitle'>"+ lincoln.awardTitle2 +"</span> </div> </div>"; 
     } 
    
    
       if (ar == true){
        poster.style.backgroundImage = "url("+argo.poster+")";
        title.innerText = argo.title;
        year.innerText = argo.year;
        genre.innerText = argo.genre;
        scene1.style.backgroundImage = "url("+argo.scene1+")";
        scene2.style.backgroundImage = "url("+argo.scene2+")";
        scene3.style.backgroundImage = "url("+argo.scene3+")";
        scene4.style.backgroundImage = "url("+argo.scene4+")";
        secondPoster.style.backgroundImage = "url("+argo.poster2+")";
        synopsisText.innerText = argo.synopsis;
        portrait.style.backgroundImage = "url("+argo.portrait+")";
        directorname.innerText = argo.name;
        portrait1.style.backgroundImage = "url("+argo.portrait1+")";
        firstcast.innerHTML = argo.firstcast;
        firstrole.innerHTML = argo.firstrole;
        portrait2.style.backgroundImage = "url("+argo.portrait2+")";
        secondcast.innerHTML = argo.secondcast;
        secondrole.innerHTML = argo.secondrole;
        portrait3.style.backgroundImage = "url("+argo.portrait3+")";
        thirdcast.innerHTML = argo.thirdcast;
        thirdrole.innerHTML = argo.thirdrole;
       
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ argo.firstaward +"</span> <br> <span class='awardTitle'>"+ argo.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img class='awardImg2' src='./images/golden.png' <div> <span class='name'>"+ argo.secondaward +"</span> <br> <span class='awardTitle'>"+ argo.awardTitle2 +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <img class='awardImg1' src='./images/OscarAward.png'> <div> <span class='name' id='thirdaward'>"+ argo.thirdaward +"</span> <br> <span class='awardTitle3'>"+ argo.awardTitle3 +"</span> </div> </div>"; 
       }
    
      if (ir == true){
        poster.style.backgroundImage = "url("+iron.poster+")";
        title.innerText = iron.title;
        year.innerText = iron.year;
        genre.innerText = iron.genre;
        scene1.style.backgroundImage = "url("+iron.scene1+")";
        scene2.style.backgroundImage = "url("+iron.scene2+")";
        scene3.style.backgroundImage = "url("+iron.scene3+")";
        scene4.style.backgroundImage = "url("+iron.scene4+")";
        secondPoster.style.backgroundImage = "url("+iron.poster2+")";
        synopsisText.innerText = iron.synopsis;
        portrait.style.backgroundImage = "url("+iron.portrait+")";
        directorname.innerText = iron.name;
        portrait1.style.backgroundImage = "url("+iron.portrait1+")";
        firstcast.innerHTML = iron.firstcast;
        firstrole.innerHTML = iron.firstrole;
        portrait2.style.backgroundImage = "url("+iron.portrait2+")";
        secondcast.innerHTML = iron.secondcast;
        secondrole.innerHTML = iron.secondrole;
        portrait3.style.backgroundImage = "url("+iron.portrait3+")";
        thirdcast.innerHTML = iron.thirdcast;
        thirdrole.innerHTML = iron.thirdrole;
        
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='firstaward'>"+ iron.firstaward +"</span> <br> <span class='awardTitle'>"+ iron.awardTitle +"</span> </div> </div>"; 
        
       document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg1' src='./images/OscarAward.png'>  <div> <span class='name' id='secondaward'>"+ iron.secondaward +"</span> <br> <span class='awardTitle'>"+ iron.awardTitle2 +"</span> </div> </div>"; 
     } 
    
      if (desc == true){
        poster.style.backgroundImage = "url("+descendants.poster+")";
        title.innerText = descendants.title;
        year.innerText = descendants.year;
        genre.innerText = descendants.genre;
        scene1.style.backgroundImage = "url("+descendants.scene1+")";
        scene2.style.backgroundImage = "url("+descendants.scene2+")";
        scene3.style.backgroundImage = "url("+descendants.scene3+")";
        scene4.style.backgroundImage = "url("+descendants.scene4+")";
        secondPoster.style.backgroundImage = "url("+descendants.poster2+")";
        synopsisText.innerText = descendants.synopsis;
        portrait.style.backgroundImage = "url("+descendants.portrait+")";
        directorname.innerText = descendants.name;
        portrait1.style.backgroundImage = "url("+descendants.portrait1+")";
        firstcast.innerHTML = descendants.firstcast;
        firstrole.innerHTML = descendants.firstrole;
        portrait2.style.backgroundImage = "url("+descendants.portrait2+")";
        secondcast.innerHTML = descendants.secondcast;
        secondrole.innerHTML = descendants.secondrole;
        portrait3.style.backgroundImage = "url("+descendants.portrait3+")";
        thirdcast.innerHTML = descendants.thirdcast;
        thirdrole.innerHTML = descendants.thirdrole;
        
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='firstaward'>"+ descendants.firstaward +"</span> <br> <span class='awardTitle'>"+ descendants.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='secondaward'>"+ descendants.secondaward +"</span> <br> <span class='awardTitle'>"+ descendants.awardTitle2 +"</span> </div> </div>"; 
     } 
    
      if (art == true){
        poster.style.backgroundImage = "url("+artist.poster+")";
        title.innerText = artist.title;
        year.innerText = artist.year;
        genre.innerText = artist.genre;
        scene1.style.backgroundImage = "url("+artist.scene1+")";
        scene2.style.backgroundImage = "url("+artist.scene2+")";
        scene3.style.backgroundImage = "url("+artist.scene3+")";
        scene4.style.backgroundImage = "url("+artist.scene4+")";
        secondPoster.style.backgroundImage = "url("+artist.poster2+")";
        synopsisText.innerText = artist.synopsis;
        portrait.style.backgroundImage = "url("+artist.portrait+")";
        directorname.innerText = artist.name;
        portrait1.style.backgroundImage = "url("+artist.portrait1+")";
        firstcast.innerHTML = artist.firstcast;
        firstrole.innerHTML = artist.firstrole;
        portrait2.style.backgroundImage = "url("+artist.portrait2+")";
        secondcast.innerHTML = artist.secondcast;
        secondrole.innerHTML = artist.secondrole;
        portrait3.style.backgroundImage = "url("+artist.portrait3+")";
        thirdcast.innerHTML = artist.thirdcast;
        thirdrole.innerHTML = artist.thirdrole;
       
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ artist.firstaward +"</span> <br> <span class='awardTitle'>"+ artist.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img class='awardImg1' src='./images/OscarAward.png'>  <div> <span class='name'>"+ artist.secondaward +"</span> <br> <span class='awardTitle'>"+ artist.awardTitle2 +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <div  class='awardImg1'></div>  <div> <span class='name' id='thirdaward'>"+ artist.thirdaward +"</span> <br> <span class='awardTitle3'>"+ artist.awardTitle3 +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <div  class='awardImg1'></div>  <div> <span class='name' id='fourthaward'>"+ artist.fourthaward +"</span> <br> <span class='awardTitle3'>"+ artist.awardTitle3 +"</span> </div> </div>"; 
        
         document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <div  class='awardImg1'></div>  <div> <span class='name' id='fifthaward'>"+ artist.fifthaward +"</span> <br> <span class='awardTitle3'>"+ artist.awardTitle3 +"</span> </div> </div>";    
        
    }
     
     if (so == true){
        poster.style.backgroundImage = "url("+social.poster+")";
        title.innerText = social.title;
        year.innerText = social.year;
        genre.innerText = social.genre;
        scene1.style.backgroundImage = "url("+social.scene1+")";
        scene2.style.backgroundImage = "url("+social.scene2+")";
        scene3.style.backgroundImage = "url("+social.scene3+")";
        scene4.style.backgroundImage = "url("+social.scene4+")";
        secondPoster.style.backgroundImage = "url("+social.poster2+")";
        synopsisText.innerText = social.synopsis;
        portrait.style.backgroundImage = "url("+social.portrait+")";
        directorname.innerText = social.name;
        portrait1.style.backgroundImage = "url("+social.portrait1+")";
        firstcast.innerHTML = social.firstcast;
        firstrole.innerHTML = social.firstrole;
        portrait2.style.backgroundImage = "url("+social.portrait2+")";
        secondcast.innerHTML = social.secondcast;
        secondrole.innerHTML = social.secondrole;
        portrait3.style.backgroundImage = "url("+social.portrait3+")";
        thirdcast.innerHTML = social.thirdcast;
        thirdrole.innerHTML = social.thirdrole;
        
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='firstaward'>"+ social.firstaward +"</span> <br> <span class='awardTitle'>"+ social.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='secondaward'>"+ social.secondaward +"</span> <br> <span class='awardTitle'>"+ social.awardTitle2 +"</span> </div> </div>"; 
     } 
     
     if (sw == true){
        poster.style.backgroundImage = "url("+swan.poster+")";
        title.innerText = swan.title;
        year.innerText = swan.year;
        genre.innerText = swan.genre;
        scene1.style.backgroundImage = "url("+swan.scene1+")";
        scene2.style.backgroundImage = "url("+swan.scene2+")";
        scene3.style.backgroundImage = "url("+swan.scene3+")";
        scene4.style.backgroundImage = "url("+swan.scene4+")";
        secondPoster.style.backgroundImage = "url("+swan.poster2+")";
        synopsisText.innerText = swan.synopsis;
        portrait.style.backgroundImage = "url("+swan.portrait+")";
        directorname.innerText = swan.name;
        portrait1.style.backgroundImage = "url("+swan.portrait1+")";
        firstcast.innerHTML = swan.firstcast;
        firstrole.innerHTML = swan.firstrole;
        portrait2.style.backgroundImage = "url("+swan.portrait2+")";
        secondcast.innerHTML = swan.secondcast;
        secondrole.innerHTML = swan.secondrole;
        portrait3.style.backgroundImage = "url("+swan.portrait3+")";
        thirdcast.innerHTML = swan.thirdcast;
        thirdrole.innerHTML = swan.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ swan.firstaward +"</span> <br> <span class='awardTitle'>"+ swan.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='secondaward'>"+ swan.secondaward +"</span> <br> <span class='awardTitle'>"+ swan.awardTitle2 +"</span> </div> </div>"; 
     } 
     if (k == true){
        poster.style.backgroundImage = "url("+king.poster+")";
        title.innerText = king.title;
        year.innerText = king.year;
        genre.innerText = king.genre;
        scene1.style.backgroundImage = "url("+king.scene1+")";
        scene2.style.backgroundImage = "url("+king.scene2+")";
        scene3.style.backgroundImage = "url("+king.scene3+")";
        scene4.style.backgroundImage = "url("+king.scene4+")";
        secondPoster.style.backgroundImage = "url("+king.poster2+")";
        synopsisText.innerText = king.synopsis;
        portrait.style.backgroundImage = "url("+king.portrait+")";
        directorname.innerText = king.name;
        portrait1.style.backgroundImage = "url("+king.portrait1+")";
        firstcast.innerHTML = king.firstcast;
        firstrole.innerHTML = king.firstrole;
        portrait2.style.backgroundImage = "url("+king.portrait2+")";
        secondcast.innerHTML = king.secondcast;
        secondrole.innerHTML = king.secondrole;
        portrait3.style.backgroundImage = "url("+king.portrait3+")";
        thirdcast.innerHTML = king.thirdcast;
        thirdrole.innerHTML = king.thirdrole;
       
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name'>"+ king.firstaward +"</span> <br> <span class='awardTitle'>"+ king.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img class='awardImg1' src='./images/OscarAward.png'>  <div> <span class='name'>"+ king.secondaward +"</span> <br> <span class='awardTitle'>"+ king.awardTitle2 +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <div  class='awardImg1'></div>  <div> <span class='name' id='thirdaward'>"+ king.thirdaward +"</span> <br> <span class='awardTitle3'>"+ king.awardTitle3 +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <img  class='awardImg2' src='../images/golden.png'>  <div> <span class='name' id='fourthaward'>"+ king.fourthaward +"</span> <br> <span class='awardTitle3'>"+ king.awardTitle3 +"</span> </div> </div>"; 
    }
      if (a == true){
         poster.style.backgroundImage = "url("+avatar.poster+")";
        title.innerText = avatar.title;
        year.innerText = avatar.year;
        genre.innerText = avatar.genre;
        scene1.style.backgroundImage = "url("+avatar.scene1+")";
        scene2.style.backgroundImage = "url("+avatar.scene2+")";
        scene3.style.backgroundImage = "url("+avatar.scene3+")";
        scene4.style.backgroundImage = "url("+avatar.scene4+")";
        secondPoster.style.backgroundImage = "url("+avatar.poster2+")";
        synopsisText.innerText = avatar.synopsis;
        portrait.style.backgroundImage = "url("+avatar.portrait+")";
        directorname.innerText = avatar.name;
        portrait1.style.backgroundImage = "url("+avatar.portrait1+")";
        firstcast.innerHTML = avatar.firstcast;
        firstrole.innerHTML = avatar.firstrole;
        portrait2.style.backgroundImage = "url("+avatar.portrait2+")";
        secondcast.innerHTML = avatar.secondcast;
        secondrole.innerHTML = avatar.secondrole;
        portrait3.style.backgroundImage = "url("+avatar.portrait3+")";
        thirdcast.innerHTML = avatar.thirdcast;
        thirdrole.innerHTML = avatar.thirdrole;
       
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ avatar.firstaward +"</span> <br> <span class='awardTitle'>"+ avatar.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ avatar.secondaward +"</span> <br> <span class='awardTitle'>"+ avatar.awardTitle2 +"</span> </div> </div>"; 
    
    }
    
      if (b == true){
        poster.style.backgroundImage = "url("+blind.poster+")";
        title.innerText = blind.title;
        year.innerText = blind.year;
        genre.innerText = blind.genre;
        scene1.style.backgroundImage = "url("+blind.scene1+")";
        scene2.style.backgroundImage = "url("+blind.scene2+")";
        scene3.style.backgroundImage = "url("+blind.scene3+")";
        scene4.style.backgroundImage = "url("+blind.scene4+")";
        secondPoster.style.backgroundImage = "url("+blind.poster2+")";
        synopsisText.innerText = blind.synopsis;
        portrait.style.backgroundImage = "url("+blind.portrait+")";
        directorname.innerText = blind.name;
        portrait1.style.backgroundImage = "url("+blind.portrait1+")";
        firstcast.innerHTML = blind.firstcast;
        firstrole.innerHTML = blind.firstrole;
        portrait2.style.backgroundImage = "url("+blind.portrait2+")";
        secondcast.innerHTML = blind.secondcast;
        secondrole.innerHTML = blind.secondrole;
        portrait3.style.backgroundImage = "url("+blind.portrait3+")";
        thirdcast.innerHTML = blind.thirdcast;
        thirdrole.innerHTML = blind.thirdrole;
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name'>"+ blind.firstaward +"</span> <br> <span class='awardTitle'>"+ blind.awardTitle +"</span> </div> </div>"; 
     }
    
     if (j == true){
        poster.style.backgroundImage = "url("+julie.poster+")";
        title.innerText = julie.title;
        year.innerText = julie.year;
        genre.innerText = julie.genre;
        scene1.style.backgroundImage = "url("+julie.scene1+")";
        scene2.style.backgroundImage = "url("+julie.scene2+")";
        scene3.style.backgroundImage = "url("+julie.scene3+")";
        scene4.style.backgroundImage = "url("+julie.scene4+")";
        secondPoster.style.backgroundImage = "url("+julie.poster2+")";
        synopsisText.innerText = julie.synopsis;
        portrait.style.backgroundImage = "url("+julie.portrait+")";
        directorname.innerText = julie.name;
        portrait1.style.backgroundImage = "url("+julie.portrait1+")";
        firstcast.innerHTML = julie.firstcast;
        firstrole.innerHTML = julie.firstrole;
        portrait2.style.backgroundImage = "url("+julie.portrait2+")";
        secondcast.innerHTML = julie.secondcast;
        secondrole.innerHTML = julie.secondrole;
        portrait3.style.backgroundImage = "url("+julie.portrait3+")";
        thirdcast.innerHTML = julie.thirdcast;
        thirdrole.innerHTML = julie.thirdrole;
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ julie.firstaward +"</span> <br> <span class='awardTitle'>"+ julie.awardTitle +"</span> </div> </div>"; 
     }
    
     if (c == true){
        poster.style.backgroundImage = "url("+crazy.poster+")";
        title.innerText = crazy.title;
        year.innerText = crazy.year;
        genre.innerText = crazy.genre;
        scene1.style.backgroundImage = "url("+crazy.scene1+")";
        scene2.style.backgroundImage = "url("+crazy.scene2+")";
        scene3.style.backgroundImage = "url("+crazy.scene3+")";
        scene4.style.backgroundImage = "url("+crazy.scene4+")";
        secondPoster.style.backgroundImage = "url("+crazy.poster2+")";
        synopsisText.innerText = crazy.synopsis;
        portrait.style.backgroundImage = "url("+crazy.portrait+")";
        directorname.innerText = crazy.name;
        portrait1.style.backgroundImage = "url("+crazy.portrait1+")";
        firstcast.innerHTML = crazy.firstcast;
        firstrole.innerHTML = crazy.firstrole;
        portrait2.style.backgroundImage = "url("+crazy.portrait2+")";
        secondcast.innerHTML = crazy.secondcast;
        secondrole.innerHTML = crazy.secondrole;
        portrait3.style.backgroundImage = "url("+crazy.portrait3+")";
        thirdcast.innerHTML = crazy.thirdcast;
        thirdrole.innerHTML = crazy.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ crazy.firstaward +"</span> <br> <span class='awardTitle'>"+ crazy.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='secondaward'>"+ crazy.secondaward +"</span> <br> <span class='awardTitle'>"+ crazy.awardTitle2 +"</span> </div> </div>"; 
     }
    
    if (n == true){
        poster.style.backgroundImage = "url("+darkest.poster+")";
        title.innerText = darkest.title;
        year.innerText = darkest.year;
        genre.innerText = darkest.genre;
        scene1.style.backgroundImage = "url("+darkest.scene1+")";
        scene2.style.backgroundImage = "url("+darkest.scene2+")";
        scene3.style.backgroundImage = "url("+darkest.scene3+")";
        scene4.style.backgroundImage = "url("+darkest.scene4+")";
        secondPoster.style.backgroundImage = "url("+darkest.poster2+")";
        synopsisText.innerText = darkest.synopsis;
        portrait.style.backgroundImage = "url("+darkest.portrait+")";
        directorname.innerText = darkest.name;
        portrait1.style.backgroundImage = "url("+darkest.portrait1+")";
        firstcast.innerHTML = darkest.firstcast;
        firstrole.innerHTML = darkest.firstrole;
        portrait2.style.backgroundImage = "url("+darkest.portrait2+")";
        secondcast.innerHTML = darkest.secondcast;
        secondrole.innerHTML = darkest.secondrole;
        portrait3.style.backgroundImage = "url("+darkest.portrait3+")";
        thirdcast.innerHTML = darkest.thirdcast;
        thirdrole.innerHTML = darkest.thirdrole;
        
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ darkest.firstaward +"</span> <br> <span class='awardTitle'>"+ darkest.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='secondaward'>"+ darkest.secondaward +"</span> <br> <span class='awardTitle'>"+ darkest.awardTitle2 +"</span> </div> </div>"; 
   
    } if (m == true){
        poster.style.backgroundImage = "url("+manchester.poster+")";
        title.innerText = manchester.title;
        year.innerText = manchester.year;
        genre.innerText = manchester.genre;
        scene1.style.backgroundImage = "url("+manchester.scene1+")";
        scene2.style.backgroundImage = "url("+manchester.scene2+")";
        scene3.style.backgroundImage = "url("+manchester.scene3+")";
        scene4.style.backgroundImage = "url("+manchester.scene4+")";
        secondPoster.style.backgroundImage = "url("+manchester.poster2+")";
        synopsisText.innerText = manchester.synopsis;
        portrait.style.backgroundImage = "url("+manchester.portrait+")";
        directorname.innerText = manchester.name;
        portrait1.style.backgroundImage = "url("+manchester.portrait1+")";
        firstcast.innerHTML = manchester.firstcast;
        firstrole.innerHTML = manchester.firstrole;
        portrait2.style.backgroundImage = "url("+manchester.portrait2+")";
        secondcast.innerHTML = manchester.secondcast;
        secondrole.innerHTML = manchester.secondrole;
        portrait3.style.backgroundImage = "url("+manchester.portrait3+")";
        thirdcast.innerHTML = manchester.thirdcast;
        thirdrole.innerHTML = manchester.thirdrole;
     
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name' id='firstaward'>"+ manchester.firstaward +"</span> <br> <span class='awardTitle'>"+ manchester.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='secondaward'>"+ manchester.secondaward +"</span> <br> <span class='awardTitle'>"+ manchester.awardTitle2 +"</span> </div> </div>"; 
  
    } if (l == true){
        poster.style.backgroundImage = "url("+la.poster+")";
        title.innerText = la.title;
        year.innerText = la.year;
        genre.innerText = la.genre;
        scene1.style.backgroundImage = "url("+la.scene1+")";
        scene2.style.backgroundImage = "url("+la.scene2+")";
        scene3.style.backgroundImage = "url("+la.scene3+")";
        scene4.style.backgroundImage = "url("+la.scene4+")";
        secondPoster.style.backgroundImage = "url("+la.poster2+")";
        synopsisText.innerText = la.synopsis;
        portrait.style.backgroundImage = "url("+la.portrait+")";
        directorname.innerText = la.name;
        portrait1.style.backgroundImage = "url("+la.portrait1+")";
        firstcast.innerHTML = la.firstcast;
        firstrole.innerHTML = la.firstrole;
        portrait2.style.backgroundImage = "url("+la.portrait2+")";
        secondcast.innerHTML = la.secondcast;
        secondrole.innerHTML = la.secondrole;
        portrait3.style.backgroundImage = "url("+la.portrait3+")";
        thirdcast.innerHTML = la.thirdcast;
        thirdrole.innerHTML = la.thirdrole;
       
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name'>"+ la.firstaward +"</span> <br> <span class='awardTitle'>"+ la.awardTitle +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img class='awardImg1' src='./images/OscarAward.png'>  <div> <span class='name'>"+ la.secondaward +"</span> <br> <span class='awardTitle'>"+ la.awardTitle2 +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='thirdaward'>"+ la.thirdaward +"</span> <br> <span class='awardTitle3'>"+ la.awardTitle3 +"</span> </div> </div>"; 
        
        document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <img class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='fourthaward'>"+ la.fourthaward +"</span> <br> <span class='awardTitle3'>"+ la.awardTitle3 +"</span> </div> </div>"; 
        
         document.querySelector("#awardBox").innerHTML += "<div id='awardLine1'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name' id='fifthaward'>"+ la.fifthaward +"</span> <br> <span class='awardTitle3'>"+ la.awardTitle3 +"</span> </div> </div>";    
        
    } if (t == true){
        poster.style.backgroundImage = "url("+three.poster+")";
        title.innerText = three.title;
        year.innerText = three.year;
        genre.innerText = three.genre;
        scene1.style.backgroundImage = "url("+three.scene1+")";
        scene2.style.backgroundImage = "url("+three.scene2+")";
        scene3.style.backgroundImage = "url("+three.scene3+")";
        scene4.style.backgroundImage = "url("+three.scene4+")";
        secondPoster.style.backgroundImage = "url("+three.poster2+")";
        synopsisText.innerText = three.synopsis;
        portrait.style.backgroundImage = "url("+three.portrait+")";
        directorname.innerText = three.name;
        portrait1.style.backgroundImage = "url("+three.portrait1+")";
        firstcast.innerHTML = three.firstcast;
        firstrole.innerHTML = three.firstrole;
        portrait2.style.backgroundImage = "url("+three.portrait2+")";
        secondcast.innerHTML = three.secondcast;
        secondrole.innerHTML = three.secondrole;
        portrait3.style.backgroundImage = "url("+three.portrait3+")";
        thirdcast.innerHTML = three.thirdcast;
        thirdrole.innerHTML = three.thirdrole;
        
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name'>"+ three.firstaward +"</span> <br> <span class='awardTitle'>"+ three.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ three.secondaward +"</span> <br> <span class='awardTitle'>"+ three.awardTitle2 +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ three.thirdaward +"</span> <br> <span class='awardTitle'>"+ three.awardTitle2 +"</span> </div> </div>"; 
    
    } if (s == true){
         poster.style.backgroundImage = "url("+shapeOfWater.poster+")";
        title.innerText = shapeOfWater.title;
        year.innerText = shapeOfWater.year;
        genre.innerText = shapeOfWater.genre;
        scene1.style.backgroundImage = "url("+shapeOfWater.scene1+")";
        scene2.style.backgroundImage = "url("+shapeOfWater.scene2+")";
        scene3.style.backgroundImage = "url("+shapeOfWater.scene3+")";
        scene4.style.backgroundImage = "url("+shapeOfWater.scene4+")";
        secondPoster.style.backgroundImage = "url("+shapeOfWater.poster2+")";
        synopsisText.innerText = shapeOfWater.synopsis;
        portrait.style.backgroundImage = "url("+shapeOfWater.portrait+")";
        directorname.innerText = shapeOfWater.name;
        portrait1.style.backgroundImage = "url("+shapeOfWater.portrait1+")";
        firstcast.innerHTML = shapeOfWater.firstcast;
        firstrole.innerHTML = shapeOfWater.firstrole;
        portrait2.style.backgroundImage = "url("+shapeOfWater.portrait2+")";
        secondcast.innerHTML = shapeOfWater.secondcast;
        secondrole.innerHTML = shapeOfWater.secondrole;
        portrait3.style.backgroundImage = "url("+shapeOfWater.portrait3+")";
        thirdcast.innerHTML = shapeOfWater.thirdcast;
        thirdrole.innerHTML = shapeOfWater.thirdrole;
       
         document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name'>"+ shapeOfWater.firstaward +"</span> <br> <span class='awardTitle'>"+ shapeOfWater.awardTitle +"</span> </div> </div>"; 
        
       document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg1' src='./images/OscarAward.png'>  <div> <span class='name'>"+ shapeOfWater.secondaward +"</span> <br> <span class='awardTitle'>"+ shapeOfWater.awardTitle2 +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ shapeOfWater.thirdaward +"</span> <br> <span class='awardTitle'>"+ shapeOfWater.awardTitle3 +"</span> </div> </div>"; 
        
    
    } if (moon == true){
        poster.style.backgroundImage = "url("+moonlight.poster+")";
        title.innerText = moonlight.title;
        year.innerText = moonlight.year;
        genre.innerText = moonlight.genre;
        scene1.style.backgroundImage = "url("+moonlight.scene1+")";
        scene2.style.backgroundImage = "url("+moonlight.scene2+")";
        scene3.style.backgroundImage = "url("+moonlight.scene3+")";
        scene4.style.backgroundImage = "url("+moonlight.scene4+")";
        secondPoster.style.backgroundImage = "url("+moonlight.poster2+")";
        synopsisText.innerText = moonlight.synopsis;
        portrait.style.backgroundImage = "url("+moonlight.portrait+")";
        directorname.innerText = moonlight.name;
        portrait1.style.backgroundImage = "url("+moonlight.portrait1+")";
        firstcast.innerHTML = moonlight.firstcast;
        firstrole.innerHTML = moonlight.firstrole;
        portrait2.style.backgroundImage = "url("+moonlight.portrait2+")";
        secondcast.innerHTML = moonlight.secondcast;
        secondrole.innerHTML = moonlight.secondrole;
        portrait3.style.backgroundImage = "url("+moonlight.portrait3+")";
        thirdcast.innerHTML = moonlight.thirdcast;
        thirdrole.innerHTML = moonlight.thirdrole;
       
        document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'> <div> <span class='name'>"+ moonlight.firstaward +"</span> <br> <span class='awardTitle'>"+ moonlight.awardTitle +"</span> </div> </div>"; 
        
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg2' src='./images/golden.png'>  <div> <span class='name'>"+ moonlight.secondaward +"</span> <br> <span class='awardTitle'>"+ moonlight.awardTitle2 +"</span> </div> </div>"; 
    
    } if (g == true){
        poster.style.backgroundImage = "url("+getout.poster+")";
        title.innerText = getout.title;
        year.innerText = getout.year;
        genre.innerText = getout.genre;
        scene1.style.backgroundImage = "url("+getout.scene1+")";
        scene2.style.backgroundImage = "url("+getout.scene2+")";
        scene3.style.backgroundImage = "url("+getout.scene3+")";
        scene4.style.backgroundImage = "url("+getout.scene4+")";
        secondPoster.style.backgroundImage = "url("+getout.poster2+")";
        synopsisText.innerText = getout.synopsis;
        portrait.style.backgroundImage = "url("+getout.portrait+")";
        directorname.innerText = getout.name;
        portrait1.style.backgroundImage = "url("+getout.portrait1+")";
        firstcast.innerHTML = getout.firstcast;
        firstrole.innerHTML = getout.firstrole;
        portrait2.style.backgroundImage = "url("+getout.portrait2+")";
        secondcast.innerHTML = getout.secondcast;
        secondrole.innerHTML = getout.secondrole;
        portrait3.style.backgroundImage = "url("+getout.portrait3+")";
        thirdcast.innerHTML = getout.thirdcast;
        thirdrole.innerHTML = getout.thirdrole;
       
          document.querySelector("#awardBox").innerHTML += "<div class='awardLine'>  <img  class='awardImg' src='./images/OscarAward.png'>  <div> <span class='name'>"+ getout.firstaward +"</span> <br> <span class='awardTitle'>"+ getout.awardTitle +"</span> </div> </div>"; 
    }
 
     
 
}

//nav bar functions

function backtoFirst(){
    pagecount = 0;
     document.querySelector("#container").style.display = "block";
     document.querySelector("#Catcontainer").style.display = "none";
     document.querySelector("#resultsContainer").style.display = "none";
     document.querySelector("#selectionContainer").style.display = "none";
    
     //array needs to be cleared when going back to reinput filters
      for(var i=0; i=pkg.length;i++){
            pkg.pop(i);
        }
    
    var myNode = document.getElementById("pContainer");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
        for(var i=0; i=pkg.length;i++){
            pkg.pop(i);
        }
    }
    //populate array with all the movies again
    pkg.push(darkest, manchester, la, three, shapeOfWater, moonlight, getout, theory, rha, alice, room, fav, bird, greenbook, roma, julie, crazy, blind, avatar, hurt, king, swan, social, artist, descendants, iron, argo, lincoln, pi, silver);

    filters.top = "false";
    filters.down = "false";
    document.querySelector("#awardBox").innerHTML = "";
}

function backtoCat(){
    document.querySelector("#container").style.display = "none";
    document.querySelector("#Catcontainer").style.display = "block";
    document.querySelector("#resultsContainer").style.display = "none";
    document.querySelector("#selectionContainer").style.display = "none";
   
   
     for(var i=0; i=pkg.length;i++){
           pkg.pop(i);
       }
   
   var myNode = document.getElementById("pContainer");
   while (myNode.firstChild) {
       myNode.removeChild(myNode.firstChild);
       for(var i=0; i=pkg.length;i++){
           pkg.pop(i);
       }
   }
   
 pkg.push(darkest, manchester, la, three, shapeOfWater, moonlight, getout, theory, rha, alice, room, fav, bird, greenbook, roma, julie, crazy, blind, avatar, hurt, king, swan, social, artist, descendants, iron, argo, lincoln, pi, silver);

 document.querySelector("#awardBox").innerHTML = "";
}

function backtoSelection(){
    document.querySelector("#container").style.display = "none";
    document.querySelector("#Catcontainer").style.display = "none";
    document.querySelector("#resultsContainer").style.display = "none";
    document.querySelector("#selectionContainer").style.display = "block";
}


