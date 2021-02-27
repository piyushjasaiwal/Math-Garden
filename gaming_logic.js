var ans ;
var score = 0;
var background = [];

function nextQuestion(){
    var num1 = Math.random() * 6;
    num1 = Math.floor(num1);
    var num2 = Math.random() * 6;
    num2 = Math.floor(num2);
    document.getElementById('n1').innerHTML = num1;
    document.getElementById('n2').innerHTML = num2;
    ans = num1 + num2;
}

function check(){
    const predict = predictImage();
    if(predict == ans){
        score++;
        if(score > 0 && score < 7){
            background.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = background;
        }else{
            alert("garden grown fully want to start again");
            score = 0;
            background = [];
            document.body.style.backgroundImage = background;
        }
    }else{
        alert('Wrong Answer!!!!!!!! CHECK CALCULATION OR WRITE A NEATER NUMBER')
        if(score > 0){
            setTimeout(() => {
                background.pop();
                document.body.style.backgroundImage = background;
            },2000);
            score--;
            
        }
    }
}