function checkDietaryAccess(role) {
    if (role === "Employee") {
      console.log("Access granted: You have full access to Dietary Services.");
    } else if (role === "Enrolled Member") {
      console.log("Access granted: You have full access to Dietary Services and one-on-one interaction with a dietician.");
    } else if (role === "Subscriber") {
      console.log("Access granted: You have partial access to Dietary Services.");
    } else if (role === "Non-Subscriber") {
      console.log("Access denied: Please enroll or subscribe to access Dietary Services.");
    } else {
      console.log("Invalid role: Please enter a valid role.");
    }
  }
  
  // Function call
  checkDietaryAccess("Empleoyee");