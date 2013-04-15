SuperTestFailExample
====================

An example of super test/super agent/http node libraries failing to properly handle its own encoding of file and form data in the same multipart

How I created this repo:

# Initialize an empty express app
# add a spec directory
# put my test file in the spec directory
# put a test jpg in the spec directory

Steps to recreate using this repo:

# clone this repo onto your system
# make sure you have node 0.10.0 or better installed
# run npm install
# run node node\_modules/.bin/jasmine-node --forceexit spec/

This is what the output looks like for me:

	~/formatfail$ node\_modules/.bin/jasmine-node --forceexit spec/
	Express server listening on port 3000
	PUT /file 404 1ms
	.PUT /file 404 4ms
	PUT /file 500 3ms - 668
	F
	 
	Failures:
	
	  1) my application can both send data and upload a file
	   Message:
	     Expected 500 to be 404.
	   Stacktrace:
	     Error: Expected 500 to be 404.
	    at new jasmine.ExpectationResult (/home/dihnen/formatfail/node_modules/jasmine-node/lib/jasmine-node/jasmine-1.3.1.js:114:32)
	    at null.toBe (/home/dihnen/formatfail/node_modules/jasmine-node/lib/jasmine-node/jasmine-1.3.1.js:1235:29)
	    at /home/dihnen/formatfail/spec/attach.spec.js:39:24
	    at Test.assert (/home/dihnen/formatfail/node_modules/supertest/lib/test.js:195:3)
	    at Test.end (/home/dihnen/formatfail/node_modules/supertest/lib/test.js:124:10)
	    at Test.Request.callback (/home/dihnen/formatfail/node_modules/supertest/node_modules/superagent/lib/node/index.js:575:3)
	    at Test.<anonymous> (/home/dihnen/formatfail/node_modules/supertest/node_modules/superagent/lib/node/index.js:133:10)
	    at Test.EventEmitter.emit (events.js:93:17)
	    at IncomingMessage.Request.end (/home/dihnen/formatfail/node_modules/supertest/node_modules/superagent/lib/node/index.js:704:12)
	    at IncomingMessage.EventEmitter.emit (events.js:123:20)
	
	  2) my application can both send data and upload a file
	   Message:
	     Expected 'Error: MultipartParser.end(): stream ended unexpectedly: state = START_BOUNDARY
	    at MultipartParser.end (/home/dihnen/formatfail/node_modules/express/node_modules/connect/node_modules/formidable/lib/multipart_parser.js:306:12)
	    at IncomingMessage.IncomingForm.parse.fields (/home/dihnen/formatfail/node_modules/express/node_modules/connect/node_modules/formidable/lib/incoming_form.js:102:30)
	    at IncomingMessage.EventEmitter.emit (events.js:90:17)
	    at IncomingMessage._emitEnd (http.js:366:10)
	    at HTTPParser.parserOnMessageComplete [as onMessageComplete] (http.js:149:23)
	    at Socket.socket.ondata (http.js:1704:22)
	    at TCP.onread (net.js:403:27)' to be 'Cannot PUT /file'.
	   Stacktrace:
	     Error: Expected 'Error: MultipartParser.end(): stream ended unexpectedly: state = START_BOUNDARY
	    at MultipartParser.end (/home/dihnen/formatfail/node_modules/express/node_modules/connect/node_modules/formidable/lib/multipart_parser.js:306:12)
	    at IncomingMessage.IncomingForm.parse.fields (/home/dihnen/formatfail/node_modules/express/node_modules/connect/node_modules/formidable/lib/incoming_form.js:102:30)
	    at IncomingMessage.EventEmitter.emit (events.js:90:17)
	    at IncomingMessage._emitEnd (http.js:366:10)
	    at HTTPParser.parserOnMessageComplete [as onMessageComplete] (http.js:149:23)
	    at Socket.socket.ondata (http.js:1704:22)
	    at TCP.onread (net.js:403:27)' to be 'Cannot PUT /file'.
	    at new jasmine.ExpectationResult (/home/dihnen/formatfail/node_modules/jasmine-node/lib/jasmine-node/jasmine-1.3.1.js:114:32)
	    at null.toBe (/home/dihnen/formatfail/node_modules/jasmine-node/lib/jasmine-node/jasmine-1.3.1.js:1235:29)
	    at /home/dihnen/formatfail/spec/attach.spec.js:40:22
	    at Test.assert (/home/dihnen/formatfail/node_modules/supertest/lib/test.js:195:3)
	    at Test.end (/home/dihnen/formatfail/node_modules/supertest/lib/test.js:124:10)
	    at Test.Request.callback (/home/dihnen/formatfail/node_modules/supertest/node_modules/superagent/lib/node/index.js:575:3)
	    at Test.<anonymous> (/home/dihnen/formatfail/node_modules/supertest/node_modules/superagent/lib/node/index.js:133:10)
	    at Test.EventEmitter.emit (events.js:93:17)
	    at IncomingMessage.Request.end (/home/dihnen/formatfail/node_modules/supertest/node_modules/superagent/lib/node/index.js:704:12)
	    at IncomingMessage.EventEmitter.emit (events.js:123:20)
	
	Finished in 0.056 seconds
	3 tests, 9 assertions, 2 failures
	
	
	
