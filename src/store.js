import { writable } from 'svelte/store';

let activeTab = writable('eu-kick-log')



let editor = writable('')

let logs = writable({
  'eu-kick': '',
  'eu-ban': '',
  'eu-kick': '',
  'us-ban': ''
})

export {activeTab, logs, editor}
