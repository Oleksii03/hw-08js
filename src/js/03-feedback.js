// import throttle from "lodash.throttle";

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onChangeInput);

const feedback = {};

function onChangeInput (e) {

  feedback[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedback));

}

console.log(formEl);
