<script>
 import { BarChartStacked } from '@carbon/charts-svelte'
 import {banParser} from './log-parser.js'
 import "@carbon/charts/styles-g100.css"

 import {logs} from '../store'
 console.log(banParser)
 logs.subscribe((logs) => {
     let euKick = logs['eu-kick-log']
     banParser.fork(
         euKick,
         (error, state) => console.log(error, state),
         (result, state) => console.log(result, state)
     )
 })
</script>

<div id="graph" style="padding: 10px 10px">
    <BarChartStacked
        data={[
             {
                 "group": "EU KICK",
                 "key": "Joshua Bond",
                 "value": 65000
             },
             {
                 "group": "EU KICK",
                 "key": "Ying-Min Yang",
                 "value": 29123
             },
             {
                 "group": "EU KICK",
                 "key": "BG",
                 "value": 35213
             },
             {
                 "group": "EU KICK",
                 "key": "Old One Eye",
                 "value": 51213
             },
             {
                 "group": "EU KICK",
                 "key": "Wulfward",
                 "value": 16932
             },
             {
                 "group": "EU BAN",
                 "key": "Joshua Bond",
                 "value": 32432
             },
             {
                 "group": "EU BAN",
                 "key": "Ying-Min Yang",
                 "value": 21312
             },
             {
                 "group": "EU BAN",
                 "key": "BG",
                 "value": 56456
             },
             {
                 "group": "EU BAN",
                 "key": "Old One Eye",
                 "value": 21312
             },
             {
                 "group": "EU BAN",
                 "key": "Wulfward",
                 "value": 34234
             },
             {
                 "group": "US KICK",
                 "key": "Joshua Bond",
                 "value": 12312
             },
             {
                 "group": "US KICK",
                 "key": "Ying-Min Yang",
                 "value": 23232
             },
             {
                 "group": "US KICK",
                 "key": "BG",
                 "value": 34232
             },
             {
                 "group": "US KICK",
                 "key": "Old One Eye",
                 "value": 12312
             },
             {
                 "group": "US KICK",
                 "key": "Wulfward",
                 "value": 34234
             },
             {
                 "group": "US BAN",
                 "key": "Joshua Bond",
                 "value": 32423
             },
             {
                 "group": "US BAN",
                 "key": "Ying-Min Yang",
                 "value": 21313
             },
             {
                 "group": "US BAN",
                 "key": "BG",
                 "value": 64353
             },
             {
                 "group": "US BAN",
                 "key": "Old One Eye",
                 "value": 24134
             },
             {
                 "group": "US BAN",
                 "key": "Wulfward",
                 "value": 32423
             }
             ]}
             options={{
                     "title": "kicks and bans",
                     "toolbar": {
                         enabled: true,
                     },
                     "axes": {
                         "left": {
                             "mapsTo": "value",
                             "stacked": true
                         },
                         "bottom": {
                             "mapsTo": "key",
                             "scaleType": "labels"
                         }
                     },
                     "color": {
                         "scale": {
                             "EU KICK": "#FF3030",
                             "EU BAN": "#800505",
                             "US KICK": "#1CB9FC",
                             "US BAN": "#0372A1"
                         }
                     },
                     "height": "600px"
                     }}
    />
</div>
