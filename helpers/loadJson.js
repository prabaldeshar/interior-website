import path from "path";
// import fs from "fs";

const { promisify } = require("util");

// const readFile = promisify(fs.readFile);

async function getProjects() {
    const data = require('../projects.json');
    const projects = data.projects;
    return projects;
}

export default getProjects;