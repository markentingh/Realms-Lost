var names = {};
/* 
// kingdom attributes:
// culture (0, 100)
// economy (0, 100)
// military (0, 100)
// technology (0, 100),
// type ('r' = republic, 'c' = communist, 't' = tribal, 'a' = anarchy, 'k' = kingdom/royalty) (t.r.a.c.k.)
// education (0, 100)
// religion (0, 100)
// farming (0, 100)
// diplomacy (0, 100) (0 = hostile, 100 = peaceful)
// artistry (0, 100)
// crafting (0, 100)
// cooking (0, 100)
*/
names.countries = {
    republic: [
        {values:[
            {value:'ab'},
            {value:'ac'},
            {value:'al'},
            {value:'alt'},
            {value:'am', military:10},
            {value:'as'},
            {value:'at'},
            {value:'bal'},
            {value:'bar', military:-20},
            {value:'bed'},
            {value:'bel'},
            {value:'bis'},
            {value:'bor', military:-25},
            {value:'bri'},
            {value:'cam'},
            {value:'can', military:-10},
            {value:'cas'},
            {value:'casp'},
            {value:'div'},
            {value:'es'},
            {value:'eth'},
            {value:'eva'},
            {value:'fan'},
            {value:'far'},
            {value:'ga'},
            {value:'gen'},
            {value:'hel'},
            {value:'hest'},
            {value:'hon'},
            {value:'il'},
            {value:'ind', military:-10},
            {value:'ken', military:-10},
            {value:'na'},
            {value:'nev'},
            {value:'nid'},
            {value:'pen'},
            {value:'rus', military:10},
            {value:'run'},
            {value:'ta'},
            {value:'tar', military:-20},
            {value:'tre'},
            {value:'tri'},
            {value:'ul', military:-20},
            {value:'zo', military:-20}
        ]},
        {canSkip:true, skipChance:4, values:[
            {value:'al'},
            {value:'ar'},
            {value:'ban'},
            {value:'da'},
            {value:'den'},
            {value:'el'},
            {value:'em'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'sha'},
            {value:'or'},
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'bi'},
            {value:'ca'},
            {value:'ce'},
            {value:'cia'},
            {value:'da'},
            {value:'den'},
            {value:'era'},
            {value:'la'},
            {value:'land'},
            {value:'gra'},
            {value:'ia'},
            {value:'ira'},
            {value:'is'},
            {value:'isa'},
            {value:'nia'},
            {value:'tan'},
            {value:'tia'},
            {value:'va'},
            {value:'via'},
            {value:'ya'}
        ]}
    ],

    kingdom: [
        {values:[
            {value:'ab'},
            {value:'aben'},
            {value:'ac'},
            {value:'adr'},
            {value:'al'},
            {value:'alt'},
            {value:'am'},
            {value:'as'},
            {value:'at'},
            {value:'bael'},
            {value:'bal'},
            {value:'bar'},
            {value:'bed'},
            {value:'bel'},
            {value:'bik'},
            {value:'bin'},
            {value:'bis'},
            {value:'bor'},
            {value:'bri'},
            {value:'cam'},
            {value:'can'},
            {value:'cas'},
            {value:'casp'},
            {value:'chi'},
            {value:'daes'},
            {value:'div'},
            {value:'dwar'},
            {value:'elv'},
            {value:'es'},
            {value:'eth'},
            {value:'eva'},
            {value:'evan'},
            {value:'ever'},
            {value:'fan'},
            {value:'far'},
            {value:'fay'},
            {value:'fel'},
            {value:'fon'},
            {value:'fut'},
            {value:'ga'},
            {value:'gen'},
            {value:'gha'},
            {value:'gor'},
            {value:'hel'},
            {value:'hest'},
            {value:'hon'},
            {value:'ik'},
            {value:'il'},
            {value:'ind'},
            {value:'kur'},
            {value:'ky'},
            {value:'nar'},
            {value:'nida'},
            {value:'pen'},
            {value:'phel'},
            {value:'phen'},
            {value:'pun'},
            {value:'run'},
            {value:'ta'},
            {value:'tar'},
            {value:'tre'},
            {value:'tri'},
            {value:'tsu'},
            {value:'ul'},
            {value:'zel'}
        ]},
        {canSkip:true, skipChance:2, values:[
            {value:'al'},
            {value:'ar'},
            {value:'din'},
            {value:'elum'},
            {value:'elus'},
            {value:'em'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'ira'},
            {value:'len'},
            {value:'la'},
            {value:'lan'},
            {value:'mar'},
            {value:'nar'},
            {value:'nor'},
            {value:'t'},
            {value:'te'},
            {value:'tal'},
            {value:'or'},
            {value:'volen'}
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'ca'},
            {value:'cia'},
            {value:'ia'},
            {value:'ira'},
            {value:'is'},
            {value:'gard'},
            {value:'heim'},
            {value:'helm'},
            {value:'lor'},
            {value:'mond'},
            {value:'nia'},
            {value:'tia'},
            {value:'va'},
            {value:'via'},
            {value:'ya'}
        ]}
    ],

    communist: [
        {values:[
            {value:'ab'},
            {value:'aben'},
            {value:'ac'},
            {value:'adr'},
            {value:'al'},
            {value:'am'},
            {value:'as'},
            {value:'bal'},
            {value:'bar'},
            {value:'bed'},
            {value:'bel'},
            {value:'bik'},
            {value:'bin'},
            {value:'bis'},
            {value:'bor'},
            {value:'bri'},
            {value:'cam'},
            {value:'can'},
            {value:'cas'},
            {value:'chin'},
            {value:'div'},
            {value:'el'},
            {value:'es'},
            {value:'eva'},
            {value:'evan'},
            {value:'fa'},
            {value:'far'},
            {value:'fel'},
            {value:'fon'},
            {value:'fut'},
            {value:'ga'},
            {value:'gen'},
            {value:'gha'},
            {value:'gor'},
            {value:'hel'},
            {value:'hest'},
            {value:'hon'},
            {value:'ik'},
            {value:'il'},
            {value:'ind'},
            {value:'ish'},
            {value:'ist'},
            {value:'ing'},
            {value:'kri'},
            {value:'kur'},
            {value:'ky'},
            {value:'nar'},
            {value:'pen'},
            {value:'phe'},
            {value:'pun'},
            {value:'que'},
            {value:'qui'},
            {value:'rus'},
            {value:'ta'},
            {value:'tar'},
            {value:'tre'},
            {value:'tri'}
        ]},
        {canSkip:true, skipChance:2, values:[
            {value:'al'},
            {value:'ar'},
            {value:'bos'},
            {value:'cha'},
            {value:'din'},
            {value:'do'},
            {value:'don'},
            {value:'doni'},
            {value:'du'},
            {value:'el'},
            {value:'em'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'ira'},
            {value:'sha'},
            {value:'shi'},
            {value:'or'}
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'bi'},
            {value:'ca'},
            {value:'cia'},
            {value:'ia'},
            {value:'ira'},
            {value:'isa'},
            {value:'nia'},
            {value:'na'},
            {value:'sia'},
            {value:'tan'},
            {value:'va'},
            {value:'via'},
            {value:'ya'}
        ]}
    ],

    tribal: [
        {values:[
            {value:'ab'},
            {value:'ac'},
            {value:'adr'},
            {value:'af'},
            {value:'al'},
            {value:'am'},
            {value:'as'},
            {value:'bal'},
            {value:'bar'},
            {value:'bed'},
            {value:'bel'},
            {value:'bik'},
            {value:'bin'},
            {value:'bis'},
            {value:'bor'},
            {value:'bri'},
            {value:'cam'},
            {value:'can'},
            {value:'cas'},
            {value:'div'},
            {value:'es'},
            {value:'ev'},
            {value:'far'},
            {value:'fay'},
            {value:'fel'},
            {value:'fon'},
            {value:'fut'},
            {value:'ga'},
            {value:'gen'},
            {value:'gha'},
            {value:'gor'},
            {value:'hel'},
            {value:'hon'},
            {value:'ik'},
            {value:'il'},
            {value:'indi'},
            {value:'ish'},
            {value:'ist'},
            {value:'ing'},
            {value:'ke'},
            {value:'kri'},
            {value:'ku'},
            {value:'ky'},
            {value:'nar'},
            {value:'pen'},
            {value:'pun'},
            {value:'run'},
            {value:'ta'},
            {value:'tar'},
            {value:'tre'},
            {value:'tri'},
            {value:'tsu'},
            {value:'ult'},
            {value:'ut'},
            {value:'zel'},
            {value:'zem'},
            {value:'zo'},
            {value:'zu'}
        ]},
        {canSkip:true, skipChance:2, values:[
            {value:'al'},
            {value:'ar'},
            {value:'bos'},
            {value:'cha'},
            {value:'chi'},
            {value:'din'},
            {value:'do'},
            {value:'du'},
            {value:'el'},
            {value:'em'},
            {value:'emb'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'ira'},
            {value:'ric'},
            {value:'sha'},
            {value:'shan'},
            {value:'shi'},
            {value:'or'}
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'bi'},
            {value:'ca'},
            {value:'den'},
            {value:'ira'},
            {value:'is'},
            {value:'la'},
            {value:'len'},
            {value:'li'},
            {value:'na'},
            {value:'tan'},
            {value:'va'},
            {value:'ya'}
        ]}
    ]
};
var rnd = {
    number: (min, max) => {
        return Math.round(min + (Math.random() * max));
    },
    bool: (chance) => {
        return rnd.number(0, chance) === 1;
    },
    name: (parts, replacements) => {
        //parts = [{canSkip:false, skipChance:1, values:[{value:'a'},{value:'b'}]}, ...]
        var n = '';
        var chosen = [];
        for(var x = 0; x < parts.length; x++){
            var part = parts[x];
            var skip = part.canSkip == true ? rnd.bool(part.skipChance) : false;
            if(skip == false){
                var i = 0;
                while(i < 5){
                    var vi = rnd.number(0, part.values.length - 1);
                    var p = part.values[vi].value;
                    if(chosen.length == 0 || chosen.map(a => a.value).indexOf(p) < 0){
                        chosen.push({part:x, index:vi, value:p});
                        n += p;
                        break;
                    }
                    i++;
                }
            }
        }
        if(replacements != null){
            //fix any unwanted character patterns
            for(var x = 0; x < replacements.length; x++){
                var r = replacements[x];
                n = n.replace(r[0], r[1]);
            }
        }
        return {name:n, values:chosen}; //values = [{part, index, value}, ...]
    }
}
var str = {
    capitalize: (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
}
var conversation = {
    menu: {
        dialog: {
            a:[
                {
                    word:['menu', 'pause'], callback: () => {
                        var who = chat.who;
                        chat.talk('What would you like to do? Save? Load? Go back to your game?', null, 'menu');
                        chat.listen((answer) => {
                            if(chat.verify(answer, 'save')){
                                game.save();
                                chat.talk('Saving. . .  .  .  .   .   .   .   Done.', () => {
                                    chat.exit();
                                    chat.talk('You are now back in the game.', null, who);
                                });
                            }else if(chat.verify(answer, 'load')){
                                chat.talk('Okay.', () => { game.load();});
                            }else if(chat.verify(answer, 'back')){
                                chat.exit();
                                chat.talk('You are now back in the game.', null, who);
                            }
                        });
                    }
                }
            ]
        }
    }
};
conversation.debug = {
    dialog: {
        a:[
            {
                word:'debug', callback: () => {
                    var who = chat.who;
                    var commands = [
                        {value: 'new world', callback: () => {
                            story.world = (new world()).generate({govtype:chat.answer.indexOf('republic') >= 0 ? 'r' : chat.answer.indexOf('communis') >= 0 ? 'c' : chat.answer.indexOf('kingdom') >= 0 ? 'k' : chat.answer.indexOf('trib') >= 0 ? 't' : chat.answer.indexOf('anarch') >= 0 ? 'a' : ''}); 
                            chat.talk(story.world.countries.map(a => a.name).join(', ')); 
                            console.log(story.world.countries);
                        }},
                        {value: 'back', callback: () => {chat.exit(); chat.talk('You are now back in the game.', null, who);}}
                    ]
                    chat.talk('Here is a list of known debug commands: ' + commands.map(a => a.value).join(', ') + '.', null, 'debug');
                    chat.listen((answer) => {
                        for(var x = 0; x < commands.length; x++){
                            var cmd = commands[x];
                            if(chat.verify(answer, cmd.value)){
                                cmd.callback();
                                break;
                            }
                        }
                    });
                }
            }
        ]
    }
};
conversation.start = {
    index:0,
    who:'game',
    dialog:[
        {
            q:'Hello adventurer, and welcome to the story of Realms Lost. Would you like to start a new game or continue from your last save point?',
            a:[
                {word:'new game', callback:()=> {
                    chat.talk('Okay. Let us begin our journey . . . . . . . . . . . .  .  .  .  .  .   .   .   .    .    .    .    .    .     .     .     .     .      .      .      .      .', () => {
                        //generate a new story
                        game.new();
                      });
                }},
                {word:'continue', callback:() => {
                    chat.talk('Okay.', () => { game.load();});
                }},
                {word:['none', 'neither', 'dont', 'don\'t'], callback:() => {
                    chat.talk('Well, you\'ll have to decide what to do or else we\'ll be talking in circles now, will we?');
                }}
            ]
        }
    ]
};
var world = function(){};
world.prototype.generate = (opts) => {
    var w = new world();
    w.date = {
        year:rnd.number(1, 9999),
        type:'',
        months: rnd.number(4,30),
        days:rnd.number(250, 999),
    };
    w.planet = '';
    w.countries = [];
    var rand = rnd.number(0, 27);
    //start with republic-centric world
    var worldgov = 'r'; 
    if(rand > 10 && rand < 20){
        //create kingdom-centric world
        worldgov = 'k';
    }else if(rand >= 20 && rand < 25){
        //create communist-centric world
        worldgov = 'c';
    }else if(rand >= 25 && rand < 27){
        //create tribal-centric world
        worldgov = 't';
    }else if(rand >= 27){
        //create anarchy-centric world
        worldgov = 'a';
    }
    if(opts && opts.govtype != null && opts.govtype != ''){worldgov = opts.govtype;}

    //set up bad character groupings replacements
    var charReplacements = [['dsh', 'sh'], ['thb', 'th'], ['thd', 'thid'], ['cv', 'v'], ['eerl', 'eel'], ['rer', 're'], ['ndv', 'nv'], ['tae', 'te'], ['db', 'd'],
        ['gae', 'ga'], ['nb', 'n'], ['rgr', 'gr'], ['mbm', 'm'], ['bm', 'm'], ['lel', 'le'], ['mci', 'meci'], ['drth', 'dreth'], ['spd', 'sp'], ['spb', 'sp'],
        ['chie', 'chi'], ['bc', 'b'], ['aia', 'ia'], ['ngr', 'gr'], ['arar', 'ar'], ['ndc', 'nd'], ['tsh', 'sh'], ['rira', 'ria'], ['rie', 'ri'], ['mbv', 'mv'],
        ['vb', 'v'], ['fb', 'b'], ['penis', 'pen'], ['enen', 'en'], ['ndl', 'nl'], ['eneme', 'ene'], ['emene', 'eme'], ['ndt', 'nt'], ['thth', 'th'], ['chch', 'ch'],
        ['uer', 'ur'], ['arnar', 'arna'], ['mgr', 'gr'], ['rir', 'ir'], ['oir', 'or']];

    for(var x = 97; x <= 122; x++){
        var c = String.fromCharCode(x);
        if([101].indexOf(x) >= 0){
            //find three characters
            charReplacements.push([c + c + c, c + c]);
        }else{
            //find two characters
            charReplacements.push([c + c, c]);
        }
    }
    
    for(var x = 1; x < rnd.number(1, 99);x++){
        //generate countries
        var i = 0;
        rand = rnd.number(1, 100);
        //create country object
        var country = {name:'', type:worldgov};
        //determine government type
        var countrytype = worldgov == 'r' ? names.countries.republic : 
            worldgov == 'k' ? names.countries.kingdom :
            worldgov == 'c' ? names.countries.communist :
            names.countries.tribal;
        var anarchy = false;
        switch(worldgov){
            case 'r':
                //select government type for a republic-centric world
                anarchy = rnd.bool(20);
                if(rand >= 65 && rand < 85){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 85 && rand < 95){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 95){
                    countrytype = names.countries.tribal;
                    country.type = 't';
                    anarchy = true;
                }
                break;
            case 'k':
                //select government type for a kingdom-centric world
                anarchy = rnd.bool(8);
                if(rand >= 75 && rand < 80){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                    anarchy = rnd.bool(20);
                }else if(rand >= 80 && rand < 83){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 83){
                    countrytype = names.countries.tribal;
                    country.type = 't';
                    anarchy = true;
                }
                break;
            case 'c':
                //select government type for a communist-centric world
                if(rand >= 75 && rand < 90){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 90 && rand < 93){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                }else if(rand >= 93){
                    countrytype = names.countries.tribal;
                    country.type = 't';
                }
                break;
            case 't':
                //select government type for a tribal-centric world
                if(rand >= 90 && rand < 95){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 95 && rand < 99){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 99){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                }
                anarchy = !rnd.bool(4);
                break;
            case 'a':
                //select government type for a anarchy-centric world
                country.type = 't';
                if(rand >= 25 && rand < 50){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 50 && rand < 75){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 75){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                }
                anarchy = !rnd.bool(25);
                break;
        }
        switch(country.type){
            case 'r':
                country.culture = 50 + rnd.number(-10, 10);
                country.economy = 75 + rnd.number(-20, 10);
                country.military = 80 + rnd.number(-40, 0);
                country.technology = 80 + rnd.number(-20, 10);
                country.education = 80 + rnd.number(-20, 10);
                country.religion = 50 + rnd.number(-25, 25);
                country.farming = 50;
                country.diplomacy = 75 + rnd.number(-25, 10);
                country.artistry = 75 + rnd.number(-50, 10);
                country.crafting = 75 + rnd.number(-25, 10);
                country.cooking = 50 + rnd.number(-10, 30);
                break;
            case 'k':
                country.culture = 75 + rnd.number(-10, 15);
                country.economy = 40 + rnd.number(-10, 30);
                country.military = 50 + rnd.number(-10, 30);
                country.technology = 50 + rnd.number(-10, 30);
                country.education = 50 + rnd.number(-10, 20);
                country.religion = 75 + rnd.number(-10, 15);
                country.farming = 50;
                country.diplomacy = 50 + rnd.number(-35, 15);
                country.artistry = 75 + rnd.number(-30, 15);
                country.crafting = 60 + rnd.number(-10, 15);
                country.cooking = 60 + rnd.number(-30, 15);
                break;
            case 'c':
                country.culture = 25 + rnd.number(-15, 15);
                country.economy = 80 + rnd.number(-30, 5);
                country.military = 80 + rnd.number(-30, 5);
                country.technology = 80 + rnd.number(-30, 10);
                country.education = 60 + rnd.number(-30, 15);
                country.religion = 25 + rnd.number(-10, 15);
                country.farming = 50;
                country.diplomacy = 40 + rnd.number(-20, 25);
                country.artistry = 75 + rnd.number(-40, 10);
                country.crafting = 75 + rnd.number(-10, 10);
                country.cooking = 50 + rnd.number(-10, 35);
                break;
            case 't':
                country.culture = 75 + rnd.number(-25, 15);
                country.economy = 15 + rnd.number(-5, 25);
                country.military = 15 + rnd.number(-10, 15);
                country.technology = 10 + rnd.number(0, 25);
                country.education = 25 + rnd.number(-10, 15);
                country.religion = 75 + rnd.number(-20, 15);
                country.farming = 15;
                country.diplomacy = 10 + rnd.number(-5, 25);
                country.artistry = 40 + rnd.number(-30, 15);
                country.crafting = 25 + rnd.number(-15, 15);
                country.cooking = 25 + rnd.number(-15, 15);
                break;
        }
        //get country name and any custom attributes
        while(i < 5){
            var chosen = rnd.name(countrytype, charReplacements);
            var name = str.capitalize(chosen.name);
            if(name.length > 3 && w.countries.map(a => a.name).indexOf(name) < 0){
                country.name = name;
                country.anarchy = anarchy;
                for(var y = 0; y < chosen.values.length; y++){
                    //collect attributes from name parts related to country
                    var val = chosen.values[y];
                    var choice = countrytype[val.part].values[val.index];
                    var attrs = Object.getOwnPropertyNames(choice).filter(a => a != 'value');
                    for(var z = 0; z < attrs.length; z++){
                        var attr = attrs[z];
                        if(country[attr] != null && !isNaN(country[attr])){
                            country[attr] += choice[attr];
                        }else{
                            country[attr] = choice[attr];
                        }
                    }
                }
                break;
            }
            i++;
        }
        w.countries.push(country);
    }
    //choose home country
    if(opts && opts.homeworld !== false && w.countries.length > 0){
        w.countries[rnd.number(0, w.countries.length - 1)].home = true;
    }
    return w;
}
world.prototype.load = (w) => {
    var w = new world();
    w.date = w.date;
    w.planet = w.planet;
    w.countries = w.countries;
    return w;
}
var character = function(){

};

character.prototype = {
    create: (name, race, gender, level, strength, stamina, agility, education, wisdom, charm, luck, health, mana, professions) => {
        var c = new character();
        c.name = name;
        c.race = race;
        c.gender = gender;
        c.level = level;
        c.stats = {
            strength: strength,
            stamina: stamina,
            agility: agility,
            education: education,
            wisdom: wisdom,
            charm: charm,
            luck: luck
        };
        c.health = health;
        c.mana = mana;
        c.professions = professions; //[{type, rank}]
        return c;
    },
    load: (data) => {
        return character.create(
            data.name,
            data.level,
            data.stats.strength,
            data.stats.stamina, 
            data.stats.agility,
            data.stats.education,
            data.stats.wisdom,
            data.stats.charm,
            data.stats.luck,
            data.health,
            data.mana,
            data.professions
        );
    }
};
var party = new function(){
};

party.prototype = {
    load:(p) => {
        for(var x = 0; x < p.length; x++){
            party.push(p[x]);
        }
    },

    push: function (elems) {
        [].push.apply(this, elems);
        return this;
    }
}
var story = {};
var game = {
    index:0,
    new:() => {
      story.world = (new world()).generate();
    },
    save:() => {
      window.localStorage.setItem('save-' + game.index, {
        world:story.world,
        party:party
      });
    },
    load:() => {
      var data = window.localStorage.getItem('save-' + game.index);
      if(data != null && data.world != null){
        story.world = world.load(data.world);
        chat.talk('You are now being transported to   .   .   .   the ' + kingdom + ' kingdom');
      }
    }
  }
var chat = {
  div:document.getElementsByClassName('chat')[0],
  newline:null,
  chapter:null,
  dialog:null, //current dialog tree to follow during conversation
  conversations:[ //global conversations that the user can start at any time
    conversation.menu.dialog,
    conversation.debug.dialog
  ], 
  speaking:'',
  who:'game',
  answer:'',
  history:{index:null, list:[]},
  callback:null,

  start:() => {
    chat.chapter = conversation.start;
    chat.next();
  },
  next:() => {
    //get next dialog in the conversation
    var speak = chat.chapter.dialog[chat.chapter.index].q;
    if(typeof speak == 'function'){
      speak = speak();
    }
    chat.talk(speak);
  },
  talk: (speak, callback, who, noanim) => {
    //talk to the user
    if(who != null && who != 'user'){
      chat.who = who;
    }else if(who != 'user'){who = chat.who;}
    chat.newline = document.createElement('div');
    chat.newline.className = who;
    chat.div.appendChild(chat.newline);
    //animate response
    chat.speaking = speak;
    if(noanim !== true){
      chat.animate.go(callback);
    }else{
      chat.newline.innerHTML = speak;
      if(typeof callback == 'function'){
        callback();
      }
    }
  },
  listen: (callback) => {
    //listen for user response
    chat.callback = callback;
  },
  exit: () => {chat.callback = null;},
  respond:() => {
    //let the user respond
    setTimeout(() => {
      chat.animate.progress = 0;
      user_response.value = user_response.value.trim();
    }, 100);
    
    user_response.focus();
    if(typeof chat.animate.callback == 'function'){
        chat.animate.callback();
        chat.animate.callback = null;
    }
  },
  process: (response, dialog) => {
    var answers = dialog.a;
    var answer = answers.filter(a => {
      if(typeof a.word == 'string'){
        if(response.indexOf(a.word) >= 0){return true;}
      }else{
        for(var x = 0; x < a.word.length;x++){
          if(response.indexOf(a.word[x]) >= 0){return true;}
        }
      }
    });
    if(answer.length > 0){
      answer = answer[0];
      if(answer.callback && typeof answer.callback == 'function'){
        answer.callback();
      }
      return true;
    }else{
      return false;
    }
  },
  verify:(input, words, all) => {
    //verify that the user input matches given words
    if(input.indexOf('dont') >= 0 || input.indexOf('don\'t') >= 0 || input.indexOf('do not') >= 0){
      return false;
    }else{
      if(typeof words == 'string'){
        return input.indexOf(words) >= 0;
      }else{
        //list of words
        var found = 0;
        for(var x = 0; x < words.length; x++){
          if(input.indexOf(words[x]) >= 0){
            found++;
          }
        }
        if((all === true && found == words.length) || (all !== true && found > 0)){
          return true;
        }
        return false;
      }
      
    }
  },
  animate:{
    progress:0,
    timer:null,
    callback:null,
    go:(callback) => {
      chat.animate.callback = callback;
      var progress = chat.animate.progress++;
      if(progress > chat.speaking.length){
        chat.animate.progress = 0;
        chat.respond();
        return;
      }
      chat.newline.innerHTML = chat.speaking.substr(0, progress);
      chat.animate.timer = setTimeout(() => {chat.animate.go(callback);}, 1000 / 25);  
    },
  }
}

document.body.addEventListener('click', () => {
  user_response.focus();
});

document.body.addEventListener('keydown', (e) => {
	clearTimeout(chat.animate.timer);
  if(chat.animate.progress > 0){
  	chat.newline.innerHTML = chat.speaking;
    chat.respond();
  }
});

user_response.addEventListener('keydown', (e) => {
  switch(e.keyCode){
    case 38://up
      if(chat.history.list.length > 0 && ((chat.history.index == null && user_response.value == '') || (chat.history.index != null && chat.history.index < chat.history.list.length))){
        if(chat.history.index == null){chat.history.index = 0;}
        chat.history.index++;
        if(chat.history.index > chat.history.list.length){return;}
        user_response.value = chat.history.list[chat.history.list.length - chat.history.index];
        e.preventDefault();
        return false;
      }
      break;
    case 40://down
      if(chat.history.list.length > 0 && chat.history.index != null){
        chat.history.index--;
        if(chat.history.index < 1){chat.history.index = null; user_response.value = ''; return;}
        user_response.value = chat.history.list[chat.history.list.length - chat.history.index];
        e.preventDefault();
        return false;
      }
      break;
  }
});

user_response.addEventListener('keyup', (e) => {
  if(chat.animate.progress > 0){return;}
	switch(e.keyCode){
    case 13: //user pressed enter
      //get user input from textbox)
    	var response = user_response.value;
      var clean_response = response.toLowerCase().trim();
      user_response.value = '';
      if(clean_response == ''){return;}
      //print user input
      chat.history.list.push(response);
      chat.history.index = null;
      chat.talk(response, null, 'user', true);
      chat.answer = clean_response;

      //check for answer listener
      var answered = false;
      if(typeof chat.callback == 'function'){
        if(chat.callback(chat.answer) !== false){return;};
      }

      //find dialog tree
      var dialog = chat.dialog || chat.chapter.dialog[chat.chapter.index];

      //process user response
      if(chat.process(clean_response, dialog) !== false){return;}

      //try starting other conversations
      if(chat.conversations != null && chat.conversations.length > 0){
        for(var x = 0; x < chat.conversations.length; x++){
          dialog = chat.conversations[x];
          if(chat.process(clean_response, dialog) !== false){
            answered = true;
            break;
          }
        }
      }
      
      //unknown user response
      if(answered == false){
        chat.talk('I do not understand...', () => {
          //chat.next();
        });
      }
      break;
  }
});

chat.start();