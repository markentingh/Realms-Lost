var names = {};
/* 
// kingdom attributes:
// culture (0, 100)
// economy (0, 100)
// military (0, 100)
// technology (0, 100),
// government ('r' = republic, 'c' = communist, 't' = tribal, 'a' = anarchy, 'k' = kingdom/royalty),
// education (0, 100)
// religion (0, 100)
// farming (0, 100)
// diplomacy (0, 100) (0 = hostile, 100 = peaceful)
// artistry (0, 100)
// crafting (0, 100)
*/
names.kingdoms = [
    {values:[
        {value:'ab', government:'t'},
        {value:'aben', government:'k'},
        {value:'ac', government:'k'},
        {value:'adr', government:'k'},
        {value:'al', government:'r'},
        {value:'am', government:'r'},
        {value:'as', government:'k'},
        {value:'bael', government:'k'},
        {value:'bal', government:'c'},
        {value:'bar', government:'r'},
        {value:'bed', government:'c'},
        {value:'bel', government:'r'},
        {value:'bik', government:'t'},
        {value:'bin', government:'r'},
        {value:'bis', government:'k'},
        {value:'bor', government:'c'},
        {value:'bri', government:'r'},
        {value:'cam', government:'k'},
        {value:'can', government:'k'},
        {value:'cas', government:'r'},
        {value:'casp', government:'r'},
        {value:'chi', government:'c'},
        {value:'daes', government:'k'},
        {value:'div', government:'r'},
        {value:'dwar', government:'k'},
        {value:'elv', government:'r'},
        {value:'es', government:'r'},
        {value:'eth', government:'k'},
        {value:'eva', government:'r'},
        {value:'evan', government:'k'},
        {value:'ever', government:'c'},
        {value:'fan', government:'r'},
        {value:'far', government:'r'},
        {value:'fay', government:'k'},
        {value:'fel', government:'k'},
        {value:'fon', government:'c'},
        {value:'fut', government:'r'},
        {value:'ga', government:'t'},
        {value:'gen', government:'c'},
        {value:'gha', government:'c'},
        {value:'gor', government:'k'},
        {value:'hel', government:'k'},
        {value:'hest', government:'r'},
        {value:'hon', government:'c'},
        {value:'ik', government:'k'},
        {value:'il', government:'r'},
        {value:'ind', government:'k'},
        {value:'ish', government:'t'},
        {value:'ist', government:'c'},
        {value:'ing', government:'r'},
        {value:'kri', government:'r'},
        {value:'kur', government:'t'},
        {value:'ky', government:'t'},
        {value:'nar', government:'r'},
        {value:'nida', government:'t'},
        {value:'pen', government:'r'},
        {value:'phe', government:'r'},
        {value:'pun', government:'c'},
        {value:'que', government:'r'},
        {value:'qui', government:'c'},
        {value:'rus', government:'c'},
        {value:'run', government:'r'},
        {value:'ta', government:'k'},
        {value:'tar', government:'t'},
        {value:'tre', government:'r'},
        {value:'tri', government:'k'},
        {value:'tsu', government:'k'},
        {value:'ult', government:'c'},
        {value:'ut', government:'c'},
        {value:'zel', government:'t'},
        {value:'zem', government:'t'},
        {value:'zo', government:'c'},
        {value:'zu', government:'t'}
    ]},
    {canSkip:true, skipChance:2, values:[
        {value:'al'},
        {value:'ar'},
        {value:'bos', government:'t'},
        {value:'cha'},
        {value:'chi', government:'c'},
        {value:'din', government:'k'},
        {value:'do'},
        {value:'du', government:'t'},
        {value:'el'},
        {value:'elum', government:'k'},
        {value:'elus', government:'k'},
        {value:'em'},
        {value:'emb'},
        {value:'en'},
        {value:'end'},
        {value:'er'},
        {value:'fel', government:'k'},
        {value:'ira'},
        {value:'sha'},
        {value:'shan', government:'c'},
        {value:'shi', government:'c'},
        {value:'olen', government:'r'},
        {value:'or'},
        {value:'win', government:'k'},
    ]},
    {canSkip:true, skipChance:10, values:[
        {value:'a'},
        {value:'ar'},
        {value:'ba'},
        {value:'bi'},
        {value:'ca', government:'r'},
        {value:'cia', government:'r'},
        {value:'ia', government:'k'},
        {value:'ira'},
        {value:'is'},
        {value:'gard', government:'k'},
        {value:'heim', government:'k'},
        {value:'helm', government:'k'},
        {value:'lor', government:'k'},
        {value:'mond', government:'k'},
        {value:'nia', government:'k'},
        {value:'tan', government:'r'},
        {value:'va'},
        {value:'via'},
        {value:'ya'}
    ]}
];
var rnd = {
    number: (min, max) => {
        return Math.round(min + (Math.random() * max));
    },
    bool: (chance) => {
        return rnd.number(0, chance) === 1;
    },
    name: (parts) => {
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
                        chat.talk('What would you like to do? Save? Load? Go back to your game?');
                        chat.listen((answer) => {
                            if(chat.verify(answer, 'save')){
                                game.save();
                                chat.talk('Saving. . .  .  .  .   .   .   .   Done.', () => {
                                    chat.exit();
                                    chat.talk('You are now back in the game.');
                                });
                            }else if(chat.verify(answer, 'load')){
                                chat.talk('Okay.', () => { game.load();});
                            }else if(chat.verify(answer, 'back')){
                                chat.exit();
                                chat.talk('You are now back in the game.');
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
                    var commands = [
                        {value: 'new world', callback: () => {story.world = (new world()).generate(); chat.talk(story.world.kingdoms.map(a => a.name).join(', ')); console.log(story.world);}},
                        {value: 'back', callback: () => {chat.exit(); chat.talk('You are now back in the game.');}}
                    ]
                    chat.talk('Here is a list of known debug commands: ' + commands.map(a => a.value).join(', ') + '.');
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
world.prototype.generate = (homeworld) => {
    var w = new world();
    w.date = {
        year:rnd.number(1, 9999),
        type:'',
        months: rnd.number(4,30),
        days:rnd.number(250, 999),
    };
    w.planet = '';
    w.kingdoms = [];
    for(var x = 1; x < rnd.number(1, 99);x++){
        //generate kingdoms
        var i = 0;
        while(i < 5){
            var chosen = rnd.name(names.kingdoms);
            var name = str.capitalize(chosen.name);
            if(name.length >= 3 && w.kingdoms.map(a => a.name).indexOf(name) < 0){
                //create kingdom object
                var kingdom = {name:name};
                for(var y = 0; y < chosen.values.length; y++){
                    //collect attributes from name parts related to kingdom
                    var val = chosen.values[y];
                    var choice = names.kingdoms[val.part].values[val.index];
                    var attrs = Object.getOwnPropertyNames(choice).filter(a => a != 'value');
                    for(var z = 0; z < attrs.length; z++){
                        var attr = attrs[z];
                        kingdom[attr] = choice[attr];
                    }
                }
                w.kingdoms.push(kingdom);
                break;
            }
            i++;
        }
    }
    //choose home kingdom
    if(homeworld !== false && w.kingdoms.length > 0){
        w.kingdoms[rnd.number(0, w.kingdoms.length - 1)].home = true;
    }
    return w;
}
world.prototype.load = (w) => {
    var w = new world();
    w.date = w.date;
    w.planet = w.planet;
    w.kingdoms = w.kingdoms;
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
  answer:'',
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
  talk: (speak, callback, noanim) => {
    //talk to the user
    chat.newline = document.createElement('div');
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
      chat.talk(response, null, true);
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
  }
});

chat.start();