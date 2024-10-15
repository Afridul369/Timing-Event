// ==============setTimeOut======
let savebtn = document.querySelector('.savebtn');
let message = document.querySelector('#message');

// savebtn.addEventListener('click', welcome);

function welcome(){
message.innerHTML='You Are Welcome'
}

setTimeout(()=>{
   message.innerHTML=''
},2000)

// ==============setTimeOut======

// =================setInterval=========
   savebtn.addEventListener('click', counter);

   function counter(){
    let count=1;
    message.innerHTML=count;
    setInterval(()=>{
        count++;
        message.textContent=count;
    },1000)
   }


// =================setInterval=========
// message.innerHTML=count;
// setInterval(()=>{
//  count++;
//  message.innerHTML=count;
 
// },1000)


// let count =1;
// savebtn.addEventListener('click', function counter(){
//     count++;
//     message.innerHTML=count;  
// if (count==5) {
//     clearInterval(stop);
// }
// });

// let stop = setInterval(function(){
//     counter();
// },1000)

 