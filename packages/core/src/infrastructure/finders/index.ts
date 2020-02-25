import { Container } from 'aurelia-framework';

import { ViewFinder } from '../view-finder';

import { PrimitiveViewFinder } from './primitive-view-finder';
import { SectionViewFinder } from './section-view-finder';
import { MultiSchemaViewFinder } from './multi-schema-view-finder';
import { AppLogger } from '../app-logger';

export function registerDefaultFinders(container: Container): void {
  const logger = AppLogger.makeLogger('registerDefaultFinders');
  logger.debug('registering');
  container.registerSingleton(ViewFinder, PrimitiveViewFinder);
  container.registerSingleton(ViewFinder, SectionViewFinder);
  container.registerSingleton(ViewFinder, MultiSchemaViewFinder);
  logger.debug('registered');
}
