import t from '../../translation';

const armor = {
  1: {
    text: t('armorHealer1Text'),
    notes: t('armorHealer1Notes', { con: 6 }),
    con: 6,
    value: 30,
    canBuy: () => true,
  },
  2: {
    text: t('armorHealer2Text'),
    notes: t('armorHealer2Notes', { con: 9 }),
    con: 9,
    value: 45,
    canBuy: () => true,
  },
  3: {
    text: t('armorHealer3Text'),
    notes: t('armorHealer3Notes', { con: 12 }),
    con: 12,
    value: 65,
    canBuy: () => true,
  },
  4: {
    text: t('armorHealer4Text'),
    notes: t('armorHealer4Notes', { con: 15 }),
    con: 15,
    value: 90,
    canBuy: () => true,
  },
  5: {
    text: t('armorHealer5Text'),
    notes: t('armorHealer5Notes', { con: 18 }),
    con: 18,
    value: 120,
    last: true,
    canBuy: () => true,
  },
};

const head = {
  1: {
    text: t('headHealer1Text'),
    notes: t('headHealer1Notes', { int: 2 }),
    int: 2,
    value: 15,
    canBuy: () => true,
  },
  2: {
    text: t('headHealer2Text'),
    notes: t('headHealer2Notes', { int: 3 }),
    int: 3,
    value: 25,
    canBuy: () => true,
  },
  3: {
    text: t('headHealer3Text'),
    notes: t('headHealer3Notes', { int: 5 }),
    int: 5,
    value: 40,
    canBuy: () => true,
  },
  4: {
    text: t('headHealer4Text'),
    notes: t('headHealer4Notes', { int: 7 }),
    int: 7,
    value: 60,
    canBuy: () => true,
  },
  5: {
    text: t('headHealer5Text'),
    notes: t('headHealer5Notes', { int: 9 }),
    int: 9,
    value: 80,
    last: true,
    canBuy: () => true,
  },
};

const shield = {
  1: {
    text: t('shieldHealer1Text'),
    notes: t('shieldHealer1Notes', { con: 2 }),
    con: 2,
    value: 20,
    canBuy: () => true,
  },
  2: {
    text: t('shieldHealer2Text'),
    notes: t('shieldHealer2Notes', { con: 4 }),
    con: 4,
    value: 35,
    canBuy: () => true,
  },
  3: {
    text: t('shieldHealer3Text'),
    notes: t('shieldHealer3Notes', { con: 6 }),
    con: 6,
    value: 50,
    canBuy: () => true,
  },
  4: {
    text: t('shieldHealer4Text'),
    notes: t('shieldHealer4Notes', { con: 9 }),
    con: 9,
    value: 70,
    canBuy: () => true,
  },
  5: {
    text: t('shieldHealer5Text'),
    notes: t('shieldHealer5Notes', { con: 12 }),
    con: 12,
    value: 90,
    last: true,
    canBuy: () => true,
  },
};

const weapon = {
  0: {
    text: t('weaponHealer0Text'),
    notes: t('weaponHealer0Notes'),
    value: 0,
    canBuy: () => true,
  },
  1: {
    text: t('weaponHealer1Text'),
    notes: t('weaponHealer1Notes', { int: 2 }),
    int: 2,
    value: 20,
    canBuy: () => true,
  },
  2: {
    text: t('weaponHealer2Text'),
    notes: t('weaponHealer2Notes', { int: 3 }),
    int: 3,
    value: 30,
    canBuy: () => true,
  },
  3: {
    text: t('weaponHealer3Text'),
    notes: t('weaponHealer3Notes', { int: 5 }),
    int: 5,
    value: 45,
    canBuy: () => true,
  },
  4: {
    text: t('weaponHealer4Text'),
    notes: t('weaponHealer4Notes', { int: 7 }),
    int: 7,
    value: 65,
    canBuy: () => true,
  },
  5: {
    text: t('weaponHealer5Text'),
    notes: t('weaponHealer5Notes', { int: 9 }),
    int: 9,
    value: 90,
    canBuy: () => true,
  },
  6: {
    text: t('weaponHealer6Text'),
    notes: t('weaponHealer6Notes', { int: 11 }),
    int: 11,
    value: 120,
    last: true,
    canBuy: () => true,
  },
};

export {
  armor,
  head,
  shield,
  weapon,
};
