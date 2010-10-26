/*
---
description: Working with Json Api of Bit.Ly

license: BSD

authors:
- Saint_Byte


requires:
- core: 1.2.4 and later
- more: JSONP

provides: [Moobitly]

...
*/

var Moobitly =  new Class({
         Implements: [Events],
         initialize: function(blogin,bkey){
                this.bitly_api_login  = blogin;
                this.bitly_api_key    = bkey;
                this.bitly_api_host   = 'http://api.bit.ly/';
         },
         Shorten: function(long_url) {
                this.long_url  = long_url;
                var that = this;
                this.fireEvent('start');
                new Request.JSONP({
                  url: this.bitly_api_host + 'v3/shorten',
                    data: {
                        longUrl: this.long_url,
                        format: 'json',
                        domain: 'j.mp',
                        login:  this.bitly_api_login,
                        apiKey: this.bitly_api_key
                        },
                onComplete: function(jsonObj) {
                     that.fireEvent('shorten');
                     that.fireEvent('url',jsonObj.data.url);
                }
                }).send();
         }
 });
