
        
const Questions=[{question:'WHAT IS "P.O.L.I.C.E" IN FULL'
,answers:[
{ text: "Paramount Organisation On Laws and Illegal Cases Ever",correct:false},
{ text: "Public Officer for Legal Investigations and Criminal Emergencies",correct:true},
{ text: "Public Organisation For Laws,Insecurity Cases and all Emergencies",correct:false},
{ text: "Public Officer for Laws and Insecure Cases to Everyone",correct:false},
]},
{
    question:"WHAT IS CPU IN FULL",
answers :[
{ text: "Central Processing Unit",correct:true},
{ text: "Central Processor and Unity",correct:false},
{ text: "Computer Programming User",correct:false},{ text: "Controlled Programming Unit",correct:false},
]},{
    question:"WHAT IS THE LARGEST ANIMAL IN THE WORLD",
answers:[
{ text: "shark",correct:false},
{ text: "Blue-Whale",correct:true},
{ text: "Elephant",correct:false},{ text: "pig",correct:false},
]},{
    question:"WHO CASTED AS\t'W'KABI'\t IN \t'WAKANDA FOREVER' \tMOVIE PREMIERED IN \t2022",
answers:[
{ text: "CHADWICK BOSEMAN",correct:false},
{ text: "MICHEAL B JORDAN",correct:false},
{ text: "FLORENCE KASUMBA",correct:false},{ text: "DANIEL KALUUYA",correct:true},
]},
{question:'WHO WAS THE PRODUCER OF "PARTY" SONG BY ALIEN SKIN '
,answers:[
{ text: "STEVE M",correct:true},
{ text: "PATRICK MULWANA",correct:false},
{ text: "ARTIN",correct:false},
{ text: "DIGGY BAUR",correct:false},
]},
{question:'WHO FEATURED BURNA BOY IN  "PULL UP" SONG IN 2019'
,answers:[
{ text: "TEKNO",correct:false},
{ text: "ED SHEERAN",correct:false},
{ text: "TIMAYA",correct:true},
{ text: "RUDE BOY",correct:false},
]},
{question:'WHICH NATIONALITY IS "MIGUEL ANGEL ALMIRON"(NEWCASTLE) '
,answers:[
{ text: "Paraguay",correct:true},
{ text: "Belgium",correct:false},
{ text: "Serbia",correct:false},
{ text: "Argentina",correct:false},
]},
{question:'WHAT WAS THE MOST POPULAR SONG IN 2016'
,answers:[
{ text: "Shape of You-Ed-Sheeran",correct:true},
{ text: "Despacito-Daddy Yankee",correct:false},
{ text: "Tetema-Diamond",correct:false},
{ text: "Bango-RickMan",correct:false},
]},
{question:'THE MOST POPULAR SONG IN 2017 WAS "LOVE________"'
,answers:[
{ text: "You",correct:false},
{ text: "Yourself",correct:true},
{ text: "Me",correct:false},
{ text: "Song",correct:false},
]},
{question:'HE WAS BORN "PAUL OKOYE"'
,answers:[
{ text: "Burna Boy",correct:false},
{ text: "Rude Boy",correct:true},
{ text: "Free Boy",correct:false},
{ text: "Fire Boy",correct:false},
]},

]
const QuestionElement=document.getElementById("question");
const AnswerButtons=document.getElementById("answer-buttons");
const NextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    NextButton.innerHTML="NEXT";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=Questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;
    QuestionElement.innerHTML=questionNo +
    "-" +currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        AnswerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
}
function resetState(){NextButton.style.display="none";
while(AnswerButtons.firstChild){
    AnswerButtons.removeChild(AnswerButtons.firstChild);
}
}
function selectAnswer(e){
    const selectedButton=e.target;
    
const isCorrect=selectedButton.dataset.correct==="true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }
    else{selectedButton.classList.add("wrong");
        }
        Array.from(AnswerButtons.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled= true;
        });
        NextButton.style.display="block";
    }
    function showscore(){resetState();
        document.getElementById("question").innerHTML=
        "YOUR SCORE IS:\t\t"+ score + "\t\t\OUT OF\t\t"+ Questions.length;
        NextButton.innerHTML="REPLAY";
        NextButton.style.display="block";
    

    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<Questions.length){
            showQuestion();}
            else{showscore();
}
    }
    NextButton.addEventListener("click",()=>{
        if(currentQuestionIndex<Questions.length){
            handleNextButton();
        }else{
            startQuiz();

        }
    })
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
myModal.show()
startQuiz();





