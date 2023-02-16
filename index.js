const yaml = require('yaml');
const FgGreen = "\x1b[32m";
const FgRed = "\x1b[31m";
const FgYellow = "\x1b[33m";

exports.info = (message, obj) => {
    console.log(FgGreen, yaml.stringify({ message, level: 'info', ...obj}));
}

exports.warn = (message, obj) => {
    console.log(FgYellow, yaml.stringify({ message, level: 'warn', ...obj}));
}

exports.error = (message, obj) => {
    console.log(FgRed, yaml.stringify({ message, level: 'error', ...obj}));
}