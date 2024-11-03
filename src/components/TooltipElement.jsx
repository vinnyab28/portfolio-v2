import { useRef, useState } from "react";
import "../assets/styles/TooltipElement.css";

const TooltipElement = ({ label, children }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className="tooltip-wrapper inline-block relative" onMouseEnter={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>
			<span className={"tooltip-content " + (showTooltip ? "visible" : "hidden")}>{label}</span>
			<span>{children}</span>
		</div>
	);
};

export default TooltipElement;
