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