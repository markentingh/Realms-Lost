var rnd = {
    number: (min, max) => {
        return Math.round(min + (Math.random() * max));
    },
    kingdom: () => {
        
    }
}
var nav = {
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
    },
    start:{
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
    }
}
var world = function(){};
world.prototype.generate = () => {
    this.date = {
        year:rnd.number(1, 9999),
        type:'',
        months: rnd.number(4,30),
        days:rnd.number(250, 999),
    };
    this.planet = '';
    this.kingdoms = '';
}
world.prototype.load = (w) => {
    this.date = w.date;
    this.planet = w.planet;
    this.kingdoms = w.kingdoms;
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
var chat = {
  div:document.getElementsByClassName('chat')[0],
  newline:null,
  chapter:null,
  dialog:null, //current dialog tree to follow during conversation
  conversations:[nav.menu.dialog], //global conversations that the user can start at any time
  speaking:'',
  answer:'',
  callback:null,

  start:() => {
    chat.chapter = nav.start;
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
    console.log(typeof chat.animate.callback);
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
        console.log('respond!');
        chat.respond();
        return;
      }
      chat.newline.innerHTML = chat.speaking.substr(0, progress);
      chat.animate.timer = setTimeout(() => {chat.animate.go(callback);}, 1000 / 25);  
    },
  }
}

var game = {
  index:0,
  new:() => {

  },
  save:() => {
    window.localStorage.setItem('save-' + game.index, {
      world:world,
      party:party
    });
  },
  load:() => {
    var data = window.localStorage.getItem('save-' + game.index);
    if(data != null && data.world != null){
      world.load(data.world);
      chat.talk('You are now being transported to   .   .   .   the ' + kingdom + ' kingdom');
    }
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
          chat.next();
        });
      }
  }
});

chat.start();