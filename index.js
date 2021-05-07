"use strict"

import jwt from 'jsonwebtoken';

const secret = "MY SCRET KEY";

const generatedKey = jwt.sign(
	{
		organization: "TEST COMPANY"
	},
	secret,
	{
		algorithm: 'HS512',
		expiresIn: "356 days"
	}

);

console.log("Generated API Key : " + generatedKey);
