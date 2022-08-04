var quizDB =[
    {
        question: "HTML full form",
        ans:"hyper text markup language",
       
         a:   "hyper text markup language",
          b:  "hyper typo markup language",
           c: "hyper text market language",
           d: "none of above"
            
       
    },
    
    {
        question: "CPU full form",
      

            a: "central procecution unit",
            b:"central processing unit",
            c:"control processing unit",
            d:  "none of above",
            ans:"ans3", 
            
            
            
        
    },
    {
        question: "RAM full form",
      
       
           a: "random execution memory",
           b: "random account memory",
          c:  "random access memory",
          d:  "none of above",
          ans:"ans3",
        
    },
    {
        question: "USB full form",
       
       
          a:  "universal system bus",
          b:  "universal serial bus",
          c:  "universal sound bus",
          d:  "none of above",
          ans:"ans2",
      
    },
    {
        question: "SEO full form",
        
      
          a:  "search engine optimization",
          b:  "sound engine optimization",
          c:  "search engineer optimization",
          d:  "none of above",
          ans:"ans2",
        
    },
    {
        question: "LCD full form",
       
       
        a:    "liquid cyber display",
          b:  "liquid crystal display",
           c: "liquid crystal disorder",
           d: "none of above",
           ans:"ans3",
        
    },
]







let question =document.querySelector('.question');
let option1 =document.querySelector('#option1');
let option2 =document.querySelector('#option2');
let option3 =document.querySelector('#option3');
let option4 =document.querySelector('#option4');
let submit =document.querySelector('#submit');
let answers =document.querySelectorAll('.answer');
let questionCount=0;
let score =0;
let showScore = document.getElementById("showScore")
function loadQuestion(){
    let questionList =quizDB[questionCount];
    question.innerHTML=questionList.question;

    //option1.innerHTML=quizDB[0].a;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;

}

loadQuestion();
function getCheckAnswer(){
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked)//jo bhe elemnt he current agar woh checked he to nechay wale line men uske id mang rahay hen
       answer=curAnsElem.id;
    });
    return answer;
}
function delselect() {
    answers.forEach((curAnsElem) => curAnsElem.checked=false)
};
//ab jis button pay click 
submit.addEventListener('click',function(){
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
//ismen check kia he kay asnewr sahi he to score plus plus kardo
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++ ;
    delselect();
     if(questionCount<quizDB.length){
        loadQuestion();
     } 
     else{
//showScore.innerHTML=("Your Scored is ",score/quizDB.length ) ;
showScore.innerHTML = `<h3> Your Scored is ${score}/${quizDB.length}</h3>
<button class="btn onclick="location.reload()">Play Again</button>`;
showScore.classList.remove('scoreArea'); 
}

})