function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }
    document.getElementById('changeColorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
    });
    
  
    document.getElementById('addItemBtn').addEventListener('click', function() {
    const inputValue = document.getElementById('itemInput').value;
    if (inputValue.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = inputValue;
    document.getElementById('itemList').appendChild(li);
    document.getElementById('itemInput').value = ''; 
    }
    });
    