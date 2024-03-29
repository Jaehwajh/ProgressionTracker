const Work = require("../models/works");
const cloudinary = require("../middleware/cloudinary");


module.exports = {
    getDashboard: async (req, res) => {
        try {
            const works = await Work.find({ user: req.user.id });
            res.render("dashboard.ejs", {user: req.user, works: works});
        } catch(err){
            console.log(err);
        }
    },
    getEntries: async (req, res) => {
        try {
            res.render("entries.ejs", {user: req.user});
        } catch(err){
            console.log(err);
        }
    },
    createEntryFile: async (req, res) => {
        try{
            let result = await cloudinary.uploader.upload(req.file.path);

            await Work.create({
                title: req.body.title,
                tag: req.body.tag,
                description: req.body.description,
                image: result.secure_url,
                cloudinaryId: result.public_id,
                user: req.user.id,
            });
            console.log("Entry created");
            res.redirect("/dashboard");

        }catch(err){
            console.log(err);
        };
    },
    deleteWork: async (req, res) => {
        try{
            let work = await Work.findById({ _id: req.params.id });
            await cloudinary.uploader.destroy(work.cloudinaryId);
            await Work.remove({ _id: req.params.id });
            console.log("Entry deleted");
            res.redirect("/dashboard");
        }catch(err){
            res.redirect("/dashboard");
        }
    },
    createTodo: async (req, res) => {
        try{
            await Todo.create({
                todo: req.body.todo,
                user: req.user.id,
            });

            console.log("Todo created");
            res.redirect("/dashboard");
        }catch(err){
            console.log(err);
        }
    },
    deleteTodo: async (req, res) => {
        try{
            await Todo.remove({ _id: req.params.id });
            console.log("Todo deleted");
            res.redirect("/dashboard");
        }catch(err){
            console.log("/dashboard");
        }
    },
};

