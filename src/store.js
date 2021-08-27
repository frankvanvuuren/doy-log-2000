import { writable } from 'svelte/store';

let activeTab = writable('eu-kick')



let editor = writable('')

let logs = writable({
  'eu-kick': '',
  'eu-ban': '',
  'us-kick': '',
  'us-ban': ''
})


export {activeTab, logs, editor}
