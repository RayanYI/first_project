const profilView  = (req,res, ...data) => {
    res.render("profil", {
        data
    } );
}

module.exports = profilView;