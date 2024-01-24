
let buttons = document.querySelectorAll("button");

buttons.forEach((btn,index) => { 
    btn.addEventListener("click",() =>{
        console.log("hello");
        window.open("index-2.html","blank");
        let json = JSON.stringify(obj[index])
        localStorage.setItem("obj",json);
    });
});

let obj = [
    {
        username : "sachin",
        userID : "DC001",
        profession : "Backend Developer",
        review : "A good concluding sentence brings a paragraph to a polished end. It may give a summary of the main topic, a concluding sentence also gives a final take on the topic and leaves the reader with complete information. "
    },
    {
        username : "Tendulkar",
        userID : "DC002",
        profession : "Frontend Developer",
        review : "A good concluding sentence brings a paragraph to a polished end. It may give a summary of the main topic, a concluding sentence also gives a final take on the topic and leaves the reader with complete information. "
    },

    {
        username : "Babisima",
        userID : "DC003",
        profession : "Fullstack Developer",
        review : "A good concluding sentence brings a paragraph to a polished end. It may give a summary of the main topic, a concluding sentence also gives a final take on the topic and leaves the reader with complete information. "
    },
]