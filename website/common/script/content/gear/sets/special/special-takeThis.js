import t from '../../../translation';

const armorSpecialTakeThis = {
  text: t('armorSpecialTakeThisText'),
  notes: t('armorSpecialTakeThisNotes', { attrs: 5 }),
  value: 0,
  con: 5,
  int: 5,
  per: 5,
  str: 5,
  canBuy: () => true,
};

const backSpecialTakeThis = {
  text: t('backSpecialTakeThisText'),
  notes: t('backSpecialTakeThisNotes', { attrs: 1 }),
  value: 0,
  con: 1,
  int: 1,
  per: 1,
  str: 1,
  canBuy: () => true,
};

const bodySpecialTakeThis = {
  text: t('bodySpecialTakeThisText'),
  notes: t('bodySpecialTakeThisNotes', { attrs: 1 }),
  value: 0,
  con: 1,
  int: 1,
  per: 1,
  str: 1,
  canBuy: () => true,
};

const headSpecialTakeThis = {
  text: t('headSpecialTakeThisText'),
  notes: t('headSpecialTakeThisNotes', { attrs: 5 }),
  value: 0,
  con: 5,
  int: 5,
  per: 5,
  str: 5,
  canBuy: () => true,
};

const shieldSpecialTakeThis = {
  text: t('shieldSpecialTakeThisText'),
  notes: t('shieldSpecialTakeThisNotes', { attrs: 5 }),
  value: 0,
  con: 5,
  int: 5,
  per: 5,
  str: 5,
  canBuy: () => true,
};

const weaponSpecialTakeThis = {
  text: t('weaponSpecialTakeThisText'),
  notes: t('weaponSpecialTakeThisNotes', { attrs: 5 }),
  value: 0,
  con: 5,
  int: 5,
  per: 5,
  str: 5,
  canBuy: () => true,
};

export {
  armorSpecialTakeThis,
  backSpecialTakeThis,
  bodySpecialTakeThis,
  headSpecialTakeThis,
  shieldSpecialTakeThis,
  weaponSpecialTakeThis,
};
