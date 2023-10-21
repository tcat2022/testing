let todosContainer = document.getElementById('todos-container');
let completedContainer = document.getElementById('completed-container');
let inputField = document.getElementById('inputfield');
let submit = document.getElementById('submit');
let inputText;
let number = 0;
setInterval(function() {
    inputText = inputField.value
  }, 1);



submit.addEventListener('click', () => {
        number++
        let p = document.createElement('p');
        p.textContent = inputText
        let done = document.createElement('button');
        done.textContent = "✓";
        let remove = document.createElement('button');
        remove.textContent = "✕";
        todosContainer.appendChild(p);
        if (inputField.value != ""){
            todosContainer.appendChild(done);
            todosContainer.appendChild(remove); 
          }
        inputField.value = ''
        p.classList.add(number);
        remove.classList.add(number);
        done.classList.add(number);
        remove.addEventListener('click', () => {
            todosContainer.removeChild(p)
            todosContainer.removeChild(done)
            todosContainer.removeChild(remove)
        })
        done.addEventListener('click', () => {
            todosContainer.removeChild(p)
            todosContainer.removeChild(done)
            todosContainer.removeChild(remove)
            completedContainer.appendChild(p);
        })
})


window.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        number++
        let p = document.createElement('p');
        p.textContent = inputText
        let done = document.createElement('button');
        done.textContent = "✓";
        let remove = document.createElement('button');
        remove.textContent = "✕";
        todosContainer.appendChild(p);
        if (inputField.value != ""){
            todosContainer.appendChild(done);
            todosContainer.appendChild(remove); 
          }
        inputField.value = ''
        p.classList.add(number);
        remove.classList.add(number);
        done.classList.add(number);
        remove.addEventListener('click', () => {
            todosContainer.removeChild(p)
            todosContainer.removeChild(done)
            todosContainer.removeChild(remove)
        })
        done.addEventListener('click', () => {
            todosContainer.removeChild(p)
            todosContainer.removeChild(done)
            todosContainer.removeChild(remove)
            completedContainer.appendChild(p);
        })
    }
  });
