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