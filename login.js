


let questions = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. " + "<br/>" + "<br/>" + " You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.  " + "<br/>" + "<br/>" + "  You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. " + "<br/>" + "<br/>" + " Kids profiles come with PIN - protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
];

const footer = [
    { name: "FAQ" },
    { name: "Help Centre" },
    { name: "Account" },
    { name: "Media Centre" },
    { name: "Investor Relations" },
    { name: "Jobs" },
    { name: "Ways to Watch" },
    { name: "Terms of Use" },
    { name: "Privacy" },
    { name: "Cookie Preferences" },
    { name: "Corporate Information" },
    { name: "Contact Us" },
    { name: "Speed Test" },
    { name: "Legal Notices" },
    { name: "Only on Netflix" }
];

let card = "";
questions.map((element, index) => {
    card += `<button class="question" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${index}" aria-expanded="false" aria-controls="collapseExample">
    ${element.question}
    <i class="fa-solid fa-plus"></i>
</button>
<div class="collapse" id="collapseExample${index}">
    <div class="answer">
        ${element.answer}
    </div>
</div>`;
});
document.getElementById("questions").innerHTML = card;

let foot = "";
footer.map(element => {
    foot += `<div class="col-6 col-lg-3 mt-3"><a style="font-weight: 600; color: RGB(255, 255, 255, 0.7); cursor: pointer;" href="#">${element.name}</a></div>`
});
document.getElementById("footer").innerHTML = foot;

document.getElementById("error").style.display = "none"

document.getElementById("submit").addEventListener("click", function () {
    let inp = document.getElementById("floatingInput");
    if (inp.value === "") {
        inp.focus();
        document.getElementById("error").style.display = "block"

    } else {
        localStorage.setItem("name", inp.value)
        if (inp.value.includes("@") == true) {
            window.location.href = 'password.html';
        } else {
            alert("enter your full email")
        }
    }

});