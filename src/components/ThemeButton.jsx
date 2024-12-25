import { useContext } from "react";
import "../assets/styles/ThemeButton.css";
import { GlobalContext } from "../context/GlobalContext";

const ThemeButton = () => {
	const { isSuperMode, themeSwitchHandler } = useContext(GlobalContext);

	const handleThemeSwitch = () => {
		themeSwitchHandler(!isSuperMode);
		document.documentElement.setAttribute("data-theme", !isSuperMode ? "dark" : "");
	};
	return (
		<button type="button" className="t-button rounded-full border-black" onClick={handleThemeSwitch}>
			<span className={"t-icon transition-all mr-2 " + (isSuperMode ? "opacity-100" : "opacity-0")}>🦸</span>
			<span className={"t-icon transition-all ml-2 " + (isSuperMode ? "opacity-0" : "opacity-100")}>👨‍💻</span>
		</button>
	);
};

export default ThemeButton;
