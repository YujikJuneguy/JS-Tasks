let name =prompt('Please type you name');
let gender =prompt('R u girl or boy ');
let age  =prompt('Please type your age');


if (gender === 'boy') {
    document.write (`You are inveted to the party Mr ${name}`)
}else if (gender === 'girl') {
    document.write (`You are inveted to the party Ms ${name}`)
}
if (age < 18) {
    alert ('Sorry you have no access to this Party')
}
