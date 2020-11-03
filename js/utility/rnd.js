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