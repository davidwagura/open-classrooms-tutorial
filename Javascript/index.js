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

let numberOfGuests = 20;

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