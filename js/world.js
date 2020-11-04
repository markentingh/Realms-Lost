var world = function(){};
world.prototype.generate = (opts) => {
    var w = new world();
    w.date = {
        year:rnd.number(1, 9999),
        type:'',
        months: rnd.number(4,30),
        days:rnd.number(250, 999),
    };
    w.planet = '';
    w.countries = [];
    var rand = rnd.number(0, 27);
    //start with republic-centric world
    var worldgov = 'r'; 
    if(rand > 10 && rand < 20){
        //create kingdom-centric world
        worldgov = 'k';
    }else if(rand >= 20 && rand < 25){
        //create communist-centric world
        worldgov = 'c';
    }else if(rand >= 25 && rand < 27){
        //create tribal-centric world
        worldgov = 't';
    }else if(rand >= 27){
        //create anarchy-centric world
        worldgov = 'a';
    }
    if(opts && opts.govtype != null && opts.govtype != ''){worldgov = opts.govtype;}

    //set up bad character groupings replacements
    var charReplacements = [['dsh', 'sh'], ['thb', 'th'], ['thd', 'thid'], ['cv', 'v'], ['eerl', 'eel'], ['rer', 're'], ['ndv', 'nv'], ['tae', 'te'], ['db', 'd'],
        ['gae', 'ga'], ['nb', 'n'], ['rgr', 'gr'], ['mbm', 'm'], ['bm', 'm'], ['lel', 'le'], ['mci', 'meci'], ['drth', 'dreth'], ['spd', 'sp'], ['spb', 'sp'],
        ['chie', 'chi'], ['bc', 'b'], ['aia', 'ia'], ['ngr', 'gr'], ['arar', 'ar'], ['ndc', 'nd'], ['tsh', 'sh'], ['rira', 'ria'], ['rie', 'ri'], ['mbv', 'mv'],
        ['vb', 'v'], ['fb', 'b'], ['penis', 'pen'], ['enen', 'en'], ['ndl', 'nl'], ['eneme', 'ene'], ['emene', 'eme'], ['ndt', 'nt'], ['thth', 'th'], ['chch', 'ch'],
        ['uer', 'ur'], ['arnar', 'arna'], ['mgr', 'gr'], ['rir', 'ir'], ['oir', 'or']];

    for(var x = 97; x <= 122; x++){
        var c = String.fromCharCode(x);
        if([101].indexOf(x) >= 0){
            //find three characters
            charReplacements.push([c + c + c, c + c]);
        }else{
            //find two characters
            charReplacements.push([c + c, c]);
        }
    }
    
    for(var x = 1; x < rnd.number(1, 99);x++){
        //generate countries
        var i = 0;
        rand = rnd.number(1, 100);
        //create country object
        var country = {name:'', type:worldgov};
        //determine government type
        var countrytype = worldgov == 'r' ? names.countries.republic : 
            worldgov == 'k' ? names.countries.kingdom :
            worldgov == 'c' ? names.countries.communist :
            names.countries.tribal;
        var anarchy = false;
        switch(worldgov){
            case 'r':
                //select government type for a republic-centric world
                anarchy = rnd.bool(20);
                if(rand >= 65 && rand < 85){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 85 && rand < 95){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 95){
                    countrytype = names.countries.tribal;
                    country.type = 't';
                    anarchy = true;
                }
                break;
            case 'k':
                //select government type for a kingdom-centric world
                anarchy = rnd.bool(8);
                if(rand >= 75 && rand < 80){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                    anarchy = rnd.bool(20);
                }else if(rand >= 80 && rand < 83){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 83){
                    countrytype = names.countries.tribal;
                    country.type = 't';
                    anarchy = true;
                }
                break;
            case 'c':
                //select government type for a communist-centric world
                if(rand >= 75 && rand < 90){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 90 && rand < 93){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                }else if(rand >= 93){
                    countrytype = names.countries.tribal;
                    country.type = 't';
                }
                break;
            case 't':
                //select government type for a tribal-centric world
                if(rand >= 90 && rand < 95){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 95 && rand < 99){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 99){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                }
                anarchy = !rnd.bool(4);
                break;
            case 'a':
                //select government type for a anarchy-centric world
                country.type = 't';
                if(rand >= 25 && rand < 50){
                    countrytype = names.countries.kingdom;
                    country.type = 'k';
                }else if(rand >= 50 && rand < 75){
                    countrytype = names.countries.communist;
                    country.type = 'c';
                }else if(rand >= 75){
                    countrytype = names.countries.republic;
                    country.type = 'r';
                }
                anarchy = !rnd.bool(25);
                break;
        }
        switch(country.type){
            case 'r':
                country.culture = 50 + rnd.number(-10, 10);
                country.economy = 75 + rnd.number(-20, 10);
                country.military = 80 + rnd.number(-40, 0);
                country.technology = 80 + rnd.number(-20, 10);
                country.education = 80 + rnd.number(-20, 10);
                country.religion = 50 + rnd.number(-25, 25);
                country.farming = 50;
                country.diplomacy = 75 + rnd.number(-25, 10);
                country.artistry = 75 + rnd.number(-50, 10);
                country.crafting = 75 + rnd.number(-25, 10);
                country.cooking = 50 + rnd.number(-10, 30);
                break;
            case 'k':
                country.culture = 75 + rnd.number(-10, 15);
                country.economy = 40 + rnd.number(-10, 30);
                country.military = 50 + rnd.number(-10, 30);
                country.technology = 50 + rnd.number(-10, 30);
                country.education = 50 + rnd.number(-10, 20);
                country.religion = 75 + rnd.number(-10, 15);
                country.farming = 50;
                country.diplomacy = 50 + rnd.number(-35, 15);
                country.artistry = 75 + rnd.number(-30, 15);
                country.crafting = 60 + rnd.number(-10, 15);
                country.cooking = 60 + rnd.number(-30, 15);
                break;
            case 'c':
                country.culture = 25 + rnd.number(-15, 15);
                country.economy = 80 + rnd.number(-30, 5);
                country.military = 80 + rnd.number(-30, 5);
                country.technology = 80 + rnd.number(-30, 10);
                country.education = 60 + rnd.number(-30, 15);
                country.religion = 25 + rnd.number(-10, 15);
                country.farming = 50;
                country.diplomacy = 40 + rnd.number(-20, 25);
                country.artistry = 75 + rnd.number(-40, 10);
                country.crafting = 75 + rnd.number(-10, 10);
                country.cooking = 50 + rnd.number(-10, 35);
                break;
            case 't':
                country.culture = 75 + rnd.number(-25, 15);
                country.economy = 15 + rnd.number(-5, 25);
                country.military = 15 + rnd.number(-10, 15);
                country.technology = 10 + rnd.number(0, 25);
                country.education = 25 + rnd.number(-10, 15);
                country.religion = 75 + rnd.number(-20, 15);
                country.farming = 15;
                country.diplomacy = 10 + rnd.number(-5, 25);
                country.artistry = 40 + rnd.number(-30, 15);
                country.crafting = 25 + rnd.number(-15, 15);
                country.cooking = 25 + rnd.number(-15, 15);
                break;
        }
        //get country name and any custom attributes
        while(i < 5){
            var chosen = rnd.name(countrytype, charReplacements);
            var name = str.capitalize(chosen.name);
            if(name.length > 3 && w.countries.map(a => a.name).indexOf(name) < 0){
                country.name = name;
                country.anarchy = anarchy;
                for(var y = 0; y < chosen.values.length; y++){
                    //collect attributes from name parts related to country
                    var val = chosen.values[y];
                    var choice = countrytype[val.part].values[val.index];
                    var attrs = Object.getOwnPropertyNames(choice).filter(a => a != 'value');
                    for(var z = 0; z < attrs.length; z++){
                        var attr = attrs[z];
                        if(country[attr] != null && !isNaN(country[attr])){
                            country[attr] += choice[attr];
                        }else{
                            country[attr] = choice[attr];
                        }
                    }
                }
                break;
            }
            i++;
        }
        w.countries.push(country);
    }
    //choose home country
    if(opts && opts.homeworld !== false && w.countries.length > 0){
        w.countries[rnd.number(0, w.countries.length - 1)].home = true;
    }
    return w;
}
world.prototype.load = (w) => {
    var w = new world();
    w.date = w.date;
    w.planet = w.planet;
    w.countries = w.countries;
    return w;
}