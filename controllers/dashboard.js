module.exports = {
    getDashboard: async (req, res) => {
        try {
            res.render("dashboard.ejs", {user: req.user});
        } catch(err){
            console.log(err);
        }
    },
    newEntry: async (req, res) => {
        try{
            res.render("newWork.ejs");
        }catch(err){
            console.log(err);
        }
    }
};

