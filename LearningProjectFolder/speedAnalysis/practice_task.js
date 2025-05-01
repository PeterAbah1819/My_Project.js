let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Enable the input
    const userInput = document.getElementById("userInput");
    userInput.readOnly = false;
    userInput.value = '';
    userInput.focus();

    // Clear output
    document.getElementById("output").innerHTML = "";

    // Record start time
    startTime = new Date().getTime();

    // Enable "End Test" button
    document.getElementById("btn").disabled = false;
}

function endTest() {
    endTime = new Date().getTime();

    const userInput = document.getElementById("userInput");
    userInput.readOnly = true;

    const timeElapsed = (endTime - startTime) / 1000; // in seconds
    const userTypedText = userInput.value;

    const typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;
    const textLength = userTypedText.length;

    let wpm = 0;
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Characters Typed: " + textLength + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Disable end test button
    document.getElementById("btn").disabled = true;
}
