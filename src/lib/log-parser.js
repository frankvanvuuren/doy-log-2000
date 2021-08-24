import * as A2 from 'arcsecond'

const month = A2.choice([
  A2.str('Januari'),
  A2.str('Februari'),
  A2.str('March'),
  A2.str('May'),
  A2.str('June'),
  A2.str('Jule'),
  A2.str('August'),
  A2.str('September'),
  A2.str('Oktober'),
  A2.str('November'),
  A2.str('December')
])

const logType = A2.choice([
  A2.str('Kick'),
  A2.str('Ban')
]).map(result => result === 'Kick' ? 'kick' : 'ban')

const year = A2.sequenceOf([
  A2.digit,
  A2.digit,
  A2.digit,
  A2.digit
]).map(result => result.join(''))

const newline = A2.str('\n')

const timezone = A2.sequenceOf([
  A2.str('(Logged with timestamps of Timezone:'),
  A2.whitespace,
  A2.everyCharUntil(A2.char(')')),
  A2.char(')')
]).map(([_1, _2, timezone, _4]) => timezone)

const header = A2.sequenceOf([
  logType,
  A2.whitespace,
  A2.str('Logs of'),
  A2.whitespace,
  month,
  A2.whitespace,
  year,
  A2.whitespace,
  timezone,
  newline,
  newline,
  A2.str('Logs'),
  newline,
  newline
]).map(([type, _1, _2, _3, month, _4, year, _5, timezone]) => ({type, month, year, timezone}))

const date = A2.sequenceOf([
  A2.digit,
  A2.digit,
  A2.char('.'),
  A2.digit,
  A2.digit,
  A2.char('.'),
  A2.digit,
  A2.digit,
  A2.digit,
  A2.digit,
]).map(result => result.join(''))

const seperator = A2.choice([
  A2.str(' - '),
  A2.str(' -'),
  A2.str('- ')
])
const banEntree = A2.namedSequenceOf([
  ['', seperator],
  ['player', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['id', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['reason1', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['reason2', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['time', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['map', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['comment', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['authorisedBy', A2.everyCharUntil(seperator)],
  ['', seperator],
  ['adminName', A2.everyCharUntil(newline)],
  ['', newline]
]).map(result => ({
  player: result.player,
  id: result.id,
  reason1: result.reason1,
  reason2: result.reason2,
  time: parseInt(result.time),
  map: result.map,
  authorisedBy: result.authorisedBy,
  adminName: result.adminName
}))

const logDay = A2.sequenceOf([
  date,
  A2.many(newline),
  A2.many(banEntree),
  A2.many1(newline),
]).map(([date, _, entrees]) => ({
  date: date,
  entrees: entrees
}))

export const banParser = A2.sequenceOf([header, A2.many(logDay)]).map(([header, entrees]) => ({
  type: header.type,
  month: header.month,
  year: header.year,
  timezone: header.timezone,
  entrees: entrees
}))
