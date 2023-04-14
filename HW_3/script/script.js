
// Task_5
// let name = "Dasha";
// // alert (`Hello, ${name}!`)

// function show_msg() {
//   let text = "Hello, " + name + "!";
//   alert(text);
// }
// show_msg();


// Task_6
// alert(confirm(`Are you okay?`) ? `fine` : `please go home and go to sleep`)



// HW_Task
function getEmail(){
  var email = document.getElementById('Input_email').value;
  // var res = "";
  if (email == ""){
    alert(`Вы не ввели данные`)
  } else {
    if(validateEmail(email)) {
      alert(`"${email}" отправлен`)
    } else {
      alert(`"${email}" вы ввели не правильную почту`)
    }
  }
}


function validateEmail(email) {
  var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}




