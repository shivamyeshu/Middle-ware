const express = require('express');
const app = express();

// Function that returns a boolean
function isOldEnough(age) {
    return age >= 14;
}

// Route to check age and decide access to the ride
app.get("/ride1", function(req, res) {
    const age = parseInt(req.query.age); // Get age from query parameters
    if (!age) {
        // If age is not provided or is invalid
        res.status(400).json({ msg: "Please provide a valid age." });
    } else if (isOldEnough(age)) {
        res.json({ msg: "You have successfully accessed ride 1." });
    } else {
        res.json({ msg: "Sorry, you are not old enough for this ride." });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
