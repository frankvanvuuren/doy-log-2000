<script>
    import { BarChartStacked } from '@carbon/charts-svelte'
    import {kickParser, banParser} from './easy-parser.js'
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

    const toData = (group) => (result) => {
        return Object.keys(result).map((key, index) => {
            return {
                "group": group,
                "key": key,
                "value": result[key]
            }
        })
    }
    let data = []
    function generate() {
        let euKick = kickParser($logs['eu-kick'], toData("EU KICK"))
        let euBan = banParser($logs['eu-ban'], toData("EU BAN"))

        let usKick = kickParser($logs['us-kick'], toData("US KICK"))
        let usBan = banParser($logs['us-ban'], toData("US BAN"))

        data = [...euKick, ...euBan, ...usKick, ...usBan]

        if(euKick.length > 0 && euBan.length > 0, usKick.length > 0, usBan.length > 0) {
            options = gen_options(false)
        }
    }

    let new_record = {
        group: "EU KICK",
        key: "",
        value: 0,
    }

    function removeRecord(s) {
        return function() {
            data = data.filter(x => {
                if(x["group"] == s["group"] && x["key"] == s["key"]) {
                    return false
                } else {
                    return true
                }
            })
        }
    }

    function addRecord() {
        data = [...data, new_record]
        console.log(new_record)
        new_record = {group: "EU KICK", key: "", value: 0}

    }
</script>

<div>
    <button class="button is-danger" on:click={generate}>Generate</button>
    <div id="graph" style="padding: 10px 10px">
        <BarChartStacked bind:data options={options} />
    </div>
    {#if data.length > 1 } 
        <hr>
        <div class="columns">
            <div class="column">
                <div class="table-container">
                    <table class="table is-dark is-fullwidth is-bordered is-narrow is-hoverable">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Admin</th>
                                <th>Value</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each data as record }
                                <tr>
                                    <td>{record.group}</td>
                                    <td><input class="input" type="text" bind:value={record.key} /></td>
                                    <td><input class="input" type="number" bind:value={record.value} /></td>
                                    <td><button on:click={removeRecord(record)} class="button is-danger">DELETE</button></td>
                                </tr>
                            {/each}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <select class="select" bind:value={new_record.group}>
                                        <option>EU KICK</option>
                                        <option>EU BAN</option>
                                        <option>US KICK</option>
                                        <option>US BAN</option>
                                    </select>
                                </td>
                                <td><input class="input" type="text" bind:value={new_record.key}/></td>
                                <td><input class="input" type="number" bind:value={new_record.value}/></td>
                                <td><button on:click={addRecord} class="button is-primary">ADD</button></td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    {/if}
    
</div>
