const helloView = (req, res) => {
    res.render("hello", {
        text:"This is the dynamically set text!"
    } );
}

module.exports = helloView;