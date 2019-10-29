const user = {
    firstName: 'John', // string
    lastName: 'Doe', // string
    rate: 0.86, // number in range 0..1
    address: { // not empty object or null
        line1: '15 Macon St', // string
        line2: '', // string
        city: 'Gotham' // string
    },
    phoneNumbers: [ // array containing at least 1 element
        {
            type: 'MOBILE', // string, limited to MOBILE | LINE | VOIP
            number: '(555) 555-1234' // string in specific format
        },
        {
            type: 'LINE',
            number: '(555) 555-5678'
        }
    ]
};

function type(value) {
    let regex = /^\[object (\S+?)\]$/;
    let matches = Object.prototype.toString.call(value).match(regex) || [];

    return (matches[1] || 'undefined').toLowerCase();
}

console.log(type(user.firstName));
console.log(type(user.lastName));
console.log(type(user.rate));

console.log(type(user.address.line1));
console.log(type(user.address.line2));
console.log(type(user.address.city));

console.log(type(user.phoneNumbers));
console.log(type(user.phoneNumbers[0].type));
console.log(type(user.phoneNumbers[0].number));
console.log(type(user.phoneNumbers[1].type));
console.log(type(user.phoneNumbers[1].number));
