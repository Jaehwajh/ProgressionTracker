module.exports = {
    getDashboard: async (req, res) => {
        try {
            res.render("dashboard.ejs", {user: req.user});
        } catch(err){
            console.log(err);
        }
    },
};