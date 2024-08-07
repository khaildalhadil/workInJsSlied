const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const numbers = document.querySelectorAll('.numbers span');

const text = ['Learn React1', 'Learn React2', 'Learn React3'];

let count = 0;

next.addEventListener('click', ()=> {
  count++;
  if (count >= 4) {
    count = 0;
  }
  console.log(count)
})

if (count == 1) {
  numbers[1].classList.add('actev')
}