



const myObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
}  )  

const elements = document.querySelectorAll('.hidden')

elements.forEach((element)=> myObserver.observe(element))








const peButton = document.querySelector('#sasquatch_button')
const peIcon = document.querySelector('.peGrandeClose')

const peGrandeShow = ()=>{
    const showBox = document.querySelector('.show_box')
    if(peButton){
        showBox.style.display = 'flex';
    }
}

const peGrandeClose = ()=>{
    const showBox = document.querySelector('.show_box')
    if(showBox){
        showBox.style.display = 'none'
    }
}

peIcon.addEventListener('click', peGrandeClose)
peButton.addEventListener('click', peGrandeShow)






const rakeButton = document.querySelector('#rake_button')
const rakeIcon = document.querySelector('.rakeClose')

const rakeShow = ()=>{
    const showBox2 = document.querySelector('.show_box2')
    if(rakeButton){
        showBox2.style.display = 'flex';
    }
}

const rakeClose = ()=>{
    const showBox2 = document.querySelector('.show_box2')
    if(showBox2){
        showBox2.style.display = 'none'
    }
}

rakeIcon.addEventListener('click', rakeClose)
rakeButton.addEventListener('click', rakeShow)




const nessButton = document.querySelector('#ness_button')
const nessIcon = document.querySelector('.nessClose')

const nessShow = ()=>{
    const showBox3 = document.querySelector('.show_box3')
    if(nessButton){
        showBox3.style.display = 'flex';
    }
}

const nessClose = ()=>{
    const showBox3 = document.querySelector('.show_box3')
    if(showBox3){
        showBox3.style.display = 'none'
    }
}

nessIcon.addEventListener('click', nessClose)
nessButton.addEventListener('click', nessShow)




const jeffButton = document.querySelector('#jeff_button')
const jeffIcon = document.querySelector('.jeffClose')

const jeffShow = ()=>{
    const showBox4 = document.querySelector('.show_box4')
    if(jeffButton){
        showBox4.style.display = 'flex';
    }
}

const jeffClose = ()=>{
    const showBox4 = document.querySelector('.show_box4')
    if(showBox4){
        showBox4.style.display = 'none'
    }
}

jeffIcon.addEventListener('click', jeffClose)
jeffButton.addEventListener('click', jeffShow)





const slenderButton = document.querySelector('#slenderman_button')
const slenderIcon = document.querySelector('.slandermanClose')

const slenderShow = ()=>{
    const showBox5 = document.querySelector('.show_box5')
    if(slenderButton){
        showBox5.style.display = 'flex';
    }
}

const slenderClose = ()=>{
    const showBox5 = document.querySelector('.show_box5')
    if(showBox5){
        showBox5.style.display = 'none'
    }
}

slenderIcon.addEventListener('click', slenderClose)
slenderButton.addEventListener('click', slenderShow)