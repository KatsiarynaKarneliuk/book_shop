
datePickerId.min = new Date().toISOString().split("T")[0];

/*const init = function () {
  formt.addEventListener('submit', submitHeandler);
  formt.addEventListener('reset', resetHeandler);
}

const formt = document.getElementById('form');
const submitHeandler = function (event) {
  event.preventDefault();
  /*document.getElementById('submit-button').disabled=true;
  let namefield = document.getElementById('name');
  let surnamesfield = document.getElementById('surnames');
  let datePickerIdfield = document.getElementById('datePickerId');
  let streetfield = document.getElementById('street');
  let numberfield = document.getElementById('number');
  let flatNumberfield = document.getElementById('flatNumber');
  let radiosClass = document.getElementsByClassName('radios');
  if (namefield.value.match("[a-z]{4,}")
    && surnamesfield.value.match("[a-z]{5,}")
    && datePickerIdfield.value !==''
    && streetfield.value.match("[a-z]{5,}")
    //&& numberfield.value.match("[0-9]+$")
    //&& flatNumberfield.value.match("[^[0-9\-]+$")
    && radiosClass.value !==''){
          document.getElementById("submit-button").disabled=false;
  }
  //then send
};
  const resetHeandler = function (event) {
  event.preventDefault();
  document.getElementById('formt').reset();
  //notify user the data will be removed from the form
};

document.addEventListener('DOMContentLoaded', init);*/

let inputs = document.getElementsByClassName('input');
inputs.onblur = function () {
  inputs.forEach(el => {
    if (!el.value) {
      el.classList.add('invalid');
    }
  })
};
