window.onload = function () {

    console.log('loaded');
    
    
    
    
    document.getElementById('form').addEventListener('submit', event => {
    
    event.preventDefault();
    
    let name = document.getElementById('nameInput').value;
    
    let email = document.getElementById('emailInput').value;
    
    let order = document.getElementById('orderInput').value;
    
    console.log(name, email, order);
    
    
    
    document.getElementById('container').innerHTML = `<p> The order from the customer <b> ${name} </b> with the following <b> ${order} </b>, notify by email: <b>${email}</b></p>`
    
    });
    
    };