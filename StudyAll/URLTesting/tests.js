test( "protocol", function() {
  var url;
  url = new URL('http://educ.jmu.edu/~waliskev/Boring/BoringApp/?HTMLandCSS.xml');
  equal( 'http://', URL.prototype.getProtocol);
});

test( "protocol", function() {
  var url;
  url = new URL('http://educ.jmu.edu/~waliskev/Boring/BoringApp/?HTMLandCSS.xml');
  equal( 'educ.jmu.edu', URL.prototype.getHost);
});

test( "protocol", function() {
  var url;
  url = new URL('http://educ.jmu.edu/~waliskev/Boring/BoringApp/?HTMLandCSS.xml');
  equal( '/~waliskev/Boring/BoringApp/', URL.prototype.getPath);
});

test( "protocol", function() {
  var url;
  url = new URL('http://educ.jmu.edu/~waliskev/Boring/BoringApp/?HTMLandCSS.xml');
  equal( '?HTMLandCSS.xml', URL.prototype.getQueryString);
});



