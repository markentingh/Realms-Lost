/* 
// kingdom attributes:
// culture (0, 100)
// economy (0, 100)
// military (0, 100)
// technology (0, 100),
// type ('r' = republic, 'c' = communist, 't' = tribal, 'a' = anarchy, 'k' = kingdom/royalty) (t.r.a.c.k.)
// education (0, 100)
// religion (0, 100)
// farming (0, 100)
// diplomacy (0, 100) (0 = hostile, 100 = peaceful)
// artistry (0, 100)
// crafting (0, 100)
// cooking (0, 100)
*/
names.countries = {
    republic: [
        {values:[
            {value:'ab'},
            {value:'ac'},
            {value:'al'},
            {value:'alt'},
            {value:'am', military:10},
            {value:'as'},
            {value:'at'},
            {value:'bal'},
            {value:'bar', military:-20},
            {value:'bed'},
            {value:'bel'},
            {value:'bis'},
            {value:'bor', military:-25},
            {value:'bri'},
            {value:'cam'},
            {value:'can', military:-10},
            {value:'cas'},
            {value:'casp'},
            {value:'div'},
            {value:'es'},
            {value:'eth'},
            {value:'eva'},
            {value:'fan'},
            {value:'far'},
            {value:'ga'},
            {value:'gen'},
            {value:'hel'},
            {value:'hest'},
            {value:'hon'},
            {value:'il'},
            {value:'ind', military:-10},
            {value:'ken', military:-10},
            {value:'na'},
            {value:'nev'},
            {value:'nid'},
            {value:'pen'},
            {value:'rus', military:10},
            {value:'run'},
            {value:'ta'},
            {value:'tar', military:-20},
            {value:'tre'},
            {value:'tri'},
            {value:'ul', military:-20},
            {value:'zo', military:-20}
        ]},
        {canSkip:true, skipChance:4, values:[
            {value:'al'},
            {value:'ar'},
            {value:'ban'},
            {value:'da'},
            {value:'den'},
            {value:'el'},
            {value:'em'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'sha'},
            {value:'or'},
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'bi'},
            {value:'ca'},
            {value:'ce'},
            {value:'cia'},
            {value:'da'},
            {value:'den'},
            {value:'era'},
            {value:'la'},
            {value:'land'},
            {value:'gra'},
            {value:'ia'},
            {value:'ira'},
            {value:'is'},
            {value:'isa'},
            {value:'nia'},
            {value:'tan'},
            {value:'tia'},
            {value:'va'},
            {value:'via'},
            {value:'ya'}
        ]}
    ],

    kingdom: [
        {values:[
            {value:'ab'},
            {value:'aben'},
            {value:'ac'},
            {value:'adr'},
            {value:'al'},
            {value:'alt'},
            {value:'am'},
            {value:'as'},
            {value:'at'},
            {value:'bael'},
            {value:'bal'},
            {value:'bar'},
            {value:'bed'},
            {value:'bel'},
            {value:'bik'},
            {value:'bin'},
            {value:'bis'},
            {value:'bor'},
            {value:'bri'},
            {value:'cam'},
            {value:'can'},
            {value:'cas'},
            {value:'casp'},
            {value:'chi'},
            {value:'daes'},
            {value:'div'},
            {value:'dwar'},
            {value:'elv'},
            {value:'es'},
            {value:'eth'},
            {value:'eva'},
            {value:'evan'},
            {value:'ever'},
            {value:'fan'},
            {value:'far'},
            {value:'fay'},
            {value:'fel'},
            {value:'fon'},
            {value:'fut'},
            {value:'ga'},
            {value:'gen'},
            {value:'gha'},
            {value:'gor'},
            {value:'hel'},
            {value:'hest'},
            {value:'hon'},
            {value:'ik'},
            {value:'il'},
            {value:'ind'},
            {value:'kur'},
            {value:'ky'},
            {value:'nar'},
            {value:'nida'},
            {value:'pen'},
            {value:'phel'},
            {value:'phen'},
            {value:'pun'},
            {value:'run'},
            {value:'ta'},
            {value:'tar'},
            {value:'tre'},
            {value:'tri'},
            {value:'tsu'},
            {value:'ul'},
            {value:'zel'}
        ]},
        {canSkip:true, skipChance:2, values:[
            {value:'al'},
            {value:'ar'},
            {value:'din'},
            {value:'elum'},
            {value:'elus'},
            {value:'em'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'ira'},
            {value:'len'},
            {value:'la'},
            {value:'lan'},
            {value:'mar'},
            {value:'nar'},
            {value:'nor'},
            {value:'t'},
            {value:'te'},
            {value:'tal'},
            {value:'or'},
            {value:'volen'}
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'ca'},
            {value:'cia'},
            {value:'ia'},
            {value:'ira'},
            {value:'is'},
            {value:'gard'},
            {value:'heim'},
            {value:'helm'},
            {value:'lor'},
            {value:'mond'},
            {value:'nia'},
            {value:'tia'},
            {value:'va'},
            {value:'via'},
            {value:'ya'}
        ]}
    ],

    communist: [
        {values:[
            {value:'ab'},
            {value:'aben'},
            {value:'ac'},
            {value:'adr'},
            {value:'al'},
            {value:'am'},
            {value:'as'},
            {value:'bal'},
            {value:'bar'},
            {value:'bed'},
            {value:'bel'},
            {value:'bik'},
            {value:'bin'},
            {value:'bis'},
            {value:'bor'},
            {value:'bri'},
            {value:'cam'},
            {value:'can'},
            {value:'cas'},
            {value:'chin'},
            {value:'div'},
            {value:'el'},
            {value:'es'},
            {value:'eva'},
            {value:'evan'},
            {value:'fa'},
            {value:'far'},
            {value:'fel'},
            {value:'fon'},
            {value:'fut'},
            {value:'ga'},
            {value:'gen'},
            {value:'gha'},
            {value:'gor'},
            {value:'hel'},
            {value:'hest'},
            {value:'hon'},
            {value:'ik'},
            {value:'il'},
            {value:'ind'},
            {value:'ish'},
            {value:'ist'},
            {value:'ing'},
            {value:'kri'},
            {value:'kur'},
            {value:'ky'},
            {value:'nar'},
            {value:'pen'},
            {value:'phe'},
            {value:'pun'},
            {value:'que'},
            {value:'qui'},
            {value:'rus'},
            {value:'ta'},
            {value:'tar'},
            {value:'tre'},
            {value:'tri'}
        ]},
        {canSkip:true, skipChance:2, values:[
            {value:'al'},
            {value:'ar'},
            {value:'bos'},
            {value:'cha'},
            {value:'din'},
            {value:'do'},
            {value:'don'},
            {value:'doni'},
            {value:'du'},
            {value:'el'},
            {value:'em'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'ira'},
            {value:'sha'},
            {value:'shi'},
            {value:'or'}
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'bi'},
            {value:'ca'},
            {value:'cia'},
            {value:'ia'},
            {value:'ira'},
            {value:'isa'},
            {value:'nia'},
            {value:'na'},
            {value:'sia'},
            {value:'tan'},
            {value:'va'},
            {value:'via'},
            {value:'ya'}
        ]}
    ],

    tribal: [
        {values:[
            {value:'ab'},
            {value:'ac'},
            {value:'adr'},
            {value:'af'},
            {value:'al'},
            {value:'am'},
            {value:'as'},
            {value:'bal'},
            {value:'bar'},
            {value:'bed'},
            {value:'bel'},
            {value:'bik'},
            {value:'bin'},
            {value:'bis'},
            {value:'bor'},
            {value:'bri'},
            {value:'cam'},
            {value:'can'},
            {value:'cas'},
            {value:'div'},
            {value:'es'},
            {value:'ev'},
            {value:'far'},
            {value:'fay'},
            {value:'fel'},
            {value:'fon'},
            {value:'fut'},
            {value:'ga'},
            {value:'gen'},
            {value:'gha'},
            {value:'gor'},
            {value:'hel'},
            {value:'hon'},
            {value:'ik'},
            {value:'il'},
            {value:'indi'},
            {value:'ish'},
            {value:'ist'},
            {value:'ing'},
            {value:'ke'},
            {value:'kri'},
            {value:'ku'},
            {value:'ky'},
            {value:'nar'},
            {value:'pen'},
            {value:'pun'},
            {value:'run'},
            {value:'ta'},
            {value:'tar'},
            {value:'tre'},
            {value:'tri'},
            {value:'tsu'},
            {value:'ult'},
            {value:'ut'},
            {value:'zel'},
            {value:'zem'},
            {value:'zo'},
            {value:'zu'}
        ]},
        {canSkip:true, skipChance:2, values:[
            {value:'al'},
            {value:'ar'},
            {value:'bos'},
            {value:'cha'},
            {value:'chi'},
            {value:'din'},
            {value:'do'},
            {value:'du'},
            {value:'el'},
            {value:'em'},
            {value:'emb'},
            {value:'en'},
            {value:'end'},
            {value:'er'},
            {value:'fel'},
            {value:'ira'},
            {value:'ric'},
            {value:'sha'},
            {value:'shan'},
            {value:'shi'},
            {value:'or'}
        ]},
        {canSkip:true, skipChance:10, values:[
            {value:'a'},
            {value:'ar'},
            {value:'ba'},
            {value:'bi'},
            {value:'ca'},
            {value:'den'},
            {value:'ira'},
            {value:'is'},
            {value:'la'},
            {value:'len'},
            {value:'li'},
            {value:'na'},
            {value:'tan'},
            {value:'va'},
            {value:'ya'}
        ]}
    ]
};