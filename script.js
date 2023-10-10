
let input= document.getElementById('inputBox');
let string= "";

let button = document.querySelectorAll('button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click', (e)=>{
          if(e.target.innerHTML=='='){
            string = eval(string);
            document.querySelector('input').value = string;
          }
          else if(e.target.innerHTML=='ac'){
            string ="";
            document.querySelector('input').value = string;
           
          }
          else if(e.target.innerHTML=='del'){
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
           
          }
          else if(e.target.innerHTML=='%'){
            string = eval(string/100);
            document.querySelector('input').value = string;
           
          }
         else{
            console.log(e.target)
            string= string + e.target.innerHTML;
            document.querySelector('input').value = string;
         }
    })
})