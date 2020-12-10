module.exports = {
    addClient: (req, res) => {
        const db = req.app.get('db')
        const { name, email, phoneNumber, agentId } = req.body

        db.client.add_client({ name, email, phoneNumber, agentId })

        res.sendStatus(200)
    },
    deleteClient: (req, res) => {
        const db = req.app.get('db')
        const { clientId } = req.body

        db.client.delete_client({ clientId })

        res.sendStatus(200)
    },
    updateClient: (req, res) => {
        const db = req.app.get('db')
        const { name, email, phoneNumber, clientId } = req.body

        db.client.update_client({ name, email, phoneNumber, clientId })

        res.sendStatus(200)
    },
    getClient: async (req, res) => {
        const db = req.app.get('db')
        const { clientId } = req.params

        const client = await db.client.get_client({ clientId })

        res.status(200).send(client)
    },
    getClients: async (req, res) => {
        const db = req.app.get('db')
        const { agentId } = req.params

        const clients = await db.client.get_clients({ agentId })

        res.status(200).send(clients)
    }

}