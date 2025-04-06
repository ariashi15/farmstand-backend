const supabase = require('../config/supabase');

const farmController = {
    // getFarms: gets all farm info for display on explore page
    async getFarms(req, res) {
        try {
            console.log('Sending get farms request');
            const { data, error } = await supabase
                .from('farms')
                .select('*');
                
                // if supabase error:
                if (error) {
                    console.log(error.message);
                    return res.status(400).json({ error: error.message });
                }

                // otherwise, successfully retrieved all farms
                if (data) {
                    return res.json(data);
                };

            } catch (error) {
                console.log(error.message);
                res.status(500).json({ error: 'Internal server error' });
            }
        }
}

module.exports = farmController;