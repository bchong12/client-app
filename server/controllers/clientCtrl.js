module.exports = {
  addClient: async (req, res) => {
    const db = req.app.get("db");
    const { name, email, phoneNumber, agentId } = req.body;

    const client = await db.client.add_client({
      name,
      email,
      phoneNumber,
      agentId,
    });

    res.status(200).send(client[0]);
  },
  deleteClient: (req, res) => {
    const db = req.app.get("db");
    const { clientId } = req.body;

    db.client.delete_client({ clientId });

    res.sendStatus(200);
  },
  updateClient: (req, res) => {
    const db = req.app.get("db");
    const { name, email, phoneNumber, clientId } = req.body;

    db.client.update_client({ name, email, phoneNumber, clientId });

    res.sendStatus(200);
  },
  getClient: async (req, res) => {
    const db = req.app.get("db");
    const { clientId } = req.params;

    const client = await db.client.get_client({ clientId });

    res.status(200).send(client);
  },
  getClients: async (req, res) => {
    const db = req.app.get("db");
    const { agentId } = req.params;

    const clients = await db.client.get_clients({ agentId });

    res.status(200).send(clients);
  },
  getAllClients: async (req, res) => {
    const db = req.app.get("db");

    const list = await db.client.get_clientsAll();

    res.status(200).send(list);
  },
  orderByAlphabet: async (req, res) => {
    const db = req.app.get("db");
    const { agent_id } = req.params;

    const list = await db.client.order_by_a({ agent_id });

    res.status(200).send(list);
  },
  orderById: async (req, res) => {
    const db = req.app.get("db");
    const { agent_id } = req.params;

    const list = await db.client.order_by_id({ agent_id });

    res.status(200).send(list);
  },
};
