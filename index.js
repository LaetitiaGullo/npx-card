#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
// const gradient = require('gradient-string');
// console.log(gradient.morning('Hello world!Hello world!Hello world!Hello world!'));

const data = {
    name: chalk.whiteBright.bold("LAETITIA GULLO"),
    work: chalk.magenta.bold("Junior web developer @BeCode Liège"),
    github: chalk.gray("   https://github.com/") + chalk.white("LaetitiaGullo"),
    linkedin: chalk.gray(" https://linkedin.com/in/") + chalk.white("laetitia-gullo"),
    npm: chalk.gray("      https://npmjs.com/") + chalk.white("~laeti-g"),
    twitter: chalk.gray("  https://twitter.com/") + chalk.white("LaetitiaGullo"),
    npx: chalk.gray("     npx") + " " + chalk.white("laetig"),
    labelWork: chalk.white.bold("Work:"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelLinkedIn: chalk.white.bold("LinkedIn:"),
    labelNpm: chalk.white.bold("npm:"),
    labelTwitter: chalk.white.bold("Twitter:"),
    labelCard: chalk.white.bold("Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.magenta(
        boxen(
            [
                `${data.name}`,
                EMPTYLINE,
                `${data.work}`,
                EMPTYLINE,
                EMPTYLINE,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelTwitter} ${data.twitter}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "double",
            },
        ),
    ),
);