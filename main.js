let burgerIcon = document.querySelector(".burger");
let bodyEle = document.body;

let ul = document.querySelector("ul.links");
let li = [...document.querySelectorAll("ul.links li")];
let a = [...document.querySelectorAll("ul.links li a")];

burgerIcon.onclick = () => {
    ul.classList.toggle("clicked");
}

bodyEle.onclick = (e) => {
    if(e.target !== burgerIcon && e.target !== ul && !(li.includes(e.target)) && !(a.includes(e.target))){
        ul.classList.remove("clicked");
    }
}

let users = [
    {
        id: 1,
        username: "Ali Omar",
        img: "assets/avatar-01.png",
        msg: "Tailwind CSS is bridging the gap between design systems and products. It's becoming the defacto API for styling",
    },
    {
        id: 2,
        username: "Mahmoud Ahmed",
        img: "assets/avatar-02.png",
        msg: "There's one thing that sucks about @tailwindcss - once you've used it on a handful of projects it is a real pain to write CSS again",
    },
    {
        id: 3,
        username: "Ammar Yasser",
        img: "assets/avatar-03.png",
        msg: "Okay, I'm officially *all* in on the @tailwindcss hype train. Never thought building websites could be so ridiculously fast and flexible."
    },
]

let usersUI = users.forEach((user) => {
    let card = document.createElement("div");
    card.className="card";
    let img = document.createElement("img");
    let heading = document.createElement("h2");
    let headingText = document.createTextNode(user.username);
    heading.appendChild(headingText);
    let p = document.createElement("p");
    let text = document.createTextNode(user.msg);
    p.appendChild(text);

    img.src=user.img;

    let testimonialsContent = document.querySelector(".testimonials .container .content");

    card.append(img, heading, p);
    testimonialsContent.append(card);

    card.style.cssText= "border-radius: 10px; margin-top: 50px ;padding: 30px; background-color: #3b82f6; position:relative; text-align:center;";
    img.style.cssText= "position:absolute; top:0; left:50%; translate: -50% -50%; width:70px; height:70px; border:10px solid rgb(59, 130, 246);; border-radius: 50%";
    heading.style.cssText = "font-weight: bold; font-size: 2rem; color: white";
    p.style.cssText = "font-size: 1.1rem; color: white";
});

let themeBtn = document.querySelector(".darkBtn");


themeBtn.onclick = ()=>{
    document.documentElement.classList.toggle("dark");
    themeBtn.classList.toggle("fa-sun");
    themeBtn.classList.toggle("fa-moon");
    if(document.documentElement.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme")==="dark"){
    document.documentElement.classList.add("dark");
}