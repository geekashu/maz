import uuidv4 from './UUIDGenerator';
import _ from "lodash";
import moment from "moment";

const regexURLParser = (str, regex, first=false) => {
    let m; let result = '';

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
            if(groupIndex === 0 && first) {
                result = match
            }

            if (groupIndex === 1 && !first) {
                result = match;
            }
        });
    }
    return result;
};

const sleeper = (ms) => {
    return (x) => {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const formatErrorResponse = (errors) => {
    const e = _.map(errors, (er) => {
        return er.message;
    }).join("\n");

    if (!e) return "Something went wrong! Please try later."
    return e;
}

const formatDateTimeString = (val) => {
    return(moment(val, moment.DATETIME_LOCAL_MS).format('DD-MMM-YYYY, h:mm a'))
}

export {
    uuidv4,
    regexURLParser,
    sleeper,
    getRandomColor,
    capitalizeFirstLetter,
    formatErrorResponse,
    formatDateTimeString,
}