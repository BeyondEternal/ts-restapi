"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing Comment');
    }
    return commentFromRequest;
};
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing Date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visilityFromRequest) => {
    if (!isString(visilityFromRequest) || !isVisibility(visilityFromRequest)) {
        throw new Error('Incorrect or missing Visibilty');
    }
    return visilityFromRequest;
};
const isVisibility = (param) => {
    return Object.values(enums_1.Visibility).includes(param);
};
const isWeather = (param) => {
    return Object.values(enums_1.Weather).includes(param);
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
