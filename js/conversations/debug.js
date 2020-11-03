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