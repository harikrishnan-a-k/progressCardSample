// You can add your codes here 

document.querySelector('#generateCard').addEventListener('click',function(e){
    e.preventDefault();
    const data=[];
    let name=document.querySelector('#name').value;
    document.querySelector('#cardName').innerText=name;
    
    let classname =document.querySelector('#class').value;
    document.querySelector('#cardClass').innerText=classname;
    
    let rollNo=document.querySelector('#rollNo').value;
    document.querySelector('#cardReg').innerText=rollNo;
    
    let mark1=parseInt(document.querySelector('#mark1').value);
    document.querySelector('#cardSub1').innerText=mark1;
    let mark2=parseInt(document.querySelector('#mark2').value);
    document.querySelector('#cardSub2').innerText=mark2;
    let mark3=parseInt(document.querySelector('#mark3').value);
    document.querySelector('#cardSub3').innerText=mark3;
    let average=(mark1+mark2+mark3)/3;
    document.querySelector('#averageMark').innerText=average;

    const avgSpan=document.querySelector('#averageMark');
    if(average<40){
        avgSpan.classList.add('poor');
    }
    else if(average>40&&average<70)
    {
        avgSpan.classList.add('medium');
    }
    else{
        avgSpan.classList.add('great');
    }

})