<script>
    import { BarChartStacked } from '@carbon/charts-svelte'
    import {kickParser, banParser} from './log-parser.js'
    import "@carbon/charts/styles-g100.css"

    import {logs} from '../store'
    import euKickLog from '../logs/kick_logs_June_2021.txt?raw'
    import usKickLog from '../logs/US_June_Kick_03-18.txt?raw'
    import euBanLog from '../logs/ban_logs_June_2021.txt?raw'
    import usBanLog from '../logs/US_June_Ban_04-18.txt?raw'

    const gen_options = (loading) => ({
        "data": {
            "loading": loading
        },
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
    })

    let options = gen_options(true)

    const toData = (group) => (result, _) => {
        const a  = result.filter(x => x !== undefined).reduce((acc, val) => {
            if(acc[val.adminname] === undefined) {
                acc[val.adminname] = 0
            }
            acc[val.adminname] = acc[val.adminname] + 1
            return acc
        }, {})
        return Object.keys(a).map((key, index) => {
            return {
                "group": group,
                "key": key,
                "value": a[key]
            }
        })
    }
    let data = []
    logs.subscribe(logs => {
        let euKick = kickParser.fork(logs['eu-kick'], (error, parserState) => [], toData("EU KICK"))
        let euBan = banParser.fork(logs['eu-ban'], (error, parserState) => [], toData("EU BAN"))

        let usKick = kickParser.fork(logs['us-kick'], (error, parserState) => [], toData("US KICK"))
        let usBan = banParser.fork(logs['us-ban'], (error, parserState) => [], toData("US BAN"))

        data = [...euKick, ...euBan, ...usKick, ...usBan]

        if(euKick.length > 0 && euBan.length > 0, usKick.length > 0, usBan.length > 0) {
            options = gen_options(false)
        }

    })
</script>

<div id="graph" style="padding: 10px 10px">
    <BarChartStacked bind:data options={options} />
</div>
