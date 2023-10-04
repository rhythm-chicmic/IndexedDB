import {RxJsonSchema,toTypedRxJsonSchema,ExtractDocumentTypeFromTypedRxJsonSchema} from 'rxdb';

export const HERO_SCHEMA_LITRAL = {
    title:'Hero Schema',
    description:'describes a simple hero',
    version:0,
    keyCompression:false,
    type:'object',
    properties: {
        name: {
            type: 'string',
            default: '',
            minLength: 3
        },
        color : {
            type: 'string',
            default: '',
            minLength: 3
        },
        hp : {
            type: 'number',
            minimum: 0,
            maximum: 100,
            default: 100
        }
    },
    required: [
        'name',
        'color',
        'hp'
    ],
    primaryKey:'name' // primary key is required 
} as const;

const schemaTyped = toTypedRxJsonSchema(HERO_SCHEMA_LITRAL);
export type RxHeroDocumentType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;

export const HERO_SCHEMA:RxJsonSchema<RxHeroDocumentType> = HERO_SCHEMA_LITRAL;
