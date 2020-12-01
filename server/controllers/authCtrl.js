const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body

        const result = db.auth.get_agent({ email });

        if (!result[0]) {
            return res.status(400).send("Email not registered.")
        }

        const isAuthenticated = await bcrypt.compareSync(
            password,
            result[0].password
        )

        req.session.user = result[0]

        res.status(202).send(req.session.user)
    },

    register: async (req, res) => {
        const db = req.app.get('db')
        const { name, email, password, confirmPassword } = req.body

        if (password !== confirmPassword) {
            return res.status(400).send("Password and confirmed password do not match")
        }

        const foundUser = await db.auth.get_agent({ email })

        if (foundUser[0]) {
            return res.status(400).send("Username does not exist")
        }

        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)

        const newUser = await db.auth.add_agent({ email, name, password: hash })

        req.session.user = newUser[0]
        res.status(201).send(req.session.user)
    }
}