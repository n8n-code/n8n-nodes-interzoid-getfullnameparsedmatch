import type { INodeProperties } from 'n8n-workflow';

export const fullNameParsedSimilarityKeyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Full Name Parsed Similarity Key"
					]
				}
			},
			"options": [
				{
					"name": "Getfullnameparsedmatch",
					"value": "Getfullnameparsedmatch",
					"action": "Gets a similarity key for matching purposes for parsed full name data",
					"description": "Gets a similarity key for matching purposes for parsed full name data, where the first name and last name are split into separate fields in the source data rather than combined.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getfullnameparsedmatch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getfullnameparsedmatch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Full Name Parsed Similarity Key"
					],
					"operation": [
						"Getfullnameparsedmatch"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Full Name Parsed Similarity Key"
					],
					"operation": [
						"Getfullnameparsedmatch"
					]
				}
			}
		},
		{
			"displayName": "Firstname",
			"name": "firstname",
			"required": true,
			"description": "First name from which to generate similarity key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "firstname",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Full Name Parsed Similarity Key"
					],
					"operation": [
						"Getfullnameparsedmatch"
					]
				}
			}
		},
		{
			"displayName": "Lastname",
			"name": "lastname",
			"required": true,
			"description": "Last name from which to generate similarity key",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "lastname",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Full Name Parsed Similarity Key"
					],
					"operation": [
						"Getfullnameparsedmatch"
					]
				}
			}
		},
];
