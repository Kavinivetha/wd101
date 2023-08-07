document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

  
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    if (age < 18 || age > 55) {
        alert('Please enter a valid date of birth between the ages of 18 and 55.');
        return;
    }
    this.submit();
});
