let quantity = 0
const quantityEl = document.querySelector('.quantity')
const addBtn = document.querySelector('.add')
const minusBtn = document.querySelector('.subtract')


function handleQuantity(index){
    quantity += index
    quantityEl.innerHTML = quantity
}

addBtn.addEventListener('click' , () => {
    handleQuantity(1)
})
minusBtn.addEventListener('click' , () => {
    handleQuantity(-1)
})

window.addEventListener('load' , () => {
    handleQuantity(0)
})
