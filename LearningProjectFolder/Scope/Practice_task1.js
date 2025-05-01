{
  // Declare variables using var, let, and const inside the block
  var a = 1;
  let b = 2;
  const c = 3;

  // Try reassigning inside the block
  a = 10;         // OK
  b = 20;         // OK
  // c = 30;      // ❌ Error: Assignment to constant variable

  console.log("Inside block:");
  console.log("a:", a); // 10
  console.log("b:", b); // 20
  console.log("c:", c); // 3
}

// Try accessing and reassigning outside the block
console.log("Outside block:");
console.log("a:", a); // 10 (var is function/global scoped)
try {
  console.log("b:", b); // ❌ ReferenceError
} catch (err) {
  console.log("b error:", err.message);
}

try {
  console.log("c:", c); // ❌ ReferenceError
} catch (err) {
  console.log("c error:", err.message);
}

// Try reassigning
a = 100;       // OK (still in scope)
console.log("a after reassignment:", a);

try {
  b = 200;     // ❌ Not accessible outside the block
} catch (err) {
  console.log("b reassignment error:", err.message);
}
