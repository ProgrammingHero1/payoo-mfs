// console.log('button clicking file added')

// document.getELementById('id').addEventListener('click', fun)
// document.getElementById('button-login')
//     .addEventListener('click', function(){})

// search: form submit reloading the page

// step - 1 set event handler

// document.getElementById('button-login')
//     .addEventListener('click', function(event){
//         // step-2: prevent default behavior (prevent reloading browser)
//         event.preventDefault(); // <------ Vejal to beginners
        

//         // step-3: get the phone number and the pin number
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;

//         console.log(phoneNumber, pinNumber);

//         // step-4: validate phone and Pin
//         // this is temporary. You should do like this.
//         if(phoneNumber=== '5' && pinNumber === '1234'){
//             console.log('you are logged in');
//             // step -5: allow user to use the website
//         }
//         else{
//             alert('Wrong phone number or Pin');
//         }

//     })

document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault();

        // get phone number and pin 
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);

        // bad way to validate
        if(phoneNumber === '5' && pinNumber === '1234'){
            console.log('you are logged in');
            window.location.href = '/home.html';
        }
        else{
            alert('Wrong phone number or pin.')
        }
});