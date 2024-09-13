// Map in Js

let map = new Map()

map.set('fruits', 'Bananna');
map.set('Vegitable', 'Tomato');
map.set('Items','Rice');

console.log(map);
console.log(map.set('Dairy', 'Milk'));
console.log(map);
console.log(map.get('Items'));
console.log(map.delete('Dairy'));
console.log(map);
console.log(map.has('Vegitable'));

// Call(), Apply(), Bind() Methods

let Address={
    Flatno : 419,
    Locality : "Banner",
    City : "Pune" 
}

let fulladdress=function(State, Country)
{
    console.log(this.Flatno +"," + this.Locality+","+ this.City+"," +State+"," +Country)
}

let Address2={
    Flatno : 420,
    Locality : "IDSMT Layout",
    City : "Raichur" 
}

fulladdress.call(Address, 'Maharastra','India');
fulladdress.call(Address2, 'Karnataka','India');
fulladdress.apply(Address,['Maharastra','India']);
fulladdress.apply(Address2,['Karnataka','India']);

let address1=fulladdress.bind(Address2,['Karnataka','India']);
// console.log(address1);
address1();