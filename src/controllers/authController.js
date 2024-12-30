const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save(); // save the info of authenticator
        res.status(201).json({ message: 'User  registered' }); // ensure it is successful
    } catch (error) {
        res.status(400).json({ message: 'Error registering user', error }); // shows it have a error in registering
    }
};

// Process of Login user
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: 'User  not found' }); // if user is not in the DB

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' }); // username is correct and pass is not match

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token }); // after login is generate a token for access DB
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error }); // show that error in logging
    }
};