exports.frontpage = function (req, res) {
    res.render('index', {
        title: 'Demoing PassportJS',
        subtitle: 'Inspired by Traversy'
    });
};

exports.dashboard = function (req,res) {
    res.render('dashboard', {
        title: 'Demoing PassportJS',
        subtitle: 'Here\'s What We Do:',
        user: req.user
    });
};

exports.user = function (req,res) {
    res.render('user', {
        title: 'Demoing PassportJS',
        subtitle: 'This is the user site',
        user: req.user
    });
};