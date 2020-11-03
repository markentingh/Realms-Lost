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