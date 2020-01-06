this.table = 'global table';

const cleanTable = function() {
    console.log(`cleaning ${this.table}`)
}

this.garage = {
    table: 'garage table'
};

let myRoom = {
    table: 'my table'
};

cleanTable.call(this)
cleanTable.call(this.garage)
cleanTable.call(myRoom)
