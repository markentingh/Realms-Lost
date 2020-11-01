var world = function(){};
world.prototype.generate = () => {
    this.date = {
        year:rnd.number(1, 9999),
        type:'',
        months: rnd.number(4,30),
        days:rnd.number(250, 999),
    };
    this.planet = '';
    this.kingdoms = '';
}
world.prototype.load = (w) => {
    this.date = w.date;
    this.planet = w.planet;
    this.kingdoms = w.kingdoms;
}