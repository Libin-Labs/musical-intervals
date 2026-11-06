const labels = [
  'unison',
  'minor second',
  'major second',
  'minor third',
  'major third',
  'perfect fourth',
  'tritone',
  'perfect fifth',
  'minor sixth',
  'major sixth',
  'minor seventh',
  'major seventh',
  'octave',
];
export interface Interval {
  readonly semitones: number;
  readonly direction: 'ascending' | 'descending' | 'unison';
  readonly simple: number;
  readonly octaves: number;
  readonly name: string;
}
export function intervalBetween(first: number, second: number): Interval {
  if (!Number.isFinite(first) || !Number.isFinite(second))
    throw new TypeError('Pitches must be finite MIDI values');
  const d = second - first,
    abs = Math.abs(d),
    whole = Math.floor(abs / 12),
    simple = Math.round(abs) % 12;
  return {
    semitones: abs,
    direction: d > 0 ? 'ascending' : d < 0 ? 'descending' : 'unison',
    simple,
    octaves: whole,
    name: labels[Math.min(simple, 12)]!,
  };
}
export function invertInterval(semitones: number): number {
  if (!Number.isInteger(semitones) || semitones < 0 || semitones > 12)
    throw new RangeError('Simple interval must be [0,12]');
  return semitones === 0 || semitones === 12 ? semitones : 12 - semitones;
}
