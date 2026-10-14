// Live, approximate distance to Voyager 1. Used by the HUD, the "distance" chapter and the contact line.
// Not certain — verify against NASA's Voyager mission status page. Basis: Voyager 1 reaches one light-day
// from Earth around November 2026 and recedes at roughly 17 km/s (Earth's own orbit adds about ±1 AU a year,
// which this ignores). Good to a few hundred million km, which is why the UI says "about".

const LIGHT_KM_S = 299_792.458;
const LIGHT_DAY_KM = LIGHT_KM_S * 86_400;
const REF_MS = Date.UTC(2026, 10, 15); // ≈ one light-day
const SPEED_KM_S = 17;

export const voyagerKm = (now = Date.now()) => LIGHT_DAY_KM + ((now - REF_MS) / 1000) * SPEED_KM_S;
export const lightSeconds = (km: number) => km / LIGHT_KM_S;

const nf = new Intl.NumberFormat('en-US');
export const fmtKm = (km: number) => nf.format(Math.round(km));
export function fmtDuration(s: number) {
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = Math.floor(s % 60);
  return `${h} h ${String(m).padStart(2, '0')} m ${String(sec).padStart(2, '0')} s`;
}
