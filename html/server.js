const express = require ('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets',{
    etag: false,
    maxAge: '5h'// valor máximo es 1 año para que el caché expire
}));

app.get('/', function (req, resp) {
    resp.render('index')
});

app.listen(3000);
