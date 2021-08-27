import {endOfInput, optionalWhitespace, many, char, choice, str, everyCharUntil, sequenceOf, namedSequenceOf} from 'arcsecond'
import fs from 'fs'

const newline = choice([
  str('\n'),
  str('\r\n'),
  endOfInput
])

const useless_line = sequenceOf([
  everyCharUntil(newline), newline
]).map(x => undefined)

const seperator = sequenceOf([
  optionalWhitespace,
  char('-'),
  optionalWhitespace
]).map(x => undefined)

const sep = sequenceOf([
  optionalWhitespace,
  str('-'),
  optionalWhitespace,
])

const ban_line = namedSequenceOf([
  ['-', str('- ')],
  ['name', everyCharUntil(sep)],
  ['-', sep],
  ['id', everyCharUntil(sep)],
  ['-', sep],
  ['reason1', everyCharUntil(sep)],
  ['-', sep],
  ['reason2', everyCharUntil(sep)],
  ['-', sep],
  ['time', everyCharUntil(sep)],
  ['-', sep],
  ['map', everyCharUntil(sep)],
  ['-', sep],
  ['comment', everyCharUntil(sep)],
  ['-', sep],
  ['authorisedBy', everyCharUntil(sep)],
  ['-', sep],
  ['adminname', everyCharUntil(newline)],
]).map(x => ({...x, type: 'ban'}))

const kick_line = namedSequenceOf([
  ['-', str('- ')],
  ['name', everyCharUntil(sep)],
  ['-', seperator],
  ['map', everyCharUntil(sep)],
  ['-', seperator],
  ['adminname', everyCharUntil(newline)],
]).map(x => ({...x, type: 'kick'}))


export const kickParser = many(choice([kick_line, useless_line]))
export const banParser = many(choice([ban_line, useless_line]))
