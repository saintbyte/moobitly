Moobitly
===========
En: Make Short url from Long url with Bit.Ly Api


How to use
----------

Use it lie it:

  var mb = new Moobitly('saintbyte','R_952ada93d53148668cf1452e62fdef09');

  mb.addEvent('start',   function() {alert('start')}); // Request Start
  mb.addEvent('shorten', function() {alert('shorten')}); // Request End
  mb.addEvent('url',   function(txt) {$('surl').value = txt;});  // Url is Get

  mb.Shorten(lurl); // Make short Url



Screenshots
-----------

Nothing
