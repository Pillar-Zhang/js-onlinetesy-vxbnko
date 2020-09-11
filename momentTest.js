import {now} from 'lodash'
import moment from 'moment'
const relativeTime = time => moment(time).fromNow();

const result = relativeTime("2017-10-01")

console.log(result,'from now')