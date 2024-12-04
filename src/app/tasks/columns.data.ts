import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear)
dayjs.extend(isoWeek)

export const FILTERS: Record<string, Dayjs> = {
	// Record <key, value>
	today: dayjs().startOf('day'), // С сегодня до завтра
	tomorrow: dayjs().add(1, 'day').startOf('day'), // С завтра до послезавтра
	'on-this-week': dayjs().endOf('isoWeek'), // С послезавтра до начала следующей недели
	'on-next-week': dayjs().add(1, 'week').startOf('day'), // С начала следующей недели до начала после следующей недели
	later: dayjs().add(2, 'week').startOf('day') // Все остальное
}

export const COLUMNS = [
	{
		label: 'Today',
		value: 'today'
	},
	{
		label: 'Tomorrow',
		value: 'tomorrow'
	},
	{
		label: 'On this week',
		value: 'on-this-week'
	},
	{
		label: 'On next week',
		value: 'on-next-week'
	},
	{
		label: 'Later',
		value: 'later'
	},
	{
		label: 'Completed',
		value: 'completed'
	}
]
