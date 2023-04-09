module.exports = {
    getHomepage: (req, res) => {
        res.render("homepage.ejs")
    },

    getAbout: (req, res) => {
        res.render("about.ejs")
    },

    getHowTo: (req, res) => {
        res.render("tutorial.ejs")
    },

};