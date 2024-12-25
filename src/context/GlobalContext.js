import { createContext, useState } from "react";

export const GlobalContext = createContext({
	currentTheme: "",
	themeSwitchHandler: () => {},
});

const GlobalContextProvider = (props) => {
	const [isSuperMode, setIsSuperMode] = useState(true);

	const themeSwitchHandler = (themeType) => {
		setIsSuperMode(themeType);
	};

	return (
		<GlobalContext.Provider
			value={{
				isSuperMode,
				themeSwitchHandler: themeSwitchHandler,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
