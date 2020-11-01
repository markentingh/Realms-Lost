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