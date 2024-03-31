document.addEventListener('DOMContentLoaded', function() {
    let currentTimer = null;
   
    
    function typeText(element, complete) {
        document.addEventListener('click', function() {
            clearInterval(currentTimer)
            document.querySelectorAll('span').forEach(span => span.style.opacity = 1); 
            if (element.id == "service-text"){
                document.querySelectorAll('.service').forEach(function(el) {
                    el.style.opacity = 1
                });
            }
            complete()
        });
        
        let text = element.textContent;
        element.innerHTML = ''; // Clear text content
        // Wrap each character in a span and set it to invisible
        Array.from(text).forEach(char => {
            let span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = "0";
            element.appendChild(span);
        });
        
        let index = 0;
        currentTimer = setInterval(function() {
            if (index < element.childNodes.length) {
                let charSpan = element.childNodes[index];
                charSpan.style.opacity = "1"; // Make character visible
                index++;
            } else {
                clearInterval(currentTimer);
                if (complete) {
                    if (element.id == "service-text"){
                        document.querySelectorAll('.service').forEach(function(el) {
                            el.style.opacity = 1
                        });
                    }
                    complete(); // Call the next action when done
                    
                }
            }
        }, 50); // Typing speed
    }

    // Function to process each element in sequence
    function processSequence(elements, index = 0) {
        if (index < elements.length) {
            let element = elements[index];
                element.style.visibility = 'visible'; // Make the current element visible
                typeText(element, function() {
                    processSequence(elements, index + 1); // Proceed to next element after current is done
                });
        }
    }

    // Collecting all elements to apply the effect to
    let elements = [document.querySelector('.static-text h1'), document.querySelector('.main-service-text')];
    // Initializing the sequence with the collected elements
    processSequence(elements);
});

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var service1 = document.getElementById('service1');
var service2 = document.getElementById('service2');
var service3 = document.getElementById('service3');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
service1.onclick = function() {
    modal.style.display = "block";
    let phone = document.getElementById('modal_phone')
    let email = document.getElementById('modal_email')
    phone.setAttribute('href', 'tel:+4712345678')
    email.setAttribute('href', 'mailto:kent@consulting.no')
    email.innerText = "kent@consulting.no"
    phone.innerText = "+4712345678"
}

service2.onclick = function() {
    modal.style.display = "block";
    let phone = document.getElementById('modal_phone')
    let email = document.getElementById('modal_email')
    phone.setAttribute('href', 'tel:+471987654321')
    email.setAttribute('href', 'mailto:marius@consulting.no')
    email.innerText = "marius@consulting.no"
    phone.innerText = "+471987654321"
}

service3.onclick = function() {
    modal.style.display = "block";
    let phone = document.getElementById('modal_phone')
    let email = document.getElementById('modal_email')
    phone.setAttribute('href', 'tel:+4712345678')
    email.setAttribute('href', 'mailto:kent@consulting.no')
    email.innerText = "kent@consulting.no"
    phone.innerText = "+4712345678"
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
