const validateProfileInput = require('../../validation/profile');

const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({msg: "profile works!"}));

router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
module.exports = router;