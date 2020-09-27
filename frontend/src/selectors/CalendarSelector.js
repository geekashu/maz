import {createSelector} from 'reselect';
import _ from 'lodash';
import moment from "moment";

const calendarSelector = state => state.calendar;

const getEndDate = (params) => {
    // If interval is "00:00:00" and  [day, week, weekday, month, year] are empty -- All Day Event - Repeat - Once
    // If interval is "00:00:00" and [day, week, weekday, month, year] any one is non empty - Repeat Event
    // If interval is not "00:00:00", timed single event

    let end = null;
    if(params.interval !== "00:00:00") {
        if(params.day === '' && params.week === '' && params.weekday === '' && params.month === '' && params.year === '') {
            const duration = moment.duration(params.interval)
            end = moment(params.start).add(duration).toDate();
        } else {
            // We have a repeat event which starts on specific time and ends on specific time.
            // TODO: Not Enough Time to implement
        }
    } else {
        if(params.day === '' && params.week === '' && params.weekday === '' && params.month === '' && params.year === '') {
            end = moment(params.start).endOf('day').toDate();
        }
    }
    return end;
}

const isAllDayEvent = (params) => {
    let result = false;
    // If interval is "00:00:00" and  [day, week, weekday, month, year] are empty -- All Day Event - Repeat - Once
    if(params.interval === "00:00:00") {
        if(params.day === '' && params.week === '' && params.weekday === '' && params.month === '' && params.year === '') {
            result = true
        }
    }
    return result;
}

const getEvents = () => createSelector(
    calendarSelector,
    calendar => {
        return _.flatMap(calendar.events, ({ title, description, appointments }) =>
            _.map(appointments, ev => (
                {
                    'title': ev.title,
                    'allDay': isAllDayEvent(ev),
                    'start': moment(ev.start).toDate(),
                    'end': getEndDate(ev),
                     desc: ev.description
                }
            ))
        );
    }
)

export const CalendarSelector = {
    getEvents,
};
