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