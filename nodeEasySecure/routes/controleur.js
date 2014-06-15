/**
 * GET home page.
 */
exports.accueil = function(req, res){
//	console.log( res.__('app.name'));
	res.render('./pages/Accueil', {
		titre	: 'Bilan Circonstanciel'});
};

exports.danger = function(req, res){
	res.render('./pages/Danger', {
		layout	: 'main',
		titre	: 'Dangers' });
};

exports.bilan_urgence_vitale = function(req, res){
	res.render('./pages/UrgenceVitale', {
		titre: 'Bilan d\'urgence vitale' });
};

exports.bilan_complementaire = function(req, res){
	res.render('./pages/Complementaire', {
		titre: 'Bilan complémentaire'});
};

exports.surveillance = function(req, res){
	res.render('./pages/Surveillance', {
		titre: 'La surveillance' });
};