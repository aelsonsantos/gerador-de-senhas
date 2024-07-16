let sliderSize=document.querySelector('#slider');
let passwordSize=document.querySelector('#chart_lngt');
let password=document.querySelector('#password');
let uppercase=document.querySelector('#option_up');
let lowercase=document.querySelector('#option_low');
let number=document.querySelector('#option_number');
let special=document.querySelector('#option_special');
let btnCopy=document.querySelector('#copy');
let btnPasswordGeneration=document.querySelector('#pass_button')

function chart() {
    let types = [];

    if(uppercase.checked){
        types.push("ABCDEFGHIJKLMNOPQRSTUVWYZ");
    }
    if(lowercase.checked){
        types.push("abcdefghijklmnpqrstuvwyz");
    }
    if(number.checked){
        types.push("0123456789");
    }
    if(special.checked){
        types.push("!@#$%¨&*()_=+§/?{}[]");
    } 
  
      return types;
}

function alertMessage (text, color)  {
    Toastify({
    text: text,
    duration: 3000,
    style: {
        background: color,
        boxShadow: 'none'
    }
}).showToast();
}

function random(types){
    const typeSize = Math.floor(Math.random() * types.length);

    return types[typeSize] [Math.floor(Math.random() * types[typeSize].length)]; 
}

function pasSize(){
    let size = sliderSize.value

    return size;
}

function getpassword(size, types){
    let pass='';
  
    while(pass.length < size){
        pass += random(types)
       }
    
    return pass;
 }

 passwordSize.innerHTML=sliderSize.value;

 sliderSize.addEventListener('input',(evt) =>{
    passwordSize.textContent = evt.currentTarget.value;
})

btnPasswordGeneration.addEventListener('click', function(){         
    const size = pasSize();
    const types = chart();

    if(!types.length){
        alertMessage('Por favor, selecione ao menos um tipo de caractere!', '#bb260d')
        return;
    }

    const passwordgenerated = getpassword(size, types);

    alertMessage('Senha gerada com sucesso!', '#10992d')

    password.textContent = passwordgenerated
    
})

btnCopy.addEventListener('click', function(){
    alertMessage('Senha copiada com sucesso!', '#10992d')
    navigator.clipboard.writeText(password.textContent)
})
