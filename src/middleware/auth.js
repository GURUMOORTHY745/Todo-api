const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Used to Get the token from the Authorization header
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach the user information to the request object for Verify
        next(); // Proceed to the next step
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' }); // token is not valid
    }
};

module.exports = auth;