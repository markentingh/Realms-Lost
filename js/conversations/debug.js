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