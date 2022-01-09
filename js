const inputName = document.getElementById('input-name');
inputName.addEventListener('blur', function() {
    window.sessionStorage.setItem('input-name', this.value);
    inputName.value = window.sessionStorage.getItem('input-name');
});
window.addEventListener('load', function(){
    if (window.sessionStorage.getItem('input-name')) {
        inputName.value = window.sessionStorage.getItem('input-name');
    };
});
