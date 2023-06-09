import React from "react";

const page = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-scree">
			<nav className="w-full h-16 flex items-center justify-center bg-slate-300">
				Navigation
			</nav>
			<div className="w-full h-96 flex items-center justify-center bg-slate-100">
				Section
			</div>
			<div className="w-full h-96 flex items-center justify-center bg-slate-200">
				Section
			</div>
			<div className="w-full h-96 flex items-center justify-center bg-slate-100">
				Section
			</div>
			<footer className="w-full h-32 flex items-center justify-center bg-slate-300">
				Footer
			</footer>
		</div>
	);
};

export default page;
