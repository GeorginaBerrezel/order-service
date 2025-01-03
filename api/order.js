const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const Datas = require('./datas.json');
const app = express();
// Configuration CORS
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
// Point de terminaison racine
app.get('/api/ping', (req, res) => {
    res.send('Pong');
});
/*// Point de terminaison pour récupérer tous les éléments
app.get('/api/order', (req, res) => {
    if (!Datas || Datas.length === 0) {
        return res.status(500).json({ message: 'Erreur technique' });
    }
    res.json(Datas);
});
// Point de terminaison pour récupérer un élément spécifique par son identifiant
app.get('/api/order/:id([0-9]+)', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Identifiant invalide' });
    }
    const item = Datas.find(data => data.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Élément non trouvé' });
    }
    res.json(item);
});*/
// Lancement du serveur
app.listen(3000, () => console.log('🚀 Server ready at: 3000 ⭐️'));
module.exports = app;