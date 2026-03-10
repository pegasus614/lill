// Screen 5 Elements
const screen5 = document.querySelector('.screen-5');
const continueBtn4 = document.querySelector('.screen-4 .continue-btn');
const backArrow5 = screen5.querySelector('.back-arrow');
const editBtn = screen5.querySelector('.edit-btn');
const doneBtn = screen5.querySelector('.done-btn');

// Continue from Screen 4 → Screen 5
continueBtn4.addEventListener('click', () => {
  screen4.classList.remove('active');
  screen5.classList.add('active');

  // Populate recipient info
  document.getElementById('rec-first').textContent = document.querySelector('.screen-4 input[placeholder="First Name"]').value || '(No first name)';
  document.getElementById('rec-last').textContent = document.querySelector('.screen-4 input[placeholder="Last Name"]').value || '(No last name)';
  document.getElementById('rec-email').textContent = document.querySelector('.screen-4 input[placeholder="Email"]').value || '(No email)';
  document.getElementById('rec-msg').textContent = document.querySelector('.screen-4 textarea').value || '(No message)';
});

// Back arrow → Screen 4
backArrow5.addEventListener('click', () => {
  screen5.classList.remove('active');
  screen4.classList.add('active');
});

// Edit Recipient → Screen 4
editBtn.addEventListener('click', () => {
  screen5.classList.remove('active');
  screen4.classList.add('active');
});

// Done → Screen 2
doneBtn.addEventListener('click', () => {
  screen5.classList.remove('active');
  document.querySelector('.screen-2').classList.add('active');
});
