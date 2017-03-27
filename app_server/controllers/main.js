var homepageController = function(req, res){
	res.render('index', { title: 'Express' });
}

module.exports.homepageController = homepageController;
