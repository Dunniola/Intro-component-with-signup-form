const form = document.querySelector('#form');
const image =document.querySelectorAll('.image')
const input = document.querySelectorAll('input')
const button = document.querySelector('#button')
   
    button.addEventListener("click", function (e){
      e.preventDefault()
      const firstName = document.querySelector('#First_Name').value;
      const lastName = document.querySelector('#Last_Name').value;
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;
      const input = document.querySelectorAll('input')
      

      document.querySelector('#firstNameError').textContent = '';
      document.querySelector('#lastNameError').textContent = '';
      document.querySelector('#emailError').textContent = '';
      document.querySelector('#passwordError').textContent = '';
      
      
      
      if (firstName.trim() === "") {
        document.querySelector('#firstNameError').textContent = 'First Name cannot be empty';
       
       image[0].style.display = 'block'
       input[0].style.border = '1px solid red'
       
        return;
      }else{
        image[0].style.display = 'none'
        input[0].style.border = '1px solid gray'
      }

      if (lastName.trim() === "") {
        document.querySelector('#lastNameError').textContent = 'Last Name cannot be empty';
       
        image[1].style.display = 'block'
        input[1].style.border = '1px solid red'
        return;
      }else{
        image[1].style.display = 'none'
        input[1].style.border = '1px solid gray'
      }

      if (email === "") {
        document.querySelector('#emailError').textContent = 'Email cannot be empty';
        image[2].style.display = 'block'
        input[2].style.border = '1px solid red'
        return;
      } else if (!isValidEmail(email)) {
        document.querySelector('#emailError').textContent = 'Looks like this is not an email';
        image[2].style.display = 'block'
        input[2].style.border = '1px solid red'
        
        return;
      }else{
        image[2].style.display = 'none'
        input[2].style.border = '1px solid gray'
      }

      if (password === "") {
        document.querySelector('#passwordError').textContent = 'Password cannot be empty';
        image[3].style.display = 'block'
        input[3].style.border = '1px solid red'
        return;
      } else if (password.length < 8) {
        document.querySelector('#passwordError').textContent = 'Password must be at least 8 characters';
        image[3].style.display = 'block'
        input[3].style.border = '1px solid red'
        return;
      }else{
        image[3].style.display = 'none'
        input[3].style.border = '1px solid gray'
      }

    
    
      console.log('Form submitted successfully');
    })


    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  document.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
    event.preventDefault()
    }
  })
