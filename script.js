// Start Mission
function startMission(){
    window.location.href="login.html";
}

// Check Secret Code
function checkCode(){

    let code=document.getElementById("secretCode").value;

    if(code==="super@1202643"){

        alert("✅ Secret Code Correct!");

        window.location.href="q1.html";

    }

    else{

        document.getElementById("error").innerHTML=
        "❌ Incorrect Secret Code!";

    }

}

// Question 1

function checkQ1(){

let ans=document.getElementById("q1answer").value;

ans=ans.toLowerCase().trim();

if(ans=="black" || ans=="Black" || ans== "BLACK"){

alert("✅ Correct Answer!");

window.location.href="q2.html";

}

else{

document.getElementById("error1").innerHTML="❌ Wrong Answer! Try Again.";

}

}

// Question 2

function checkQ2(){

let ans=document.getElementById("q2answer").value.trim();

if(ans=="3"){        // Change 7 to the correct lucky number

alert("✅ Correct!");

window.location.href="q3.html";

}

else{

document.getElementById("error2").innerHTML="❌ Wrong Answer!";

}

}

document.addEventListener("keypress",function(event){

if(event.key==="Enter"){

let page=window.location.pathname;

if(page.includes("q2.html")){

checkQ2();

}

}

});

// Question 3

function checkQ3(){

let ans=document.getElementById("q3answer").value;

ans=ans.toLowerCase().trim();

// Change "super" to the correct nickname
if(ans=="super" || ans=="Super" || ans=="SUPER"){

alert("🎉 Excellent!");

window.location.href="loading.html";

}

else{

document.getElementById("error3").innerHTML="❌ Wrong Answer!";

}

}

function showSurprise(){

document.getElementById("message").style.display="block";

typeMessage();

}

function playMusic(){

document.getElementById("birthdaySong").play();

}

const text =
"🎉 Wishing you a day filled with happiness, laughter, love and unforgettable memories! Happy Birthday! ❤️";

let i = 0;

function typeMessage(){

let box = document.getElementById("typingMessage");

if(i < text.length){

box.innerHTML += text.charAt(i);

i++;

setTimeout(typeMessage,50);

}

}