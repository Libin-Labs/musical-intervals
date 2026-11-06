import * as api from '@lp-labs/musical-intervals';
import { intervalBetween, invertInterval } from '@lp-labs/musical-intervals';
const interval = intervalBetween(60, 67);
if (interval.name !== 'perfect fifth' || invertInterval(7) !== 5)
  throw new Error('Interval mismatch');
// @ts-expect-error invalid argument must be rejected by declarations
api.intervalBetween('60', 60);
