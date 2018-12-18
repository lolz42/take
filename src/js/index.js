import $ from "jquery";
import _ from "lodash";

/*----------- Bootstrap -----------*/

import "bootstrap";
/*----------- Lettering -----------*/

import "./jquery.lettering.js";

/*----------- GSAP -----------*/

/*----------- ScrollMagic -----------*/

// import ScrollMagic from "../../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic";
// import "../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import "../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
/*----------- Style -----------*/

import "../scss/style.scss";
/*----------- Scripts -----------*/

import "./custom.js";

require.context("./../", true, /\.(png|jpe?g|gif|svg)$/);
