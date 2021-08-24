window.onload = () => {
	var q = ["hi","hey","hello","whorichrdstllmn","whojullinssnge","whoedwrdsnowden"]
var re = ["hi","hello","what's up","Richard Stallman is an American Activist and Programmer. He was born on March 16 ,1953. He got interested in computers in a very young age. He used to read manuals of IBM 7094.","Julian was born on 3 July 1971. He studied programming, mathematics, and physics at Central Queensland University in 1994. In 1993, he was involved in starting one of the first public internet service providers in Australia.","Edward was born on June 21, 1983. He is a computer intelligence consultant who leaked highly classified information from the National Security Agency in 2013 when he worked for the Central Intelligence Agency"]
    AOS.init();
    var chat_pop = document.querySelector(".chat-btn")
    chat_pop.addEventListener("click", () => {
        fadeIn(document.querySelector(".chat-card"))
    })
    document.querySelector(".close").addEventListener("click", (e) => {
        fadeOut(document.querySelector(".chat-card"))
        console.log("hi")
    })
     document.addEventListener("keypress",event => {
          
          if(event.which==13){
            send.click()

        }
    })
    send.addEventListener("click", () => {

        console.log(UserInput.value == "/help")
    	if (UserInput.value != ""){
    	var a = q.indexOf( UserInput.value.replace(/\s|a|me|please|can|you|is|ifeel|are|/g, ''))
        append("right", UserInput.value)
        if (UserInput.value == "/help"){
            append("left","You can ask the following - hi,hello,hey,who is richard stallman,who is jullian assange","who is edward snowden")
        }
        UserInput.value = ""
            setTimeout(() => {
        if (a != -1) {
                append("left",re[a])
        }
         
        else {
        	append("left","Sorry, I am afraid , I don't understand you. type /help to get help")

        }
                stat.innerText = "Online";
            }, 1500);
        stat.innerText = "typing..";
    }
    })
    document.addEventListener("scroll",()=>{
    	if (!window.scrollY == 0){

    	document.querySelector(".navbar").classList.add("bg-dark")
    	}
    	else{
    	document.querySelector(".navbar").classList.remove("bg-dark")

    	}
    })
    try{
        var typed = new Typed(".element", {
  strings: [
    "",
    "has right to internet",
    "can use internet for good purposes",
  ],
  typeSpeed: 80,
  backSpeed: 10,
  loop: true,
})
    }
    catch{
    console.log("e")      
    }
    
}

function append(pos, msg) {
    var Msg_div = document.createElement("div")
    Msg_div.classList.add("mt-3")
    Msg_div.style = "float: ${pos}; clear: both; margin: 5px;"
    var MyDiv = document.createElement("div")
    MyDiv.innerText = msg
    MyDiv.classList.add("message")
    MyDiv.classList.add(pos)
    container = document.querySelector(".chat-area")
    Msg_div.append(MyDiv)
    container.append(Msg_div)
    container.scrollTop = container.scrollHeight - container.clientHeight;
}

function fadeIn(element) {
    var op = 0.1; // initial opacity
    var timer = setInterval(function() {
        if (op > 1) {
            clearInterval(timer);
        }
        element.classList.remove("d-none")
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fadeOut(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function() {
        if (op <= 0.1) {
            clearInterval(timer);
            element.classList.add("d-none")
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
}