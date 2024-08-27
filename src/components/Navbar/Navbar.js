import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsx("nav", { className: "fixed top-0 left-0 w-full h-16 z-50 flex justify-center items-center text-white", children: _jsxs("div", { className: "flex flex-wrap justify-between items-center w-full px-4 md:px-8 py-4 md:py-0 md:h-16", children: [_jsx("div", { className: "flex justify-between items-center w-full md:w-auto", children: _jsx("button", { className: "text-customWhite md:hidden focus:outline-none", onClick: toggleMenu, children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16m-7 6h7" }) }) }) }), _jsxs("div", { className: `${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row items-center w-36 md:w-auto absolute top-16 left-0 border border-neutral-900 md:bg-transparent md:relative md:top-0 md:left-0`, children: [_jsxs("a", { href: "#home", onClick: handleScroll, className: "relative text-customWhite font-bold py-4 md:py-0 mx-2 md:mx-8 cursor-pointer group w-full text-center md:w-auto", children: ["Home", _jsx("span", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100" })] }), _jsxs("a", { href: "#about", onClick: handleScroll, className: "relative text-customWhite font-bold py-4 md:py-0 mx-2 md:mx-8 cursor-pointer group w-full text-center md:w-auto", children: ["About Us", _jsx("span", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100" })] }), _jsxs("a", { href: "#ser", onClick: handleScroll, className: "relative text-customWhite font-bold py-4 md:py-0 mx-2 md:mx-8 cursor-pointer group w-full text-center md:w-auto", children: ["Service", _jsx("span", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100" })] }), _jsxs("a", { href: "#port", onClick: handleScroll, className: "relative text-customWhite font-bold py-4 md:py-0 mx-2 md:mx-8 cursor-pointer group w-full text-center md:w-auto", children: ["Portfolio", _jsx("span", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100" })] }), _jsxs("a", { href: "#cont", onClick: handleScroll, className: "relative text-customWhite font-bold py-4 md:py-0 mx-2 md:mx-8 cursor-pointer group w-full text-center md:w-auto", children: ["Contact", _jsx("span", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100" })] })] })] }) }));
};
export default Navbar;
