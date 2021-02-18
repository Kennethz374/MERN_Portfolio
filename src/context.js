import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isCvModalOpen, setIsCvModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openCvModal = () => {
		setIsCvModalOpen(true);
	};
	const closeCvModal = () => {
		setIsCvModalOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				openSidebar,
				closeSidebar,
				openCvModal,
				closeCvModal,
				isSidebarOpen,
				isCvModalOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
export { AppContext, AppProvider };
