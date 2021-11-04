let menu = document.querySelectorAll('.start');
let restart = document.querySelector('.restart');
let slide = document.querySelectorAll('.hide');
let countShips =document.querySelector('#count-ships')
let countShoots =document.querySelector('#count-shoots')
let ships =6;
let shoot= 0;
// slide
   let random =Math.floor(Math.random()*slide.length);
    slide[random].classList.add('active');

// dell all divs;
    dell = function(){
        rem = document.querySelectorAll('div');
        // console.log(rem.length);
        for(let i=(rem.length); i>0; i--)
        document.querySelector('div').remove();
    };
// random ship1 
randomNumber=function (){ x=Math.ceil(Math.random()*shipOne1.length-1);}  
let shipOne1 =[95, 26, 9, 119, 2, 34, 50, 23, 116, 113, 111, 44, 117, 125, 65, 54, 40, 101, 106, 18];
let shipOne2 =[76, 109, 37, 57, 104, 89, 32, 20, 27, 41, 87, 8, 133, 59, 88, 130, 102, 121, 46, 6];
let shipOne3 =[22, 3, 25, 55, 12, 52, 140, 74, 75, 143,80, 14, 99, 24, 131, 120, 43, 77, 71, 36];
let shipOne4 =[105, 64, 7, 103, 83, 15, 110, 39, 35, 63,85, 5, 62, 10, 72, 136, 132, 84, 29, 142];
let shipOne5 =[94, 51, 17, 115, 96, 48, 58, 137, 60, 123,139, 122, 42, 70, 31, 79, 82, 53, 16, 38];
let shipOne6 =[66, 33, 11, 97, 30, 118, 81, 45, 56, 128, 69, 67, 4, 21, 68, 78, 49, 127, 112, 19];
let mineOne= [129, 90, 138, 13, 86, 135, 107, 92, 47, 93, 28, 98, 1, 73, 134, 100, 141, 91, 61, 108];
// random ship2
randomNumber=function (){ x=Math.ceil(Math.random()*shipTwo1.length-1);}  
let shipTwo1=[31, 53, 54, 16, 41, 7, 1, 58, 24];
let shipTwo2=[13, 64, 21, 30, 40, 43, 48, 14, 36];
let shipTwo3=[28, 8, 35, 44, 57, 38, 39, 45, 10];
let shipTwo4=[26, 61, 19, 32, 62, 0, 55, 17, 11];
let shipTwo5=[42, 52, 9, 18, 37, 25, 20, 51, 46];
let shipTwo6=[4, 15, 3, 59, 50, 5, 22, 27, 49];
let mineTwo= [34, 60, 47, 2, 63, 56, 33, 12, 23]
// random ship3
randomNumber=function (){ x=Math.ceil(Math.random()*shipThree1.length-1);}  
let shipThree1=[9, 18, 34, 4, 10, 27];
let shipThree2=[3, 2, 0, 36, 5, 35];
let shipThree3=[14, 6, 20, 21, 33, 29];
let shipThree4=[31, 30, 13, 15, 7, 22];
let shipThree5=[17, 24, 28, 12, 26, 32];
let shipThree6=[11, 23, 25, 8, 16, 19];
let mineThree= [19, 32, 22, 29, 35, 27]
//genereted first game
let run1 = function(){
    dell();
    const boxNumber =144;
        for (let i = 0; i < boxNumber; i++) {
            const box= document.createElement("div");
                  box.classList.add('box1');
                  box.setAttribute('onclick',`fun1(${i})`);               
                  seaWar.append(box);
        }
    seaBox1=document.querySelectorAll('.box1')
    console.log(seaBox1.length);
    randomNumber();
    ship1=(shipOne1[x]);
    console.log('ship1 = ' + ship1);
    randomNumber();
    ship2=(shipOne2[x]);
    console.log('ship2 = ' + ship2);
    randomNumber();
    ship3=(shipOne3[x]);
    console.log('ship3 = ' + ship3);
    randomNumber();
    ship4=(shipOne4[x]);
    console.log('ship4 = ' + ship4);
    randomNumber();
    ship5=(shipOne5[x]);
    console.log('ship5 = ' + ship5);
    randomNumber();
    ship6=(shipOne6[x]);
    console.log('ship6 = ' + ship6);
    randomNumber();
    mine=(mineOne[x]);
    console.log('mine = ' + mine);
}
menu[0].addEventListener('click', run1);
let fun1=function(i){
    shoot++;
    countShoots.innerHTML=shoot;
    if(i===ship1||i===ship2||i===ship3||i===ship4||i===ship5||i===ship6){
        seaBox1[i].classList.add('hit144');
        seaBox1[i].removeAttribute('onclick',`fun1(${i})`);
        ships--;
        
            if(ships===0){
                dell();
                let win= document.createElement("div");
                    win.classList.add('YouWin');
                    seaWar.append(win)
                }
    }if(i===mine){
        dell();
        let over= document.createElement("div");
            over.classList.add('GameOver');
            seaWar.append(over)
    }else{
        seaBox1[i].classList.add('miss');
        seaBox1[i].removeAttribute('onclick',`fun1(${i})`);     
    }
    countShips.innerHTML=ships;
}
// second game
let run2 = function(){
    dell();
    const boxNumber =64;
        for (let i = 0; i < boxNumber; i++) {
            const box= document.createElement('div')
                  box.classList.add('box2')
                  box.setAttribute('onclick',`fun2(${i})`);
                  seaWar.append(box)
        }
        seaBox2=document.querySelectorAll('.box2')
        console.log(seaBox2.length);
        randomNumber();
        ship1=(shipTwo1[x]);
        console.log('ship1 = ' + ship1);
        randomNumber();
        ship2=(shipTwo2[x]);
        console.log('ship2 = ' + ship2);
        randomNumber();
        ship3=(shipTwo3[x]);
        console.log('ship3 = ' + ship3);
        randomNumber();
        ship4=(shipTwo4[x]);
        console.log('ship4 = ' + ship4);
        randomNumber();
        ship5=(shipTwo5[x]);
        console.log('ship5 = ' + ship5);
        randomNumber();
        ship6=(shipTwo6[x]);
        console.log('ship6 = ' + ship6);
        randomNumber();
        mine=(mineTwo[x]);
        console.log('mine = ' + mine);   
}
menu[1].addEventListener('click', run2);
let fun2=function(i){
    shoot++;
    countShoots.innerHTML=shoot;
    if(i===ship1||i===ship2||i===ship3||i===ship4||i===ship5||i===ship6){
        seaBox2[i].classList.add('hit64');
        seaBox2[i].removeAttribute('onclick',`fun2(${i})`);
        ships--;
        
            if(ships===0){
                dell();
                let win= document.createElement("div");
                    win.classList.add('YouWin');
                    seaWar.append(win)
                }
    }if(i===mine){
        dell();
        let over= document.createElement("div");
            over.classList.add('GameOver');
            seaWar.append(over)
    }else{
        seaBox2[i].classList.add('miss');
        seaBox2[i].removeAttribute('onclick',`fun2(${i})`);
       
    }
    countShips.innerHTML=ships;
}
// third game
let run3 = function(){
    dell();
    const boxNumber =36;
        for (let i = 0; i < boxNumber; i++) {
            const box= document.createElement('div')
                  box.classList.add('box3')
                  box.setAttribute('onclick',`fun3(${i})`);
                  seaWar.append(box)
        }
        seaBox3=document.querySelectorAll('.box3')
        console.log(seaBox3.length);
        randomNumber();
        ship1=(shipThree1[x]);
        console.log('ship1 = ' + ship1);
        randomNumber();
        ship2=(shipThree2[x]);
        console.log('ship2 = ' + ship2);
        randomNumber();
        ship3=(shipThree3[x]);
        console.log('ship3 = ' + ship3);
        randomNumber();
        ship4=(shipThree4[x]);
        console.log('ship4 = ' + ship4);
        randomNumber();
        ship5=(shipThree5[x]);
        console.log('ship5 = ' + ship5);
        randomNumber();
        ship6=(shipThree6[x]);
        console.log('ship6 = ' + ship6);
        randomNumber();
        mine=(mineThree[x]);
        console.log('mine = ' + mine);  
}
menu[2].addEventListener('click', run3);
let fun3=function(i){
    shoot++;
    countShoots.innerHTML=shoot;
    if(i===ship1||i===ship2||i===ship3||i===ship4||i===ship5||i===ship6){
        seaBox3[i].classList.add('hit36');
        seaBox3[i].removeAttribute('onclick',`fun2(${i})`);
        ships--;
        
            if(ships===0){
                dell();
                let win= document.createElement("div");
                    win.classList.add('YouWin');
                    seaWar.append(win)
                }
    }if(i===mine){
        dell();
        let over= document.createElement("div");
            over.classList.add('GameOver');
            seaWar.append(over)
    }else{
        seaBox3[i].classList.add('miss');
        seaBox3[i].removeAttribute('onclick',`fun2(${i})`);
       
    }
    countShips.innerHTML=ships;
}
// reset
restart.addEventListener('click', function(){
    location.reload()
})







