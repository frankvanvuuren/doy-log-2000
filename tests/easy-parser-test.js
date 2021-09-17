import fs from 'fs'
import {kickParser, banParser} from '../src/lib/easy-parser.js'
import chartSort from '../src/lib/chart-sort.js'

const euKickLog = fs.readFileSync('./src/logs/kick_logs_June_2021.txt', {encoding:'utf8', flag:'r'}).replaceAll('\r\n', '\n')
const usKickLog = fs.readFileSync('./src/logs/US_June_Kick_03-18.txt', {encoding:'utf8', flag:'r'}).replaceAll('\r\n', '\n')
const euBanLog = fs.readFileSync('./src/logs/ban_logs_June_2021.txt', {encoding:'utf8', flag:'r'}).replaceAll('\r\n', '\n')
const usBanLog = fs.readFileSync('./src/logs/US_June_Ban_04-18.txt', {encoding:'utf8', flag:'r'}).replaceAll('\r\n', '\n')

const toData = (group) => (result) => {
  return Object.keys(result).map((key, index) => {
    return {
      "group": group,
      "key": key.toUpperCase(),
      "value": result[key]
    }
  })
}

const euKick = kickParser(euKickLog, toData('EU KICK'))
const euBan = banParser(euBanLog, toData('EU BAN'))

const usKick = kickParser(usKickLog, toData('US KICK'))
const usBan = banParser(usBanLog, toData('US BAN'))

const data = [...euKick, ...euBan, ...usKick, ...usBan]

const result = chartSort(data)

console.log(result)
