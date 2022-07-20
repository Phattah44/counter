let count = 0;
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    console.log(styles);
    if (styles[1] === 'decrease') {
      count--;
    } else if (styles[1] === 'increase') {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count == 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
