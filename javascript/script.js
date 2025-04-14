let currentBox = 1;

document.querySelectorAll('.btn, .btn-delete, .btn-enter').forEach(button => {
    button.addEventListener('click', () => {
                const buttonValue = button.textContent;


        const box = document.getElementById(`empty-square1${currentBox === 1 ? '' : '-' + currentBox}`);

        if (box) {
            box.textContent = buttonValue; 
            currentBox++; 
        }
        });
});

document.querySelector('.btn-delete').addEventListener('click', () => {
    if (currentBox > 1) {
        currentBox--;
        const box = document.getElementById(`empty-square${currentBox}`);
        if (box) {
            box.value = '';
        }
    }
});

window.onload = function() {
    document.getElementById('empty-square1').focus();
  };
