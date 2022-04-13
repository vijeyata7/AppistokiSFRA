/* eslint-disable no-undef */
'use strict';

var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

var serviceImpl = LocalServiceRegistry.createService('sfmc.rest.generate.token', {
    createRequest: function (svc , requestBody) {
	
		if(requestBody) {
			svc.addHeader('Content-Type', 'application/json');
			svc.setRequestMethod('POST');
	        svc.setURL(svc.URL);
			}
  			if (svc.getRequestMethod() === 'POST') {
                return JSON.stringify(requestBody);
            }
            return svc;
    },
    parseResponse: function (svc, apiResponse) {
		return { svc: svc, apiResponse: apiResponse };
    }
});

module.exports = serviceImpl;
