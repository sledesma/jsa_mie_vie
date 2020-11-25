class Collection {

    constructor() {
        this.items = [];
    }

    add(item) { this.items.push(item); return this; }

    addAll(items) { items.forEach(item => this.add(item)); return this; }

    each(callback) { this.items.forEach(callback); return this; }

    map(callback) { this.items = this.items.map(callback); return this; }

    reduce(callback) { this.items = this.items.reduce(callback); return this; }

    log() { console.log(this.items); return this; }

    json() { return JSON.stringify(this.items); }

}

const data = 
    (new Collection())
    .addAll([ 1, 2, 5, 6, 7 ])
    .map(function(item, index){
        return {
            item,
            index
        }
    })
    .json();

console.log(data);