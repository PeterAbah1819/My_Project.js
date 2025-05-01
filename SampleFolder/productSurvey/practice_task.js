document.getElementById('submitBtn').onclick = function submitFeedback() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const product = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;
  const experience = document.getElementById('userExperince').value;

  // Show an alert
  alert("Thanks for your feedback!");

  // Fill in the user info section
  document.getElementById('userName').innerText = name;
  document.getElementById('userAge').innerText = age;
  document.getElementById('userEmail').innerText = email;
  document.getElementById('userProduct').innerText = product;
  document.getElementById('userFeedback').innerText = feedback;
  document.getElementById('userExperienceDisplay').innerText = experience;

  // Show the summary block
  document.getElementById('userInfo').style.display = 'block';
};
