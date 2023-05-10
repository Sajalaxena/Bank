const form = document.getElementById('student-form');
const refNoDiv = document.getElementById('ref-no');
var button = document.getElementById("btn");
const submenus = document.querySelectorAll('.submenu');

// Toggle the dropdown menu on click
// document.querySelector('.nav-icon').addEventListener('click', function() {
  // document.querySelector('.dropdown').classList.toggle('active');
  // console.log("sajal");
// });

  button.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
if(name && email && phone)
{
    showPopup('');
}
else
{
  showPopup('Enter all the fields');
}
  // send form data to server here
});



function generateRefNo() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let refNo = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    refNo += chars[randomIndex];
  }

  return refNo;
}


function showPopup(message) {

    document.getElementById("popup").style.display = "block";
  if(message.length!=0)
  {
     document.getElementById("ref-number").innerHTML = message;  
  }
  else
  {
  var refNumber = generateRefNo(); // generate a random reference number
  document.getElementById("ref-number").innerHTML = `Your reference Number is  ${refNumber}`; // set the reference number in the popup

  }
   console.log("yha ahgya bhai");
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}


submenus.forEach((submenu) => {
  const menuItem = submenu.parentElement;
  

  menuItem.addEventListener('click', () => {
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  });
});





