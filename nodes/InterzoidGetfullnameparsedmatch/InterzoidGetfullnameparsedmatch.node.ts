import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { fullNameParsedSimilarityKeyDescription } from './resources/full-name-parsed-similarity-key';

export class InterzoidGetfullnameparsedmatch implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Interzoid Getfullnameparsedmatch',
                name: 'N8nDevInterzoidGetfullnameparsedmatch',
                icon: { light: 'file:./interzoid-getfullnameparsedmatch.png', dark: 'file:./interzoid-getfullnameparsedmatch.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API generates similarity key for matching parsed name components, including deduplication.',
                defaults: { name: 'Interzoid Getfullnameparsedmatch' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevInterzoidGetfullnameparsedmatchApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Full Name Parsed Similarity Key",
					"value": "Full Name Parsed Similarity Key",
					"description": ""
				}
			],
			"default": ""
		},
		...fullNameParsedSimilarityKeyDescription
                ],
        };
}
