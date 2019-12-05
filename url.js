
var url = require('url')
var querystring = require('querystring')

url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
/* =>
'http://www.example.com/p/a/t/h?query=string'
*/



url.resolve('http://www.example.com/foo/bar', '../baz');
/* =>
http://www.example.com/baz
*/

querystring.parse('foo=bar&baz=qux&baz=quux&corge');
/* =>
{ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
*/

querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
/* =>
'foo=bar&baz=qux&baz=quux&corge='
*/