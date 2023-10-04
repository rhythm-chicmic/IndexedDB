/**
 * custom typings so that typescript knows about the schema fields
 */

import type {
    RxDocument,
    RxCollection,
    RxDatabase
} from 'rxdb';
import { RxHeroDocumentType } from './schemas/hero.schema';

//ORM Methods
type RxHeroDocMethods = {
    hpPercent():number;
}

export type RxHeroDocument = RxDocument<RxHeroDocumentType,RxHeroDocMethods>;

export type RxHeroCollection = RxCollection<RxHeroDocumentType,RxHeroDocMethods,{}>;

export type RxHerosCollections =    {
    hero: RxHeroCollection;
}

export type RxHerosDatabase = RxDatabase<RxHerosCollections>;
