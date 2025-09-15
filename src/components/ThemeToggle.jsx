import { Moon, Sun } from "lucide-react";
import { useState, useEffect  } from "react"; 
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }else{
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };
    return (
        <button onClick={toggleTheme} className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 rounded-full p-2 transition-colors duration-300",
            "focus:outline-none"
        )}>
            {isDarkMode ? (
                <Sun className="h-3 w-3 text-yellow-300" />
            ) : (
                <Moon className="h-3 w-3 text-blue-900" />
            )}
        </button>
    );
};
