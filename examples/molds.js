var molds = [];
molds.push({
    teste: '[5]bool',
    name: 'text:1',
    email: 'email',
    about: 'text:2',
    birthday: 'date:1980;2000',
    avatar: 'word:20',
    location:{
        lat: 'decimal:3;10;100', 
        lng: 'decimal:3;10;100'
    }
});

module.exports = molds;