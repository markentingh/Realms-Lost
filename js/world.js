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