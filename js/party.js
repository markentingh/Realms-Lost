var party = new function(){
};

party.prototype = {
    load:(p) => {
        for(var x = 0; x < p.length; x++){
            party.push(p[x]);
        }
    },

    push: function (elems) {
        [].push.apply(this, elems);
        return this;
    }
}