//1
console.log(1)

let count = 10; // Initialize count to 10

function increaseCount() {
  count++; // Increment the count by 1
}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}



function checkCountValue() {
  if (count === 20) {
    alert("Your Instagram post gained 20 followers! Congratulations!");
  } else if (count === 30) {
    alert("Your Instagram post gained 30 followers! Keep it up!");
  }
}