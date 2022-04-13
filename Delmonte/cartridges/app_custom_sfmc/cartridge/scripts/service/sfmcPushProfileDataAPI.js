/* eslint-disable no-undef */
'use strict';

var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

var serviceImpl = LocalServiceRegistry.createService('sfmc.push.profile.data.api', {
    createRequest: function (svc , requestBody, sfmcToken) {
	
		if(requestBody) {
			svc.addHeader('Content-Type', 'application/json');
			svc.addHeader('Authorization', 'Bearer '+sfmcToken);
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
