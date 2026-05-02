import { describe, expect, it } from 'vitest';
import { stripLocaleFromPath } from './deeplink';

describe('stripLocaleFromPath', () => {
  it('strips a 2-char locale prefix', () => {
    expect(stripLocaleFromPath('/en/auth/strava/callback', 'en')).toBe('/auth/strava/callback');
    expect(stripLocaleFromPath('/fr/auth/strava/callback', 'fr')).toBe('/auth/strava/callback');
    expect(stripLocaleFromPath('/de/auth/strava/callback', 'de')).toBe('/auth/strava/callback');
    expect(stripLocaleFromPath('/es/auth/strava/callback', 'es')).toBe('/auth/strava/callback');
  });

  it('strips a regional locale prefix like pt-pt', () => {
    expect(stripLocaleFromPath('/pt-pt/auth/strava/callback', 'pt-pt')).toBe('/auth/strava/callback');
  });

  it('strips a locale on a deeper path', () => {
    expect(stripLocaleFromPath('/pt-pt/foo/bar/baz', 'pt-pt')).toBe('/foo/bar/baz');
  });

  it('returns the same path when locale is not present', () => {
    expect(stripLocaleFromPath('/auth/strava/callback', 'en')).toBe('/auth/strava/callback');
  });
});
