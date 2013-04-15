var app = require('../app.js');
var request = require('supertest');

describe( "my application", function () {
	it("can send form data", function( done ) {
		request(app)
			.put('/file')
			.set('Cookie', 'session: VALIDSESSION')
			.type('form')
			.send( 'urlencoded=form&parameters=here' )
			.end( function (err, res) {
				expect(err).toBe(null);
				expect(res.status).toBe(404);
				expect(res.text).toBe("Cannot PUT /file");
				done();
			} );
	} );
	it("can upload a file", function( done ) {
		request(app)
			.put('/file')
			.set('Cookie', 'session: VALIDSESSION')
			.attach('avatar', 'spec/checkmark-blue.jpg')
			.end( function (err, res) {
				expect(err).toBe(null);
				expect(res.status).toBe(404);
				expect(res.text).toBe("Cannot PUT /file");
				done();
			} );
	} );
	it("can both send data and upload a file", function( done ) {
		request(app)
			.put('/file')
			.set('Cookie', 'session: VALIDSESSION')
			.type('form')
			.send( 'urlencoded=form&parameters=here' )
			.attach('avatar', 'spec/checkmark-blue.jpg')
			.end( function (err, res) {
				expect(err).toBe(null);
				expect(res.status).toBe(404);
				expect(res.text).toBe("Cannot PUT /file");
				done();
			} );
	} );
} );
