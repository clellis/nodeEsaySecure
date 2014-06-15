/**
 * Dependance du module.
 */
var express		= require('express')
  , exphbs		= require('express3-handlebars')
  , errorHandler= require('errorhandler')
  , cookieParser= require('cookie-parser')
  , bodyParser	= require('body-parser')
  , session		= require('express-session')
  , logic		= require('./logicEasySecure/logic.js')  // la logic de l'application
  , routes		= require('./routes/controleur')
  , i18n		= require('i18next')
  , path		= require('path')
  , conn		= require('connect')
  , app			= express()
  , hbs;

/**
 * Creation et configuration d'une instance `ExpressHandlebars`.
 */
hbs = exphbs.create({
    defaultLayout	: 'main',
    helpers			: logic,
    
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir		: [
        'shared/templates/',
        'views/pages/partials/'
    ]
});

/**
 * Configuration du module
 */
//Required by session() middleware
//pass the secret for signed cookies (required by session())
app.use(cookieParser('keyboard cat'));

//Populates req.session
app.use(session());

/**
 * Configuration de i18next (traduction multilanguage)
 */
i18n.init({
	lng					: 'fr-FR'
	, languages			: ['fr-FR', 'fr', 'en_US', 'en', 'es_ES', 'es']
	, cookieName		: 'lang'
	, useCookie			: true
	, fallbackLng		: false
	, fallbackOnNull	: false
	, fallbackOnEmpty	: false
	, load				: 'current'
	, debug				: false
	, resGetPath		: './logicEasySecure/locales/__lng__.json'
	, resSetPath		: './logicEasySecure/locales/__lng__.json'
    , saveMissing		: true
    , resStore			: false
    , returnObjectTrees	: false
	, getAsync			: true
	, dynamicLoad		: true
	});

i18n.registerAppHelper(app);

app.use(bodyParser());
app.use(i18n.handle);

//all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public'))); //ajout des fichiers additionnel necessaire

//Register `hbs` as our view engine using its bound `engine()` function.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


/**
 * Declaration des urls
 */
app.get('/', routes.accueil)
	.get('/bilan_circonstanciel', routes.accueil);
app.get('/danger', routes.danger);

app.get('/bilan_urgence_vitale', routes.bilan_urgence_vitale);

app.get('/bilan_complementaire', routes.bilan_complementaire);

app.get('/surveillance', routes.surveillance);

app.get('*', function (req, res) {
    res.redirect('/#' + req.url, 302);
});

//app.get('/ajout/:message?', function (req, res) {
//res.render('ajout', {
//	title: 'Ajouter something',
//	message: req.params.message
//});

//the error handler is placed after routes
//if it were above it would not receive errors from app.get() etc
app.use(errorHandler());

/**
 * Lancement du module
 */
app.listen(app.get('port'), function(){
	console.log('nodeEasySecure server listening on port ' + app.get('port'));
});
