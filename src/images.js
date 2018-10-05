import Logo from "./img/logo.png";

import Sector1 from "./img/s1.jpg";
import Sector2 from "./img/s2.jpg";
import Sector3 from "./img/s3.jpg";

import Project1 from "./img/p1.jpg";
import Project2 from "./img/p2.jpg";
import Project3 from "./img/p3.jpg";
import Project4 from "./img/p4.jpg";

import VideoBG from "./img/video-bg.jpg";

import Blog1 from "./img/b1.jpg";
import Blog2 from "./img/b2.jpg";
import Blog3 from "./img/b3.jpg";
import User from "./img/user.png";

module.exports = {
    header: {
        logo: Logo
    },
    mainPage: {
        marketSectors: [Sector1, Sector2, Sector3],
        projects: [Project1, Project2, Project3, Project4],
        videoBg: VideoBG,
        blog: [Blog1, Blog2, Blog3, User]
    }
};