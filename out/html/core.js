window.game={"compiled":"{\"title\":\"The Archivist and the Revolution\",\"author\":\"Autumn Chen\",\"content\":\"\",\"scenes\":{\"prevScene\":{\"id\":\"prevScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"prevTopScene\":{\"id\":\"prevTopScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"jumpScene\":{\"id\":\"jumpScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"backSpecialScene\":{\"id\":\"backSpecialScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"returnScene\":{\"id\":\"returnScene\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"a_1.a_11\":{\"id\":\"a_1.a_11\",\"options\":[{\"id\":\"@a_1.a_12\",\"title\":\"A- was different before.\"},{\"id\":\"@a_1.call\",\"title\":\"Call A-.\"}],\"content\":{\"content\":\"A- is a doctor these days. He works for one of the corporate hospitals in the central spires. He'll probably have money, at least, although whether he would be willing to spend it on you is an open question.\",\"type\":\"paragraph\"}},\"a_3\":{\"id\":\"a_3\",\"type\":\"scene\",\"title\":\"A-, again\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"a_2.boredom\":{\"id\":\"a_2.boredom\",\"goTo\":[{\"id\":\"a_2.lx_square\"}],\"content\":{\"content\":\"You are meeting with A- to relieve your boredom.\",\"type\":\"paragraph\"}},\"anxiety.not_just\":{\"id\":\"anxiety.not_just\",\"options\":[{\"id\":\"@anxiety.pathetic\",\"title\":\"You are fucking pathetic\"},{\"id\":\"@anxiety.shouldnt\",\"title\":\"You should not even be alive.\"}],\"content\":{\"content\":\"You are laying on your side, in the bed. Your body aches, but you cannot move. Your eyes close and open, close and open. You are hungry and your head throbs with every beat of your slowly-failing heart.\",\"type\":\"paragraph\"}},\"archives.archive_choices\":{\"id\":\"archives.archive_choices\",\"options\":[{\"id\":\"@archives.war\",\"title\":\"The War\"},{\"id\":\"@archives.city\",\"title\":\"The City\"},{\"id\":\"@archives.cataclysm\",\"title\":\"The Cataclysm\"},{\"id\":\"@archives.uprising\",\"title\":\"The Uprising\"},{\"id\":\"@archives.laverneans\",\"title\":\"The Laverneans\"},{\"id\":\"@main\",\"title\":\"Back\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"food.food_options\":{\"id\":\"food.food_options\",\"options\":[{\"id\":\"@food.takeout\",\"title\":\"Purchase some cooked food.\"},{\"id\":\"@food.cook\",\"title\":\"Buy ingredients for cooking and make your own meals.\"},{\"id\":\"@food.scrounge\",\"title\":\"Scrounge for snacks, leftovers, and so on.\"},{\"id\":\"@food.cook_new\",\"title\":\"Cook with the ingredients you have.\"},{\"id\":\"@food.starve\",\"title\":\"Starve.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"introspect\":{\"id\":\"introspect\",\"type\":\"scene\",\"title\":\"Introspect\",\"subtitle\":\"Thinking has never helped before, but maybe now is different.\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.past\":{\"id\":\"k_1.past\",\"maxVisits\":1,\"countVisitsMax\":1,\"options\":[{\"id\":\"@k_1.child\",\"title\":\"You and K- had a child, once.\"},{\"id\":\"@k_1.call\",\"title\":\"Make the call.\"}],\"content\":{\"content\":\"Back when it was still legal, you and K- were married. That was six years ago. She was your first love, or something like that. She made your cold and cruel heart believe in love, or something like that. It was an interesting era.\",\"type\":\"paragraph\"}},\"k_2.year\":{\"id\":\"k_2.year\",\"subtitle\":\"You saw her on a trolley.\",\"goTo\":[{\"id\":\"k_2.anyway\"}],\"content\":{\"content\":\"It was over a year ago when you last physically saw her. The Archives are physically located in the university district, not so far from K-'s labs, and you were heading there for a meeting. You almost did not recognize her, and she either didn't recognize you or pretended not to.\",\"type\":\"paragraph\"}},\"k_3\":{\"id\":\"k_3\",\"type\":\"scene\",\"title\":\"K-\",\"subtitle\":\"K- comes to pick up S-\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Wow. This is my first time being here.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Really?\\\", you ask, even though you already know the answer.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah. What's the floor area?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"20 square metres.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. That's pretty small.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I know.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"It's a lot smaller than my place. At least I have a separate bedroom.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Good for you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"K-'s gaze wanders, until it stops at your very interesting washing machine. From experience you know that your conversation has reached an impasse. One of you has to break it. Meanwhile S- has sat up in bed, rubbing his eyes.\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"Wait for K-. \"},\" \\\"So, S-, do you want to go to school now?\\\" \",{\"type\":\"emphasis-1\",\"content\":\" \\\"Do you want to stay here?\\\"\"}]}]},\"main.end_of_day\":{\"id\":\"main.end_of_day\",\"title\":\"You're too tired to do anything else.\",\"viewIf\":{\"$code\":\"return (((((Q['day_major'] || 0) >= 1) || ((Q['day_minor'] || 0) >= 1)) || ((Q['stress'] || 0) > 10)) || ((Q['loneliness'] || 0) > 10));\"},\"onArrival\":[{\"$code\":\"Q['day'] = (Q['day'] || 0) + 1;\\nQ['rent_due'] = (Q['rent_due'] || 0) - 1;\\nQ['food'] = (Q['food'] || 0) - 1;\\nQ['medicine'] = (Q['medicine'] || 0) - 1;\\nQ['got_food_today'] = 0;\\nQ['got_medicine_today'] = 0;\\nQ['went_out_today'] = 0;\\nQ['day_entertainment'] = 0;\"}],\"goTo\":[{\"id\":\"main.eod_check\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.view_0\":{\"id\":\"data.view_0\",\"title\":\"DNA data recovery\",\"subtitle\":\"Your paid job.\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['data_seen'] = (Q['data_seen'] || 0) + 1;\\nQ['stress'] = (Q['stress'] || 0) + 1;\\nQ['day_data_seen'] = 0;\\nQ['data_day'] = (Q['day'] || 0);\"}],\"viewIf\":{\"$code\":\"return ((((Q['day_major'] || 0)===0) && ((Q['stress'] || 0) < 15)) && ((Q['data_seen'] || 0)===0));\"},\"maxChoices\":5,\"tags\":[\"major\"],\"frequency\":500,\"options\":[{\"id\":\"#data\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"In the middle of the 21st century, when many believed (accurately) that civilization's collapse was imminent, a group of scientists undertook a mission to preserve human knowledge. They transcribed what they considered as the most important pieces of human knowledge into DNA, and transfected the DNA into specially engineered strains of E. coli. These strains was designed to outcompete existing bacterial populations, and to replicate and preserve the data-storage DNA plasmids with minimal mutations. The scientists then released their creations into the wild, via probiotic supplements among other means.\"},{\"type\":\"paragraph\",\"content\":\"Today, it is estimated that 10% of E. coli populations in still-populated areas are used for DNA storage, as the technology was used repeatedly over the years, discovered and lost and discovered again.\"},{\"type\":\"paragraph\",\"content\":\"Your job as DNA Data Archivist is to take the sequenced DNA datasets, the strings of A, T, G, and C, and turn them into human-readable information. You're pretty good at this, although it didn't stop the casualization of your employment.\"},{\"type\":\"paragraph\",\"content\":\"The computer turns on, and the CRT monitor flickers to life. You open your e-mail. There are new data recovery and archival requests.\"},{\"type\":\"paragraph\",\"content\":\"There is also a message from C-, your coworker-turned supervisor.\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Hi Em,\"}},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Sorry about the job title change. You're still a valuable contributor to our team, although your output has slid recently.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Best, C-.\"}}]},\"k_bad.didnt_want\":{\"id\":\"k_bad.didnt_want\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"medicine.med_options\":{\"id\":\"medicine.med_options\",\"options\":[{\"id\":\"@medicine.buy\",\"title\":\"Refill at the pharmacy.\"},{\"id\":\"@medicine.ask_k\",\"title\":\"Ask K-.\"},{\"id\":\"@medicine.ask_a\",\"title\":\"Ask A-.\"},{\"id\":\"@medicine.none\",\"title\":\"Go without.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"one.watch\":{\"id\":\"one.watch\",\"options\":[{\"id\":\"@one.remember\",\"title\":\"Remember.\"}],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"The light outside the window was bright and artificial, emanating from a poor simulacrum of the sun hanging on the metal ceiling above. Rows of green and violet photosynthetic macroorganisms emulated an ancient streetscape, the scene completed by the humans walking by. It was the equivalent of midday in the city without a sun.\"}}},\"online_montage.cn\":{\"id\":\"online_montage.cn\",\"title\":\"CityNet\",\"subtitle\":{\"content\":[\"An update on the present situation. \",{\"type\":\"conditional\",\"content\":\"CW: slurs\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['cw_enabled'] || 0)===1);\"}}]},\"maxChoices\":3,\"viewIf\":{\"$code\":\"return (((Q['day_minor'] || 0)===0) && ((Q['montage_progress'] || 0) > 0));\"},\"onArrival\":[{\"$code\":\"Q['montage_progress'] = (Q['montage_progress'] || 0) + 1;\\nQ['numb'] = 1;\\nQ['day_minor'] = (Q['day_minor'] || 0) + 1;\"}],\"tags\":[\"minor\"],\"newPage\":true,\"options\":[{\"id\":\"#montage\"}],\"content\":{\"content\":\"What are the headlines of the day?\",\"type\":\"paragraph\"}},\"ritual.even_death\":{\"id\":\"ritual.even_death\",\"options\":[{\"id\":\"@ritual.graveyard\",\"title\":\"The graveyard is a poor use of land for a city as cramped as this.\"},{\"id\":\"@ritual.scratch\",\"title\":\"Scratch at the gravestone some more.\"},{\"id\":\"@ritual.bowl\",\"title\":\"Put the paper into the metal bowl.\"}],\"content\":{\"content\":\"You are in front of Lily's gravestone, a small brown brick in a field of gray lichen. The name carved on the stone is illegible from years of scratches. Above the scratches, deepening grooves mark her real name.\",\"type\":\"paragraph\"}},\"mutual_aid.checklist\":{\"id\":\"mutual_aid.checklist\",\"options\":[{\"id\":\"@mutual_aid.mask\",\"title\":\"Mask.\"},{\"id\":\"@mutual_aid.clothes\",\"title\":\"Attire.\"},{\"id\":\"@mutual_aid.voice\",\"title\":\"Voice.\"},{\"id\":\"@mutual_aid.just_go\",\"title\":\"Just go.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"root.start\":{\"id\":\"root.start\",\"options\":[{\"id\":\"@one\",\"title\":\"Start game\"},{\"id\":\"@root.credits\",\"title\":\"Credits and inspirations\"},{\"id\":\"@root.enable_cw\",\"title\":\"Enable content warnings.\"},{\"id\":\"@root.disable_cw\",\"title\":\"Disable content warnings.\"}],\"content\":{\"type\":\"heading\",\"content\":\"The Archivist and the Revolution\"}},\"s_1.no_idea\":{\"id\":\"s_1.no_idea\",\"options\":[{\"id\":\"@s_1.not_parent\",\"title\":\"You are not cut out to be a parent.\"},{\"id\":\"@s_1.one_night\",\"title\":\"It's just for one night.\"},{\"id\":\"@s_1.maybe_fine\",\"title\":\"Maybe... maybe it will turn out fine.\"}],\"content\":{\"content\":\"Half-forgotten memories of his first few years float through your mind. But those years were nothing like now. He is older. He is conscious and can think and can judge and will remember all the ways in which you have failed and will fail him.\",\"type\":\"paragraph\"}},\"status.old\":{\"id\":\"status.old\",\"options\":[{\"id\":\"@backSpecialScene\",\"title\":\"Back\"}],\"content\":{\"content\":\"The Archivist is watching and listening.\",\"type\":\"paragraph\"}},\"entertainment.game_1\":{\"id\":\"entertainment.game_1\",\"content\":{\"content\":\"You play a relatively recent game (from the current century). It is a text-based management game about surviving the Wilderness as a small Wanderer group, dealing with food, nanoplagues, and the like.\",\"type\":\"paragraph\"}},\"a_1.a_12\":{\"id\":\"a_1.a_12\",\"options\":[{\"id\":\"@a_1.a_13\",\"title\":\"The two of you were...\"},{\"id\":\"@a_1.call\",\"title\":\"Call A-.\"}],\"content\":{\"content\":\"A- was... someone different before. At one time, she was a lavernean like you, until the waves of anti-nonbinary purges hit the medical field. He could not part with his job and his relative life of normalcy. Maybe it was a surrender, or maybe it was a survival strategy. Either way, his path was not an option available to you.\",\"type\":\"paragraph\"}},\"a_2.repayment\":{\"id\":\"a_2.repayment\",\"goTo\":[{\"id\":\"a_2.lx_square\"}],\"content\":{\"content\":\"You are meeting with A- out of a sense of obligation.\",\"type\":\"paragraph\"}},\"anxiety.pathetic\":{\"id\":\"anxiety.pathetic\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"archives.war\":{\"id\":\"archives.war\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"food.takeout\":{\"id\":\"food.takeout\",\"subtitle\":\"$15-50, lasts 1-4 days.\",\"chooseIf\":{\"$code\":\"return ((Q['stress'] || 0) < 10);\"},\"viewIf\":{\"$code\":\"return ((Q['money'] || 0) > 50);\"},\"unavailableSubtitle\":\"You don't have the energy for this.\",\"options\":[{\"id\":\"@food.takeout_2\",\"title\":\"Do it.\"},{\"id\":\"@food.food_options\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"Buying takeout was your preferred option, back when you had a job. The downside is the cost, and that you could be seen. The upside is lower energy expenditures.\",\"type\":\"paragraph\"}},\"k_1.college\":{\"id\":\"k_1.college\",\"maxVisits\":1,\"viewIf\":{\"$code\":\"return ((state.visits['k_1.past'] || 0)===1);\"},\"countVisitsMax\":1,\"options\":[{\"id\":\"@k_1.child\",\"title\":\"You and K- had a child, once.\"},{\"id\":\"@k_1.call\",\"title\":\"Make the call.\"}],\"content\":{\"content\":\"K- first met you in college.\",\"type\":\"paragraph\"}},\"k_2.months\":{\"id\":\"k_2.months\",\"subtitle\":\"She called you about a professional problem.\",\"goTo\":[{\"id\":\"k_2.anyway\"}],\"content\":{\"content\":\"The last conversation between the two of you was purely professional. She asked about using the Archives' DNA sequencer; the one in her lab was broken. You connected her to C-, your coworker (now supervisor), and that was the end. She didn't say anything about herself, and you didn't ask.\",\"type\":\"paragraph\"}},\"main.eod_check\":{\"id\":\"main.eod_check\",\"onArrival\":[{\"$code\":\"Q.day_major = 0;\\nQ.day_minor = 0;\\nQ.numb = 0;\\nfor (var i = 0; i < 21; i++) {\\n    Q['name_' + i] = window.randomName();\\n}\\nconsole.log('eod_check_2');\\nQ['main_notes'] = ' ';\\nif (Q.rent == 0) {\\n    Q['main_notes'] += '<p>Rent is due today. It will be automatically be deducted from your account at the end of the day.</p>';\\n}\\nif (Q.k_path == 1 && Q.day == Q.k_meet_day + 1) {\\n    Q.main_notes += '<p>You promised K- that you would meet her today.</p>';\\n}\\nif (Q.day == 3) {\\n    Q.main_notes += '<p>You see a flyer that has been slid under your door. \\\"Mutual Aid Alliance hosting free community meals daily at Moses Park.\\\" Below is a black-and-white picture of figures serving soup, and a time and an address. It is not too late. You can still go.</p>';\\n}\\n// if you haven't viewed DNA in a few days, C- sends you a message.\\nif (Q.day == Q.data_day + 3) {\\n    Q.main_notes += \\\"<p>You receive a net message from C-, your supervisor at the Archives. <code>Hey Em, I hope you realize that you still need to do your job. I understand you're suffering from chronic fatigue, but so are many of us, and we're still working. Just one DNA dataset every few days. That's all you need. Worst case, we'll have no choice but to decertify you. But it probably won't come to that, would it?</code></p>\\\";\\n}\\nif (Q.day == Q.data_day + 5) {\\n    Q.main_notes += \\\"<p>You receive a net message from C-, your supervisor. <code>Hey Em, there are some things you should know. We pulled a lot of stops to let you just keep this job as a contractor. Did you think no one would clock the discrepancies on your record? Did you think it wouldn't be obvious what those discrepancies meant?</code></p>\\\";\\n}\\n// Also, C- sends you a message if you have yet to see Liana's files.\\n// set daily dialogue here.\\nif (Q.anxiety < 10) {\\n    // nonrandom lol\\n    Q.day_random += 1;\\n    if (Q.day >= Q.low_anxiety_day_dialogues.length) {\\n        Q.day_random = Math.floor(Math.random()*Q.low_anxiety_day_dialogues.length);\\n    }\\n    Q.day_dialogue = Q.low_anxiety_day_dialogues[Q.day_random];\\n} else {\\n    Q.day_random = Math.floor(Math.random()*Q.day_dialogues.length);\\n    Q.day_dialogue = Q.day_dialogues[Q.day_random];\\n}\\nQ.afternoon_random = Math.floor(Math.random()*Q.afternoon_dialogues.length);\\nQ.afternoon_dialogue = Q.afternoon_dialogues[Q.afternoon_random];\\n\\n// set goto scene\\nif (Q.food <= 0) {\\n    console.log('food missing');\\n    Q.next_day_scene_queue.push(\\\"food\\\");\\n}\\nif (Q.rent_due < 0) {\\n    console.log('rent missing');\\n    Q.next_day_scene_queue.push(\\\"main.rent_collection\\\");\\n}\\nif (Q.medicine <= 0) {\\n    console.log('medicine missing');\\n    Q.next_day_scene_queue.push(\\\"medicine\\\");\\n}\\nif (Q.k_path == 1 && Q.day > Q.k_meet_day + 1) {\\n    Q.next_day_scene_queue.push(\\\"k_bad\\\");\\n}\\nif (Q.next_day_scene_queue.length > 0) {\\n    Q.next_day_scene = Q.next_day_scene_queue.shift();\\n    console.log('next day scene: ' + Q.next_day_scene);\\n} else {\\n    Q.next_day_scene = \\\"main\\\";\\n}\"}],\"goToRef\":[{\"id\":\"next_day_scene\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.view\":{\"id\":\"data.view\",\"title\":\"DNA data recovery\",\"subtitle\":{\"content\":[\"Your paid job. \",{\"type\":\"conditional\",\"content\":\"You have a message from the Archives about your last assignment.\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['prev_data_type'] || 0) != 0);\"}}]},\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['data_seen'] = (Q['data_seen'] || 0) + 1;\\nQ['stress'] = (Q['stress'] || 0) + 1;\\nQ['day_data_seen'] = 0;\\nQ['data_day'] = (Q['day'] || 0);\"}],\"viewIf\":{\"$code\":\"return ((((Q['day_major'] || 0)===0) && ((Q['stress'] || 0) < 15)) && ((Q['data_seen'] || 0) >= 1));\"},\"goTo\":[{\"id\":\"data.archivist_check\"}],\"setJump\":\"data.view_display\",\"tags\":[\"major\"],\"frequency\":500,\"content\":{\"content\":\"You open your e-mail. There are new data recovery and archival requests.\",\"type\":\"paragraph\"}},\"k_bad.sorry_my_bad\":{\"id\":\"k_bad.sorry_my_bad\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Sorry, my bad. Can we meet tomorrow?\\\"\"},{\"type\":\"paragraph\",\"content\":\"She sighs. \\\"\\\"\"}]},\"k_bad\":{\"id\":\"k_bad\",\"type\":\"scene\",\"title\":\"K- calls.\",\"newPage\":true,\"options\":[{\"id\":\"@k_bad.didnt_want\",\"title\":\"\\\"Sorry, but...\\\"\"},{\"id\":\"@k_bad.sorry_my_bad\",\"title\":\"\\\"Sorry, my bad. Can we meet tomorrow?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You receive a call from K-.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I thought we were going to meet today. Where were you?\\\"\"}]},\"medicine.buy\":{\"id\":\"medicine.buy\",\"subtitle\":\"$40, lasts 7 days\",\"chooseIf\":{\"$code\":\"return ((Q['stress'] || 0) < 8);\"},\"viewIf\":{\"$code\":\"return ((Q['money'] || 0) > 40);\"},\"unavailableSubtitle\":\"You don't have the energy for this.\",\"maxChoices\":1,\"options\":[{\"id\":\"#pharmacy\"}],\"content\":{\"content\":\"All it takes is a visit to the pharmacy.\",\"type\":\"paragraph\"}},\"one.listen\":{\"id\":\"one.listen\",\"options\":[{\"id\":\"@one.remember\",\"title\":\"Remember.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"The apartment was poorly soundproofed. The highway rumbled in the distance like a never-ending roll of thunder, while the trolley clanged nearby. Nearer still, there was shouting. Angry human voices. Pounding on the walls.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"There are no sounds of non-human animals.\"}}]},\"online_montage.cn1\":{\"id\":\"online_montage.cn1\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"New Hamilton district evacuated indefinitely due to increased radiation leakage.\\\"\"},\"tags\":[\"montage\"],\"maxVisits\":1,\"countVisitsMax\":1,\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN (official): New Hamilton sector evacuated indefinitely due to increased radiation leakage. At least 20,000 displaced; residents seeking shelter throughout the city.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fuck this.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": god last fucking thing we need is more \\\"refugees\\\".\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": why didn't they move out earlier? everyone new it was gonna fail. idiots.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":3},\": lol\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":4},\": great, more tents clogging up the parks. my kids can't even go two steps without stepping over trash\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":5},\": fake news\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":6},\": \"]},\"\"]},{\"type\":\"paragraph\",\"content\":\"You read, but you aren't reading. You're not feeling anything at all.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_3'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_4'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_5'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_6'] || 0);\"}}]}},\"ritual.graveyard\":{\"id\":\"ritual.graveyard\",\"options\":[{\"id\":\"@ritual.scratch\",\"title\":\"Scratch at the gravestone some more.\"},{\"id\":\"@ritual.bowl\",\"title\":\"Put the paper into the metal bowl.\"}],\"content\":{\"content\":\"After the Cataclysm, after the former inhabitants of the surface platform evacuated to the undercity, they attempted to reconstruct their old lifeways. Their customary funerary rites required burying remains in the earth, so they appropriated a patch of dirt to serve as a cemetary. You would have thought that they realized the inefficiency of burials after hundreds of years of arcology life.\",\"type\":\"paragraph\"}},\"mutual_aid.mask\":{\"id\":\"mutual_aid.mask\",\"goTo\":[{\"id\":\"mutual_aid.checklist\"}],\"onArrival\":[{\"$code\":\"Q['ma_checklist'] = (Q['ma_checklist'] || 0) + 1;\"}],\"maxVisits\":1,\"content\":{\"content\":\"You are wearing a respirator partly for the nanoplagues, partly to hide your facial features.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"root.enable_cw\":{\"id\":\"root.enable_cw\",\"viewIf\":{\"$code\":\"return ((Q['cw_enabled'] || 0)===0);\"},\"onArrival\":[{\"$code\":\"Q['cw_enabled'] = 1;\"}],\"options\":[{\"id\":\"@one\",\"title\":\"Start game\"},{\"id\":\"@root.credits\",\"title\":\"Credits and inspirations\"},{\"id\":\"@root.enable_cw\",\"title\":\"Enable content warnings.\"},{\"id\":\"@root.disable_cw\",\"title\":\"Disable content warnings.\"}],\"content\":{\"content\":\"Content warnings enabled.\",\"type\":\"paragraph\"}},\"s_1.not_parent\":{\"id\":\"s_1.not_parent\",\"goTo\":[{\"id\":\"s_1.s_hungry\"}],\"content\":{\"content\":\"Women are supposed to have maternal instincts. Women (GNT women, not that anyone would use the term) are supposed to instinctively know what to do when faced with their long-separated child of 7 years who has been suddenly dropped on them with barely a warning. How can you be allowed to be a woman like this?\",\"type\":\"paragraph\"}},\"status.new\":{\"id\":\"status.new\",\"options\":[{\"id\":\"@backSpecialScene\",\"title\":\"Back\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":\"Your name is Em, and you are alive, for now.\"},{\"type\":\"heading\",\"content\":\"Cost of living\"},{\"type\":\"paragraph\",\"content\":[\"Cash on hand: $\",{\"type\":\"insert\",\"insert\":0},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Rent: $\",{\"type\":\"insert\",\"insert\":1},\" due in \",{\"type\":\"insert\",\"insert\":2},\" day\",{\"type\":\"conditional\",\"content\":\"s \",\"predicate\":3},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Food: \",{\"type\":\"insert\",\"insert\":4},\" days remaining\"]},{\"type\":\"heading\",\"content\":\"Contacts\"},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"A—\"},\": \",{\"type\":\"conditional\",\"content\":\"A lover, once. A friend, perhaps. \",\"predicate\":5},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"K—\"},\": \",{\"type\":\"conditional\",\"content\":\"A lover, once. A friend, perhaps. \",\"predicate\":6},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"S—\"},\": \",{\"type\":\"conditional\",\"content\":\"A child. Your child. \",\"predicate\":7},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"L—\"},\": \",{\"type\":\"conditional\",\"content\":\"A colleague. \",\"predicate\":8},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"M—\"},\":\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"T—\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-2\",\"content\":\"R—\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"emphasis-2\",\"content\":\"Liana Yingmei Xu\"},\": \"],\"predicate\":9},\" \",{\"type\":\"conditional\",\"content\":\"From her diaries, she seems so familiar...\",\"predicate\":10}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['money'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent_due'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['rent_due'] || 0) != 1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['food'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['a'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['k'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['s'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['l'] || 0)===0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['liana'] || 0) > 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['liana'] || 0) >= 1) && ((Q['liana'] || 0) <= 2));\"}}]}},\"status\":{\"id\":\"status\",\"type\":\"scene\",\"title\":\"Status\",\"newPage\":true,\"isSpecial\":true,\"goTo\":[{\"id\":\"status.old\",\"predicate\":{\"$code\":\"return ((Q['introduced'] || 0)===0);\"}},{\"id\":\"status.new\",\"predicate\":{\"$code\":\"return ((Q['introduced'] || 0)===1);\"}}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"entertainment.game_2\":{\"id\":\"entertainment.game_2\",\"content\":{\"content\":\"you play a game recovered from the archives, from the pre-war era.\",\"type\":\"paragraph\"}},\"a_1.a_13\":{\"id\":\"a_1.a_13\",\"options\":[{\"id\":\"@a_1.call\",\"title\":\"Call A-.\"}],\"content\":{\"content\":\"The two of you were... dating. Yes. That would be an accurate description. Back when she was like you. You were lovers. A-, K-, and you were in a mutual relationship together, before A- left. K- has never forgiven him. Have you?\",\"type\":\"paragraph\"}},\"a_2.love\":{\"id\":\"a_2.love\",\"onArrival\":[{\"$code\":\"Q['a_romance'] = (Q['a_romance'] || 0) + 1;\"}],\"goTo\":[{\"id\":\"a_2.lx_square\"}],\"content\":{\"content\":\"You are meeting with A- because you still have feelings for him, or something like that.\",\"type\":\"paragraph\"}},\"anxiety.shouldnt\":{\"id\":\"anxiety.shouldnt\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"anxiety\":{\"id\":\"anxiety\",\"type\":\"scene\",\"title\":\"Breakdown\",\"subtitle\":\"It is not good.\",\"viewIf\":{\"$code\":\"return ((Q['anxiety'] || 0) > 15);\"},\"tags\":[\"major\"],\"options\":[{\"id\":\"@anxiety.not_just\",\"title\":\"Not just tired.\"}],\"content\":{\"content\":\"You are tired, more so than usual.\",\"type\":\"paragraph\"}},\"archives.city\":{\"id\":\"archives.city\",\"content\":[{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"On the Ruling Party\"}},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Bella X.\"}},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Abstract: \"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"magic\",\"content\":\"<hr>\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"The War in the City\"}}]},\"food.takeout_2\":{\"id\":\"food.takeout_2\",\"options\":[{\"id\":\"#takeout\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.child\":{\"id\":\"k_1.child\",\"viewIf\":{\"$code\":\"return ((state.visits['k_1.past'] || 0)===1);\"},\"maxVisits\":1,\"countVisitsMax\":1,\"options\":[{\"id\":\"@k_1.call\",\"title\":\"Make the call.\"}],\"content\":{\"type\":\"paragraph\",\"content\":[\"Back when it was still legal, you and K- had a child, back before the ruling party labeled women like you (\",{\"type\":\"emphasis-1\",\"content\":\"they did not call you women or even laverneans\"},\") as a danger to women and children, before your existence was deemed a crime. S- is seven years old now. It was for his safety that you and K- had separated. That was what you told yourself.\"]}},\"k_2.weeks\":{\"id\":\"k_2.weeks\",\"subtitle\":\"She was on CityNet.\",\"goTo\":[{\"id\":\"k_2.anyway\"}],\"content\":{\"content\":\"It was a CityNet article about the latest nanoplague variant. She was the \\\"University scientist\\\" quoted (most likely out-of-context) in an article that was an odd mixture of irrational fearmongering and minimization. The comments all excoriated her, of course. That was the last reminder you had of her existence.\",\"type\":\"paragraph\"}},\"main.rent_collection\":{\"id\":\"main.rent_collection\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q.additional_rent = 400;\\nQ.fees = 50 + Math.ceil(Math.random()*50);\\nQ.total_rent = Q.rent + Q.fees;\\nQ.paid_full = 0;\\nif (Q.rent >= 400) {\\n    Q.additional_rent = 500;\\n}\\nif (Q.money < Q.total_rent) {\\n    Q.money = 0;\\n    Q.rent = Q.total_rent - Q.money + 50;\\n} else {\\n    Q.money -= Q.total_rent;\\n    Q.rent = 0;\\n    Q.paid_full = 1;\\n}\\nQ.rent += Q.additional_rent;\\nQ.rent_due = 5;\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"Your rent and additional costs were automatically deducted from your account. The rent was $\",{\"type\":\"insert\",\"insert\":1},\" and fees plus utilities were $\",{\"type\":\"insert\",\"insert\":2},\". You have $\",{\"type\":\"insert\",\"insert\":3},\" remaining. \"],\"predicate\":0},\" \",{\"type\":\"conditional\",\"content\":[\"The rent due was $\",{\"type\":\"insert\",\"insert\":5},\" and the fees were $\",{\"type\":\"insert\",\"insert\":6},\". Unfortunately, you did not have enough to cover the total amount due. All money in your account was automatically deducted, and the remaining balance was rolled over into the next rent payment, with an additional fee of $50. If you miss two more payments, then you will be evicted. \"],\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Next bill: \",{\"type\":\"insert\",\"insert\":7},\" due in \",{\"type\":\"insert\",\"insert\":8},\" days.\"]}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['paid_full'] || 0)===1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['fees'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['money'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['paid_full'] || 0)===0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['fees'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent_due'] || 0);\"}}]}},\"data.view_display\":{\"id\":\"data.view_display\",\"maxChoices\":5,\"options\":[{\"id\":\"#data\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"medicine.ask_k\":{\"id\":\"medicine.ask_k\",\"subtitle\":\"Would she share?\",\"viewIf\":{\"$code\":\"return ((Q['k_path'] || 0) >= 2);\"},\"options\":[{\"id\":\"@medicine.ask_k_2\",\"title\":\"Ask her.\"},{\"id\":\"@medicine.med_options\",\"title\":\"Do something else.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Like you, she has a prescription for \\\"early menopause\\\", although the justification of her prescription is more conventional.\"},{\"type\":\"paragraph\",\"content\":\"Would she be willing to share, though?\"}]},\"one.remember\":{\"id\":\"one.remember\",\"options\":[{\"id\":\"@one.5_years_ago\",\"title\":\"5 years ago.\"},{\"id\":\"@one.10_years_ago\",\"title\":\"10 years ago.\"},{\"id\":\"@one.500_years_ago\",\"title\":\"500 years ago.\"}],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"The Archivist remembered. Memories, real and imagined, flowed forth like a wellspring.\"}}},\"online_montage.cn2\":{\"id\":\"online_montage.cn2\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Stealth transvestite teacher found indoctrinating students in gender ideology.\"},\"subtitle\":{\"content\":{\"type\":\"conditional\",\"content\":\"CW: transphobia, slurs\",\"predicate\":0},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['cw_enabled'] || 0)===1);\"}}]},\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['stress'] = (Q['stress'] || 0) + 1;\"}],\"countVisitsMax\":1,\"tags\":[\"montage\"],\"options\":[{\"id\":\"@online_montage.cn2_2\",\"title\":\"It makes you strangely pleased to see her.\"},{\"id\":\"@online_montage.cn2_1\",\"title\":\"This is your future.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Stealth transvestite teacher found indoctrinating students in gender ideology. Video: (link)\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": pedophile\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": none of these people should be allowed near children.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": this is why our educational system is failing\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":3},\": this is what feminists want\"]},\"\"]},{\"type\":\"attribution\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":4},\": dont blame this garbage on feminists. we all know that men can't be women.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":5},\": update: it killed itself\"]},\"\"]},{\"type\":\"attribution\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":6},\": good\"]},\"\"]},{\"type\":\"attribution\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":7},\": thank god\"]},\"\"]},{\"type\":\"attribution\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":8},\": while i abhor the loss of life, the teaching of biological falsehoods to the most vulnerable must have real consequences.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":\"@Tinu-Lee: are you people serious? do you have zero compassion for a woman who just died?\"},\"\"]},{\"type\":\"attribution\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":9},\": \\\"woman\\\"\"]},\"\"]},{\"type\":\"attribution\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":10},\": i have sympathey for the fact that he was lead astray from the sacred path of humanity into the demonic embrase of transhumanism\"]},\"\"]},{\"type\":\"paragraph\",\"content\":\"You watch the video. It is an elementary school classroom, shot from what seems to be a hidden security camera. The teacher is a well-dressed woman most likely in her late thirties or forties, similar to you. \\\"I am a girl now, but when I was born, they thought I was a boy,\\\" she says. The students are staring at her. The video cuts off right there.\"},{\"type\":\"paragraph\",\"content\":\"You knew many laverneans, but you did not know her; she must have been stealth in the days before the Uprising.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_4'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_5'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_6'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_7'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_3'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_7'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"ritual.scratch\":{\"id\":\"ritual.scratch\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['ritual_scratched'] = 1;\"}],\"options\":[{\"id\":\"@ritual.bowl\",\"title\":\"Put the paper into the bowl.\"},{\"id\":\"@ritual.tradition\",\"title\":\"The tradition continues.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"With a key you deepen the grooves of her true name, and add new scratches to her \\\"legal\\\" name. Since she never had dignity in life, the least you could do was give her some modicum of dignity in death.\"},{\"type\":\"paragraph\",\"content\":\"Her family was the most supportive family of all the laverneans and elliotians you had ever encountered. Still they buried her under the name they had chosen, and not the name she chose.\"}],\"countVisitsMax\":1},\"mutual_aid.clothes\":{\"id\":\"mutual_aid.clothes\",\"goTo\":[{\"id\":\"mutual_aid.checklist\"}],\"onArrival\":[{\"$code\":\"Q['ma_checklist'] = (Q['ma_checklist'] || 0) + 1;\"}],\"maxVisits\":1,\"content\":{\"content\":\"A long grey skirt. A blue puffy jacket. Sensible shoes.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"root.disable_cw\":{\"id\":\"root.disable_cw\",\"viewIf\":{\"$code\":\"return ((Q['cw_enabled'] || 0)===1);\"},\"onArrival\":[{\"$code\":\"Q['cw_enabled'] = 0;\"}],\"options\":[{\"id\":\"@one\",\"title\":\"Start game\"},{\"id\":\"@root.credits\",\"title\":\"Credits and inspirations\"},{\"id\":\"@root.enable_cw\",\"title\":\"Enable content warnings.\"},{\"id\":\"@root.disable_cw\",\"title\":\"Disable content warnings.\"}],\"content\":{\"content\":\"Content warnings disabled.\",\"type\":\"paragraph\"}},\"s_1.one_night\":{\"id\":\"s_1.one_night\",\"goTo\":[{\"id\":\"s_1.s_hungry\"}],\"content\":{\"content\":\"It is just for a single night.\",\"type\":\"paragraph\"}},\"entertainment.game_3\":{\"id\":\"entertainment.game_3\",\"content\":{\"content\":\"you play a game recovered from the archives, from the 3rd century. It is a political simulator that features loose stand-ins of the factions of that era,\",\"type\":\"paragraph\"}},\"a_1.call\":{\"id\":\"a_1.call\",\"options\":[{\"id\":\"@a_1.dial\",\"title\":\"Dial the number.\"},{\"id\":\"@a_1.forget_it\",\"title\":\"Forget it.\"}],\"content\":{\"content\":\"You are holding the phone handset. A-'s number is written on a note on your fridge. Call in case you have a medical emergency, he had said. Or just if you want to talk. He wanted to remain in contact, and in your good graces, for whatever reason, despite the fact that you have no way to reciprocate his generosity, and many ways to drag him down.\",\"type\":\"paragraph\"}},\"a_2.lx_square\":{\"id\":\"a_2.lx_square\",\"options\":[{\"id\":\"@a_2.too_old\",\"title\":\"\\\"Aren't you too old to wear striped thigh highs?\\\"\"},{\"id\":\"@a_2.scared\",\"title\":\"\\\"Aren't you scared to be like this in public?\\\"\"},{\"id\":\"@a_2.stare\",\"title\":\"Just stare.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Seeing A- gives you a shock. He is... well, he's dressed like a lavernean stereotype, like one of the pre-war photos found in the Archives, in addition to a wig and a thorough application of makeup. At least he's wearing a respirator.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hey, Em.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Oh. She's using the girlmode voice, too.\"}]},\"archives.cataclysm\":{\"id\":\"archives.cataclysm\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"food.takeout_do_1\":{\"id\":\"food.takeout_do_1\",\"title\":\"Takeout\",\"tags\":[\"takeout\"],\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) - 35;\\nQ['food'] = (Q['food'] || 0) + 2;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The trams have broken down today, so you visit the nearest walkable restaurant. It is more expensive than you would like.\"},{\"type\":\"paragraph\",\"content\":\"It costs $35 for food to last 2 days.\"}]},\"k_1.call\":{\"id\":\"k_1.call\",\"options\":[{\"id\":\"@k_1.past\",\"title\":\"You and K- were married once.\"},{\"id\":\"@k_1.child\",\"title\":\"You and K- had a child, once.\"},{\"id\":\"@k_1.dial\",\"title\":\"Dial.\"}],\"content\":{\"content\":\"You are holding the handset. Her phone number is written on a note stuck to your refrigerator door.\",\"type\":\"paragraph\"}},\"k_2.anyway\":{\"id\":\"k_2.anyway\",\"options\":[{\"id\":\"@k_2.anticipation\",\"title\":\"Anyway, you are at the park. Waiting.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"main.eviction\":{\"id\":\"main.eviction\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"main\":{\"id\":\"main\",\"type\":\"scene\",\"title\":\"Main\",\"newPage\":true,\"maxChoices\":5,\"onArrival\":[{\"$code\":\"if (Q.next_day_scene_queue.length > 0) {\\n    Q.has_next_day = 1;\\n    Q.next_day_scene = Q.next_day_scene_queue.shift();\\n} else {\\n    Q.has_next_day = 0;\\n}\"}],\"goToRef\":[{\"id\":\"next_day_scene\",\"predicate\":{\"$code\":\"return ((Q['has_next_day'] || 0) > 0);\"}}],\"options\":[{\"id\":\"#major\"},{\"id\":\"#minor\"},{\"id\":\"@main.end_of_day\"}],\"content\":{\"content\":[{\"type\":\"heading\",\"content\":[\"Day \",{\"type\":\"insert\",\"insert\":0},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Cash on hand: $\",{\"type\":\"insert\",\"insert\":1},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Rent: $\",{\"type\":\"insert\",\"insert\":2},\" (+ $50-100 in utilities, fees, etc.) due in \",{\"type\":\"insert\",\"insert\":3},\" day\",{\"type\":\"conditional\",\"content\":\"s \",\"predicate\":4},\"\"]},{\"type\":\"paragraph\",\"content\":[\"Food: \",{\"type\":\"insert\",\"insert\":5},\" day\",{\"type\":\"conditional\",\"content\":\"s \",\"predicate\":6},\" remaining\"]},{\"type\":\"paragraph\",\"content\":[\"Medicine: \",{\"type\":\"insert\",\"insert\":7},\" day\",{\"type\":\"conditional\",\"content\":\"s \",\"predicate\":8},\" remaining\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":\"Your apartment is on the third floor of a six-story building, and has a floor area of approximately 15 square metres. There is a bed, a desk, and a small kitchen area with an electric stove and a refrigerator. You are lucky. There is everything you need to live in here. \",\"predicate\":9},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"insert\",\"insert\":11},\" \"],\"predicate\":10},\" \",{\"type\":\"conditional\",\"content\":[\"\",{\"type\":\"insert\",\"insert\":13},\" \"],\"predicate\":12},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"magic\",\"content\":\"<script>$('#main_notes').append($(window.dendryUI.dendryEngine.state.qualities.main_notes));</script> <div id=\\\"main_notes\\\"></div>\"}}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['day'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['money'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['rent_due'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['rent_due'] || 0) != 1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['food'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['food'] || 0) != 1);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['medicine'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['medicine'] || 0) != 1);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return (((Q['day'] || 0)===0) && ((Q['day_major'] || 0)===0));\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['day_major'] || 0)===0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['day_dialogue'] || 0);\"}},{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['day_major'] || 0) > 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['afternoon_dialogue'] || 0);\"}}]}},\"data.back\":{\"id\":\"data.back\",\"goTo\":[{\"id\":\"main\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"medicine.ask_k_2\":{\"id\":\"medicine.ask_k_2\",\"content\":[{\"type\":\"paragraph\",\"content\":\"You make the call.\"},{\"type\":\"paragraph\",\"content\":\"TODO\"}]},\"one.5_years_ago\":{\"id\":\"one.5_years_ago\",\"options\":[{\"id\":\"@one.10_years_ago\",\"title\":\"10 years ago.\"},{\"id\":\"@one.500_years_ago\",\"title\":\"500 years ago.\"},{\"id\":\"@one.out\",\"title\":\"Stop dissociating.\"}],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"The coup was announced on every TV and CityNet channel.\"}}},\"online_montage.cn2_2\":{\"id\":\"online_montage.cn2_2\",\"content\":{\"content\":\"They have not exterminated all of you yet. There are still more laverneans in the woodwork, more women like you hiding out there, surviving. You feel less alone.\",\"type\":\"paragraph\"}},\"ritual.bowl\":{\"id\":\"ritual.bowl\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['ritual_burnt'] = 1;\"}],\"options\":[{\"id\":\"@ritual.scratch\",\"title\":\"Scratch at the gravestone some more.\"},{\"id\":\"@ritual.tradition\",\"title\":\"The tradition continues.\"}],\"content\":{\"content\":\"You put the scraps of newsprint into a ceramic bowl behind Lily's grave marker, and light the matches into the bowl. The papers slowly char and curl into licks of flame.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"mutual_aid.voice\":{\"id\":\"mutual_aid.voice\",\"goTo\":[{\"id\":\"mutual_aid.checklist\"}],\"onArrival\":[{\"$code\":\"Q['ma_checklist'] = (Q['ma_checklist'] || 0) + 1;\"}],\"maxVisits\":1,\"content\":{\"content\":\"Unfortunately,\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"root.credits\":{\"id\":\"root.credits\",\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-1\",\"content\":\"The Archivist and the Revolution\"},\" is the final refinement of various story ideas that have been simmering in my head for over 10 years by now. Like all of my stories, this is nothing more than a hodgepodge of my interests, obsessions, and neuroses.\"]},{\"type\":\"paragraph\",\"content\":\"Text and images by Autumn Chen.\"},{\"type\":\"heading\",\"content\":\"Acknowledgments\"},{\"type\":\"paragraph\",\"content\":[\"Thanks to \",{\"type\":\"hidden\",\"content\":\"...\"},\"\"]},{\"type\":\"heading\",\"content\":\"References\"},{\"type\":\"paragraph\",\"content\":\"There are a number of real-world papers referenced in the story, mostly in the field of DNA data storage.\"},{\"type\":\"quotation\",\"content\":\"Church, G.M., Gao, Y., Kosuri, S.: Next-generation digital information storage in DNA. Science 337(6102), 1628 (2012). https://doi.org/10.1126/science.1226355\"},{\"type\":\"quotation\",\"content\":\"Goldman, N., Bertone, P., Chen, S., Dessimoz, C., LeProust, E.M., Sipos, B., Birney, E.: Towards practical, high-capacity, low-maintenance information storage in synthesized DNA. Nature 494(7435), 77–80 (2013). https://doi.org/10.1038/nature11875\"},{\"type\":\"quotation\",\"content\":\"Grass, R.N., Heckel, R., Puddu, M., Paunescu, D., Stark, W.J.: Robust chemical preservation of digital information on DNA in silica with error-correcting codes. Angew. Chem. Int. Ed. Engl. 54(8), 2552–2555 (2015). https://doi.org/10.1002/anie.201411378\"},{\"type\":\"quotation\",\"content\":\"Shipman, S., Nivala, J., Macklis, J. et al. CRISPR–Cas encoding of a digital movie into the genomes of a population of living bacteria. Nature 547, 345–349 (2017). https://doi.org/10.1038/nature23017\"},{\"type\":\"quotation\",\"content\":\"Erlich, Y., Zielinski, D.: DNA Fountain enables a robust and efficient storage architecture. Science 355(6328), 950–954 (2017). https://doi.org/10.1126/science.aaj2038\"},{\"type\":\"quotation\",\"content\":\"Organick, L., Ang, S., Chen, YJ. et al. Random access in large-scale DNA data storage. Nat Biotechnol 36, 242–248 (2018). https://doi.org/10.1038/nbt.4079\"},{\"type\":\"quotation\",\"content\":\"Yim, S.S., McBee, R.M., Song, A.M. et al. Robust direct digital-to-biological data storage in living cells. Nat Chem Biol 17, 246–253 (2021). https://doi.org/10.1038/s41589-020-00711-4\"},{\"type\":\"heading\",\"content\":\"Inspirations and Related Works\"},{\"type\":\"paragraph\",\"content\":\"Games:\"},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"howling dogs\"},\" by Porpentine\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"SPY INTRIGUE\"},\" by furkle\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Bee\"},\" by Emily Short\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Solarium\"},\" by Anya Johanna DeNiro\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Get Your Gun, Dragonfly\"},\" by Palimrya\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Neo Cab\"},\" by Chance Agency\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Computerfriend\"},\" by Kit Riemer\"]},{\"type\":\"paragraph\",\"content\":\"Books:\"},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"The Handmaid's Tale\"},\" by Margaret Atwood\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Summer Fun\"},\" by Jeanne Thornton\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Little Fish\"},\" by Casey Plett\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Small Beauty\"},\" by Jia Qing Wilson Yang\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Manhunt\"},\" by Gretchen Felker-Martin\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"magic\",\"content\":\"<a href=\\\"https://bostonreview.net/articles/charlie-jane-anders-dont-press-charges-and-i-wont-sue/\\\">\\\"Don't Press Charges and I Won't Sue\\\" by Charlie Jane Anders</a>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Web Media:\"},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Homestuck\"},\" by Andrew Hussie\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"magic\",\"content\":\"<a href=\\\"https://archiveofourown.org/works/33158965/chapters/82319554\\\"><i>Glow, Worm</i> by alysongreaves</a>\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Music: The unofficial soundtrack is here.\"},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Mydata\"},\" and others by Katie Dey\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-1\",\"content\":\"Transangelic Exodus\"},\" and others by Ezra Furman\"]},{\"type\":\"paragraph\",\"content\":\"Miscellaneous Articles:\"}]},\"root\":{\"id\":\"root\",\"type\":\"scene\",\"title\":\"Root Scene\",\"newPage\":true,\"goTo\":[{\"id\":\"main\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===1);\"}},{\"id\":\"root.start\",\"predicate\":{\"$code\":\"return ((Q['started'] || 0)===0);\"}}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"s_1.maybe_fine\":{\"id\":\"s_1.maybe_fine\",\"goTo\":[{\"id\":\"s_1.s_hungry\"}],\"content\":{\"content\":\"Maybe it will turn out fine.\",\"type\":\"paragraph\"}},\"entertainment.game_4\":{\"id\":\"entertainment.game_4\",\"content\":{\"content\":\"you play a now-banned game developed during the uprising. it is a role playing game about a militarized polycule that does battle against the Guards and security forces, gaining experience as they kill more enemies.\",\"type\":\"paragraph\"}},\"a_1.forget_it\":{\"id\":\"a_1.forget_it\",\"options\":[{\"id\":\"@a_1.dial\",\"title\":\"Dial the number.\"},{\"id\":\"@main\",\"title\":\"Forget about calling him, for real this time.\"}],\"content\":{\"content\":\"Maybe you have never forgiven him. Have you? Or is there some other reason\",\"type\":\"paragraph\"}},\"a_2.too_old\":{\"id\":\"a_2.too_old\",\"options\":[{\"id\":\"@a_2.not_deviant\",\"title\":\"\\\"I'm not a deviant.\\\"\"},{\"id\":\"@a_2.i_am_boring\",\"title\":\"\\\"I'm sorry for being so boring.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Aren't you too old to wear striped thigh highs in public?\\\"\"},{\"type\":\"paragraph\",\"content\":\"A- laughs. \\\"What? I'm barely 40. That's not that old, is it? Anyway, what's the point of being a deviant if you're going to be boring all the time?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You are all too conscious of your plain gray skirt and baggy blue jacket.\"}]},\"archives.uprising\":{\"id\":\"archives.uprising\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"food.takeout_do_2\":{\"id\":\"food.takeout_do_2\",\"title\":\"Takeout\",\"tags\":[\"takeout\"],\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) - 20;\\nQ['food'] = (Q['food'] || 0) + 2;\\nQ['anxiety'] = (Q['anxiety'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You take the tram to visit your favorite restaurant near the university.\"},{\"type\":\"paragraph\",\"content\":\"It costs $20 for enough food to last 2 days.\"}]},\"k_1.dial\":{\"id\":\"k_1.dial\",\"options\":[{\"id\":\"@k_1.past\",\"title\":\"You and K- were married once.\"},{\"id\":\"@k_1.child\",\"title\":\"You and K- had a child, once.\"},{\"id\":\"@k_1.dial_2\",\"title\":\"Just dial the digits.\"}],\"content\":{\"content\":\"Right. You are going to call her.\",\"type\":\"paragraph\"}},\"k_2.anticipation\":{\"id\":\"k_2.anticipation\",\"options\":[{\"id\":\"@k_2.check_respirator\",\"title\":\"Check your respirator.\"},{\"id\":\"@k_2.check_outfit\",\"title\":\"Check your outfit.\"},{\"id\":\"@k_2.check_surroundings\",\"title\":\"Check your surroundings.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"LX Square is named after Liana Xu, a posthuman and one of the founders of this city. It acts as the central square. It was a 30-minute trip by trolley, and presently you are sitting on a bench.\"},{\"type\":\"paragraph\",\"content\":\"You have not been able to do much of anything today, your mind so preoccupied on your meeting with K- and S-.\"}]},\"data.file\":{\"id\":\"data.file\",\"options\":[{\"id\":\"@data.s\",\"title\":\"Class A: High-priority scientific or technical information.\"},{\"id\":\"@data.l\",\"title\":\"Class B: Literature.\"},{\"id\":\"@data.d\",\"title\":\"Class C: Personal or private information.\"},{\"id\":\"@data.o\",\"title\":\"Class D: Official government documents.\"},{\"id\":\"@data.m\",\"title\":\"Class E: Miscellaneous.\"},{\"id\":\"@data.keep\",\"title\":\"On second thought, you'll keep it for yourself.\"},{\"id\":\"@data.discard\",\"title\":\"On second thought, you'll discard it.\"}],\"content\":{\"content\":\"How do you wish to file the retrieved dataset?\",\"type\":\"paragraph\"}},\"medicine.ask_a\":{\"id\":\"medicine.ask_a\",\"subtitle\":\"Would she be willing?\",\"viewIf\":{\"$code\":\"return ((Q['a_path'] || 0) >= 2);\"},\"options\":[{\"id\":\"@medicine.ask_a_2\",\"title\":\"Ask her.\"},{\"id\":\"@medicine.med_options\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"A- is a doctor. She likely has access to medicine.\",\"type\":\"paragraph\"}},\"one.10_years_ago\":{\"id\":\"one.10_years_ago\",\"options\":[{\"id\":\"@one.5_years_ago\",\"title\":\"5 years ago.\"},{\"id\":\"@one.500_years_ago\",\"title\":\"500 years ago.\"},{\"id\":\"@one.out\",\"title\":\"Stop dissociating.\"}],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"The cataclysm began with all the birds falling out of the sky.\"}}},\"online_montage.cn2_1\":{\"id\":\"online_montage.cn2_1\",\"content\":{\"type\":\"paragraph\",\"content\":[\"They're talking about \",{\"type\":\"emphasis-1\",\"content\":\"you\"},\", or \",{\"type\":\"emphasis-1\",\"content\":\"people like you\"},\". This is your fate if your gender history is discovered.\"]}},\"ritual.tradition\":{\"id\":\"ritual.tradition\",\"viewIf\":{\"$code\":\"return (((Q['ritual_scratched'] || 0)===1) && ((Q['ritual_burnt'] || 0)===1));\"},\"options\":[{\"id\":\"@ritual.others\",\"title\":\"Visit the other graves.\"},{\"id\":\"@ritual.think_about_lily\",\"title\":\"Think about Lily.\"}],\"content\":{\"content\":\"You have cobbled together your rituals out of the fragments of long-dead cultures. Traditions long forgotten. Peoples long gone. A history alienated from you by hundreds of years and the end of the world. Their memories going up in flame in the metal bowl, like the afterlife money. You should have five days of mourning. You should be wearing a funeral shroud. Lily should have a mausoleum with terra cotta guards to accompany her into the afterlife to protect her from evil...\",\"type\":\"paragraph\"}},\"mutual_aid.just_go\":{\"id\":\"mutual_aid.just_go\",\"viewIf\":{\"$code\":\"return ((Q['ma_checklist'] || 0) >= 3);\"},\"content\":{\"content\":\"TODO\",\"type\":\"paragraph\"}},\"mutual_aid\":{\"id\":\"mutual_aid\",\"type\":\"scene\",\"title\":\"Mutual Aid\",\"subtitle\":\"Follow the address on the flier.\",\"viewIf\":{\"$code\":\"return (((Q['day'] || 0) >= 3) && ((Q['stress'] || 0) <= 15));\"},\"onArrival\":[{\"$code\":\"Q['ma_checklist'] = 0;\"}],\"tags\":[\"major\"],\"newPage\":true,\"goTo\":[{\"id\":\"mutual_aid.checklist\"}],\"content\":{\"content\":\"Before you enter a public space where you must interact with people in more than a cursory manner, you first follow a checklist.\",\"type\":\"paragraph\"}},\"s_1.s_hungry\":{\"id\":\"s_1.s_hungry\",\"options\":[{\"id\":\"@s_1.food_home\",\"title\":\"\\\"We have food at home.\\\"\"},{\"id\":\"@s_1.no_food_no_money\",\"title\":\"\\\"We do not have food at home, and we do not have enough money to go out to eat.\\\"\"},{\"id\":\"@s_1.go_burgers\",\"title\":\"\\\"Alright. Let's go.\\\"\"},{\"id\":\"@s_1.why_burgers\",\"title\":\"\\\"Why do you want burgers?\\\"\"},{\"id\":\"@s_1.burgers_propaganda\",\"title\":\"\\\"The humble so-called 'burger' is a piece of the ruling party's propaganda campaign to legitimize their rule via continuity with the American Empire.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I'm hungry,\\\" he says. \\\"Can we get burgers?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Burgers are not a part of your typical diet; your typical meals consist of rice and beans porridge. But perhaps you could visit a restaurant.\"}]},\"entertainment.film_1\":{\"id\":\"entertainment.film_1\",\"content\":{\"content\":\"you watch a film about a woman who disguises herself as a man to join the Guards during the uprising. The villain is a lavernean with cartoonishly exaggerated features and a constantly visible bulge.\",\"type\":\"paragraph\"}},\"a_1.dial\":{\"id\":\"a_1.dial\",\"options\":[{\"id\":\"@a_1.call_2\",\"title\":\"This is fine.\"},{\"id\":\"@a_1.back\",\"title\":\"No. Do something else. Anything but this.\"}],\"content\":{\"content\":\"Right. Dial the numbers. Make the call. It is fine. You parted amicably. He never banished you from his new life, even after the Uprising. You met his wife. She didn't hate you, probably.\",\"type\":\"paragraph\"}},\"a_2.not_deviant\":{\"id\":\"a_2.not_deviant\",\"options\":[{\"id\":\"@a_2.hypocrite\",\"title\":\"\\\"Hypocrite.\\\"\"},{\"id\":\"@a_2.are_you_still\",\"title\":\"\\\"So, are you still a...?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You shrug, and look away from her. \\\"I don't like to think of myself as a deviant. That's just reactionary propaganda.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She laughs again. \\\"Hey, I'm reclaiming it! If they're going to call us monsters no matter what we do, what's the point of pretending to be respectable?\\\" You cringe at the reference to now-outdated discourse, even though you started it.\"}]},\"archives.laverneans\":{\"id\":\"archives.laverneans\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"archives\":{\"id\":\"archives\",\"type\":\"scene\",\"title\":\"Archives\",\"subtitle\":\"Your own historical archives.\",\"goTo\":[{\"id\":\"archives.archive_choices\"}],\"content\":{\"content\":\"You keep your own archives on a magdisk. It is a collection of notes and writings on various topics that you have appended to over the past 20 years. Most of it is utterly banal.\",\"type\":\"paragraph\"}},\"food.cook\":{\"id\":\"food.cook\",\"subtitle\":\"$25-60, lasts 2-7 days.\",\"chooseIf\":{\"$code\":\"return ((Q['stress'] || 0) < 6);\"},\"viewIf\":{\"$code\":\"return ((Q['money'] || 0) > 60);\"},\"unavailableSubtitle\":\"You don't have the energy for this.\",\"options\":[{\"id\":\"@food.cook_2\",\"title\":\"Do it.\"},{\"id\":\"@food.food_options\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"Perhaps a visit to the grocery store is in order. You could buy a supply of shelf-stable products to cook for yourself. The downside is the effort of walking and carrying the groceries, and that you could be seen.\",\"type\":\"paragraph\"}},\"k_1.dial_2\":{\"id\":\"k_1.dial_2\",\"options\":[{\"id\":\"@k_1.dial_3\",\"title\":\"Make the call.\"},{\"id\":\"@k_1.quit\",\"title\":\"Fuck it. You will not do this today.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[\"You simulate the likely outcomes of your call. Worst case: she says fuck you and doesn't talk to you again. No, that is wrong. Worst case: she realizes that you have regressed to the mental state of a broken woman-child and calls you out for all of your flaws. You abandoned her. You abandoned your child. She was the victim, and you are the villain, yet another example of how \",{\"type\":\"emphasis-1\",\"content\":\"women\"},\" like you deserve to be ostracized.\"]},{\"type\":\"paragraph\",\"content\":\"If that happened, death would be your best option.\"}]},\"k_2.check_respirator\":{\"id\":\"k_2.check_respirator\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['k2_checks'] = (Q['k2_checks'] || 0) + 1;\"}],\"options\":[{\"id\":\"@k_2.check_outfit\",\"title\":\"Check your outfit.\"},{\"id\":\"@k_2.check_surroundings\",\"title\":\"Check your surroundings.\"},{\"id\":\"@k_2.wait_for_k\",\"title\":\"You finally see her.\"}],\"content\":{\"content\":\"Idly, you touch your respirator with your gloved fingers. Your glasses are not fogging up, so the fit must still be adequate. You are the only person wearing a respirator here, as usual, but most others do not need to hide their face as you do.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"data.s\":{\"id\":\"data.s\",\"unavailableSubtitle\":\"Definitely not.\",\"onArrival\":[{\"$code\":\"Q.chosen_data_types.push('science');\"}],\"goTo\":[{\"id\":\"data.data_filed\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"medicine.ask_a_2\":{\"id\":\"medicine.ask_a_2\",\"content\":{\"content\":\"TODO\",\"type\":\"paragraph\"}},\"one.500_years_ago\":{\"id\":\"one.500_years_ago\",\"options\":[{\"id\":\"@one.5_years_ago\",\"title\":\"5 years ago.\"},{\"id\":\"@one.10_years_ago\",\"title\":\"10 years ago.\"},{\"id\":\"@one.out\",\"title\":\"Stop dissociating.\"}],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"The Archivist lived in the year 457 AT. Five hundred years ago was the Posthuman War. The victors fled into space, while the losers became the Archivist's ancestors.\"}}},\"online_montage.cn3\":{\"id\":\"online_montage.cn3\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Male prostitute attacks Guards after found to have been impersonating a woman.\"},\"subtitle\":{\"content\":{\"type\":\"conditional\",\"content\":\"CW: transphobia, slurs\",\"predicate\":0},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['cw_enabled'] || 0)===1);\"}}]},\"onArrival\":[{\"$code\":\"Q['stress'] = (Q['stress'] || 0) + 1;\"}],\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"options\":[{\"id\":\"@online_montage.cn3_v\",\"title\":\"Bella, her name was.\"}],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Male prostitute attacks Guards after found to have been impersonating a woman. Video: (link)\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": glad that fag got what was coming to him.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": lmao idiots can't tell apart real women\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": all real women detest men who pretend to be women.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":3},\": long live the guards!!!\"]},\"\"]},{\"type\":\"paragraph\",\"content\":\"From one second of the video, you realize that you knew her. She was a lavernean, like you.\"}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_3'] || 0);\"}}]}},\"ritual.think_about_lily\":{\"id\":\"ritual.think_about_lily\",\"options\":[{\"id\":\"@ritual.others\",\"title\":\"Visit the other graves.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Lily was an acquaintance, not a friend. She worked in a shop and did sex work on the side. You did not know her well; she was an omnipresence on CityNet, but you had only spoken face-to-face a handful of times at political events.\"},{\"type\":\"paragraph\",\"content\":\"Her death was part of the catalyst for the Uprising.\"}]},\"s_1.burgers_propaganda\":{\"id\":\"s_1.burgers_propaganda\",\"maxVisits\":1,\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"The humble so-called 'burger' is a piece of the ruling party's propaganda campaign to legitimize their rule via continuity with the American Empire.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"What?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh, um... sorry. I was talking to myself.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Aren't you a grown-up?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Supposedly.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wow.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Great. He thinks you're a loser. An accurate assessment, but a painful one nevertheless.\"},{\"type\":\"paragraph\",\"content\":\"TODO\"}],\"countVisitsMax\":1},\"entertainment.archives\":{\"id\":\"entertainment.archives\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Read the archives: read your saved DNA files.\"},{\"type\":\"paragraph\",\"content\":\"go outside: it is rare that you venture outside your apartment without a specific purpose.\"}]},\"a_1.back\":{\"id\":\"a_1.back\",\"content\":{\"content\":\"You can't do this. You can't make the call.\",\"type\":\"paragraph\"}},\"a_2.hypocrite\":{\"id\":\"a_2.hypocrite\",\"options\":[{\"id\":\"@a_2.are_you_still\",\"title\":\"\\\"So, are you still a...?\\\"\"},{\"id\":\"@a_2.what_do\",\"title\":\"\\\"What do you want to do?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Hypocrite.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She finally sits down next to you, and gives you a wistful expression. \\\"We're all just trying to live. We do what we have to, even if it isn't what we want to. But sometimes there are moments when we can, you know.\\\"\"},{\"type\":\"paragraph\",\"content\":\"A lull in the conversation. The two of you stare at each other, A- smiling, you making who knows what facial expression.\"}]},\"food.cook_2\":{\"id\":\"food.cook_2\",\"maxChoices\":1,\"options\":[{\"id\":\"#cooking\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.quit\":{\"id\":\"k_1.quit\",\"content\":[{\"type\":\"paragraph\",\"content\":\"No. This will not turn out well. You had better save your energy for another time.\"},{\"type\":\"paragraph\",\"content\":\"Except there is no more energy to be saved. Your head spins. Your mouth aches from clenching your jaw. A half-eaten meal churns in your stomach, ready to be expelled. You are tired.\"}]},\"k_2.check_outfit\":{\"id\":\"k_2.check_outfit\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['k2_checks'] = (Q['k2_checks'] || 0) + 1;\"}],\"options\":[{\"id\":\"@k_2.check_respirator\",\"title\":\"Check your respirator.\"},{\"id\":\"@k_2.check_surroundings\",\"title\":\"Check your surroundings.\"},{\"id\":\"@k_2.wait_for_k\",\"title\":\"You finally see her.\"}],\"content\":{\"content\":\"You are wearing your standard leaving-your-apartment outfit: a long gray tweed skirt, a thick blue jacket that is too warm for the perpetual 16-degree climate but adequately conceals your body shape, and a respirator, with glasses and your unruly long hair hiding the rest of your face. Very little of your skin is visible, as is intended.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"data.l\":{\"id\":\"data.l\",\"unavailableSubtitle\":\"Definitely not.\",\"onArrival\":[{\"$code\":\"Q.chosen_data_types.push('literature');\"}],\"goTo\":[{\"id\":\"data.data_filed\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"medicine.none\":{\"id\":\"medicine.none\",\"subtitle\":\"You'll be fine, probably.\",\"onArrival\":[{\"$code\":\"Q['medicine'] = 1;\"}],\"content\":{\"content\":\"Fortunately, you've already had bottom surgery, so you are unlikely to experience physical masculinization. Unfortunately, hormone deprivation increases the risk of osteoporosis, and it seems to have the effect of making you feel worse in various difficult-to-describe ways that physicians do not acknowledge.\",\"type\":\"paragraph\"}},\"one.out\":{\"id\":\"one.out\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['introduced'] = 1;\\nfor (var i = 0; i < 21; i++) {\\n    Q['name_' + i] = window.randomName();\\n}\\n// change style to show boxes around choices.\"}],\"options\":[{\"id\":\"@one.out_2\",\"title\":\"You were laid off.\"}],\"content\":{\"content\":\"You are no longer an Archivist, as of approximately one day ago.\",\"type\":\"paragraph\"}},\"online_montage.cn3_v\":{\"id\":\"online_montage.cn3_v\",\"options\":[{\"id\":\"@online_montage.cn3_v2\",\"title\":\"Keep watching.\"}],\"content\":{\"content\":\"She was your friend, once, until she started hating you (there were many such cases). She was a graduate student in history, once. She went to the same doctor as you, once. Like you, she tried to ride out the Uprising in safety rather than take part. And now she's dead and you're somehow still alive.\",\"type\":\"paragraph\"}},\"ritual.others\":{\"id\":\"ritual.others\",\"options\":[{\"id\":\"@ritual.why\",\"title\":\"Why did you survive while they did not?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Out of the Laverneans you knew before the uprising, most have passed, and the others are missing.\"},{\"type\":\"paragraph\",\"content\":\"Lily. Luna. Eve. Chloe. Emily. You write their names on scraps of paper and toss them into the bowl of flames. You scratch at the false names on their tombstones. No one is here. No one to see you stalk the graveyard like a ghost.\"}]},\"s_1.food_home_1\":{\"id\":\"s_1.food_home_1\",\"options\":[{\"id\":\"@s_1.begin_cooking\",\"title\":\"Begin cooking.\"}],\"content\":{\"content\":\"\\\"Alright. Fine.\\\" He goes back to sitting on the bed, but not before taking a random book from your bookshelf.\",\"type\":\"paragraph\"}},\"entertainment.game\":{\"id\":\"entertainment.game\",\"goTo\":[{\"id\":\"entertainment.game_1\"},{\"id\":\"entertainment.game_2\"},{\"id\":\"entertainment.game_3\"},{\"id\":\"entertainment.game_4\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"entertainment\":{\"id\":\"entertainment\",\"type\":\"scene\",\"title\":\"Entertain yourself\",\"subtitle\":\"A psychological necessity.\",\"tags\":[\"major\"],\"viewIf\":{\"$code\":\"return ((((Q['day_major'] || 0)===0) || ((Q['day_minor'] || 0)===0)) && ((Q['day_entertainment'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['day_entertainment'] = 1;\"}],\"newPage\":true,\"options\":[{\"id\":\"@entertainment.game\",\"title\":\"Play a game.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"a_1.call_2\":{\"id\":\"a_1.call_2\",\"options\":[{\"id\":\"@a_1.hi\",\"title\":\"\\\"Hi...\\\"\"},{\"id\":\"@a_1.em\",\"title\":\"\\\"It's me, Em...\\\"\"},{\"id\":\"@a_1.a_\",\"title\":\"\\\"A-...?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"This is fine. You dial the numbers. You hold the handset to your ear and mouth.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hello?\\\"\"}]},\"a_2.i_am_boring\":{\"id\":\"a_2.i_am_boring\",\"options\":[{\"id\":\"@a_2.what_do\",\"title\":\"\\\"What do you want to do?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You shrug, and look away from her. \\\"I'm sorry for being such a boring person.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She laughs again. \\\"I don't think you're boring! You seem the same as always. I think the grandmacore look suits you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"A lull in the conversation. The two of you stare at each other, A- smiling, you making who knows what facial expression. You glance away.\"}]},\"food.trolley_1\":{\"id\":\"food.trolley_1\",\"title\":\"The trolley is mostly empty when you board.\",\"tags\":[\"trolley\"],\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.dial_3\":{\"id\":\"k_1.dial_3\",\"options\":[{\"id\":\"@k_1.its_em\",\"title\":\"\\\"It's Em...\\\"\"},{\"id\":\"@k_1.k\",\"title\":\"\\\"K-?...\\\"\"},{\"id\":\"@k_1.hi\",\"title\":\"\\\"Hello...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You dial the digits on your touch-tone phone. It connects.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hello?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Her voice is familiar, still coarse and flat.\"}]},\"k_2.check_surroundings\":{\"id\":\"k_2.check_surroundings\",\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['k2_checks'] = (Q['k2_checks'] || 0) + 1;\"}],\"options\":[{\"id\":\"@k_2.check_respirator\",\"title\":\"Check your respirator.\"},{\"id\":\"@k_2.check_outfit\",\"title\":\"Check your outfit.\"},{\"id\":\"@k_2.wait_for_k\",\"title\":\"You finally see her.\"}],\"content\":{\"content\":\"There are no immediate threats in the vicinity. The plaza is sparser than usual at this time of day, just elderly men and women milling about the statue of Liana Xu, and refugees sitting on their mattresses in the fenced encampment. No police, no Guards, and no one looking in your direction.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"data.d\":{\"id\":\"data.d\",\"unavailableSubtitle\":\"Definitely not.\",\"onArrival\":[{\"$code\":\"Q.chosen_data_types.push('personal');\"}],\"goTo\":[{\"id\":\"data.data_filed\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"medicine.pharmacy_1\":{\"id\":\"medicine.pharmacy_1\",\"title\":\"Just a brief visit...\",\"tags\":[\"pharmacy\"],\"maxVisits\":1,\"content\":[{\"type\":\"paragraph\",\"content\":\"TODO\"},{\"type\":\"paragraph\",\"content\":\"The nearest pharmacy is combined with the grocery store, a 10 minute trolley ride away.\"}],\"countVisitsMax\":1},\"one.out_2\":{\"id\":\"one.out_2\",\"options\":[{\"id\":\"@one.recover_data\",\"title\":\"You make money by recovering data from DNA.\"}],\"content\":{\"content\":{\"type\":\"paragraph\",\"content\":[\"Due to budget cuts, you have been laid off, but in their graciousness, the Archives have decided that you could remain as a freelance contractor, paid piecemeal for the documents that you successfully recover. More pressing than the loss of your dignified title is the loss of income. Your rent is due - $300 in five days, and your last paycheck did not arrive. You have exactly $\",{\"type\":\"insert\",\"insert\":0},\" to your name, which also must cover food, medicine, and all other living expenses.\"]},\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['money'] || 0);\"}}]}},\"online_montage.cn3_v2\":{\"id\":\"online_montage.cn3_v2\",\"options\":[{\"id\":\"@online_montage.cn3_1\",\"title\":\"The Guard was her boyfriend, and she thought he would protect her.\"},{\"id\":\"@online_montage.cn3_2\",\"title\":\"Her Guard client was found out by his comrades, and they killed her\"},{\"id\":\"@online_montage.cn3_3\",\"title\":\"Her Guard client decided to kill her for the fun of it.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You keep on watching the video.\"},{\"type\":\"paragraph\",\"content\":\"Bella is wearing a tiny red dress and high heels and more makeup than you had ever seen on her (she used to call it a tool of the patriarchy). Her screams are screams of anguish, emotional more than physical pain, and her expression is one of betrayal, you imagine. The Guards have their signature boyish smiles as they easily deflect her flails and kicks and they twist her arms behind her back and push her to the floor. One of them moves to stomp on her head. The video cuts off.\"},{\"type\":\"paragraph\",\"content\":\"You imagine various scenarios.\"}]},\"ritual.why\":{\"id\":\"ritual.why\",\"options\":[{\"id\":\"@ritual.alive\",\"title\":\"You are alive, and you hope to stay that way.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Why did you survive while they did not? Is it that you had something they lacked? Is it pure chance, the gods of probability smiling upon you?\"},{\"type\":\"paragraph\",\"content\":\"The Uprising turned out to be a winnowing. Who would have thought that a rebellion by a minority with virtually zero support or sympathy from majority groups would succeed? The fighters are all dead or imprisoned for life. Only the pathetic ones remain. The ones who faded away into the woodwork like you, or the ones who shed their identity like A-.\"}]},\"s_1.food_home_2\":{\"id\":\"s_1.food_home_2\",\"onArrival\":[{\"$code\":\"Q['s1_knows_cook_rice'] = 1;\"}],\"options\":[{\"id\":\"@s_1.every_day\",\"title\":\"\\\"I cook rice every day too.\\\"\"},{\"id\":\"@s_1.go_burgers\",\"title\":\"\\\"Alright. Let's go get burgers.\\\"\"},{\"id\":\"@s_1.burgers_propaganda\",\"title\":\"\\\"The humble so-called 'burger' is a piece of the ruling party's propaganda campaign to legitimize their rule via continuity with the American Empire.\\\"\"}],\"content\":{\"content\":\"\\\"Can we still go get burgers?\\\", he asks. \\\"I never get to go out. Mom just makes rice every day.\\\"\",\"type\":\"paragraph\"}},\"a_1.hi\":{\"id\":\"a_1.hi\",\"goTo\":[{\"id\":\"a_1.call_3\"}],\"content\":{\"content\":\"\\\"Hi...\\\"\",\"type\":\"paragraph\"}},\"a_2.are_you_still\":{\"id\":\"a_2.are_you_still\",\"options\":[{\"id\":\"@a_2.pronouns\",\"title\":\"\\\"What pronouns should I use?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So, um, are you still a, um...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I don't know,\\\" she replies. \\\"I don't think it matters right now.\\\"\"}]},\"food.cook_2_1\":{\"id\":\"food.cook_2_1\",\"title\":\"The trip is uneventful.\",\"tags\":[\"cooking\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) - 55;\\nQ['food'] = (Q['food'] || 0) + 5;\\nQ['day_major'] = (Q['day_major'] || 0) + 1;\"}],\"options\":[{\"id\":\"@main\",\"title\":\"You are tired.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The nearest grocery store is a 10-minute trolley ride away. The trolley is mostly empty when you board.\"},{\"type\":\"paragraph\",\"content\":\"When you get to the store, the shelves are devoid of rice, flour, and bread, as well as long-lasting shelf-stable products in general. There must have been panic buying over the latest news of nanoplagues or strikes or equipment failures or sabotage or terrorism or...\"},{\"type\":\"paragraph\",\"content\":\"However, there is a decent supply of perishables. Fresh fruits and vegetables straight from the farms, with supposedly minimal contamination.\"},{\"type\":\"paragraph\",\"content\":\"It costs $55 for enough food to last five days.\"}],\"countVisitsMax\":1},\"k_1.its_em\":{\"id\":\"k_1.its_em\",\"goTo\":[{\"id\":\"k_1.em_2\"}],\"content\":{\"content\":\"\\\"Um, it's me, Em...\\\"\",\"type\":\"paragraph\"}},\"k_2.wait_for_k\":{\"id\":\"k_2.wait_for_k\",\"viewIf\":{\"$code\":\"return ((Q['k2_checks'] || 0) >= 2);\"},\"options\":[{\"id\":\"@k_2.you_too\",\"title\":\"\\\"I've been fine.\\\"\"},{\"id\":\"@k_2.stare_k\",\"title\":\"Stare at K-.\"},{\"id\":\"@k_2.stare_s\",\"title\":\"Stare at S-.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"K- appears with S- in tow, hand-in-hand. She has a downcast look about her as she strides up to you and sits on the bench.\"},{\"type\":\"paragraph\",\"content\":\"\\\"You look cautious as always,\\\" she says to you. \\\"Have you been okay?\\\"\"}]},\"data.o\":{\"id\":\"data.o\",\"onArrival\":[{\"$code\":\"Q.chosen_data_types.push('govt');\"}],\"goTo\":[{\"id\":\"data.data_filed\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"medicine.pharmacy_2\":{\"id\":\"medicine.pharmacy_2\",\"title\":\"Just a brief visit...\",\"tags\":[\"pharmacy\"],\"maxVisits\":1,\"content\":{\"content\":\"\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"medicine\":{\"id\":\"medicine\",\"type\":\"scene\",\"title\":\"Medicine\",\"goTo\":[{\"id\":\"medicine.med_options\"}],\"newPage\":true,\"content\":{\"content\":\"You are out of medicine. What are you going to do?\",\"type\":\"paragraph\"}},\"one.recover_data\":{\"id\":\"one.recover_data\",\"options\":[{\"id\":\"@one.alternatively\",\"title\":\"Alternatively, you could beg and cajole people for support...\"}],\"content\":{\"content\":\"You make money by recovering data from organic storage media. It is a relatively easy job: they send you the raw DNA reads, you use your scripts to convert them to a human-readable format, and then you file them with the Archives. For each file recovered, you are paid some amount of money; the payscale is rather opaque.\",\"type\":\"paragraph\"}},\"online_montage.cn3_1\":{\"id\":\"online_montage.cn3_1\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Maybe the Guard was her boyfriend. Maybe she thought he would have protected her. Obviously, he didn't. Maybe she even thought he loved her. She was never so naive, but who knows.\"},{\"type\":\"paragraph\",\"content\":\"Anyway, it doesn't fucking matter. She's dead.\"}]},\"ritual.alive\":{\"id\":\"ritual.alive\",\"content\":{\"content\":\"You are alive, for better or for worse.\",\"type\":\"paragraph\"}},\"ritual\":{\"id\":\"ritual\",\"type\":\"scene\",\"title\":\"The Ritual\",\"subtitle\":\"A regular excursion...\",\"viewIf\":{\"$code\":\"return ((((Q['ritual_done'] || 0)===0) && ((Q['day'] || 0) >= 3)) && ((((Q['day_major'] || 0)===0) || ((Q['day_minor'] || 0)===0))));\"},\"onArrival\":[{\"$code\":\"Q['ritual_done'] = 1;\\nQ['day_major'] = (Q['day_major'] || 0) + 1;\"}],\"frequency\":300,\"tags\":[\"major\"],\"newPage\":true,\"options\":[{\"id\":\"@ritual.even_death\",\"title\":\"Even after death you are not free.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You read about this ritual in one of the pre-war DNA datasets, the practice of a culture so far removed from you as to be virtually alien. It was a grieving ritual, or a funerary rite, or a celebration of the ancestors. Something like that.\"},{\"type\":\"paragraph\",\"content\":\"The ingredients are hard to come by, so instead of joss paper you use scraps of cellulosic newsprint, and instead of incense sticks you use long matches. The joss paper is supposed to represent money to accompany the deceased into the afterlife, to pay their rent in heaven or something like that.\"}]},\"s_1.every_day\":{\"id\":\"s_1.every_day\",\"options\":[{\"id\":\"@s_1.gray_mush\",\"title\":\"\\\"I didn't always eat rice...\\\"\"},{\"id\":\"@s_1.mom_taught\",\"title\":\"\\\"Your mom taught me how to cook rice.\\\"\"},{\"id\":\"@s_1.begin_cooking\",\"title\":\"Begin cooking.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I cook rice every day too,\\\" you say. \\\"Sometimes with beans though.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wow. You and mom are like the same person.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"We are, aren't we?\\\" You sigh. S- takes a random book from your shelf and sits back on the bed.\"}]},\"a_1.em\":{\"id\":\"a_1.em\",\"goTo\":[{\"id\":\"a_1.call_3\"}],\"content\":{\"content\":\"\\\"It's me, Em...\\\"\",\"type\":\"paragraph\"}},\"a_2.pronouns\":{\"id\":\"a_2.pronouns\",\"onArrival\":[{\"$code\":\"Q['a_romance'] = (Q['a_romance'] || 0) + 1;\"}],\"options\":[{\"id\":\"@a_2.what_do\",\"title\":\"\\\"What do you want to do?\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"What pronouns should I use for you? Like, in my interior monologue.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wow. Seriously? That's what you're concerned about?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hey, it's important for future historians and archivists if I were to write this down.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wow.\\\" She rolls her eyes with a smirk. \\\"I literally do not care.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"So is 'she' fine?\\\"\"},{\"type\":\"paragraph\",\"content\":\"She shrugs. \\\"Whatever.\\\"\"}]},\"food.cook_2_2\":{\"id\":\"food.cook_2_2\",\"title\":\"The trip is uneventful.\",\"tags\":[\"cooking\"],\"maxVisits\":1,\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) - 50;\\nQ['supply'] = (Q['supply'] || 0) + 2;\\nQ['food'] = (Q['food'] || 0) + 5;\\nQ['day_major'] = (Q['day_major'] || 0) + 1;\"}],\"options\":[{\"id\":\"@main\",\"title\":\"You are tired.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"The nearest grocery store is a 10-minute trolley ride away. The trolley is mostly empty when you board.\"},{\"type\":\"paragraph\",\"content\":\"When you get to the store, the shelves are devoid of fresh fruits and produce. There must have been technical incidents at the farms or the transportation system or the refrigeration or maybe there has been sabotage (your comrades or the reactionaries?) or perhaps delivery strikes or anti-plant nanoplagues or...\"},{\"type\":\"paragraph\",\"content\":\"However, there is enough rice to last for a while yet, as well as a decent supply of quasi-organic protein products.\"},{\"type\":\"paragraph\",\"content\":\"It costs $50 for enough food to last five days, as well as some nonperishables that you can use later on.\"}],\"countVisitsMax\":1},\"k_1.k\":{\"id\":\"k_1.k\",\"goTo\":[{\"id\":\"k_1.em_2\"}],\"content\":{\"content\":\"\\\"Um, K-?\\\"\",\"type\":\"paragraph\"}},\"k_2.stare_k\":{\"id\":\"k_2.stare_k\",\"maxVisits\":1,\"options\":[{\"id\":\"@k_2.you_too\",\"title\":\"\\\"I've been fine.\\\"\"},{\"id\":\"@k_2.stare_s\",\"title\":\"Stare at S-.\"}],\"content\":{\"content\":\"K- is wearing black trousers and a gray blazer over a white blouse. Her hair is longer and messier than it used to be, falling over her mask. Her face is locked in an intense expression, but she is not making eye contact with you, instead glaring in your general vicinity.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"data.m\":{\"id\":\"data.m\",\"onArrival\":[{\"$code\":\"Q.chosen_data_types.push('misc');\"}],\"goTo\":[{\"id\":\"data.data_filed\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"one.alternatively\":{\"id\":\"one.alternatively\",\"options\":[{\"id\":\"@main\",\"title\":\"Continue...\"}],\"content\":{\"content\":\"Alternatively, there are exactly two people whom you can cajole and beg for support. You did not exactly part on the best of terms with either, but perhaps they would be amenable.\",\"type\":\"paragraph\"}},\"one\":{\"id\":\"one\",\"type\":\"scene\",\"title\":\"Scene One\",\"newPage\":true,\"viewIf\":{\"$code\":\"return ((Q['started'] || 0)===0);\"},\"onArrival\":[{\"$code\":\"Q.started = 1;\\n    Q.money = 100;\\n    Q.rent = 300;\\n    Q.food = 2;\\n    Q.rent_due = 5;\\n    Q.medicine = 7;\\n    Q.medicine_cost = 40;\\n    Q.key7 = 1;\\n    Q.key13 = 1;\\n    Q.key17 = 1;\\n    Q.key19 = 1;\\n    Q.key23 = 1;\\n    Q.key29 = 1;\\n    Q.key31 = 1;\\n    Q.key49 = 1;\\n    Q.key101 = 1;\\n    Q.key121 = 1;\\n    Q.prev_data = [];\\n    Q.correct_data_types = [];\\n    Q.chosen_data_types = [];\\n    Q.w_seen = 0;\\n    Q.d_seen = 0;\\n    Q.s_seen = 0;\\n    Q.type_payments = {\\n        'misc': 30,\\n        'science': 60,\\n        'literature': 50,\\n        'personal': 40,\\n        'social': 40,\\n        'govt': 40,\\n        'obscene': 10,\\n        'hoax': 10,\\n        'secret': 80, // secret = secrets from the war\\n    };\\n    Q.main_notes = ' ';\\n    Q.day_random = 0;\\n    // TODO: low-anxiety, high-anxiety\\n    Q.low_anxiety_day_dialogues = [\\n        \\\"It is a constant 15 degrees in the undercity. Your apartment is 15 square metres. It is 15:00 right now. It has been 10 years since the Cataclysm, and five since the Uprising. 15. You rotate the number in your mind.\\\",\\n        \\\"Trolleys and people trudge along the street beneath your window. The city's circulatory system. Looking closer, you see cracks in the previous-century concrete, exposing pre-war cobblestone. Patches of missing surface. After the Calamity, sourcing raw materials for routine maintenance has become difficult if not impossible. The city is a body and it is breaking down.\\\",\\n        \\\"The light outside is burning bright. The thin walls are far from soundproof, so you hear the clanging of the trolley and the voices of people inside and outside your building.\\\",\\n        \\\"It is a luxury that you are allowed this private space. It is a luxury that you have the space to carry out your degenerate activities such as \\\\\\\"using the washroom\\\\\\\".\\\",\\n        \\\"You are tired when you wake up, but not more so than usual. You are still alive.\\\",\\n        \\\"There is nothing you particularly desire to do today.\\\",\\n        \\\"You are tired, slighty more so than usual.\\\",\\n    ];\\n    Q.day_dialogues = [\\n        \\\"You are so, so tired.\\\",\\n        \\\"The city is a body and it is breaking down. You are a body and you are breaking down.\\\",\\n        \\\"It is hard to carry yourself out of bed in the morning. Afternoon. Whatever.\\\",\\n        \\\"You lie in bed for hours, thinking of nothing in particular, until your unfortunate biological necessities force you out. You are so, so tired.\\\",\\n        \\\"You wake up with your stomach aching. It is likely that the previous day's diet was inadequate.\\\",\\n        \\\"You awake with a pulsing headache. The probability that you are currently dying is low, but elevated.\\\",\\n        \\\"You awake to pounding on the walls of your apartment, accompanied by shouting. It stops, but you cannot fall back asleep.\\\",\\n        \\\"You awake feeling more tired than you felt last night.\\\",\\n    ];\\n    Q.day_dialogue = Q.low_anxiety_day_dialogues[0];\\n    Q.afternoon_dialogues = [\\n        \\\"The lights outside are dimming, their colors shifting from white to yellow and orange. The shadows darken.\\\",\\n        \\\"You are so, so tired.\\\",\\n        \\\"You are too tired to do anything else today.\\\",\\n        \\\"Your only desire is to lie down, but you still can't fall asleep.\\\",\\n        \\\"It's too loud in here. Voices shouting. Trolley clanging.\\\",\\n        \\\"The lights outside are dimming. You should sleep, perhaps.\\\",\\n        \\\"Loud music and voices filters through the walls. There must be a \\\\\\\"party\\\\\\\" going on. You have never enjoyed parties.\\\",\\n        \\\"Someone is watching television in the apartment, with the volume far too high.\\\",\\n        \\\"Someone is playing music far too loudly. The bass beats shake the walls.\\\",\\n        \\\"Voices crowd the hallway.\\\",\\n    ];\\n    Q.afternoon_dialogue = Q.afternoon_dialogues[1];\\n    Q.next_day_scene = \\\"main\\\";\\n    Q.next_day_scene_queue = [];\\n    Q.has_next_day = 0;\\n    Q.data_day = 0; // the last day you used data\\n    // food events\\n    Q.grocery_events = [\\n        \\\"The shelves are devoid of rice, flour, and bread. All you can get\\\",\\n        \\\"Dry rice is sold by the gram here.\\\",\\n        \\\"A man follows you into the store. \\\\\\\"Wearing a skirt doesn't make you a real lady,\\\\\\\" he whispers into your ear while placing his hand on your bottom. You freeze. \\\\\\\"But I don't care. I always liked you lavs. Shame what happened with the uprising.\\\\\\\" As soon as you can move, and he has merged with the crowd, you quickly fill your bag with the nearest foodstuffs and check out.\\\",\\n        \\\"There is a poster on the trolley, dating from pre-uprising times.\\\",\\n    ];\\n    for (var i = 0; i < 21; i++) {\\n    Q['name_' + i] = window.randomName();\\n    }\"}],\"tags\":[\"top\"],\"options\":[{\"id\":\"@one.watch\",\"title\":\"Watch.\"},{\"id\":\"@one.listen\",\"title\":\"Listen.\"},{\"id\":\"@main\",\"title\":\"Main (skip)\"}],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-1\",\"content\":\"The Archivist watched. The Archivist listened.\"}}},\"online_montage.cn3_2\":{\"id\":\"online_montage.cn3_2\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Men who secretly fuck women like you know what they're looking for, or not looking for. And they're usually not looking for someone of your anatomical configuration. The danger arises when the man's friends discover your history.\"},{\"type\":\"paragraph\",\"content\":\"Anyway, it doesn't fucking matter. She's dead.\"}]},\"s_1.no_food_no_money\":{\"id\":\"s_1.no_food_no_money\",\"viewIf\":{\"$code\":\"return (((Q['food'] || 0)===0) && ((Q['money'] || 0) <= 10));\"},\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Well, um, we don't have food at home, and we don't have enough money to go out to eat. So...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"We can go to our house. We have food there.\\\"\"},{\"type\":\"paragraph\",\"content\":\"TODO\"}]},\"a_1.a_\":{\"id\":\"a_1.a_\",\"goTo\":[{\"id\":\"a_1.call_3\"}],\"content\":{\"content\":\"\\\"A-...?\\\"\",\"type\":\"paragraph\"}},\"a_2.scared\":{\"id\":\"a_2.scared\",\"options\":[{\"id\":\"@a_2.not_deviant\",\"title\":\"\\\"I'm not a deviant.\\\"\"},{\"id\":\"@a_2.i_am_boring\",\"title\":\"\\\"I'm sorry for being so boring.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, aren't you scared to be like this in public?\\\"\"},{\"type\":\"paragraph\",\"content\":\"A- laughs. \\\"What, you think I don't pass?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You have to admit, she passes better than you ever did, even towering over you at her 185 centimetres. Her body is at least visibly endowed, unlike yours. Her antiquated fashion evokes curiosity rather than disgust.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Besides,\\\" she continues, \\\"what's the point of being a deviant if you're going to be so boring all the time?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You are all too conscious of your plain gray skirt and baggy blue jacket.\"}]},\"food.cook_2_3\":{\"id\":\"food.cook_2_3\",\"title\":\"The trip is troublesome.\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.hi\":{\"id\":\"k_1.hi\",\"goTo\":[{\"id\":\"k_1.em_2\"}],\"content\":{\"content\":\"\\\"Hello...\\\"\",\"type\":\"paragraph\"}},\"k_2.stare_s\":{\"id\":\"k_2.stare_s\",\"maxVisits\":1,\"options\":[{\"id\":\"@k_2.you_too\",\"title\":\"\\\"I've been fine.\\\"\"},{\"id\":\"@k_2.hi_s\",\"title\":\"\\\"Hi, S-.\\\"\"}],\"content\":{\"content\":\"S- is looking at you, smiling (he is not wearing a mask). You almost can't bear to look at him, but you force yourself to try to hold his gaze. He is older, obviously, and taller, obviously, but still so utterly recognizable.\",\"type\":\"paragraph\"},\"countVisitsMax\":1},\"data.data_filed\":{\"id\":\"data.data_filed\",\"goTo\":[{\"id\":\"data.post_data\"}],\"content\":{\"content\":\"You have filed the dataset.\",\"type\":\"paragraph\"}},\"online_montage.cn3_3\":{\"id\":\"online_montage.cn3_3\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Bella once said that the sociological role of the laverneans was to serve as an acceptable outlet for society to enact its libidinal urges for sexualized violence. You wonder about her last thoughts.\"},{\"type\":\"paragraph\",\"content\":\"Anyway, it doesn't fucking matter. She's dead.\"}]},\"s_1.go_burgers\":{\"id\":\"s_1.go_burgers\",\"viewIf\":{\"$code\":\"return ((Q['money'] || 0) >= 10);\"},\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Alright. Let's go.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You swallow your small act of legitimizing regime propaganda. It's for S-. It's all for the smile on his face.\"},{\"type\":\"paragraph\",\"content\":\"TODO\"}]},\"a_1.call_3\":{\"id\":\"a_1.call_3\",\"onArrival\":[{\"$code\":\"Q['a_path'] = 1;\"}],\"options\":[{\"id\":\"@a_1.job\",\"title\":\"\\\"I lost my job...\\\"\"},{\"id\":\"@a_1.homeless\",\"title\":\"\\\"I'm about to be homeless...\\\"\"},{\"id\":\"@a_1.talk\",\"title\":\"\\\"I missed you too...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Oh my God, Em, is that you? Wow, thanks for calling! It's been so long! I missed you!\\\" A pause. \\\"What's happening?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Of course, you are not to speak freely on the phone. You don't know who is listening.\"}]},\"a_2.stare\":{\"id\":\"a_2.stare\",\"options\":[{\"id\":\"@a_2.not_deviant\",\"title\":\"\\\"I'm not a deviant.\\\"\"},{\"id\":\"@a_2.i_am_boring\",\"title\":\"\\\"I'm sorry for being so boring.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You just stare, too shocked to say anything. Her entire aesthetic appears ripped out of a pre-war photograph of the precursors to laverneans (they called themselves something different then). Respectable historians say that the pre-war gender minorities saw themselves as neither men nor women and thus have no commonality with today's laverneans, but laverneans themselves know better.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Are you going to stop staring or what?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. It's just that...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"What, you think I look weird?\\\" A- laughs. \\\"What's the point of being a deviant if you're going to be so boring all the time?\\\"\"},{\"type\":\"paragraph\",\"content\":\"She stares at your plain gray skirt and baggy blue jacket.\"}]},\"food.cook_new\":{\"id\":\"food.cook_new\",\"chooseIf\":{\"$code\":\"return ((Q['supply'] || 0) > 0);\"},\"subtitle\":\"You have some supplies.\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.em_2\":{\"id\":\"k_1.em_2\",\"options\":[{\"id\":\"@k_1.job\",\"title\":\"\\\"I lost my job...\\\"\"},{\"id\":\"@k_1.homeless\",\"title\":\"\\\"I might be homeless soon...\\\"\"},{\"id\":\"@k_1.just_talk\",\"title\":\"\\\"I just wanted to see how you and S- were doing...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Em? Is that you? Fuck, why did you decide to call now of all times?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Of course, you can't talk freely on the phone. Who knows who is listening.\"}]},\"k_2.you_too\":{\"id\":\"k_2.you_too\",\"options\":[{\"id\":\"@k_2.no_choice\",\"title\":\"You don't have a choice, do you?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I've been fine,\\\" you say as a reflex.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah. Whatever.\\\" She sighs. \\\"Look, I have to stay at the night overnight for an experiment, and I need someone to watch S-. I'll pay you 100 dollars for your time, plus extra for his food and water. Is that okay?\\\"\"},{\"type\":\"paragraph\",\"content\":\"K- has always been this direct.\"}]},\"data.keep\":{\"id\":\"data.keep\",\"onArrival\":[{\"$code\":\"var last_data = Q.prev_data.pop();\\nQ['data_archives'].append(last_data);\\n// wiki\\nQ.data_scenes.append(window.dendryUI.game.scenes['data.' + last_data]);\"}],\"goTo\":[{\"id\":\"data.post_data\"}],\"content\":{\"content\":\"You keep the dataset for yourself, without filing it with the Archives.\",\"type\":\"paragraph\"}},\"online_montage.cn4\":{\"id\":\"online_montage.cn4\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Opposition party leader: 'gender and sexual minorities deserve human rights'\"},\"subtitle\":{\"content\":{\"type\":\"conditional\",\"content\":\"CW: homophobia, transphobia, slurs\",\"predicate\":0},\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['cw_enabled'] || 0)===1);\"}}]},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Opposition party leader: \\\"gender and sexual minorities deserve human rights\\\"\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": pedos\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": party of freaks and pedos\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": hang the fuckers\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":3},\": they literally have more rights than ever. fags need to stop shoving it in our faces.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":4},\": enjoy getting zero votes.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":5},\": every single woman knows that males do not have a right to impersonate women.\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_3'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_4'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_5'] || 0);\"}}]}},\"s_1.why_burgers\":{\"id\":\"s_1.why_burgers\",\"options\":[{\"id\":\"@s_1.cook_rice\",\"title\":\"\\\"I cook rice every day too.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Why do you want burgers?\\\" you ask.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Mom just cooks rice every day. I want something new.\\\"\"}]},\"a_1.job\":{\"id\":\"a_1.job\",\"goTo\":[{\"id\":\"a_1.money\"}],\"content\":{\"content\":\"\\\"Um, I just lost my job...\\\"\",\"type\":\"paragraph\"}},\"a_2.what_do\":{\"id\":\"a_2.what_do\",\"options\":[{\"id\":\"@a_2.okay_shopping\",\"title\":\"\\\"Let's go grocery shopping.\\\"\"},{\"id\":\"@a_2.no_shopping\",\"title\":\"\\\"I'd rather go home.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"So, what do you want to do?\\\" you ask, after staring at each others' eyes for far too long. Somehow it feels like the two of you are students meeting for the first time again.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Let's go shopping,\\\" she replies. \\\"Is there anything you'd like? Don't worry, I'll pay.\\\"\"}]},\"food.scrounge\":{\"id\":\"food.scrounge\",\"subtitle\":\"Free, lasts 1-2 days.\",\"unavailableSubtitle\":\"You don't have any more food left.\",\"chooseIf\":{\"$code\":\"return ((Q['scrounged'] || 0)===0);\"},\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.job\":{\"id\":\"k_1.job\",\"goTo\":[{\"id\":\"k_1.need_money\"}],\"content\":{\"content\":\"\\\"Um, I just lost my job, and...\\\"\",\"type\":\"paragraph\"}},\"k_2.hi_s\":{\"id\":\"k_2.hi_s\",\"options\":[{\"id\":\"@k_2.no_choice\",\"title\":\"You don't have a choice, do you?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Hi, S-,\\\" you say, waving at him and trying your best to convey a smile through your PPE.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Hi, mama.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, Aunt Em, remember?\\\" K- corrects him.\"},{\"type\":\"paragraph\",\"content\":\"S- frowns. \\\"Oh. Sorry.\\\"\"},{\"type\":\"paragraph\",\"content\":\"Now K- turns to you. \\\"Can you take care of him tonight? I have to stay at the lab overnight.\\\" Then, whispering: \\\"I'll pay you 100 dollars for every night he stays with you.\\\"\"},{\"type\":\"paragraph\",\"content\":\"K- has always been this direct.\"}]},\"data.discard\":{\"id\":\"data.discard\",\"onArrival\":[{\"$code\":\"Q['prev_data'].pop();\"}],\"goTo\":[{\"id\":\"data.post_data\"}],\"content\":{\"content\":\"You delete the dataset. There is no use for it.\",\"type\":\"paragraph\"}},\"online_montage.cn5\":{\"id\":\"online_montage.cn5\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"University scientists: nanoplague infection level 'at highest extent in years'\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: University scientist: nanoplague infection level \\\"at highest extent in years\\\".\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": they've been saying this every year.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": university professors want to control your life and poison your children.\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}}]}},\"s_1.cook_rice\":{\"id\":\"s_1.cook_rice\",\"onArrival\":[{\"$code\":\"Q['s1_knows_cook_rice'] = 1;\"}],\"options\":[{\"id\":\"@s_1.gray_mush\",\"title\":\"\\\"I didn't always eat rice...\\\"\"},{\"id\":\"@s_1.mom_taught\",\"title\":\"\\\"Your mom taught me how to cook rice.\\\"\"},{\"id\":\"@s_1.food_home\",\"title\":\"\\\"We have food at home.\\\"\"},{\"id\":\"@s_1.no_food_no_money\",\"title\":\"\\\"We do not have food at home, and we do not have enough money to go out to eat.\\\"\"},{\"id\":\"@s_1.go_burgers\",\"title\":\"\\\"Alright. Let's go.\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I cook rice every day too,\\\" you say. \\\"Sometimes with beans though.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wow. You and mom are like the same person.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"We are, aren't we?\\\" You sigh.\"}]},\"a_1.homeless\":{\"id\":\"a_1.homeless\",\"goTo\":[{\"id\":\"a_1.money\"}],\"content\":{\"content\":\"\\\"So, I'm about to be homeless because I just lost my job and I can't cover rent...\\\"\",\"type\":\"paragraph\"}},\"a_2.no_shopping\":{\"id\":\"a_2.no_shopping\",\"onArrival\":[{\"$code\":\"Q['a_romance'] = (Q['a_romance'] || 0) - 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Sorry, I'd rather go home.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Oh. Okay.\\\"\"}]},\"food.scrounge_2\":{\"id\":\"food.scrounge_2\",\"onArrival\":[{\"$code\":\"Q['scrounged'] = 1;\\nQ['stress'] = (Q['stress'] || 0) + 1;\\nQ['food'] = (Q['food'] || 0) + 1;\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.homeless\":{\"id\":\"k_1.homeless\",\"goTo\":[{\"id\":\"k_1.need_money\"}],\"content\":{\"content\":\"\\\"I might be homeless soon, and...\\\"\",\"type\":\"paragraph\"}},\"k_2.no_choice\":{\"id\":\"k_2.no_choice\",\"onArrival\":[{\"$code\":\"Q['has_s'] = 1;\"}],\"options\":[{\"id\":\"@k_2.cry\",\"title\":\"If you were physiologically capable of crying, you would be doing so now.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, sure,\\\" you say, and try to smile with your eyes. \\\"Yeah, I can take care of him. For tonight.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"She's gonna take care of you,\\\" K- says. \\\"Be nice to Mama, I mean Aunt Em, okay, S-?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Okay!\\\"\"}]},\"data.post_data\":{\"id\":\"data.post_data\",\"options\":[{\"id\":\"@data.post_data_2\",\"title\":\"Look at more datasets.\"},{\"id\":\"@data.back\",\"title\":\"Stop looking at datasets.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"online_montage.cn6\":{\"id\":\"online_montage.cn6\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Shortage of rare earth minerals continues.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Shortage of rare earth minerals continues. Electronics industry association asks consumers to recycle their obsolete devices.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": why can't they just dig up more. can't be that hard.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": this is happening and TRANSVESTITES are still pretending to be oppressed.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":3},\": you can pry my X101 from my cold, dead hands.\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_3'] || 0);\"}}]}},\"s_1.gray_mush\":{\"id\":\"s_1.gray_mush\",\"options\":[{\"id\":\"@s_1.mom_taught\",\"title\":\"\\\"Your mom taught me how to cook rice.\\\"\"},{\"id\":\"@s_1.begin_cooking\",\"title\":\"Just start cooking.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I didn't always eat rice, actually. I used to eat gray mush all the time when I was your age.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Gross. That's all they give us at school. It makes me want to throw up.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah. It is gross. That's all they had at the children's center.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Sorry. That sucks.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yes. It did suck.\\\"\"}]},\"a_1.money\":{\"id\":\"a_1.money\",\"options\":[{\"id\":\"@a_1.100\",\"title\":\"$100 to cover rent.\"},{\"id\":\"@a_1.200\",\"title\":\"$200 more to cover rent.\"},{\"id\":\"@a_1.300\",\"title\":\"$300 for rent.\"}],\"content\":{\"type\":\"paragraph\",\"content\":[\"\\\"I am \",{\"type\":\"emphasis-1\",\"content\":\"so\"},\" sorry! I thought it might be something like that. Of course I can help. How much do you need?\\\"\"]}},\"a_2.okay_shopping\":{\"id\":\"a_2.okay_shopping\",\"options\":[{\"id\":\"@a_2.take_hand\",\"title\":\"Take her hand.\"},{\"id\":\"@a_2.just_get_up\",\"title\":\"Just get up.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Let's go grocery shopping,\\\" you say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Okay. I was thinking more along the lines of clothes, but I suppose sustenance is more important.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She smiles, stands up, and offers her hand to you.\"}]},\"food.starve\":{\"id\":\"food.starve\",\"subtitle\":\"Free.\",\"options\":[{\"id\":\"@food.starve_2\",\"title\":\"Do it.\"},{\"id\":\"@food.food_options\",\"title\":\"Do something else.\"}],\"content\":{\"content\":\"You could simply not eat today. There are no potential long-term consequences.\",\"type\":\"paragraph\"}},\"k_1.just_talk\":{\"id\":\"k_1.just_talk\",\"options\":[{\"id\":\"@k_1.job\",\"title\":\"\\\"I lost my job...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I just wanted to see how you and S- were doing...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Really? Is that it? I don't recall you having a history of curiosity about our personal status.\\\" Her sigh is audible. \\\"Fuck, what is the real reason?\\\"\"}]},\"k_2.cry\":{\"id\":\"k_2.cry\",\"options\":[{\"id\":\"@s_1\",\"title\":\"Home again.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"If your hormone-deprived body were physiologically capable of crying, you would be doing so at this time. Instead, you nod, and let S- take your hand.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I'll come by your apartment tomorrow afternoon. You still live there, right?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You nod. S- leads you up to your feet. K- waves the two of you goodbye, and heads back to the trolley stop. You head to a different trolley stop.\"}]},\"k_2\":{\"id\":\"k_2\",\"type\":\"scene\",\"title\":\"Meeting K-\",\"subtitle\":\"5PM, LX Square\",\"viewIf\":{\"$code\":\"return (((Q['k_path'] || 0)===1) && ((((Q['day_major'] || 0)===0) || ((Q['day_minor'] || 0)===0))));\"},\"onArrival\":[{\"$code\":\"Q['day_major'] = (Q['day_major'] || 0) + 1;\\nQ['k_path'] = (Q['k_path'] || 0) + 1;\"}],\"tags\":[\"major\"],\"newPage\":true,\"options\":[{\"id\":\"@k_2.year\",\"title\":\"At least a year.\"},{\"id\":\"@k_2.months\",\"title\":\"A few months.\"},{\"id\":\"@k_2.weeks\",\"title\":\"Just a few weeks.\"}],\"content\":{\"content\":\"How long has it been since you last saw her?\",\"type\":\"paragraph\"}},\"data.pre_view_display\":{\"id\":\"data.pre_view_display\",\"goTo\":[{\"id\":\"data.view_display\"}],\"content\":{\"content\":\"There are still more datasets for you to decode.\",\"type\":\"paragraph\"}},\"online_montage.cn7\":{\"id\":\"online_montage.cn7\",\"title\":\"Seven homeless encampments removed from public square by police and Guards.\",\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Seven homeless encampments removed from public square by police and Guards.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": good\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": long live the guards!!!\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":3},\": they should be sent to live outside!!!\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":4},\": Why can't they get jobs like the rest of us? WHy do they want special treatment?\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_4'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_3'] || 0);\"}}]}},\"s_1.mom_taught\":{\"id\":\"s_1.mom_taught\",\"options\":[{\"id\":\"@s_1.technically\",\"title\":\"\\\"Technically...\\\"\"},{\"id\":\"@s_1.idk_mom\",\"title\":\"\\\"It's complicated...\\\"\"},{\"id\":\"@s_1.trying_mom\",\"title\":\"\\\"I can try to be...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Your mom taught me how to cook rice. I didn't know very much cooking before I met her.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wait, aren't you my mom too, technically?\\\"\"}]},\"a_1.100\":{\"id\":\"a_1.100\",\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) + 100;\\nQ['a_money'] = 1;\"}],\"goTo\":[{\"id\":\"a_1.money_finish\"}],\"content\":{\"content\":\"\\\"I just need Just 100 dollars.\\\"\",\"type\":\"paragraph\"}},\"a_2.take_hand\":{\"id\":\"a_2.take_hand\",\"goTo\":[{\"id\":\"a_2.shopping\"}],\"onArrival\":[{\"$code\":\"Q['a_romance'] = (Q['a_romance'] || 0) + 1;\"}],\"content\":{\"content\":\"You take her hand.\",\"type\":\"paragraph\"}},\"food.starve_2\":{\"id\":\"food.starve_2\",\"title\":\"Do it.\",\"viewIf\":{\"$code\":\"return ((Q['days_starved'] || 0)===0);\"},\"onArrival\":[{\"$code\":\"Q['stress'] = (Q['stress'] || 0) + 4;\\nQ['food'] = 1;\\nQ['days_starved'] = (Q['days_starved'] || 0) + 1;\"}],\"content\":{\"content\":\"You can survive without food for a day. You will be fine. Just a bit hungry. Just a bit more tired than usual.\",\"type\":\"paragraph\"}},\"k_1.need_money\":{\"id\":\"k_1.need_money\",\"options\":[{\"id\":\"@k_1.yes_meet\",\"title\":\"\\\"Sure...\\\"\"},{\"id\":\"@k_1.idk_meet\",\"title\":\"\\\"I'm not sure...\\\"\"},{\"id\":\"@k_1.need_money_now\",\"title\":\"\\\"I need the money right now...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"...And you need money? Fuck.\\\" Her sigh is audible. \\\"God, okay, look, I'm a non-tenured scientist on a contingent contract, and I have a kid. How much disposable income do you think I have?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I'm sorry... forget-\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No. Look...\\\" A pause. \\\"There's one thing you could do to help me out, and I'll pay you. Can we meet tomorrow?\\\"\"}]},\"data.end_data\":{\"id\":\"data.end_data\",\"content\":{\"content\":\"Unfortunately, you are too tired to look at any more datasets.\",\"type\":\"paragraph\"}},\"online_montage.cn8\":{\"id\":\"online_montage.cn8\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Overall life expectancy at 65, 2% decline from previous year.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Overall life expectancy at 65, 2% decline from previous year. Experts blame nanoplagues, moral degeneracy.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": half of it js trannies keep killing themselves\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}}]}},\"s_1.technically\":{\"id\":\"s_1.technically\",\"goTo\":[{\"id\":\"s_1.mom_test\"}],\"content\":{\"content\":\"\\\"Technically, I suppose. Do you want me to be?\\\"\",\"type\":\"paragraph\"}},\"a_1.200\":{\"id\":\"a_1.200\",\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) + 200;\\nQ['a_money'] = 1;\"}],\"goTo\":[{\"id\":\"a_1.money_finish\"}],\"content\":{\"content\":\"\\\"I need 200 dollars to cover rent.\\\"\",\"type\":\"paragraph\"}},\"a_2.just_get_up\":{\"id\":\"a_2.just_get_up\",\"goTo\":[{\"id\":\"a_2.shopping\"}],\"content\":{\"content\":\"You just get up, ignoring her offer.\",\"type\":\"paragraph\"}},\"food.starve_3\":{\"id\":\"food.starve_3\",\"title\":\"Do it.\",\"viewIf\":{\"$code\":\"return ((Q['days_starved'] || 0)===1);\"},\"onArrival\":[{\"$code\":\"Q['stress'] = (Q['stress'] || 0) + 4;\\nQ['food'] = 1;\\nQ['days_starved'] = (Q['days_starved'] || 0) + 1;\\nQ['day_major'] = (Q['day_major'] || 0) + 1;\"}],\"content\":{\"content\":\"You can survive without food for one more day. Nothing bad is going to happen, except for the fact that you feel too tired to exit your apartment or do work. A minor and temporary setback.\",\"type\":\"paragraph\"}},\"k_1.yes_meet\":{\"id\":\"k_1.yes_meet\",\"onArrival\":[{\"$code\":\"Q['k_path'] = 1;\\nQ['k_meet_day'] = (Q['day'] || 0);\"}],\"options\":[{\"id\":\"@k_1.hangup\",\"title\":\"A thread of hope.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Sure...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Good. How about 5PM tomorrow at LX Square?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"See you then.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She hangs up.\"}]},\"data.check_data_0\":{\"id\":\"data.check_data_0\",\"options\":[{\"id\":\"@data.check_data\",\"title\":\"View results\"}],\"content\":{\"content\":\"Some of your decoded datasets have been received and processed. Here are the results:\",\"type\":\"paragraph\"}},\"online_montage.cn9\":{\"id\":\"online_montage.cn9\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Grocery strike leads to riots in Erie District, five suspected rioters killed.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Grocery strike leads to riots in Erie District. Five suspected rioters killed.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":1},\": kill all rioters.\"]},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":2},\": kill all terrorists\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_1'] || 0);\"}},{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_2'] || 0);\"}}]}},\"s_1.idk_mom\":{\"id\":\"s_1.idk_mom\",\"goTo\":[{\"id\":\"s_1.mom_test\"}],\"content\":{\"content\":\"\\\"It's complicated...\\\"\",\"type\":\"paragraph\"}},\"a_1.300\":{\"id\":\"a_1.300\",\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) + 300;\\nQ['a_money'] = 1;\"}],\"goTo\":[{\"id\":\"a_1.money_finish\"}],\"content\":{\"content\":\"\\\"I need 300 dollars for rent.\\\"\",\"type\":\"paragraph\"}},\"a_2.shopping\":{\"id\":\"a_2.shopping\",\"options\":[{\"id\":\"@a_2.stay_with_a\",\"title\":\"Stay near A-.\"},{\"id\":\"@a_2.wander_off\",\"title\":\"Wander off by yourself..\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"There is a warehouse store in a reclaimed pre-war building, a flat and wide gray structure surrounded by fields of lichen growing on concrete, on which a shantytown has been erected, densely packed with tents and shacks. You keep your gaze on the ground in front of you. A- is walking quickly, pushing you forward with her hand on your back until you reach the entrance.\"},{\"type\":\"paragraph\",\"content\":\"\\\"So. We're here. What do you want?\\\"\"}]},\"food.starve_4\":{\"id\":\"food.starve_4\",\"title\":\"Do it.\",\"viewIf\":{\"$code\":\"return ((Q['days_starved'] || 0) >= 2);\"},\"onArrival\":[{\"$code\":\"Q['stress'] = (Q['stress'] || 0) + 4;\\nQ['food'] = 1;\\nQ['days_starved'] = (Q['days_starved'] || 0) + 1;\\nQ['day_major'] = (Q['day_major'] || 0) + 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Day 3 of no food.\"},{\"type\":\"paragraph\",\"content\":\"TODO: someone helps you?\"}]},\"food\":{\"id\":\"food\",\"type\":\"scene\",\"title\":\"Food\",\"goTo\":[{\"id\":\"food.food_options\"}],\"newPage\":true,\"content\":{\"content\":\"You have no more edible food left in your apartment. What are you going to do?\",\"type\":\"paragraph\"}},\"k_1.idk_meet\":{\"id\":\"k_1.idk_meet\",\"onArrival\":[{\"$code\":\"Q['k_path'] = 1;\\nQ['k_meet_day'] = (Q['day'] || 0);\"}],\"options\":[{\"id\":\"@k_1.yes_meet_2\",\"title\":\"\\\"I can be there...\\\"\"},{\"id\":\"@k_1.idk_meet_2\",\"title\":\"\\\"I still don't know...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I'm not sure...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I mean, based on my current knowledge, I doubt you'd have anything better to do. Would you be able to meet 5PM tomorrow at LX Square?\\\"\"}]},\"data.check_data\":{\"id\":\"data.check_data\",\"options\":[{\"id\":\"@data.view_display\",\"title\":\"Continue.\"},{\"id\":\"@data.back\",\"title\":\"Do something else.\"}],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"magic\",\"content\":\"<script>$('#check_data_text').append($(window.dendryUI.dendryEngine.state.qualities.check_data_text));</script> <code id=\\\"check_data_text\\\"></code>\"}}},\"online_montage.cn10\":{\"id\":\"online_montage.cn10\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Lithium shortage leads to higher battery prices for consumers and industry.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Lithium shortage leads to higher battery prices for consumers and industry.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.trying_mom\":{\"id\":\"s_1.trying_mom\",\"goTo\":[{\"id\":\"s_1.mom_test\"}],\"content\":{\"content\":\"\\\"I can try to be... If you want me to be?\\\"\",\"type\":\"paragraph\"}},\"a_1.money_finish\":{\"id\":\"a_1.money_finish\",\"options\":[{\"id\":\"@a_1.okay_see\",\"title\":\"\\\"Okay...\\\"\"},{\"id\":\"@a_1.maybe_see\",\"title\":\"\\\"Maybe...\\\"\"},{\"id\":\"@a_1.precondition\",\"title\":\"\\\"Is that a condition for the money?\\\"\"}],\"content\":{\"content\":\"\\\"Sure, anything for you,\\\" A- says. \\\"Anyway, could we possibly meet again soon? I really want to see you again.\\\"\",\"type\":\"paragraph\"}},\"a_2.stay_with_a\":{\"id\":\"a_2.stay_with_a\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"What do you want?\\\", you ask.\"},{\"type\":\"paragraph\",\"content\":\"\\\"I don't need anything. But if they have it...\\\"\"},{\"type\":\"paragraph\",\"content\":\"She leads you towards the spice aisle.\"},{\"type\":\"paragraph\",\"content\":\"TODO\"}]},\"k_1.need_money_now\":{\"id\":\"k_1.need_money_now\",\"viewIf\":{\"$code\":\"return ((Q['rent_due'] || 0) <= 2);\"},\"onArrival\":[{\"$code\":\"Q['money'] = (Q['money'] || 0) + 100;\\nQ['k_money'] = 1;\\nQ['k_path'] = 1;\\nQ['k_meet_day'] = (Q['day'] || 0);\"}],\"options\":[{\"id\":\"@k_1.yes_meet\",\"title\":\"\\\"Sure...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I actually need the money right now. It's kind of an emergency...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"God. Okay, fine. Here's $100.\\\"\"},{\"type\":\"paragraph\",\"content\":\"You see the transaction on your account.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Anyway,\\\" K- continues, \\\"What I was going to say was that I need someone to take care of S- on the days when I'm working late in the lab. Which lately is every day. I know your schedule is flexible. Is that something you can do?\\\"\"},{\"type\":\"paragraph\",\"content\":\"You aren't exactly in a position to refuse.\"}]},\"data.todo\":{\"id\":\"data.todo\",\"onArrival\":[{\"$code\":\"Q['day_major'] = (Q['day_major'] || 0) + 1;\\nQ['day_data_seen'] = (Q['day_data_seen'] || 0) + 1;\"}],\"options\":[{\"id\":\"@data.file\",\"title\":\"File.\"},{\"id\":\"@data.discard\",\"title\":\"Discard.\"},{\"id\":\"@data.keep\",\"title\":\"Keep for yourself.\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"online_montage.cn11\":{\"id\":\"online_montage.cn11\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"MP sponsors bill aimed at terrorist sympathizers\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: MP sponsors bill aimed at terrorist sympathizers: \\\"Some of those behind the Uprising have yet to face justice.\\\"\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.mom_test\":{\"id\":\"s_1.mom_test\",\"options\":[{\"id\":\"@s_1.begin_cooking\",\"title\":\"Begin cooking.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"He crosses his arms. \\\"Hmm... Maybe this is a test. If you pass it you can be my second mom.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"And how would I know if I've passed?\\\"\"},{\"type\":\"paragraph\",\"content\":\"He shrugs. \\\"I dunno. If I'm not hungry tonight.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Then I've already failed being my own mom.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Wow.\\\"\"}]},\"a_1.precondition\":{\"id\":\"a_1.precondition\",\"options\":[{\"id\":\"@a_1.okay_see\",\"title\":\"\\\"Okay...\\\"\"},{\"id\":\"@a_1.maybe_see\",\"title\":\"\\\"Maybe...\\\"\"},{\"id\":\"@a_1.idk_see\",\"title\":\"\\\"I don't know...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Is that a condition for the money?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, of course not!\\\" An audible sigh. \\\"I just want to see you. Is it okay?\\\"\"},{\"type\":\"paragraph\",\"content\":\"It doesn't feel right to refuse.\"}]},\"a_2.wander_off\":{\"id\":\"a_2.wander_off\",\"content\":[{\"type\":\"paragraph\",\"content\":\"You need rice, meats, and vegetables. You wander off, and see that you've lost A- along the way.\"},{\"type\":\"paragraph\",\"content\":\"TODO\"}]},\"a_2\":{\"id\":\"a_2\",\"type\":\"scene\",\"title\":\"Meeting A-\",\"subtitle\":\"6PM, LX Square\",\"viewIf\":{\"$code\":\"return (((Q['a_path'] || 0)===1) && ((Q['day_major'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['day_major'] = (Q['day_major'] || 0) + 1;\\nQ['a_path'] = 2;\\nQ['a_romance'] = 1;\"}],\"tags\":[\"major\"],\"newPage\":true,\"options\":[{\"id\":\"@a_2.boredom\",\"title\":\"Because you're bored and don't have anything better to do.\"},{\"id\":\"@a_2.repayment\",\"title\":\"Because he helped you, and you have to repay him somehow.\"},{\"id\":\"@a_2.love\",\"title\":\"Because you're still a little in love with him.\"}],\"content\":{\"content\":\"Why are you meeting with A-?\",\"type\":\"paragraph\"}},\"k_1.yes_meet_2\":{\"id\":\"k_1.yes_meet_2\",\"options\":[{\"id\":\"@k_1.hangup\",\"title\":\"A thread of hope.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I can be there...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"See you then.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She hangs up.\"}]},\"data.decode\":{\"id\":\"data.decode\",\"newPage\":true,\"options\":[{\"id\":\"@data.decode_continue\",\"title\":\"...\"}],\"content\":{\"content\":\"Decoding...\",\"type\":\"paragraph\"}},\"online_montage.cn12\":{\"id\":\"online_montage.cn12\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"High fruit prices: are rioters and terrorists to blame?\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: High fruit prices: are rioters and terrorists to blame?\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.begin_cooking\":{\"id\":\"s_1.begin_cooking\",\"options\":[{\"id\":\"@s_1.fun_book\",\"title\":\"\\\"Is this a fun book?\\\"\"},{\"id\":\"@s_1.wait_cooking\",\"title\":\"Wait for the rice to finish.\"},{\"id\":\"@s_1.cook_2\",\"title\":\"Prepare another dish.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You fill the pressure cooker pot with rice. There are meats too - mung beans, red beans, and lentils added for extra nutrition and flavoring. K- taught you this. You rinse the mixture until it is no longer cloudy, and fill the pot to the top mark with water.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Thirty minutes,\\\" you say, turning on the cooker.\"},{\"type\":\"paragraph\",\"content\":\"Meanwhile S- is sitting on your bed, flipping through the pages of a computer programming textbook.\"}]},\"a_1.okay_see\":{\"id\":\"a_1.okay_see\",\"options\":[{\"id\":\"@a_1.done\",\"title\":\"A- hangs up.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Okay...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's great! Maybe we could meet up at LX Square again, and wander around the city just like the old days.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah, maybe.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Well, call me if you want to meet up, or if you need anything else!\\\"\"}]},\"k_1.idk_meet_2\":{\"id\":\"k_1.idk_meet_2\",\"onArrival\":[{\"$code\":\"Q['k_idk_meet'] = 1;\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I still don't know...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Fine. I usually take S- out for a walk around that time anyway. Come by if you want to interact.\\\"\"},{\"type\":\"paragraph\",\"content\":\"She hangs up.\"}]},\"data.decode_continue\":{\"id\":\"data.decode_continue\",\"goTo\":[{\"id\":\"jumpScene\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"online_montage.cn13\":{\"id\":\"online_montage.cn13\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Suspected rioter shows no vital signs after initiating altercation against Guards.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Suspected rioter shows no vital signs after initiating altercation against Guards.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.fun_book\":{\"id\":\"s_1.fun_book\",\"options\":[{\"id\":\"@s_1.teach_s\",\"title\":\"Teach him?\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Is this a fun book?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Not really.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Do you want to learn more about computers?\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"I guess. Maybe.\\\"\"}]},\"a_1.maybe_see\":{\"id\":\"a_1.maybe_see\",\"options\":[{\"id\":\"@a_1.done\",\"title\":\"A- hangs up.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, maybe,\\\" you say. \\\"I'm...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"No, it's fine,\\\" he says. \\\"I understand if you don't want to see me.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"It's not that, it's... just...\\\" You don't know what to say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Well, then, just call me if you want to meet up, or if you need anything else.\\\"\"}]},\"k_1.hangup\":{\"id\":\"k_1.hangup\",\"options\":[{\"id\":\"@k_1.only_support\",\"title\":\"Only some financial support. Nothing more.\"},{\"id\":\"@k_1.see_her_again\",\"title\":\"You want to see her again.\"},{\"id\":\"@k_1.idk_meeting_her\",\"title\":\"You don't know.\"}],\"content\":{\"content\":\"What are you hoping for, by meeting her?\",\"type\":\"paragraph\"}},\"data.d606\":{\"id\":\"data.d606\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"D606.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return ((Q['key101'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('d606'); Q.correct_data_types.push('personal'); Q.d_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.d606_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"online_montage.cn14\":{\"id\":\"online_montage.cn14\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Superintendent of schools: teachers and students alike are inadequate to face modern challenges.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Superintendent of schools: teachers and students alike are inadequate to face modern challenges.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.teach_s\":{\"id\":\"s_1.teach_s\",\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Did mom ever teach you any programming?\\\"\"},{\"type\":\"paragraph\",\"content\":\"TODO\"}]},\"a_1.idk_see\":{\"id\":\"a_1.idk_see\",\"options\":[{\"id\":\"@a_1.done\",\"title\":\"A- hangs up.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"Um, I don't know,\\\" you say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"That's fine,\\\" he says. \\\"I understand if you don't want to see me.\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"It's not that, it's... just...\\\" You don't know what to say.\"},{\"type\":\"paragraph\",\"content\":\"\\\"Well, then, just call me if you want to meet up, or if you need anything else.\\\"\"}]},\"k_1.only_support\":{\"id\":\"k_1.only_support\",\"content\":[{\"type\":\"paragraph\",\"content\":\"Only some financial support. Nothing more.\"},{\"type\":\"paragraph\",\"content\":\"Okay.\"}]},\"data.d606_\":{\"id\":\"data.d606_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"BSRI DNA Diaries Project - #83\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"If you're reading this, I am dead. The doctors said I have probably no more than a year to live. You'd think I'd be feeling sad or something, but instead, I'm feeling nothing at all. I wish I could think about my family. I wish I could think of anything at all.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Here's the standard intro: my name is Akshay S (he/him), and I do genomics work here at the institute. I was born around Vancouver, with two older siblings. I am a husband and father of a young child. There are probably hundreds of people with nearly identical backgrounds. I don't know what I did to deserve being memorialized like this.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Jiaren says that death doesn't have to happen. She says that we can cure aging and death with some of the methods we're developing here. Even glioblastoma will be curable, she says. It won't be enough for me.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Tomorrow, I'm having a going away party. An early retirement party, combined with a living funeral, although my colleagues are steadfast in refusing to call it as such.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"I hope your world is better than mine.\"}}]},\"online_montage.cn15\":{\"id\":\"online_montage.cn15\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"University scientist: plant nanoplagues pose threat to food security.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: University scientist: plant nanoplagues pose threat to food security.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.wait_cooking\":{\"id\":\"s_1.wait_cooking\",\"options\":[{\"id\":\"@s_1.cook_2\",\"title\":\"Prepare another dish.\"}],\"content\":{\"content\":\"Your hands are idle. You feel as if you should do something else.\",\"type\":\"paragraph\"}},\"a_1.done\":{\"id\":\"a_1.done\",\"options\":[{\"id\":\"@a_1.maybe_fine\",\"title\":\"Maybe seeing A- again would be fine.\"},{\"id\":\"@a_1.dont_want\",\"title\":\"You do not want to see his face\"},{\"id\":\"@a_1.doesnt_matter\",\"title\":\"It doesn't matter either way.\"}],\"content\":{\"content\":\"A- hangs up, leaving you alone with your thoughts. At least you are slightly further from total destitution.\",\"type\":\"paragraph\"}},\"k_1.see_her_again\":{\"id\":\"k_1.see_her_again\",\"content\":[{\"type\":\"paragraph\",\"content\":\"You want to see her again.\"},{\"type\":\"paragraph\",\"content\":\"Okay.\"}]},\"data.d77\":{\"id\":\"data.d77\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"D77.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return (((Q['key7'] || 0)===1) || ((Q['key11'] || 0)===1));\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('d77'); Q.correct_data_types.push('personal'); Q.d_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.d77_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"online_montage.cn16\":{\"id\":\"online_montage.cn16\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Trailer for Long Live the Guards III released.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"@NNN: Trailer for Long Live the Guards III released.\"}}},\"s_1.cook_2_enough\":{\"id\":\"s_1.cook_2_enough\",\"content\":{\"content\":\"It seems that you have enough to make a small vegetable and meat stir fry dish.\",\"type\":\"paragraph\"}},\"a_1.maybe_fine\":{\"id\":\"a_1.maybe_fine\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"k_1.idk_meeting_her\":{\"id\":\"k_1.idk_meeting_her\",\"content\":[{\"type\":\"paragraph\",\"content\":\"You don't know.\"},{\"type\":\"paragraph\",\"content\":\"Okay.\"}]},\"k_1\":{\"id\":\"k_1\",\"type\":\"scene\",\"title\":\"Call K-\",\"subtitle\":\"Beg for money.\",\"tags\":[\"minor\"],\"newPage\":true,\"viewIf\":{\"$code\":\"return (((Q['k_path'] || 0)===0) && ((((Q['day_minor'] || 0)===0) || ((Q['day_major'] || 0)===0))));\"},\"chooseIf\":{\"$code\":\"return ((Q['numb'] || 0)===1);\"},\"onArrival\":[{\"$code\":\"Q['day_major'] = (Q['day_major'] || 0) + 1;\"}],\"unavailableSubtitle\":\"You are too self-aware to make the phone call. You must numb yourself first.\",\"options\":[{\"id\":\"@k_1.past\",\"title\":\"You and K- were married once.\"},{\"id\":\"@k_1.call\",\"title\":\"Make the call.\"}],\"content\":{\"content\":\"You need money for rent. There are two people who have a nonzero probability of helping you out at this moment. K- is one of them.\",\"type\":\"paragraph\"}},\"data.d77_\":{\"id\":\"data.d77_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"BSRI DNA Diaries Project - #12\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"The DNA data storage team has been soliciting diary entries for their in vivo storage experiment. Well, here goes.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"I'm not exactly the kind of person who likes talking about myself. My name is Imani K, from Toronto. I am a computational scientist working on biosystems modeling, more specifically on microbial dynamics within communities. It is a fascinating subject, the one I wrote my PhD dissertation on. I wish I could attach that instead of a diary. It would most likely be more useful and interesting for you, whoever you are.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"I am supposed to write more about myself here. So: today I got up at 7AM and took the subway here. There. That's it. Thank you. Now where is my gift card.\"}}]},\"online_montage.cn17\":{\"id\":\"online_montage.cn17\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Heartwarming: students stand up to female-impersonator teacher promoting gender ideology.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Heartwarming: students stand up to female-impersonator teacher promoting gender ideology.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.cook_2_not_enough\":{\"id\":\"s_1.cook_2_not_enough\",\"content\":{\"content\":\"Unfortunately, you are out of ingredients.\",\"type\":\"paragraph\"}},\"a_1.dont_want\":{\"id\":\"a_1.dont_want\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.d19\":{\"id\":\"data.d19\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"D19.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return ((Q['key19'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('d19'); Q.correct_data_types.push('obscene'); Q.d_seen += 1;\"}],\"frequency\":200,\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.d19_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"online_montage.cn18\":{\"id\":\"online_montage.cn18\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Quarterly profits in ag-tech sector up despite greenhouse failures.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Quarterly profits in ag-tech sector up despite greenhouse failures.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.food_home\":{\"id\":\"s_1.food_home\",\"viewIf\":{\"$code\":\"return ((Q['food'] || 0) > 0);\"},\"goTo\":[{\"id\":\"s_1.food_home_1\",\"predicate\":{\"$code\":\"return ((Q['s1_knows_cook_rice'] || 0)===1);\"}},{\"id\":\"s_1.food_home_2\",\"predicate\":{\"$code\":\"return ((Q['s1_knows_cook_rice'] || 0)===0);\"}}],\"content\":{\"content\":\"\\\"We have food at home,\\\" you say, and S- is instantly disappointed.\",\"type\":\"paragraph\"}},\"a_1.doesnt_matter\":{\"id\":\"a_1.doesnt_matter\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.d19_\":{\"id\":\"data.d19_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"BSRI DNA Diaries Project - #22\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Hello, person/alien/robot/sentient being from the future. Thank you for reading my diary. I'm glad we can have this little moment of shared connection :)\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"(omg I just remembered they said to not use emoji :( oh well if they reject it then that means they've read it and they promised they wouldn't so joke's on them.)\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"My name is Divya P (she/they (wait omg they said future-person might not understand emoji but they would understand pronoun declarations??? lmao)) and I am a software developer at BSRI. I'm 29 years old, and I was born and raised in Toronto (Richmond Hill rather, but who's counting). I don't think I've been out of Ontario for more than a month my whole life. Wow. Sad.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Anyway, I would like to take this opportunity to talk about the love of my life. Stella, our names will be inscribed into the code that governs the future of life on Earth. May the record of our love propagate through countless generations, just like the eternity I feel when I kiss you every day. May our love conquer death <3\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Haha, was that too over-the-top? I'm not good at writing lol\"}}]},\"online_montage.cn19\":{\"id\":\"online_montage.cn19\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"New startup helps authorities identify suspected rioters using computer vision.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: New startup helps authorities identify suspected rioters using computer vision.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"s_1.cook_2\":{\"id\":\"s_1.cook_2\",\"goTo\":[{\"id\":\"s_1.cook_2_enough\",\"predicate\":{\"$code\":\"return ((Q['food'] || 0) >= 2);\"}},{\"id\":\"s_1.cook_2_not_enough\",\"predicate\":{\"$code\":\"return ((Q['food'] || 0) < 2);\"}}],\"content\":{\"content\":\"Do you have enough food?\",\"type\":\"paragraph\"}},\"s_1\":{\"id\":\"s_1\",\"type\":\"scene\",\"title\":\"S-\",\"newPage\":true,\"onArrival\":[{\"$code\":\"Q['has_s'] = 1;\"}],\"options\":[{\"id\":\"@s_1.no_idea\",\"title\":\"You have no idea what to do.\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"You are home again, and it is the first time someone besides yourself has visited in over a year. That time was inspection.\"},{\"type\":\"paragraph\",\"content\":\"S- paces your tiny apartment. it takes about 8 of his small steps to walk from one end to the other.\"},{\"type\":\"paragraph\",\"content\":\"He looks up at you, as if expecting something.\"}]},\"a_1.talk\":{\"id\":\"a_1.talk\",\"options\":[{\"id\":\"@a_1.job\",\"title\":\"\\\"I lost my job...\\\"\"},{\"id\":\"@a_1.homeless\",\"title\":\"\\\"I'm about to be homeless...\\\"\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"\\\"I missed you too...\\\"\"},{\"type\":\"paragraph\",\"content\":\"\\\"Yeah... But there has to be something else going on, right? Otherwise you wouldn't call?\\\"\"},{\"type\":\"paragraph\",\"content\":\"Unfortunately, he still knows you well.\"}]},\"a_1\":{\"id\":\"a_1\",\"type\":\"scene\",\"title\":\"Call A-\",\"subtitle\":\"Beg for money.\",\"tags\":[\"minor\"],\"viewIf\":{\"$code\":\"return (((Q['a_path'] || 0)===0) && ((((Q['day_major'] || 0)===0) || ((Q['day_minor'] || 0)===0))));\"},\"onArrival\":[{\"$code\":\"Q['day_minor'] = 1;\"}],\"chooseIf\":{\"$code\":\"return ((Q['numb'] || 0)===1);\"},\"newPage\":true,\"unavailableSubtitle\":\"You are too self-aware to make the phone call. You must numb yourself first.\",\"options\":[{\"id\":\"@a_1.a_11\",\"title\":\"A- is a doctor now.\"},{\"id\":\"@a_1.call\",\"title\":\"Call A-.\"}],\"content\":{\"content\":\"You need money for rent. There are two people who have a nonzero probability of helping you out at this moment. A- is one of them.\",\"type\":\"paragraph\"}},\"data.d31\":{\"id\":\"data.d31\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"D31.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return ((Q['key31'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('d31'); Q.correct_data_types.push('personal'); Q.d_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.d31_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"online_montage.cn20\":{\"id\":\"online_montage.cn20\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"New memoir criticized as \\\"glorifying moral turpitude\\\".\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: New memoir criticized as \\\"glorifying moral turpitude.\\\"\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"data.d31_\":{\"id\":\"data.d31_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"BSRI DNA Diaries Project - #2\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"My name is Gonzalo W (he/him) and I founded the DNA Diaries project here at the Basic Sciences Research Institue, or BSRI. The purpose of the project is multifold. First, it is to test our DNA synthesis methods, and to test our different encoding schemes, as well as both in vivo and in vitro storage methodologies and media.\"}}]},\"online_montage.cn21\":{\"id\":\"online_montage.cn21\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"Ntech CEO Leblanc accused of sexual harassment by assistant.\"},\"maxVisits\":1,\"countVisitsMax\":1,\"tags\":[\"montage\"],\"content\":{\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"@NNN: Ntech CEO Leblanc accused of sexual harassment by assistant.\"},\"\"]},{\"type\":\"quotation\",\"content\":[\"\",{\"type\":\"emphasis-3\",\"content\":[\"@\",{\"type\":\"insert\",\"insert\":0},\": fake news\"]}]}],\"stateDependencies\":[{\"type\":\"insert\",\"fn\":{\"$code\":\"return (Q['name_0'] || 0);\"}}]}},\"online_montage\":{\"id\":\"online_montage\",\"type\":\"scene\",\"title\":\"CityNet\",\"subtitle\":{\"content\":[\"An update on the present situation. \",{\"type\":\"conditional\",\"content\":\"CW: slurs\",\"predicate\":0}],\"stateDependencies\":[{\"type\":\"predicate\",\"fn\":{\"$code\":\"return ((Q['cw_enabled'] || 0)===1);\"}}]},\"maxChoices\":3,\"viewIf\":{\"$code\":\"return (((Q['montage_progress'] || 0)===0) && ((Q['day_minor'] || 0)===0));\"},\"onArrival\":[{\"$code\":\"Q['montage_progress'] = (Q['montage_progress'] || 0) + 1;\\nQ['numb'] = 1;\\nQ['day_minor'] = (Q['day_minor'] || 0) + 1;\"}],\"newPage\":true,\"tags\":[\"minor\"],\"options\":[{\"id\":\"@online_montage.cn1\"},{\"id\":\"@online_montage.cn3\"},{\"id\":\"@online_montage.cn5\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"CityNet is the beating heart of the city, the online agora where its citizens gather to discuss, debate, and disseminate their opinions or the news of the day. At least, that is theoretically the case.\"},{\"type\":\"paragraph\",\"content\":\"After the Cataclysm, all communications links outside the city were severed. With its monopoly on data transmission via wired infrastructure, CityNet is all that remains. All user identities are fixed to their \\\"real\\\" names or registered organizations.\"},{\"type\":\"paragraph\",\"content\":\"What are the headlines of the day?\"}]},\"data.d1001\":{\"id\":\"data.d1001\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"D1001.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return ((Q['key1001'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('d1001'); Q.correct_data_types.push('hoax'); Q.d_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.d1001_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.d1001_\":{\"id\":\"data.d1001_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"BSRI DNA Diaries Project - #1\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"My name is Jiaren Qi and I am the director of the Basic Sciences Research Institute. I was born in Shijiazhuang, China almost 50 years ago. I am a woman, and I have been for at least 20 years. I am married to Yingmei (Liana) Xu, also of BSRI.\"}}]},\"data.d2002\":{\"id\":\"data.d2002\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"D2002.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return ((Q['key1001'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"viewIf\":{\"$code\":\"return ((state.visits['data.d1001'] || 0) >= 1);\"},\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('d2002'); Q.correct_data_types.push('hoax'); Q.d_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.d2002_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.d2002_\":{\"id\":\"data.d2002_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Jiaren's diaries\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"I find the process of writing these diaries to be somewhat therapeutic. I have not been in the habit of introspection before, but...\"}}]},\"data.w606\":{\"id\":\"data.w606\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W606.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key101'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w606'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w606_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w606_\":{\"id\":\"data.w606_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Disterna\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":[\"Disterna is a genus of longhorn beetles of the subfamily Lamiinae,\",{\"type\":\"hidden\",\"content\":\"1\"},\" containing the following species: ...\"]},\"\"]},{\"type\":\"paragraph\",\"content\":\"Your eyes glaze over. The bulk of your work consists of articles such as these, endless lists and lists of minutia of interest only to select experts.\"},{\"type\":\"paragraph\",\"content\":\"These organisms are most likely extinct, you think. This might be the only record of them ever existing.\"}]},\"data.w29\":{\"id\":\"data.w29\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W29.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key29'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w29'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w29_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w29_\":{\"id\":\"data.w29_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/New_York_State_Route_347\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"New York State Route 347 (NY 347) is an east–west state highway located in Suffolk County, New York, in the United States. It connects the Northern State Parkway in Hauppauge to NY 25A in Mount Sinai. The route serves as a southern bypass of Smithtown and as a direct link between Nesconset and Port Jefferson...\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"You sometimes wish you could see the world in which the creators of these archives lived. From the snippets and fragments you've seen, it must have been a beautiful world. A better place than this one.\"}]},\"data.w121\":{\"id\":\"data.w121\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W121.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key121'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w121'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w121_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w121_\":{\"id\":\"data.w121_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Sidi_Lazreg\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Sidi Lazreg is a town and commune in Relizane Province, Algeria...\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Places long gone, places that might as well only exist in your imagination...\"}]},\"data.w31\":{\"id\":\"data.w31\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W31.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key31'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w31'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w31_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w31_\":{\"id\":\"data.w31_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Structural_alignment_software\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"This list of structural comparison and alignment software is a compilation of software tools and web portals used in pairwise or multiple structural comparison and structural alignment...\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Finally, useful scientific knowledge. Or is it? The article is a collection of dead links to code long since disappeared. There does not seem to be usable technical content herein.\"}]},\"data.w49\":{\"id\":\"data.w49\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W49.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key7'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w49'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w49_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w49_\":{\"id\":\"data.w49_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Marmong_Point,_New_South_Wales\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Marmong Point is a suburb of the City of Lake Macquarie in New South Wales, Australia north-north-east of the town of Toronto on the western shore of Lake Macquarie. Marmong is an Aboriginal word meaning low water or swampy water...\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Places that might as well be infinitely far away in time and space, brought to your computer by the archivists of old...\"}]},\"data.w169\":{\"id\":\"data.w169\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W169.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key13'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w169'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w169_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w169_\":{\"id\":\"data.w169_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/List_of_The_Best_Thing_I_Ever_Ate_episodes\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"The Best Thing I Ever Ate, an American television show, premiered on June 22, 2009, on Food Network in the United States. In 2017, the series transferred to Cooking Channel for one season of compilations from the previous six seasons, then with new episodes in its eighth season. As of 2021, eleven seasons have aired, for a total of 143 episodes. (This does not include the eight-episode special series All-Star Best Thing I Ever Ate that aired on Food Network in 2020.) The show features renowned chefs like Bobby Flay, Guy Fieri, and Ted Allen talking about their favorite dishes in specific categories...\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"So much detritus of the past. So many words that mean nothing to you now, but might have meant everything to the people who lived at this time. How would \\\"Bobby Flay\\\" feel about you reading this right now, his name written in DNA?\"}]},\"data.w13\":{\"id\":\"data.w13\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W13.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key13'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w13'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w13_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w13_\":{\"id\":\"data.w13_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Sir_James_Ritchie,_1st_Baronet\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Sir James Thomson Ritchie, 1st Baronet (21 September 1833 – 18 September 1912) was a Scottish businessman who was the 576th Lord Mayor of London. He was born in Angus, the second son of William Ritchie, a landed proprietor, of Rockhill House, Broughty Ferry, Forfarshire, head of the firm of William Ritchie & Son of London and Dundee, East India merchants, jute spinners, and manufacturers. His younger brother would be ennobled as Charles Ritchie, 1st Baron Ritchie of Dundee.\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"You wonder how \\\"Sir James Thomson Ritchie\\\" would feel about you reading his name right now. Could he imagine this world? DNA had not even been discovered in his time. Why did his name survive the ages when almost all others of his time did not?\"}]},\"data.w63\":{\"id\":\"data.w63\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W63.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key7'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w63'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w63_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w63_\":{\"id\":\"data.w63_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Leningrad_Cowboys_Go_Wild\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Leningrad Cowboys Go Wild is a 2000 compilation album by the Leningrad Cowboys released in Germany.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Track listing\"}},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"No. Title Writer(s) Length\"}},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"1. \\\"Born To Be Wild\\\" (from Leningrad Cowboys Go America, 1989) M. Bofire 3.30\"}},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"2. \\\"Gimme All Your Lovin'\\\" (from Happy Together, 1994) B. Gibbons/D. Hill/Frank Lee Beard 3.08\"}},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"... \"},\"\"]},{\"type\":\"paragraph\",\"content\":\"This article is a reference to a musical album that almost certainly does not exist anymore. You have no idea about the context of this album, or any hints as to the identities of the so-called \\\"Leningrad Cowboys\\\". They are most likely not affiliated with the historical city of Leningrad, nor the occupation of cowboy.\"}]},\"data.w46\":{\"id\":\"data.w46\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W46.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key23'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w46'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w46_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w46_\":{\"id\":\"data.w46_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/List_of_people_from_the_Halifax_Regional_Municipality\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"This is a list of people who were born in the communities making up the Halifax Regional Municipality, Nova Scotia or spent a significant part of their lives there.\"}}]},\"data.w58\":{\"id\":\"data.w58\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W58.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key29'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w58'); Q.correct_data_types.push('misc'); Q.w_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w58_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w58_\":{\"id\":\"data.w58_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Sint-Truiden\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":[\"Sint-Truiden (Dutch pronunciation: \",{\"type\":\"hidden\",\"content\":\"sɪnˈtrœydə(n)\"},\"; French: Saint-Trond \",{\"type\":\"hidden\",\"content\":\"sɛ̃ tʁɔ̃\"},\"; Limburgish: Sintruin \",{\"type\":\"hidden\",\"content\":\"sɪnˈtʀœyn\"},\") is a city and municipality located in the province of Limburg, Flemish Region, Belgium, near the towns of Hasselt and Tongeren. The municipality includes the former communes (now deelgemeenten) of Aalst, Brustem, Duras, Engelmanshoven, Gelinden, Gorsem, Groot-Gelmen, Halmaal, Kerkom-bij-Sint-Truiden, Melveren, Metsteren, Ordingen, Runkelen, Velm, Wilderen, and Zepperen.\"]}}]},\"data.w17\":{\"id\":\"data.w17\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"W17.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"wiki\"],\"chooseIf\":{\"$code\":\"return ((Q['key17'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('w17'); Q.correct_data_types.push('misc'); Q.w_seen += 1; Q.incense_seen = 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.w17_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.w17_\":{\"id\":\"data.w17_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"URL: https://en.wikipedia.org/wiki/Joss_paper\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Joss paper, also known as incense papers, are papercrafts or sheets of paper made into burnt offerings common in Chinese ancestral worship (such as the veneration of the deceased family members and relatives on holidays and special occasions). Worship of deities in Chinese folk religion also uses a similar type of joss paper. Joss paper, as well as other papier-mâché items, are also burned or buried in various Asian funerals, \\\"to ensure that the spirit of the deceased has sufficient needs in the afterlife.\\\"\"}}]},\"data.x1001\":{\"id\":\"data.x1001\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"X1001.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Wild. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"E. coli\"}]},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return ((Q['key1001'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('x1001'); Q.correct_data_types.push('personal'); Q.d_seen += 1; Q.key_1009 = 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.x1001_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.x1001_\":{\"id\":\"data.x1001_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"2XX3\"}},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Hello from the distant past. If you are reading this, it is likely that you are in New Niagara Arcology. Since technology apparently is still advanced enough to decode DNA, your society must be flourishing, or at least stable. Is it not?\"}},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Today, I've been talking with our architects regarding the structure of our new city. Your city. Hopefully the information contained herein will be helpful.\"}},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"I've attached a key for the next entry. Each of my diaries will have a key to the next entry, to prevent them from being read out of order.\"}},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"- Liana\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Attached is an image of an early blueprint for New Hamilton District. It matches existing urbanological knowledge.\"},{\"type\":\"paragraph\",\"content\":\"You attended an absolutionist school, so they taught you about the heroic founders of the city, two post humans who rescued the baselines from their deprivation.\"}]},\"data.x1009\":{\"id\":\"data.x1009\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"X1009.fastq.gz\"},\"tags\":[\"data\",\"diaries\"],\"chooseIf\":{\"$code\":\"return ((Q['key1001'] || 0)===1);\"},\"viewIf\":{\"$code\":\"return ((state.visits['data.x1001'] || 0) > 0);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('x1009'); Q.correct_data_types.push('hoax'); Q.d_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.x1009_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.x1009_\":{\"id\":\"data.x1009_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"What is there to know about me? My name is Liana Yingmei Xu. I was born in Shijiazhuang, Hebei Province, China. I emigrated to America to study biophysics and biochemistry, and I have worked in a variety of scientific positions. I am married to my wife, Jiaren Qi, also of Shijiazhuang, and we have two children.\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"Just like you, I am a woman who was assigned male at birth, as we say these days.\"},{\"type\":\"paragraph\",\"content\":\"I have one question for you: do we still exist?\"},{\"type\":\"paragraph\",\"content\":\"- Liana\"}]},\"data.x1013\":{\"id\":\"data.x1013\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.x1019\":{\"id\":\"data.x1019\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.x1021\":{\"id\":\"data.x1021\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.s101\":{\"id\":\"data.s101\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"S101.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key101'] || 0)===1);\"},\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('s101'); Q.correct_data_types.push('science'); Q.s_seen += 1; Q.key1001 = 1;\"}],\"frequency\":200,\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.s101_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.s101_\":{\"id\":\"data.s101_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"DOI: 10.1038/s41589-020-00711-4\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Robust direct digital-to-biological data storage in living cells\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":[\"Abstract: DNA has been the predominant information storage medium for biology and holds great promise as a next-generation high-density data medium in the digital era. Currently, the vast majority of DNA-based data storage approaches rely on in vitro DNA synthesis. As such, there are limited methods to encode digital data into the chromosomes of living cells in a single step. Here, we describe a new electrogenetic framework for direct storage of digital data in living cells. \",{\"type\":\"hidden\",\"content\":\"...\"},\" We demonstrate multiplex data encoding into barcoded cell populations to yield meaningful information storage and capacity up to 72 bits, which can be maintained over many generations in natural open environments...\"]},\"\"]},{\"type\":\"paragraph\",\"content\":\"You have learned how to implement the decoding method described in this paper. This allows you to view datasets created using this system.\"}]},\"data.s202\":{\"id\":\"data.s202\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"S202.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vitro\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key101'] || 0)===1);\"},\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('s202'); Q.correct_data_types.push('science'); Q.s_seen += 1; Q.key1009 = 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.s202_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.s202_\":{\"id\":\"data.s202_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"DOI: 10.1038/nature23017\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"CRISPR–Cas encoding of a digital movie into the genomes of a population of living bacteria\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Abstract: DNA is an excellent medium for archiving data. Recent efforts have illustrated the potential for information storage in DNA using synthesized oligonucleotides assembled in vitro. A relatively unexplored avenue of information storage in DNA is the ability to write information into the genome of a living cell by the addition of nucleotides over time. Using the Cas1–Cas2 integrase, the CRISPR–Cas microbial immune system stores the nucleotide content of invading viruses to confer adaptive immunity. When harnessed, this system has the potential to write arbitrary information into the genome. Here we use the CRISPR–Cas system to encode the pixel values of black and white images and a short movie into the genomes of a population of living bacteria...\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"You have learned how to implement the decoding method described in this paper. This allows you to view datasets created using this system.\"}]},\"data.f101\":{\"id\":\"data.f101\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"F101.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Archives. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"in vivo\"},\" - E. coli colony\"]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key101'] || 0)===1);\"},\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('f101'); Q.correct_data_types.push('document'); Q.f_seen += 1;\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.f101_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.f101_\":{\"id\":\"data.f101_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"Most common causes of death, 99 AT\"},{\"type\":\"paragraph\",\"content\":\"1. Entity attacks\"},{\"type\":\"paragraph\",\"content\":\"2. Nanoplagues\"},{\"type\":\"paragraph\",\"content\":\"3. Gunshot wounds\"},{\"type\":\"paragraph\",\"content\":\"4. Cancer\"},{\"type\":\"paragraph\",\"content\":\"5. Accidents\"},{\"type\":\"paragraph\",\"content\":\"6. Heart disease\"},{\"type\":\"paragraph\",\"content\":\"7. Other infectious diseases\"},{\"type\":\"paragraph\",\"content\":\"8. Unknown\"},{\"type\":\"paragraph\",\"content\":\"9. Suicide\"},{\"type\":\"paragraph\",\"content\":\"10. Kidney disease\"},{\"type\":\"paragraph\",\"content\":\"Source: Census\"},{\"type\":\"paragraph\",\"content\":\"TODO\"},{\"type\":\"paragraph\",\"content\":\"This would be the first century.\"}]},\"data.rev_1\":{\"id\":\"data.rev_1\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":\"TODO: overview of the uprising/revolution documents\"},{\"type\":\"paragraph\",\"content\":\"DNA storage is a technology that has come and gone in waves over the centuries. The latest wave has been the revolutionaries.\"},{\"type\":\"paragraph\",\"content\":\"You gave them the technology.\"}]},\"data.r1001\":{\"id\":\"data.r1001\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"R1001.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Wild. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"E. coli\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key1001'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('r1001'); Q.correct_data_types.push('special');\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.r1001_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.r1001_\":{\"id\":\"data.r1001_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Let it be known first of all that I opposed launching the revolution. We had no allies - how could we when the Ruling Party and every media organ in the city has been propagandizing about how we were sexual degenerates for the past ten years? Ten thousand angry laverneans did not constitute a mass movement. We had few arms, no training after being excluded from the security services, few financial resources, nearly no allies.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"But here we are now. And we must fight or die.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"- Rosa Camacho, Bread and Roses Brigade\"}}]},\"data.r2002\":{\"id\":\"data.r2002\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"R2002.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Wild. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"E. coli\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key1001'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('r2002'); Q.correct_data_types.push('special');\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.r2002_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.r2002_\":{\"id\":\"data.r2002_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"It is increasingly clear that we are sacrificial pawns in a proxy war. When we seized arms, there was a tacit understanding with some of the security forces that they would not stop us; they virtually handed their weapons to us. The Guards have many enemies, and there are anti-coup factions in the Defense Forces and even the gendarmerie. However, they are not willing to risk their own position in a civil war.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"It is also clear that the some in the security forces see our uprising as a way to simultaneously weaken two enemies, both the radical Opposition and the reactionaries.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"But what choice do we have? We either accept the aid of all who offer it, or we perish. Regardless, we have been doing quite a bit of that lately.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"- Rosa Camacho, Bread and Roses Brigade\"}}]},\"data.r3003\":{\"id\":\"data.r3003\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"R3003.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Wild. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"E. coli\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key1001'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('r3003'); Q.correct_data_types.push('special');\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.r3003_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.r3003_\":{\"id\":\"data.r3003_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"A recounting of a conversation:\"},\"\"]},{\"type\":\"paragraph\",\"content\":\"TODO\"},{\"type\":\"paragraph\",\"content\":\"\"},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"Rosa Camacho, Bread and Roses Brigade\"}}]},\"data.r1009\":{\"id\":\"data.r1009\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"R1009.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Wild. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"E. coli\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key1009'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('r1009'); Q.correct_data_types.push('special');\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.r1009_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.r1009_\":{\"id\":\"data.r1009_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Love is the most powerful weapon in the revolutionist's arsenal.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"- Esme Franklin, Indigo Regiment\"}}]},\"data.r2018\":{\"id\":\"data.r2018\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"R2018.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Wild. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"E. coli\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key1009'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('r2018'); Q.correct_data_types.push('special');\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.r2018_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.r2018_\":{\"id\":\"data.r2018_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"More of us are dying everyday.\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"I used to have no fear of death, because I had nothing to live for.\"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"- Esme Franklin, Indigo Regiment\"}}]},\"data.r1013\":{\"id\":\"data.r1013\",\"title\":{\"type\":\"emphasis-3\",\"content\":\"R1013.fastq.gz\"},\"subtitle\":{\"type\":\"emphasis-3\",\"content\":[\"Source: Wild. Medium: \",{\"type\":\"emphasis-1\",\"content\":\"E. coli\"}]},\"tags\":[\"data\",\"science\"],\"chooseIf\":{\"$code\":\"return ((Q['key1013'] || 0)===1);\"},\"unavailableSubtitle\":\"You don't know how to decode this file.\",\"maxVisits\":1,\"countVisitsMax\":1,\"onArrival\":[{\"$code\":\"Q.prev_data.push('r1013'); Q.correct_data_types.push('special');\"}],\"goTo\":[{\"id\":\"data.decode\"}],\"setJump\":\"data.r1013_\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.r1013_\":{\"id\":\"data.r1013_\",\"goTo\":[{\"id\":\"data.todo\"}],\"content\":[{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"A recounting of a conversation:\"},\"\"]},{\"type\":\"paragraph\",\"content\":[{\"type\":\"emphasis-3\",\"content\":\"Lyra: \"},\"\"]},{\"type\":\"paragraph\",\"content\":{\"type\":\"emphasis-3\",\"content\":\"- Altair Leblanc, Popular Front Army\"}}]},\"data.post_data_2\":{\"id\":\"data.post_data_2\",\"goTo\":[{\"id\":\"data.end_data\"},{\"id\":\"data.pre_view_display\"}],\"onArrival\":[{\"$code\":\"if (Q.day_data_seen > 2 && Math.random() > 0.5) {\\n    Q.stress += 1;\\n}\"}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data.archivist_check\":{\"id\":\"data.archivist_check\",\"onArrival\":[{\"$code\":\"Q.check_data_text = ' ';\\nQ.payment = 0;\\nQ.datasets_checked = 0;\\n// 1. do the first data\\nvar i = 0;\\nwhile (i < Q.chosen_data_types.length) {\\n    // randomly do one out of 50...\\n    if (i > 0) {\\n        if (Math.random() > 0.5) {\\n            break;\\n        }\\n    }\\n    Q.datasets_checked += 1;\\n    var data = Q.prev_data.shift();\\n    var chosen_t = Q.chosen_data_types.shift();\\n    var correct_t = Q.correct_data_types.shift();\\n    Q.check_data_text += '\\\\n<p>' + data + ': ';\\n    if (chosen_t == correct_t) {\\n        Q.check_data_text += 'Your assignment of this dataset as \\\"' + chosen_t + '\\\" was correct. You have been paid $' + Q.type_payments[chosen_t] + '</p>';\\n        Q.payment += Q.type_payments[chosen_t];\\n    } else {\\n        if (correct_t == 'obscene') {\\n            Q.check_data_text += 'The dataset has been deemed contrary to public interests, and thus will not be archived. Nevertheless, you have been paid $20.</p>';\\n            Q.payment += 20;\\n        } else if (correct_t == 'hoax') {\\n            Q.check_data_text += 'Based on our evidence, this dataset has been deemed as a HOAX, and will not be archived.'\\n            Q.check_data_test += ' Nevertheless, you have been paid $10.</p>';\\n        } else {\\n            Q.check_data_text += 'Your assignment of this dataset as \\\"' + chosen_t + '\\\" was incorrect. The correct type is \\\"' + correct_t + '\\\". You have been paid $30.</p>.';\\n            Q.payment += 30;\\n        }\\n    }\\n    Q.check_data_text += '\\\\n\\\\n';\\n    i += 1;\\n}\\nQ.money += Q.payment;\"}],\"goTo\":[{\"id\":\"data.view_display\",\"predicate\":{\"$code\":\"return ((Q['datasets_checked'] || 0)===0);\"}},{\"id\":\"data.check_data_0\",\"predicate\":{\"$code\":\"return ((Q['datasets_checked'] || 0) > 0);\"}}],\"content\":{\"content\":\"\",\"type\":\"paragraph\"}},\"data\":{\"id\":\"data\",\"type\":\"scene\",\"title\":\"Data\",\"content\":{\"content\":\"\",\"type\":\"paragraph\"}}},\"qualities\":{},\"qdisplays\":{},\"tagLookup\":{\"major\":{\"data.view_0\":true,\"data.view\":true,\"anxiety\":true,\"mutual_aid\":true,\"entertainment\":true,\"ritual\":true,\"k_2\":true,\"a_2\":true},\"minor\":{\"online_montage.cn\":true,\"k_1\":true,\"a_1\":true,\"online_montage\":true},\"montage\":{\"online_montage.cn1\":true,\"online_montage.cn2\":true,\"online_montage.cn3\":true,\"online_montage.cn4\":true,\"online_montage.cn5\":true,\"online_montage.cn6\":true,\"online_montage.cn7\":true,\"online_montage.cn8\":true,\"online_montage.cn9\":true,\"online_montage.cn10\":true,\"online_montage.cn11\":true,\"online_montage.cn12\":true,\"online_montage.cn13\":true,\"online_montage.cn14\":true,\"online_montage.cn15\":true,\"online_montage.cn16\":true,\"online_montage.cn17\":true,\"online_montage.cn18\":true,\"online_montage.cn19\":true,\"online_montage.cn20\":true,\"online_montage.cn21\":true},\"takeout\":{\"food.takeout_do_1\":true,\"food.takeout_do_2\":true},\"trolley\":{\"food.trolley_1\":true},\"pharmacy\":{\"medicine.pharmacy_1\":true,\"medicine.pharmacy_2\":true},\"cooking\":{\"food.cook_2_1\":true,\"food.cook_2_2\":true},\"top\":{\"one\":true},\"data\":{\"data.d606\":true,\"data.d77\":true,\"data.d19\":true,\"data.d31\":true,\"data.d1001\":true,\"data.d2002\":true,\"data.w606\":true,\"data.w29\":true,\"data.w121\":true,\"data.w31\":true,\"data.w49\":true,\"data.w169\":true,\"data.w13\":true,\"data.w63\":true,\"data.w46\":true,\"data.w58\":true,\"data.w17\":true,\"data.x1001\":true,\"data.x1009\":true,\"data.s101\":true,\"data.s202\":true,\"data.f101\":true,\"data.r1001\":true,\"data.r2002\":true,\"data.r3003\":true,\"data.r1009\":true,\"data.r2018\":true,\"data.r1013\":true},\"diaries\":{\"data.d606\":true,\"data.d77\":true,\"data.d19\":true,\"data.d31\":true,\"data.d1001\":true,\"data.d2002\":true,\"data.x1001\":true,\"data.x1009\":true},\"wiki\":{\"data.w606\":true,\"data.w29\":true,\"data.w121\":true,\"data.w31\":true,\"data.w49\":true,\"data.w169\":true,\"data.w13\":true,\"data.w63\":true,\"data.w46\":true,\"data.w58\":true,\"data.w17\":true},\"science\":{\"data.s101\":true,\"data.s202\":true,\"data.f101\":true,\"data.r1001\":true,\"data.r2002\":true,\"data.r3003\":true,\"data.r1009\":true,\"data.r2018\":true,\"data.r1013\":true}}}"};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  // To avoid the need to include any utility libraries when this is
  // used in a browser, define some helper functions we'd normally
  // rely on libraries for.

  var assert = function(mustBeTrue) {
    /* istanbul ignore if */
    if (!mustBeTrue) {
      throw new Error('Assertion failed.');
    }
  };

  var each = function(array, fn) {
    for (var i = 0; i < array.length; ++i) {
      fn(array[i]);
    }
  };

  var objEach = function(obj, fn) {
    for (var key in obj) {
      fn(key, obj[key]);
    }
  };

  var merge = function() {
    var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var obj = arguments[i];
      for (var key in obj) {
        result[key] = obj[key];
      }
    }
    return result;
  };

  // Credit: Taken from Lodash (MIT License). See CREDITS.
  var isObject = function(value) {
    var type = typeof value;
    return type === 'function' || (value && type === 'object') || false;
  };

  var makeFunctionFromSource = function(source) {
    source = source.trim();
    /*jshint -W054 */
    var fn = new Function('state', 'Q', source);
    /*jshint +W054 */
    fn.source = source;
    return fn;
  };

  var runActions = function(actions, context, state) {
    if (actions === undefined) {
      return;
    }
    each(actions, function(fn) {
      try {
        fn.call(context, state, state.qualities);
      } catch (err) {
        // Ignore errors. TODO: Log them somehow?
      }
    });
  };

  var runPredicate = function(predicate, default_, context, state) {
    var result = default_;
    if (predicate === undefined) {
      return result;
    }
    try {
      result = !!predicate.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
    }
    return result;
  };

  var runExpression = function(expression, default_, context, state) {
    var result = default_;
    if (expression === undefined) {
      return result;
    }
    try {
      result = expression.call(context, state, state.qualities);
    } catch (err) {
      // Ignore errors. TODO: Log them somehow?
    }
    return result;
  };

  var convertJSONToGame = function(json, callback) {
    var reviver = function(key, value) {
      if (isObject(value) && value.$code !== undefined) {
        return makeFunctionFromSource(value.$code);
      } else {
        return value;
      }
    };

    try {
      var game = JSON.parse(json, reviver);
      return callback(null, game);
    } catch (err) {
      return callback(err);
    }
  };

  var simpleContent = function(text) {
    return [{type:'paragraph', content:text}];
  };

  var getCardinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0 && value <= 12) {
      // Integer, so use word.
      return ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
              'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'][value];
    } else {
      return value.toString();
    }
  };

  var getOrdinalNumber = function(value) {
    if (Math.floor(value) === value && value >= 0) {
      if (value <= 12) {
        return ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth',
                'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh',
                'twelfth'][value];
      } else {
        value = value.toString();
        if (/1[0-9]$/.test(value)) {
          return value + 'th';
        } else {
          var last = value.substr(value.length - 1, 1);
          switch (last) {
            case '1': return value + 'st';
            case '2': return value + 'nd';
            case '3': return value + 'rd';
            default: return value + 'th';
          }
        }
      }
    } else {
      return value.toString();
    }
  };

  var getFudgeDisplay = function(value) {
    if (Math.floor(value) === value) {
      if (value > 3) {
        return 'superb+' + (value - 3);
      } else if (value < -3) {
        return 'terrible' + (value + 3);
      } else {
        switch (value) {
          case  3: return 'superb';
          case  2: return 'great';
          case  1: return 'good';
          case  0: return 'fair';
          case -1: return 'mediocre';
          case -2: return 'poor';
          case -3: return 'terrible';
        }
      }
    } else {
      return value.toString();
    }
  };

  var getUserQDisplay = function(value, qdisplay) {
    for (var i = 0; i < qdisplay.content.length; ++i) {
      var case_ = qdisplay.content[i];
      var min = case_.min;
      var max = case_.max;
      if ((min === undefined || min <= value) &&
          (max === undefined || max >= value)) {
        if (case_.output !== undefined) {
          return case_.output;
        } else {
          return value.toString();
        }
      }
    }
    return value.toString();
  };

  // ------------------------------------------------------------------------

  // Objects with this interface are passed to a game state to have it
  // display content.
  var UserInterface = function() {};
  UserInterface.prototype.beginGame = function() {};
  UserInterface.prototype.displayContent = function(paragraphs) {};
  UserInterface.prototype.displayChoices = function(choices) {};
  UserInterface.prototype.displayGameOver = function() {
    this.displayContent(simpleContent('Game Over'));
  };
  UserInterface.prototype.removeChoices = function() {};
  // Called when the player makes a choice and new content is about to be
  // added (i.e. isn't called between output when the next scene is arrived
  // at via go-to).
  UserInterface.prototype.beginOutput = function() {};
  UserInterface.prototype.endOutput = function() {};
  UserInterface.prototype.newPage = function() {};
  UserInterface.prototype.setStyle = function(style) {};
  UserInterface.prototype.signal = function(data) {};
  UserInterface.prototype.setBg = function(img) {};
  // Not part of the UI, but allows us to simply subclass.
  UserInterface.makeParentOf = function(OtherConstructor) {
    OtherConstructor.prototype = new UserInterface();
    OtherConstructor.constructor = OtherConstructor;
  };

  // ------------------------------------------------------------------------

  // An engine is given a user interface, the game and the current
  // game state (can be omitted). It is responsible for the logic of
  // the game.
  var DendryEngine = function(ui, game) {
    this.ui = ui;
    this.game = game;
  };

  DendryEngine.prototype.displayGameOver = function() {
    this.ui.displayGameOver();
    return this;
  };

  DendryEngine.prototype.displayChoices = function() {
    var choices = this.getCurrentChoices();
    assert(choices);
    this.ui.displayChoices(choices);

    return this;
  };

  DendryEngine.prototype.displaySceneContent = function(restorePage) {
    var scene = this.getCurrentScene();
    assert(scene);

    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      this.ui.signal({signal:sceneSignal,
                      event:'scene-display',
                      id:this.state.sceneId});
    }
    if (restorePage) {
      this.ui.newPage();
      this.ui.displayContent(this.state.tempCurrentContent);
      this.state.currentContent = this.state.tempCurrentContent.slice();
    } else if (scene.newPage) {
      this.ui.newPage();
      this.state.currentContent = [];
    }
    this.ui.setStyle(scene.style);
    this.ui.removeChoices();

    this._runActions(scene.onDisplay);
    if (scene.content !== undefined && !restorePage) {
      var displayContent = this._makeDisplayContent(scene.content, true);
      this.state.currentContent = this.state.currentContent.concat(displayContent);
      this.ui.displayContent(displayContent);
    }

    return this;
  };

  DendryEngine.prototype.choose = function(choiceIndex) {
    var choices = this.choiceCache;

    // Check for valid choice.
    assert(choices);
    if (choices.length <= choiceIndex) {
      throw new Error('No choice at index ' + choiceIndex + ', only ' +
                      choices.length + ' choices are available.');
    }

    // Commit the choice.
    var choice = choices[choiceIndex];
    if (!choice.canChoose) {
      throw new Error('Attempted to choose index ' + choiceIndex + ', but ' +
                      'that choice is unavailable.');
    }

    var id = choice.id;

    delete this.choiceCache;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype.goToScene = function(id) {
    this.state.sceneIdsSinceGoTo = [];
    this.ui.beginOutput();
    this.__changeScene(id);
    this.ui.endOutput();
  };

  DendryEngine.prototype.beginGame = function(rndSeeds) {
    this.random = rndSeeds ? Random.fromSeeds(rndSeeds) : Random.fromUnique();
    this.state = {
      sceneId: null,
      sceneIdsSinceGoTo: [],
      rootSceneId: this.game.rootScene || this.game.firstScene || 'root',
      gameOver: false,
      visits: {},
      qualities: {},
      currentRandomState: null,
      currentContent: [],
      // tempCurrentContent is used for when the
      // player visits the stats or settings pages in order to remember
      // where the previous page was?
      tempCurrentContent: [],
      // prevSpecialSceneId is only set when visiting scene tagged with
      // isSpecial = true, and is the scene before the special scene.
      prevSpecialSceneId: null,
      prevSceneId: null,
      // every time a top-level scene changes,
      // this record the last-visited qualified id within that scene.
      prevTopSceneId: null,
      // jumpScene is defined within a scene file, indicating the scene that
      // @jumpScene will go to. Basically it's used to make subroutines.
      jumpSceneId: null,
      // achievements is a dict of all the current achievements.
      // TODO: persist achievements in the browser through localstorage?
      achievements: {},
      // current background image
      bg: null,
      // sceneStack is used for goSub
      sceneStack: [],
      // true if just popped out of a returnScene
      justReturned: false,
      // just returned from a goSubStart
      justReturnedStart: false,
      // just returned from a goSubEnd
      justReturnedEnd: false,
    };

    this._setUpQualities();
    this._loadAchievements();

    this.ui.beginGame();

    var id = this.game.firstScene || this.state.rootSceneId;
    this.goToScene(id);

    return this;
  };

  DendryEngine.prototype._loadAchievements = function() {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_achievements']) {
            this.state.achievements = JSON.parse(
                localStorage[this.game.title + '_achievements']);
            // add a special quality named 'achievement_'
            for (var achievement in this.state.achievements) {
                this.state.qualities['achievement_' + achievement] = 1;
            }
        }
    }
  };

  DendryEngine.prototype.gameOver = function() {
    this.state.gameOver = true;
    this.displayGameOver();
    return this;
  };

  DendryEngine.prototype.isGameOver = function() {
    return this.state.gameOver;
  };

  DendryEngine.prototype.getCurrentScene = function() {
    var scene = this.game.scenes[this.state.sceneId];
    assert(scene !== undefined);
    return scene;
  };

  // Returns the choices for the current scene. Choices are objects
  // with an id and a title property, not to be confused with the
  // option objects in a scene (though options are used to generate
  // choices). Choices are compiled from the options belonging to the
  // current scene.
  DendryEngine.prototype.getCurrentChoices = function() {
    return this.choiceCache;
  };

  // Sets the current state of the engine from an exportable state.
  DendryEngine.prototype.setState = function(state) {
    // Set the state.
    this.state = state;
    this._setUpQualities();
    this.random = Random.fromState(this.state.currentRandomState);

    // Display the current state.
    if (this.isGameOver()) {
      this.displayGameOver();
    } else {
      var scene = this.getCurrentScene();
      this.choiceCache = this._compileChoices(scene);
      this.ui.newPage();
      this.ui.removeChoices();
      this.ui.displayContent(this.state.currentContent);
      this.displayChoices();
    }
    return this;
  };

  // Returns a data structure for exporting without any accessors or
  // complex classes.
  DendryEngine.prototype.getExportableState = function() {
    // Because we only have complex state in the qualities (they have
    // accessors), and because we save with JSON (which calls
    // accessors correctly), we don't have to worry about giving the
    // actual state. Note that, if you want to keep this object, however,
    // you want to clone it somehow (turning it to and from json,
    // for example), otherwise it will change as the engine updates.
    return this.state;
  };

  // ------------------------------------------------------------------------

  DendryEngine.prototype._getQDisplay = function(value, qDisplayId) {
    switch (qDisplayId) {
    case 'cardinal': case 'number':
      return getCardinalNumber(value);
    case 'ordinal':
      return getOrdinalNumber(value);
    case 'fudge':
      return getFudgeDisplay(value);
    default:
      var qdisplay = this.game.qdisplays[qDisplayId];
      assert(qdisplay !== undefined);
      return getUserQDisplay(value, qdisplay);
    }
  };

  DendryEngine.prototype._evaluateStateDependencies = function(defs) {
    var result = [];

    for (var i = 0; i < defs.length; ++i) {
      var value;
      var def = defs[i];
      var fn = def.fn;
      switch (def.type) {
      case 'insert':
        value = this._runExpression(fn);
        if (def.qdisplay) {
          value = this._getQDisplay(value, def.qdisplay);
        } else {
          value = value.toString();
        }
        break;

      default:
        assert(def.type === 'predicate');
        value = this._runPredicate(fn);
        break;
      }

      // Recurse the resolution into the resulting value, if needed.
      if (value.stateDependencies !== undefined) {
        // We have to resolve the nested state dependencies.
        value = this._makeDisplayContent(value, false);
      }
      result.push(value);
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvalsInArray = function(array, evals) {
    if (!Array.isArray(array)) {
      array = [array];
    }
    var result = [];
    for (var i = 0; i < array.length; ++i) {
      result = result.concat(this._mergeStateEvals(array[i], evals));
    }
    return result;
  };

  DendryEngine.prototype._mergeStateEvals = function(content, evals) {
    if (content.type === undefined) {
      return [content];
    }

    var result;
    switch (content.type) {
    case 'conditional':
      if (evals[content.predicate]) {
        result = this._mergeStateEvalsInArray(content.content, evals);
      } else {
        result = [];
      }
      break;
    case 'insert':
      result = evals[content.insert];
      break;
    default:
      var newE = {type:content.type};
      newE.content = this._mergeStateEvalsInArray(content.content, evals);
      result = [newE];
      break;
    }
    return result;
  };

  DendryEngine.prototype._makeDisplayContent = function(content, useParas) {
    // Raw content can just be returned.
    if (content.content === undefined) {
      if (Array.isArray(content)) {
        return content;
      } else if (useParas) {
        return [{type:'paragraph', content:content}];
      } else {
        return [content];
      }
    } else if (content.stateDependencies === undefined &&
               content.type !== undefined) {
      return [content];
    }

    // Merge in dependencies if we have them
    var stateDepDefs = content.stateDependencies;
    var displayContent = content.content;
    if (stateDepDefs && stateDepDefs.length > 0) {
      var evals = this._evaluateStateDependencies(stateDepDefs);
      if (!Array.isArray(displayContent)) {
        displayContent = [displayContent];
      }
      displayContent = this._mergeStateEvalsInArray(
        displayContent, evals
      );
    }
    return displayContent;
  };

  DendryEngine.prototype._setUpQualities = function() {
    var _Q = this._qualitiesAccessorsPrivate = {};
    var Q = this.state.qualities;
    var that = this;
    objEach(this.game.qualities, function(id, quality) {
      var min = quality.min;
      var max = quality.max;
      var signal = quality.signal || that.game.qualitySignal;
      var predicate = quality.isValid;
      var needsAccessors = (
        min !== undefined ||
        max !== undefined ||
        signal !== undefined ||
        predicate !== undefined
      );
      if (needsAccessors) {
        if (Q[id] !== undefined) {
          _Q[id] = Q[id];
        }
        Q.__defineGetter__(id, function() {
          return _Q[id];
        });
        Q.__defineSetter__(id, function(value) {
          if (min !== undefined && value < min) {
            value = min;
          }
          if (max !== undefined && value > max) {
            value = max;
          }
          var was = _Q[id];
          _Q[id] = value;

          // Check if the new value is not allowed.
          if (!that._runPredicate(predicate, true)) {
            // Reverse the change.
            _Q[id] = value = was;
          }

          // Signal after the change is made.
          if (signal !== undefined && value !== was) {
            var signalObj = {
              signal: signal,
              event: 'quality-change',
              id: id,
              now: value
            };
            if (was !== undefined) {
              signalObj.was = was;
            }
            that.ui.signal(signalObj);
          }
        });
      }
      if (quality.initial !== undefined && Q[id] === undefined) {
        Q[id] = quality.initial;
      }
    });
  };

  DendryEngine.prototype._runActions = function(actions) {
    runActions(actions, this, this.state);
  };

  DendryEngine.prototype._runPredicate = function(predicate, default_) {
    return runPredicate(predicate, default_, this, this.state);
  };

  DendryEngine.prototype._runExpression = function(expression, default_) {
    return runExpression(expression, default_, this, this.state);
  };

  DendryEngine.prototype.__changeScene = function(id) {
    if (this.state.justReturned) {
        this.state.justReturned = false;
    }
    var scene = null;
    var restorePage = false;
    // if id is 'prevScene', go to the previous scene.
    if (id == 'prevScene') {
      if (this.prevSceneId === null) {
        // TODO: prevScene should only be allowed when prevSceneId is not null.
        // this really only comes up on the very first scene of the game.
      }
      scene = this.game.scenes[this.state.prevSceneId];
      id = this.state.prevSceneId;
      assert(scene);
    } else if (id == 'prevTopScene') {
      scene = this.game.scenes[this.state.prevTopSceneId];
      id = this.state.prevTopSceneId;
      assert(scene);
    } else if (id == 'jumpScene') {
      scene = this.game.scenes[this.state.jumpSceneId];
      id = this.state.jumpSceneId;
      assert(scene);
    } else if (id === 'backSpecialScene') {
      scene = this.game.scenes[this.state.prevSpecialSceneId];
      id = this.state.prevSpecialSceneId;
      restorePage = true;
      assert(scene);
      // if prevSpecialSceneId is null, this indicates that
      // we're not within a specialScene, and we can set a jump point.
      this.state.prevSpecialSceneId = null;
    } else if (id == 'returnScene') {
        // TODO: on returnScene, don't display the scene text.
        // only display the choices.
        var prevSceneID = this.state.sceneStack.pop();
        assert(prevSceneID);
        scene = this.game.scenes[prevSceneId];
        this.state.justReturned = true;
    } else {
      scene = this.game.scenes[id];
      assert(scene);
    }


    // Leave previous scene.
    var fromId = this.state.sceneId;
    if (!!fromId) {
      this.state.prevSceneId = fromId;
      // TODO: this doesn't necessarily work... there should be
      // a different classification of top scenes
      if (scene.isTop) {
        this.state.prevTopSceneId = fromId;
      }
      if (scene.isSpecial && this.state.prevSpecialSceneId === null) {
        this.state.tempCurrentContent = this.state.currentContent.slice();
        this.state.prevSpecialSceneId = fromId;
      }
      var from = this.getCurrentScene();
      this._runActions(from.onDeparture);
      var fromSignal = from.signal || this.game.sceneSignal;
      if (fromSignal !== undefined) {
        this.ui.signal({signal:fromSignal,
                        event:'scene-departure',
                        id:this.state.sceneId,
                        'to':id});
      }
    }

    // Arrive at current scene.
    this.state.sceneId = id;
    this.state.sceneIdsSinceGoTo.push(id);

    if (scene.setRoot) {
      this.state.rootSceneId = id;
    }
    if (scene.setJump) {
      this.state.jumpSceneId = scene.setJump;
    }

    if (scene.countVisitsMax !== undefined) {
      if (this.state.visits[id] === undefined) {
        this.state.visits[id] = 1;
      } else if (this.state.visits[id] < scene.countVisitsMax) {
        this.state.visits[id]++;
      }
    }

    if (!restorePage && !this.state.justReturned) {
        // If we go back from a special scene (e.g. the stats page),
        // we probably don't want to run the scene actions again.
        this._runActions(scene.onArrival);
    }
    var sceneSignal = scene.signal || this.game.sceneSignal;
    if (sceneSignal !== undefined) {
      var signal = {
        signal: sceneSignal,
        event: 'scene-arrival',
        id: id
      };
      if (!!fromId) {
        signal.from = fromId;
      }
      this.ui.signal(signal);
    }

    // We're done with any code that might generate random numbers
    // (except go-to, which will recurse into this method anyway), so we
    // can store the seed which can be used to replay the behavior
    // from here.
    this.state.currentRandomState = this.random.getState();
    //if (!this.state.justReturned) {
        // if the state has just returned from a goSub, we don't display
        // the content?
        // TODO: i'm not sure what the best logic for this is...
        // Maybe the text pre-gosub should be displayed only after the goSub?
    this.displaySceneContent(restorePage);
    //}
    // display background
    if (scene.setBg) {
        this.state.bg = scene.setBg;
        this.ui.setBg(scene.setBg);
    }
    // update achievement
    if (scene.achievement) {
        this.state.achievements[scene.achievement] = 1;
        // add a special quality named 'achievement_'
        this.state.qualities['achievement_' + scene.achievement] = 1;
        // set localStorage for achievement
        if (typeof localStorage !== 'undefined') {
            localStorage[this.game.title + '_achievements'] = JSON.stringify(this.state.achievements);
        }
    }

    // Check if we have any reason to leave the scene, or end the game.
    var done = false;
    if (scene.gameOver === true) {
      done = true;
      this.gameOver();
    } else if (scene.goSubEnd && !this.state.justReturnedEnd) {
      // goSub
      var validSubs = [];
      for (var s1 = 0; s1 < scene.goSub.length; ++s1) {
        var sub = scene.goSub[s1];
        if (sub.predicate === undefined ||
            this._runPredicate(sub.predicate)) {
          validSubs.push(sub.id);
        }
      }
    } else if (scene.goTo) {
      // Find all valid gotos.
      var validGoToIds = [];
      for (var i = 0; i < scene.goTo.length; ++i) {
        var goTo = scene.goTo[i];
        if (goTo.predicate === undefined ||
            this._runPredicate(goTo.predicate)) {
          validGoToIds.push(goTo.id);
        }
      }
      if (validGoToIds.length === 1) {
        done = true;
        this.__changeScene(validGoToIds[0]);
      } else if (validGoToIds.length > 1) {
        var randomNumber = this.random.uint32();
        var choice = randomNumber % validGoToIds.length;
        var chosenGoToId = validGoToIds[choice];
        done = true;
        this.__changeScene(chosenGoToId);
      }
    } else if (scene.goToRef) {
      // do some gotoref
      var validRefs = [];
      for (var s = 0; s < scene.goToRef.length; ++s) {
        var ref = scene.goToRef[s];
        if (ref.predicate === undefined ||
            this._runPredicate(ref.predicate)) {
          validRefs.push(ref.id);
        }
      }
      if (validRefs.length === 1) {
        done = true;
        this.__changeScene(this.state.qualities[validRefs[0]]);
      } else if (validRefs.length > 1) {
        var c = this.random.uint32() % validRefs.length;
        var chosenRef = validRefs[c];
        done = true;
        this.__changeScene(this.state.qualities[chosenRef]);
      }
    }

    // If we've not ended, nor found a valid go-to, then we try choices.
    if (!done) {
      this.choiceCache = this._compileChoices(scene);
      if (this.choiceCache === null) {
        // Explicitly disallowing game over keeps us stuck here.
        if (scene.gameOver !== false) {
          this.gameOver();
        }
      } else {
        this.displayChoices();
      }
    }
  };

  DendryEngine.prototype.__getChoiceSelectionData = function(idToInfoMap) {
    var result = [];
    for (var id in idToInfoMap) {
      var optionScene = this.game.scenes[id];
      var optionInfo = idToInfoMap[id];

      optionInfo.order = optionInfo.order || optionScene.order || 0;
      optionInfo.priority = optionInfo.priority || optionScene.priority || 1;
      // Because 'null' is a valid frequency, we can't use || to do this.
      if (optionInfo.frequency === undefined) {
        optionInfo.frequency = optionScene.frequency;
        if (optionInfo.frequency === undefined) {
          optionInfo.frequency = 100;
        }
      }
      optionInfo.selectionPriority = 0; // Used by __filterByPriority

      result.push(optionInfo);
    }
    return result;
  };

  DendryEngine.prototype.__filterViewable = function(idToInfoMap) {
    var result = {};
    for (var id in idToInfoMap) {
      var thisScene = this.game.scenes[id];

      // This id fails if it is past its max visits.
      var maxVisits = thisScene.maxVisits;
      if (maxVisits !== undefined) {
        var visits = this.state.visits[id] || 0;
        if (visits >= maxVisits) {
          continue;
        }
      }

      // Fiter out scenes that can't be viewed.
      var canView = this._runPredicate(thisScene.viewIf, true);
      if (!canView) {
        continue;
      }

      // It passes otherwise.
      result[id] = idToInfoMap[id];
    }
    return result;
  };

  DendryEngine.prototype.__getChoiceIdsFromOptions = function(options) {
    var that = this;

    var choices = {};
    each(options, function(option) {
      // Filter out options that can't be viewed.
      if (!that._runPredicate(option.viewIf, true)) {
        return;
      }

      if (option.id.substr(0, 1) === '@') {
        // This is an id, use it.
        var trimmedId = option.id.substring(1);
        var choice = merge(option, {id:trimmedId});
        choices[trimmedId] = choice;
      } else {
        assert(option.id.substr(0, 1) === '#');
        // This is a tag, add all matching ids.
        var ids = that.game.tagLookup[option.id.substring(1)];
        objEach(ids, function(id) {
          if (choices[id] === undefined) {
            choices[id] = merge(option, {id:id});
          }
        });
      }
    });
    return choices;
  };

  // Code based on Undum (MIT License). See CREDITS.
  DendryEngine.prototype.__filterByPriority = function(choices,
                                                       minChoices,
                                                       maxChoices) {
    assert(minChoices === null ||
           maxChoices === null ||
           maxChoices >= minChoices);
    var that = this;

    var committed = [];
    var candidates = [];
    var choice;

    // Work in descending priority order.
    choices.sort(function(a, b) {
      return b.priority - a.priority;
    });

    // First phase: we make sure we have at least our minimum number
    // of choices, and that we consider the minimum possible number of
    // priorities to reach that minimum.
    var lastPriority;
    for (var i = 0; i < choices.length; ++i) {
      choice = choices[i];
      if (choice.priority !== lastPriority) {
        if (lastPriority !== undefined) {
          // Priority has decreased, use the candidates if there are enough.
          if (minChoices === null || i >= minChoices) {
            break;
          }
        }

        // We're going on, so commit our current candidates.
        committed.push.apply(committed, candidates);
        candidates = [];
        lastPriority = choice.priority;
      }
      candidates.push(choice);
    }

    // Second phase: we commit as many candidates as we can without
    // exceeding our maximum.
    // TODO: think about tag choices vs builtin choices
    var committedChoices = committed.length;
    var totalChoices = committedChoices + candidates.length;
    if (maxChoices === null || maxChoices >= totalChoices) {
      // We can use all the candidates without exceeding our maximum.
      committed.push.apply(committed, candidates);
    } else {
      // Take a subset of the candidates, using their relative frequency.
      each(candidates, function(choice) {
        if (choice.frequency === null) {
          choice.selectionPriority = 0; // Always choose.
        } else {
          choice.selectionPriority = that.random.random() / choice.frequency;
        }
      });
      candidates.sort(function(a, b) {
        return a.selectionPriority - b.selectionPriority;
      });
      var extraChoices = maxChoices - committedChoices;
      var chosen = candidates.slice(0, extraChoices);
      committed.push.apply(committed, chosen);
    }

    return committed;
  };

  DendryEngine.prototype.__getChoiceDisplayData = function(choicesSelected) {
    var choiceOutput = [];
    var numChoosable = 0;

    for (var i = 0; i < choicesSelected.length; ++i) {
      var choice = choicesSelected[i];
      var choiceScene = this.game.scenes[choice.id];

      // Figure out if this choice can be chosen.
      var canChoose = true;
      if (choice.chooseIf) {
        canChoose = this._runPredicate(choice.chooseIf, true);
      }
      if (canChoose && choiceScene.chooseIf) {
        canChoose = this._runPredicate(choiceScene.chooseIf, true);
      }

      var title = choice.title || choiceScene.title;
      assert(title);

      var subtitle = null;
      if (!canChoose) {
        subtitle = choice.unavailableSubtitle ||
                   choiceScene.unavailableSubtitle;
      }
      if (!subtitle) {
        subtitle = choice.subtitle || choiceScene.subtitle;
      }

      var finalChoice = {
        id:choice.id,
        canChoose:canChoose,
        title:this._makeDisplayContent(title, false)
      };
      if (subtitle) {
        finalChoice.subtitle = this._makeDisplayContent(subtitle, false);
      }

      choiceOutput.push(finalChoice);
      if (canChoose) {
        ++numChoosable;
      }
    }

    return {choices:choiceOutput, numChoosable:numChoosable};
  };

  DendryEngine.prototype._compileChoices = function(scene) {
    assert(scene);

    var options = scene.options;
    var choiceOutput = [];
    var numChoosable = 0;
    if (options !== undefined) {

      var choiceIds = this.__getChoiceIdsFromOptions(options);
      choiceIds = this.__filterViewable(choiceIds);

      var validChoiceData = this.__getChoiceSelectionData(choiceIds);
      var minChoices = scene.minChoices || null;
      var maxChoices = scene.maxChoices || null;
      validChoiceData = this.__filterByPriority(validChoiceData,
                                                minChoices, maxChoices);

      // Sort the result into display order.
      validChoiceData.sort(function(a, b) {
        return a.order - b.order;
      });

      // Now we've chosen our selection, get the final displayable data.
      var data = this.__getChoiceDisplayData(validChoiceData);
      choiceOutput = data.choices;
      numChoosable = data.numChoosable;
    }

    if (numChoosable === 0) {
      // We have no choosable options, so add the default option (NB:
      // this may take us over the max-choices limit).
      var root = this.state.rootSceneId;
      if (root !== this.state.sceneId) {
        var rootSceneChoose = this.game.scenes[root].chooseIf;
        if (!rootSceneChoose || this._runPredicate(rootSceneChoose, true)) {
          choiceOutput.push({id:root, title:'Continue...', canChoose:true});
          ++numChoosable;
        }
      }
    }
    if (numChoosable > 0) {
      return choiceOutput;
    } else {
      return null;
    }
  };

  // ------------------------------------------------------------------------

  // Marsaglia, George (July 2003). 'Xorshift RNGs'.
  // Journal of Statistical Software 8 (14).
  var Random = function(v, w, x, y, z) {
    this.getState = function() {
      return [v, w, x, y, z];
    };
    var uint32Multiply = function(a, b) {
      var aHigh = (a >> 16) & 0xffff;
      var aLow = a & 0xffff;
      var bHigh = (b >> 16) & 0xffff;
      var bLow = b & 0xffff;
      var prodHigh = ((aHigh * bLow) + (aLow * bHigh)) & 0xffff;
      return ((prodHigh << 16) >>> 0) + (aLow * bLow);
    };
    this.uint32 = function() {
      var t = (x ^ (x >>> 7)) >>> 0;
      x = y;
      y = z;
      z = w;
      w = v;
      v = (v ^ (v << 6)) ^ (t ^ (t << 13)) >>> 0;
      return uint32Multiply((y + y + 1), v) >>> 0;
    };
    this.random = function() {
      return this.uint32() * 2.3283064365386963e-10;
    };
  };

  var __next = 1;
  Random.fromUnique = function() {
    var seed = new Date().getTime();
    return Random.fromSeeds([seed, __next++]);
  };

  Random.fromTime = function() {
    return Random.fromSeeds([new Date().getTime()]);
  };

  Random.fromSeeds = function(seeds) {
    var v = 886756453;
    var w = 88675123;
    var x = 123456789;
    var y = 362436069;
    var z = 521288629;

    // The seed hashing function is based on Mash 0.9 (MIT License).
    // See CREDITS.
    var hashSeed = function(data) {
      data = data.toString();
      var n = 0xefc8249d;
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000;
      }
      return (n >>> 0) * 2.3283064365386963e-10;
    };

    for (var i = 0; i < seeds.length; i++) {
      var hashedSeed = hashSeed(seeds[i]) * 0x100000000;
      v ^= hashedSeed;
      w ^= hashedSeed;
      x ^= hashedSeed;
      y ^= hashedSeed;
      z ^= hashedSeed;
    }
    return new Random(v, w, x, y, z);
  };

  Random.fromState = function(state) {
    return new Random(state[0], state[1], state[2], state[3], state[4]);
  };

  // ------------------------------------------------------------------------

  module.exports = {
    makeFunctionFromSource: makeFunctionFromSource,
    runActions: runActions,
    runPredicate: runPredicate,
    runExpression: runExpression,
    convertJSONToGame: convertJSONToGame,
    simpleContent: simpleContent,

    getCardinalNumber: getCardinalNumber,
    getOrdinalNumber: getOrdinalNumber,
    getUserQDisplay: getUserQDisplay,
    getFudgeDisplay: getFudgeDisplay,

    DendryEngine: DendryEngine,
    UserInterface: UserInterface,
    NullUserInterface: UserInterface,

    Random: Random
  };
}());

},{}],2:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function($) {
  'use strict';

  var contentToHTML = require('./content/html');
  var engine = require('../engine');

  var BrowserUserInterface = function(game, $content) {
    this.game = game;
    this.$content = $content;
    this._registerEvents();

    this.dendryEngine = new engine.DendryEngine(this, game);
    // TODO: consider displaying a sidebar with various qualities...
    this.hasSidebar = false;
    this.sidebarQualities = [];
    this.disable_bg = false;
    this.animate = false;
    this.animate_bg = true;
    // backgrounds and portraits are 100% optional, and most games will not use them.
    this.show_portraits = false;
    this.fade_time = 600;
    this.bg_fade_out_time = 200;
    this.bg_fade_in_time = 1000;
    this.contentToHTML = contentToHTML;
  };
  engine.UserInterface.makeParentOf(BrowserUserInterface);

  // ------------------------------------------------------------------------
  // Main API

  BrowserUserInterface.prototype.displayContent = function(paragraphs) {
    var $html = $(contentToHTML.convert(paragraphs));
    if (this.animate) {
        $html.fadeIn(this.fade_time);
        this.$content.append($html);
    } else {
        this.$content.append($html);
    }
    $html.focus();
    // allow user to add custom stuff on display content (for sidebar in this case)
    if (window && window.onDisplayContent) {
        window.onDisplayContent();
    }
  };
  BrowserUserInterface.prototype.displayGameOver = function() {
    var $p = $('<p>').text(this.getGameOverMsg()).addClass('game-over');
    if (this.animate) {
        $p.fadeIn(this.fade_time);
        this.$content.append($p);
    } else {
        this.$content.append($p);
    }
    $p.focus();
  };
  BrowserUserInterface.prototype.displayChoices = function(choices) {
    var $ul = $('<ul>').addClass('choices');
    for (var i = 0; i < choices.length; ++i) {
      var choice = choices[i];

      var title = contentToHTML.convertLine(choice.title);
      var subtitle = "";
      if (choice.subtitle !== undefined) {
        subtitle = contentToHTML.convertLine(choice.subtitle);
      }

      var $li = $('<li>');
      var $titleHolder = $li;
      if (choice.canChoose) {
        $titleHolder = $('<a>').attr({href: '#', 'data-choice': i});
        $li.html($titleHolder);
      } else {
        $titleHolder.addClass('unavailable');
      }
      $titleHolder.html(title);
      if (subtitle) {
        $li.append($('<div>').addClass('subtitle').html(subtitle));
      }
      $ul.append($li);
    }
    if (this.animate) {
        $ul.fadeIn(this.fade_time);
        this.$content.append($ul);
    }
    else {
        this.$content.append($ul);
    }
    $ul.focus();
  };
  BrowserUserInterface.prototype.newPage = function() {
    if (this.animate) {
        var $content = this.$content;
        this.$content.empty();
        this.$content.children().fadeOut(this.fade_time, function() {
        });
    } else {
        this.$content.empty();
    }
  };
  BrowserUserInterface.prototype.setStyle = function(style) {
    this.$content.removeClass();
    if (style !== undefined) {
      this.$content.addClass(style);
    }
  };
  BrowserUserInterface.prototype.removeChoices = function() {
    $('.choices', this.$content).remove();
    $('.hidden', this.$content).remove();
  };
  BrowserUserInterface.prototype.beginOutput = function() {
    $("#read-marker", this.$content).remove();
    this.$content.append($('<hr>').attr('id', 'read-marker'));
  };
  BrowserUserInterface.prototype.endOutput = function() {
    var $marker = $("#read-marker");
    if (this.animate) {
        if ($marker.length > 0) {
          $('html, body').animate({scrollTop: $marker.offset().top}, this.fade_time);
        } else {
          $('html, body').animate({scrollTop: 0}, this.fade_time);
        }
    }
  };
  BrowserUserInterface.prototype.signal = function(data) {
    // TODO: implement signals - signals contain signal, event, and id
    console.log(data);
    var signal = data.signal;
    // TODO: handle this in the game.js for each specific game
    if (window && window.handleSignal) {
        window.handleSignal(signal);
    }
  };
  BrowserUserInterface.prototype.setBg = function(image_url) {
      if (!image_url || image_url == 'none' || image_url == 'null' || this.disable_bg) {
          if (this.animate_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            setTimeout(function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').removeClass('content_hidden');
                $('#bg1').addClass('content_visible');
            },
            100);
          } else {
              $('#bg1').css('backgroundImage', 'none'); 
          }
      } else if (image_url.startsWith('#') || image_url.startsWith('rgba(')) {
          if (this.animate_bg) {
            $('#bg1').addClass('content_hidden');
            $('#bg1').removeClass('content_visible');
            setTimeout(function() {
                $('#bg1').css('background-image', 'none'); 
                $('#bg1').css('bacground-color', image_url);
                $('#bg1').removeClass('content_hidden');
                $('#bg1').addClass('content_visible');
            },
            100);
          } else {
              $('#bg1').css('background-image', 'none'); 
              $('#bg1').css('bacground-color', image_url);
          }
      } else {
          // lmao this is terribly slow
          if (this.animate_bg) {
            $('#bg1').fadeOut(this.bg_fade_out_time, function() {
                $('#bg1').css('background-image', 'url("' + image_url + '")'); 
            });
            $('#bg1').fadeIn(this.bg_fade_in_time, function() {
                $('#bg2').css('background-image', $('#bg1').css('background-image'));
            });
      } else {
          $('#bg1').css('background-image', 'url("' + image_url + '")'); 
      }
    }
  };

  BrowserUserInterface.prototype.saveSettings = function() {
    if (typeof localStorage !== 'undefined') {
        localStorage[this.game.title + '_animate'] = this.animate;
        localStorage[this.game.title + '_disable_bg'] = this.disable_bg;
        localStorage[this.game.title + '_animate_bg'] = this.animate_bg;
        localStorage[this.game.title + '_show_portraits'] = this.show_portraits;
    }
  };

  BrowserUserInterface.prototype.loadSettings = function() {
    if (typeof localStorage !== 'undefined') {
        if (localStorage[this.game.title + '_animate']) {
            this.animate = localStorage[this.game.title + '_animate'] != 'false' || false;
        } else {
            this.animate = false;
        }
        if (localStorage[this.game.title + '_disable_bg']) {
            this.disable_bg = localStorage[this.game.title + '_disable_bg'] != 'false' || false ;
        } else {
            this.disable_bg = false;
        }
        if (localStorage[this.game.title + '_animate_bg']) {
            this.animate_bg = localStorage[this.game.title + '_animate_bg'] != 'false' || false;
        } else {
            this.animate_bg = true;
        }
        if (localStorage[this.game.title + '_show_portraits']) {
            this.show_portraits = localStorage[this.game.title + '_show_portraits'] != 'false' || false;
        } else {
            this.show_portraits = false;
        }
    }
  };

  // ------------------------------------------------------------------------
  // Additional methods

  BrowserUserInterface.prototype.getGameOverMsg = function() {
    return 'Game Over (reload to read again)';
  };

  BrowserUserInterface.prototype._registerEvents = function() {
    var that = this;
    this.$content.on('click', 'ul.choices li a', function(event) {
      event.preventDefault();
      event.stopPropagation();
      var choice = parseInt($(this).attr('data-choice'));
      that.dendryEngine.choose(choice);
      return false;
    });
    this.$content.on('click', 'ul.choices li', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('a', this).click();
      return false;
    });
  };

  // ------------------------------------------------------------------------
  // Run when loaded.

  var main = function() {
    engine.convertJSONToGame(window.game.compiled, function(err, game) {
      if (err) {
        throw err;
      }

      var ui = new BrowserUserInterface(game, $('#content'));
      window.dendryUI = ui;
      // Allow the ui system to be customized before use.
      if (window.dendryModifyUI !== undefined) {
        // If it returns true, then we don't need to begin the game.
        var dontStart = window.dendryModifyUI(ui);
        if (dontStart) {
          return;
        }
      }
      ui.dendryEngine.beginGame();
    });
  };
  $(main);

}(jQuery));

},{"../engine":1,"./content/html":3}],3:[function(require,module,exports){
/* dendry
 * http://github.com/idmillington/dendry
 *
 * MIT License
 */
/*jshint indent:2 */
(function() {
  'use strict';

  var _contentObjectToHTML = function(contentObj) {
    if (contentObj.type === undefined) {
      // if the game defines the function window.displayText, then that function is called to format the text.
      // this is used for game-specific formatting.
      if (window && window.displayText) {
          contentObj = window.displayText(contentObj);
      }
      return contentObj;
    } else {
      switch (contentObj.type) {
      case 'emphasis-1':
        return '<em>' + _contentToHTML(contentObj.content) + '</em>';
      case 'emphasis-2':
        return '<strong>' + _contentToHTML(contentObj.content) + '</strong>';
      case 'emphasis-3':
        return '<code>' + _contentToHTML(contentObj.content) + '</code>';
      case 'hidden':
        return '<span class="hidden">' + _contentToHTML(contentObj.content) +
          '</span>';
      case 'line-break':
        return '<br>';

      // We can't handle elements that require state-dependency.
      case 'insert':
        /* falls through */
      // raw html for magic
      case 'magic':
        return contentObj.content;
      case 'conditional':
        throw new Error(
          contentObj.type + ' should have been evaluated by now.'
          );
      }
    }
  };

  var _contentToHTML = function(content) {
    if (Array.isArray(content)) {
      var result = [];
      for (var i = 0; i < content.length; ++i) {
        var contentObj = content[i];
        result.push(_contentObjectToHTML(contentObj));
      }
      return result.join('');
    } else {
      return _contentObjectToHTML(content);
    }
  };

  var _paragraphsToHTML = function(paragraphs) {
    var result = [];
    for (var i = 0; i < paragraphs.length; ++i) {
      var paragraph = paragraphs[i];
      switch (paragraph.type) {
      case 'heading':
        result.push('<h1>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</h1>');
        break;
      case 'paragraph':
        result.push('<p>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</p>');
        break;
      case 'quotation':
        result.push('<blockquote>');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'attribution':
        result.push('<blockquote class="attribution">');
        result.push(_contentToHTML(paragraph.content));
        result.push('</blockquote>');
        break;
      case 'magic':
        result.push(paragraph.content);
        break;
      case 'hrule':
        result.push('<hr>');
        break;
      }
    }
    return result.join('');
  };

  module.exports = {
    convert: _paragraphsToHTML,
    convertLine: _contentToHTML
  };
}());

},{}]},{},[2]);
