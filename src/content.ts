// Everything a visitor reads lives here. Edit freely — no layout code below this line depends on wording.

export type Orbit = 0 | 1 | 2; // 0 = building, 1 = built, 2 = parked or idea
export type Project = { id: string; name: string; line: string; body: string; status: string; orbit: Orbit; href?: string };

export const projects: Project[] = [
  { id: 'say', name: 'Say', line: 'Talk to your browser.', body: 'Press a key, say what you want, and it happens. Under a second. Your voice stays on your computer.', status: 'Building v1', orbit: 0 },
  { id: 'glassbox', name: 'glassbox', line: 'See what your AI agent sends.', body: 'A live window on everything your coding agent sends out. It stops secrets before they leave your machine.', status: 'Building', orbit: 0 },
  { id: 'clible', name: 'Clible', line: 'A site you watch, not scroll.', body: 'The home for my products. One field of dots that changes shape and shows itself around.', status: 'Site built', orbit: 1 },
  { id: 'nod', name: 'nod', line: 'You are not alone on this page.', body: 'A small badge that shows how many people are on the same page as you, and lets you nod to them. Nothing is saved.', status: 'Parked, working demo', orbit: 2 },
  { id: 'roomy', name: 'Roomy', line: 'Get your disk back.', body: 'Finds old build folders and caches your tools can rebuild, and clears them safely.', status: 'Idea, parked', orbit: 2 },
  { id: 'turn', name: 'turn', line: 'Know when it is your turn.', body: 'A QR code at the counter shows your place in line, live, on your phone. No app.', status: 'Idea', orbit: 2 },
];

export const principles = [
  { title: 'Fast beats clever.', body: 'Most requests are simple. Answer those at once. Save the clever part for when it is needed.' },
  { title: 'Show the value first.', body: 'Let people see what they get before asking for anything.' },
  { title: 'Keep it on the device.', body: 'If data does not need to leave your computer, it does not.' },
  { title: 'One thing, done well.', body: 'Small tools, finished properly.' },
];

// TODO(debt): placeholder address carried over from the old site — replace with the real one before deploy.
export const contact = { email: 'hello@ayushsrivastav.com', github: 'https://github.com/srvstav' };

/** Intro beats. Captions are short facts; the dots draw the thing. */
export const beats = [
  { shape: 'huddle', caption: '' },
  { shape: 'webb', caption: 'James Webb Space Telescope — 18 gold mirrors, 1.5 million km from Earth' },
  { shape: 'voyager', caption: 'Voyager 1 — launched 1977, still sending data home' },
  { shape: 'chip', caption: 'The microchip — billions of switches on a fingernail' },
  { shape: 'people', caption: '' },
  { shape: 'name', caption: '' },
] as const;
export type Beat = (typeof beats)[number]['shape'];

/** The hero reel. Each caption is one plain fact. `rate` = speed of the shape's own motion; `spin`: how it turns. */
export const marvels = [
  { id: 'v12', name: 'Ferrari 12Cilindri', line: 'A 6.5-litre V12 with no turbo. It revs to 9,500 rpm.', rate: 13, spin: 'turn', ms: 4600 },
  { id: 'starship', name: 'Starship', line: 'The largest rocket ever flown. Its booster flies home and the tower catches it.', rate: 4, spin: 'sway', ms: 6200 },
  { id: 'exosphere', name: 'The exosphere', line: 'Where the air runs out and space begins, hundreds of kilometres up.', rate: .8, spin: 'still', ms: 4600 },
  { id: 'alma', name: 'ALMA, Chile', line: '66 antennas, 5,000 m up in the Atacama, working as one telescope.', rate: 1, spin: 'sway', ms: 4800 },
  { id: 'halley', name: 'Halley VI, Antarctica', line: 'A research station on legs and skis, so it can move when the ice does.', rate: 1.1, spin: 'sway', ms: 4800 },
  { id: 'sphere', name: 'Sphere, Las Vegas', line: 'Its outside is one screen, called the Exosphere: about 1.2 million LED pucks.', rate: 1, spin: 'look', ms: 4800 },
  { id: 'opera', name: 'Sydney Opera House', line: 'Every shell was cut from the same sphere. It took 14 years to build.', rate: 1.4, spin: 'sway', ms: 4800 },
  { id: 'drones', name: 'Drone shows, China', line: 'Thousands of drones flying as one picture in the night sky.', rate: 2.6, spin: 'sway', ms: 5000 },
] as const;
export type Marvel = (typeof marvels)[number];
