// calculate the height of each card to assume the position of half circle
// x -> index of card
// y -> number of cards
// tslint:disable-next-line:whitespace
export const getArchHeight = (x, y) => Math.sqrt(1 - Math.pow((y-1)/2 - x, 2) / ((y-1)*(y-1) + 2*(y-1)));

export const getArchHeightFromZero = (x, y) => getArchHeight(x, y) - getArchHeight(0, y);

export const getArchAngle = (x, y) => ((x - y / 2) / (y / 2)) * 9;

export const getCircleTop = (x, y, w) => (Math.sin((- 7 / 4) * Math.PI * (x + 1) / y) + 1) * w / 2;

export const getCircleLeft = (x, y, w) => (Math.cos((- 7 / 4) * Math.PI * (x + 1) / y) + 1) * w / 2;
