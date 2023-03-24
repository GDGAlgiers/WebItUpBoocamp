const UserModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const getloginPage = (req, res) => {
    res.render('login', { error: "" })
}

const getRegisterPage = (req, res) => {
    res.render('register', { error: "" })
}

const logingHandler = async (req, res) => {
    try {
        const { email, password } = req.body
        // if user exists
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.redirect('/auth/login')
        }

        const isMatched = bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.redirect('/auth/login')
        }
        req.session.userID = "a";
        return res.redirect('/product')
    } catch (error) {
        console.log(error.message);
        res.redirect('/auth/login')
    }

}
const registerHandler = async (req, res) => {
    const { username, email, password } = req.body

    // if user exists
    let user = await UserModel.findOne({ email });

    if (user) {
        return res.redirect('/auth/register')
    }

    const hashedpassword = await bcrypt.hash(password, 10)
    user = await UserModel.create({
        username,
        email,
        password: hashedpassword
    })
    res.redirect('/auth/login')
}
const logoutHandler = (req, res) => {
    req.session.destroy();

    res.redirect('/auth/login')
}

module.exports = { getloginPage, getRegisterPage, logingHandler, registerHandler, logoutHandler }