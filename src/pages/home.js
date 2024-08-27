import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import '../assets/font.css';
import ParticlesDemo from "../components/magicui/paticlescomponents";
import { DockDemo } from "../components/magicui/dockcomponents";
import { TextRevealDemo } from "../components/magicui/text-revealcomponents";
import { ScrollBasedVelocityDemo } from "../components/magicui/velocitycomponents";
import NumberTickerDemo from "../components/magicui/countcomponent";
import ProjectGrid from "../components/Acertinity/servicecomponents";
import Slideshow from "../components/Acertinity/poster";
import Footer from "../components/Footer/Footercomponents";
const home = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "overflow-hidden bg-[#05081E] relative md:top-28", children: [_jsx("div", { className: "relative overflow-x-hidden", id: "home", children: _jsx(ParticlesDemo, {}) }), _jsx("div", { className: " mt-10 relative -top-24 md:-top-20 z-10", children: _jsx(DockDemo, {}) }), _jsx("p", { className: "flex items-center justify-center font-light md:text-2xl text-neutral-300 relative -top-6", children: "Code your dreams into reality, one line at a time, with creativity" }), _jsx("p", { className: "flex items-center justify-center font-light md:text-2xl text-neutral-300 relative -top-6", children: "and precision in every keystroke." }), _jsx("div", { className: "flex justify-center items-center text text-white text-6xl md:text-8xl font-semibold mt-36", children: _jsx("p", { className: " relative -top-14", id: "about", children: "About Us" }) }), _jsx("p", { className: "flex items-center justify-center relative -top-10 text-gray-500 text-2xl md:text-5xl font-bold", children: "LeetCode Diaries Assosiation" }), _jsx("div", { className: " relative top-[48.6rem] -mt-[64rem]", children: _jsx(TextRevealDemo, {}) }), _jsx("div", { className: "relative left-8 md:-top-28 -top-10 md:left-60 ", children: _jsx(NumberTickerDemo, {}) }), _jsx("div", { className: " relative top-16", children: _jsx(ScrollBasedVelocityDemo, {}) }), _jsx("div", { className: "flex justify-center items-center text text-white text-6xl md:text-8xl font-semibold mt-36", children: _jsx("p", { className: " relative top-24", id: "ser", children: "Our Services" }) }), _jsx("p", { className: "flex items-center justify-center relative top-24 mt-8 text-gray-500 text-2xl md:text-4xl font-bold", children: "Partnering With Pillzen Pvt. Ltd" }), _jsx("div", { className: "py-28", children: _jsx(ProjectGrid, {}) }), _jsx("div", { className: "flex justify-center items-center text text-white text-4xl md:text-7xl font-semibold", children: _jsx("p", { className: " relative -top-14 -mt-20", id: "port", children: "Recent Work Portfolio" }) }), _jsx("div", { className: " flex items-center justify-center", children: _jsx(Slideshow, {}) }), _jsx("div", { className: " relative top-16 md:top-36", children: _jsx(ScrollBasedVelocityDemo, {}) }), _jsx("div", { className: " relative mt-36 md:mt-52  md:top-4", id: "cont", children: _jsx(Footer, {}) })] }) }));
};
export default home;
