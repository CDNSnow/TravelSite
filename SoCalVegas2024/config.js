var currentImage = 0; 
var header = "SoCal and Vegas 2024";
var hrefs =  "SoCal and Vegas 2024";
var links = "";
var pictures = [
  "Mars.jpg",
  "HVSign.jpg",
  "HVRoad.jpg",
  "Flowers.jpg",
  "Rick.jpg",
  "Darshan.jpg",
  "Mike.jpg",
  "Chris.jpg",
  "RamRoom.jpg",
  "Lobby.jpg",
  "Hollywood.jpg",
  "StripClub.jpg",
  "Bela.jpg",
  "RTT.jpg",
  "Jars.jpg",
  "Juno.jpg",
  "HiddenValley.jpg",
  "JTrees.jpg",
  "VictorLyn.jpg",
  "Casino.jpg",
  "Warnings.jpg",
  "Log.jpg",
  "Jesus.jpg",
  "Miracle.jpg",
  "Geese.jpg"
];
var texts = [];
texts[0] = 'Mars always tries to stop me from leaving. Little did he know that this time it would be for two weeks.';
texts[1] = 'Landed in San Diego. Went to Point Loma Seafood, fresh fish overlooking the Marina. Then a four-day meditation retreat at Hidden Valley. Jet lag, predictably, gave me a day or two of depression. It always does me in. '
         + 'Sherry would quaranteen me for a week after I got back from California because I was so difficult to deal with.';
texts[2] = 'Ashram grounds. They used to raise rosemary here until NAFTA did them in.';
texts[3] = 'The landscaping is beautiful. Here is one of many flower beds. I meditated, studied, hiked. They actually had a punching bag in a mini-gym, but they didn\'t bring gloves. '
           + 'My kickboxing gym went broke, but a boxing gym is opening nearby. I suspect it won\'t be '
           + 'self-paced, and my lung damage may be an issue. I can fight one three minute round. Then it\'s "I know we\re fighting to the death, but can you give me five minutes?"';
texts[4] = 'Spent the afternoon with friend and fellow yogi Rick.';
texts[5] = 'We met at our favorite tiny Indian cafe because I\'d heard an Australian voice behind me, turned around to talk, and became friends with the '
           + 'guy he was talking to, Rick. He and his wife are considering getting a house. If they do, I\'m going to talk about renting a room to stay in Encinitas on the coast during the bad months in DC.';
texts[6] = 'Thanks, Mike, for taking care of Mars. He\'d snuck out one night, eaten a mouse, and gotten roundworm. The reverge of the mouse! Mike took for his second deworming.';
texts[7] = 'Drove to LA for lunch with Chris in Long Beach. He was a classically trained musician, then joined a rock band, Tangent. Very tight unison and intonation, but, contemptuous of his bandmates\’ ignorance of music theory, '
            + 'he posted a quiz on Facebook. Having taken two semesters of music theory, I answered it. We connected next time I was in LA and became friends. After doing pop up restaurants, '
            + 'he\'s now reinventing himself in cybersecurity, collecting certs, and has an internship pending. He\'s come a long way in a short amount of time.';
texts[8] = 'Ram was was my tour guide through India. We met in Canberra in 2005 when he\'d come to Australia in search of a mining job.';
texts[9] = 'His state-subsidized housing used to be a hotel, but went bust for lack of parking. Here\'s the lobby. Not bad for project housing.';
texts[10] = 'Hollywood has seen better days. I steered a path around the crashed homeless.';
texts[11] = 'Strip club among the stars. Motto: "A house of pretty girls and three ugly ones".';
texts[12] = "Childhood nostalgia. My father and I watched Chiller and Thriller (horror movies) every Sunday afternoon. Saw a lot of Bela, Lorre, Karloff.";
texts[13] = 'I got a star, too.';
texts[14] = 'Then a trip to the Getty. I briefly lost my wallet. I tracked it down to the parking attendant, thanks to AirTag. Someone had turned it in, minus $160. I cancelled my main credit card using Visa\'s '
            +'phone tree. When no replacement card arrived, I checked--they didn\'t cancel it. But there were no bogus charges. '
            + '<br/><br/>I made a life transition at the Getty. I knew I was middle-aged when the clerk called me "sir" instead of "dude". In the Getty tram, for the first time, someone stood up and gave me their seat. '
            +'<br/>The left jar contained the poison antidote Antidotum Mithridaticum, invented around 100 BC. I can\’t help wonder—was ground mithril an ingredient? How would you grind it?';
texts[15] = 'Juno tricked Jupiter into hurling a lightning bolt at his mortal hookup Semele, who had just given brith to Bacchus. She seems to be having second thoughts.';
texts[16] = 'Joshua Tree National Park. My friend Victor in Las Vegas and we have loose plans that in September, I fly into Vegas and we drive to JT and spend some time there.';

texts[17] = 'It\’s my favorite place on Earth, and I always have significant realizations here. One of this year\’s: I\’ve been trying to live a “balanced life”, doing a little of everything every day. '
             + 'That is so not me. I plunge into something and stay immersed until it\’s done. Now that I\’m back, things will be different.';
texts[18] = 'Visited Victor and Lyn in Las Vegas. Friends from Princeton. Victor does quantitative studies and sometimes taps me for number crunching. Lyn writes poetry.';
texts[19] = 'I stayed at a hotel+casino. A wonderland of colored lights. Would have gone nuts as a kid.  Now I regret that it provides a cliff for people to jump off.' 
          + '<br/><br/>Did I tell you the story of when my parents tried to teach me the evils of gambling? I was about four. We stopped at a Vegas cafe with a slot machine. '
           + 'They gave me a quarter and said, put it in the machine and see what happens. I looked at it and thought, this is basically a gumball machine. No one would '
          + 'put money in if you don\'t get something out. So I pulled the handle and got two quarters back. See? Then the waitress made them stop because I was underage.';
texts[20] = 'We hiked a trail near Charleston Peak. The trail was closed due threat of death. A big rain had washed out portions of the paved trail';
texts[21] = 'The only threat of death I saw was log resting above the trail. If the log comes loose…jump';
texts[22] = 'A Mexican named Jesus joined us. Despite having lived in Vegas four years, he refused to recommend a Mexican restaurant. So we went to our usual. ';
texts[23] = 'The miracle branch happened to land with it’s stem in a rivulet, and is doing just fine';
texts[24] = 'Natural spring oasis in Las Vegas. A Mexican trader found it in 1829. Then came the Mormons, then the Army and a railroad, whereupon it was founded as a city in 1905.';

