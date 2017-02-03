const FrontNote = require('frontnote');
const note = new FrontNote({
  out: './docs',
  title: 'タイトル',
  overview: './src/css/styleguide.md'
});
note.render('dist/css/style.css').subscribe(function() {

});
