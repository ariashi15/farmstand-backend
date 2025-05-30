const supabase = require('../config/supabase');
const { v4: uuidv4 } = require('uuid'); // Import the uuid package

const inventoryController = {
    async getAllFarmsInventory(req, res) {
        try {
            const { data, error } = await supabase
                .from('inventory')
                .select(`
                    item_id,
                    farm_id,
                    item_name,
                    image_url,
                    price,
                    unit,
                    quantity,
                    description,
                    farms ( farm_id, name, pickup, delivery )
                    `);

            if (error) {
                console.log(error.message);
                return res.status(400).json({ error: error.message });
            };

            if (data) {
                return res.json(data);
            };
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async getInventoryByFarmID(req, res) {
        try {
            const { farmid } = req.params;
            const { data, error } = await supabase
                .from('inventory')
                .select(`
                    item_id,
                    farm_id,
                    item_name,
                    image_url,
                    price,
                    unit,
                    quantity,
                    farms ( farm_id, name, pickup, delivery )
                    `)
                .eq('farm_id', farmid);

            if (error) {
                console.log(error.message);
                return res.status(400).json({ error: error.message });
            };

            if (data) {
                return res.json(data);
            };
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async addOrUpdateInventory(req, res) {
        try {
            const { farmid } = req.params;
            const newItemID = uuidv4();
            const { item_id, farm_id, item_name, image_url, price, unit, quantity, description } = req.body;

            const { data, error } = await supabase
                .from('inventory')
                .upsert([{ 
                    item_id: newItemID,
                    farm_id: farmid,
                    item_name,
                    quantity,
                    price,
                    unit,
                    image_url,
                    description
                 }]);

            if (error) {
                console.log(error.message);
                return res.status(400).json({ error: error.message });
            };

            if (data) {
                return res.json(data);
            };
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    async getItemByID(req, res) {
        try {
            // extract the item id
            const { productid } = req.params;

            const { data, error } = await supabase
                .from('inventory')
                .select(`
                    item_id,
                    farm_id,
                    item_name,
                    image_url,
                    price,
                    unit,
                    quantity,
                    description,
                    farms ( farm_id, name, pickup, delivery )
                    `)
                .eq('item_id', productid);

            if (error) {
                console.log(error.message);
                return res.status(400).json({ error: error.message });
            };

            if (data) {
                return res.json(data);
            };
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = inventoryController;