//objects
let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};

//accesing an object's data
let  bookTitle = myBook.title;
let bookPages = myBook.numberOfPages;

//creating a class in JavaScript
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
//creating a new instance
let newPublished = new Book('The Story of Tau', 'Will Alexander', 250);


//using an array to store an ordered list
let guests = ['Sarah Kate', 'Audrey Simon', 'Will Alexander'];

let firstGuest = guests[0];
let thirdGuest = guests[2];
let undefinedGuest = guests[12];

//values vs reference
//numbers,booleans,strings

// let numberOfGuests = 20;

let totalNumberOfGuest = numberOfGuests;


//array are passed with reference

let artistProfile = {
    name: 'John Doe',
    age: 27,
    available: true
};

let allProfiles = [artistProfile];

artistProfile.available = false;

console.log(allProfiles)

//working with arrays .....counting elements

let guest = ['Will Alexander', 'Sarah Kate', 'Audrey Simon'];
let howManyGuest = guest.length;

//adding and removing elements
//(we use push to add)

guest.push('John Doe');
//to add at the beginning use (unshift)
guest.unshift('Jonh White');

//removing the last element of an array(pop)
guest.pop();

//if/else statements bollean
// let userLoggedIn = true;

if(userLoggedIn)  {
    console.log('User logged in!');
} else {
    console.log('Intruder alert!');
}
//using comparative expressions

// const numberOfSeats = 30;
let numberOfPeople = 25;

if (numberOfPeople < numberOfSeats) {
    //aallow more guest
} else {
    //do not allow more guest   
}

//reacting to multiple potential conditions

if (numberOfPeople == numberOfSeats) {
    //all seats are taken
} else if (numberOfPeople < numberOfSeats) {
    //allow more guests
} else {
    //do not allow more guests
}

//multiple conditions
// let userLoggedIn = true;
// let userHasPremiumAccount = true;
// let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; //true
userLoggedIn && userHasMegaPremiumAccount; //false

userLoggedIn || userHasPremiumAccount; //true
userLoggedIn || userHasMegaPremiumAccount; //true

!userLoggedIn; //false
!userHasMegaPremiumAccount; //true

//variable scooping
let userLo0ggedIn = true;
let welcomeMessage = ''; //declare the variable here

if (userLoggedIn) {
    let welcomeMessage = 'welcome back!';
} else {
    let welcomeMessage = 'welcome new user!'
}

console.log(welcomeMessage); //throws an error

//switch statements
let firstUser = {
    name: 'Will Alexander',
    age: 33,
    accountLevel: 'normal'
};

let secondUser = {
    name: 'Sarah Kate',
    age: 21,
    accountLevel: 'premium'
};

let thirdUser = {
    name: 'Audrey Simon',
    age: 27,
    accountLevel: 'mega-premium'
};

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}

//if/else statement to control your program flow

if (myBoolean) {
    // react to myBoolean being true
} else {
    // react to myBoolean being false
}

// let userLoggedIn = true;

if (userLoggedIn) {
    console.log('User logged in!');
} else {
    console.log('Intruder alert!');
}

//using expressions
const numberOfSeats = 30;
let numberOfGuests = 25;

if (numberOfGuests < numberOfSeats) {
    // allow more guests
} else {
    // do not allow any more guests
}
//chain  if /else  statements to react to multiple potential conditions
if (numberOfGuests == numberOfSeats) {
    // all seats are taken
} else if (numberOfGuests < numberOfSeats) {
    // allow more guests
} else {
    // do not allow any more guests
}


//multiple conditions
let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || userHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true


//variable scooping////block scooping
let userLoggedIn1 = true;

if (userLoggedIn1) {
    let welcomeMessage = 'Welcome back!';
} else {
    let welcomeMessage = 'Welcome new user!';
}

console.log(welcomeMessage); // throws an error

//while loop
let seatsLeft = 10;
let passagersStillToBoard = 8;

let passagersBoarded = 0;

while (seatsLeft > 0 && passagersStillToBoard > 0) {

    passagersBoarded++;//one passager boards
    passagersStillToBoard--; //so there is one fewer still to board
    seatsLeft--; //and one fewer seat

}

console.log(passagersBoarded); //prints 8, as there are 8 

//manage errors------syntax and logic errors

// logic --arise when you have a mistake in your program logic
// syntax --when you have miswritten something in your code
// runtime --when something unexpected happens in your app eg network connections,physical devices,human input/error etc

//Ways of handling potential errors ---use of if/else

if (dataExist && dataIsValid) {
    //use data here
} else {
    //handle error here
}

//use of ---try / catch

try {
    //error-prone code here
} catch {
    //react to error here
}






//FUNCTIONS
const add = (firstNumber , secondNumber) => {
    const result = firstNumber + secondNumber;
    return result;
}

console.log(add(4,3));

//Array  object functions


///empowering classes with instance methods

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

//create an instance of this class called newAccount

const newAccount = new BankAccount('Will Alexander', 500); 

//newAccountBallance

class BamkAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    showBalance() {
        console.log('Balance: ' + this.balance + 'EUR');
    }
}

const newAccount = new BankAccount('Will Alexander', 500);

newAccount.showBalance();