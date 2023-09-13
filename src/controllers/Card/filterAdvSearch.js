const { Card } = require("../../db");

const filterAdvSearch = async (req, res) => {
    /* req.body === {
        name: "",
        type: "",
        manaCost: "",
        artist: "",
        setName: "",
        color: "",
    }*/
    try {
        const filterInputs = req.body;
        //esto podria pasarselo del front para no hacer el findAll
        const total = await Card.findAll();
        // tendria que testear que tanto tarda
        let filtered = total;
        for (const [key, value] of Object.entries(filterInputs)) {
            if (value) {
                filtered = filtered.filter(elem => elem[key] === value);
            }
        };
        if (filtered.length > 0) return res.status(200).send(filtered);
        else res.status(402).send({message: "no se encontro nada"});
    } catch (error) {
        res.status(403).send(error.message);
    }
}

module.exports = filterAdvSearch;