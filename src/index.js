const moment                                 = require('moment');
const dayjs                                  = require('dayjs')
const { DateTime }                           = require('luxon')
const { ZonedDateTime, DateTimeFormatter }   = require('js-joda')
const { parse, addYears, subMonths, format } = require('date-fns')

const iso = '2011-10-11T13:00:00.000Z';

// Moment
function fnMoment() {
    const from    = moment(iso)
    const to      = moment(from).add(1, 'year').subtract(6, 'months')
    const format  = 'YYYY-MM-DD [at] HH:mm'
    const fromStr = from.format(format)
    const toStr   = to.format(format)
    const str     = `From ${fromStr} to ${toStr}`
    console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00
}
fnMoment();

function fnDayJs() {
// Day.js
const from    = dayjs(iso)
const to      = from.add(1, 'year').subtract(6, 'months')
const format  = 'YYYY-MM-DD [at] HH:mm'
const fromStr = from.format(format)
const toStr   = to.format(format)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00
}
fnDayJs();


function fnLuxon() {
// Luxon
const from    = DateTime.fromISO(iso)
const to      = from.plus({ year: 1 }).minus({ month: 6 })
const format  = "yyyy-MM-dd 'at' HH:mm"
const fromStr = from.toFormat(format)
const toStr   = to.toFormat(format)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00
}
fnLuxon();


function fnJsJoda() {
// JS-Joda
const from    = ZonedDateTime.parse(iso)
const to      = from.plusYears(1).minusMonths(6)
const format  = DateTimeFormatter.ofPattern("y-MM-d 'at' H:mm")
const fromStr = from.format(format)
const toStr   = to.format(format)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00
}
fnJsJoda();

function fnDateFns() {
// Date-Fns
const from    = parse(iso)
const to      = subMonths(addYears(from, 1), 6) // or you can use any chain tool, e.g @inventistudio/using-js
const formatS = "YYYY-MM-DD [at] HH:mm"
const fromStr = format(from, formatS)
const toStr   = format(to, formatS)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00
}
fnDateFns();
