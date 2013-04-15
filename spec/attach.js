var app = require('../app.js');
var request = require('supertest');

describe( "my application", function () {
	it("can upload a file", function( done ) {
		request(app)
			.put('/file')
			.set('Cookie', 'session: VALIDSESSION')
			.type('form')
			.send( 'urlencoded=form&parameters=here' )
			.attach('avatar', './checkmark-blue.jpg')
			.end( function (err, res) {
				expect(err).toBe(null);
				expect(res.status).toBe(200);
				done();
			} );
	} );
} );
		

