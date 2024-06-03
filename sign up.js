const checked = document.querySelector('.checked')
const unchecked = document.querySelector('.unchecked')




checked.addEventListener('click' , () => {
    if  (unchecked.classList.contains('unchecked')) {
             unchecked.classList.add('active');
                checked.classList.remove('active');
    }
})
 unchecked.addEventListener('click' , () => {
    if(checked.classList.contains('checked')) {
        checked.classList.add('active');
            unchecked.classList.remove('active');
    }
})
// window.addEventListener('load' , () => {
//     checked.classList.remove('active');
// })