const allButton = document.querySelectorAll('.tab-button')
const allTab = document.querySelectorAll('.tab-content')

allButton[0].classList.add('active-button')
allTab[0].classList.add('active-content')


allButton.forEach((currentButton, index )=>{
    currentButton.addEventListener('click', ()=>{
        // ریست کردن استایل هایی که دادیم
        allButton.forEach(btn => btn.classList.remove('active-button'))
        allTab.forEach(tab => tab.classList.remove('active-content'))

        //فعال کردن دکمه و تب مربوط به این کلیک
        currentButton.classList.add('active-button')
        allTab[index].classList.add('active-content')
    } )
})