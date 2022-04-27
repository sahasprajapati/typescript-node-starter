import { env } from '@utils/env';

export const config: IMain.Config = {
  b: env('ENV')
};
