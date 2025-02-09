import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ToggleTheme() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) return storedTheme;

        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

        return systemTheme;
    });

    useEffect(() => {

        theme === "dark"? document.documentElement.classList.add("dark"): document.documentElement.classList.remove("dark");

        localStorage.setItem("theme", theme);

    }, [theme]);

    return (

        <button
            onClick={() => 
            setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 cursor-pointer"
        >
            {
            theme === "dark" ?
             <Sun size={20} absoluteStrokeWidth={true} className='text-primary-white' /> : 
             <Moon size={20} absoluteStrokeWidth={true} className='text-primary-blue'/>
             }
        </button>

    );
}

export default ToggleTheme;
