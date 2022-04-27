import { logger } from '@utils/logger';

logger.error('Hey %s %d %d', 'Sahas', 2, 3, { userId: 2134 });
logger.info('Hey %s', 'Sahas', { userId: 2134 });
logger.warn('Hey %s', 'Sahas');
