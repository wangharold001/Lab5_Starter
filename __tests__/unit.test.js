// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//phone number
test('valid parentheses format', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('valid dashed format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('invalid, no separators', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});
test('invalid digits', () => {
  expect(isPhoneNumber('12-3456-890')).toBe(false);
});

//email
test('valid, simple', () => {
  expect(isEmail('test@example.com')).toBe(true);
});
test('valid, numeric', () => {
  expect(isEmail('user1247@example.com')).toBe(true);
});
test('invalid, missing "@"', () => {
  expect(isEmail('shitexample.com')).toBe(false);
});
test('invalid, missing TLD', () => {
  expect(isEmail('user@example')).toBe(false);
});

//password
test('valid, letters only', () => {
  expect(isStrongPassword('Abcde')).toBe(true);
});
test('valid, letters / numbers / underscore', () => {
  expect(isStrongPassword('Z3_cbc')).toBe(true);
});
test('valid, starts with digit', () => {
  expect(isStrongPassword('1abcrg')).toBe(false);
});
test('valid, too long', () => {
  expect(isStrongPassword('A12343848890123456')).toBe(false); // 17 chars
});

//date
test('valid, 1 digit month & day', () => {
  expect(isDate('3/14/2020')).toBe(true);
});
test('valid, 2 digit month & day', () => {
  expect(isDate('12/31/2000')).toBe(true);
});
test('invalid, two‑digit year', () => {
  expect(isDate('3/14/20')).toBe(false);
});
test('invalid, wrong separator', () => {
  expect(isDate('3-14-2023')).toBe(false);
});

//hex
test('valid, 3‑digit with #', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('valid,6‑digit w/o #', () => {
  expect(isHexColor('FEDBCA')).toBe(true);
});
test('invalid too short', () => {
  expect(isHexColor('#ff')).toBe(false);
});
test('invalid chars', () => {
  expect(isHexColor('ggg')).toBe(false);
});