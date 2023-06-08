"use client";

import { useState, useLayoutEffect, useEffect } from "react";

const screens = [
	{ device: "xs", width: 0 },
	{ device: "sm", width: 640 },
	{ device: "md", width: 768 },
	{ device: "lg", width: 1024 },
	{ device: "xl", width: 1280 },
	{ device: "2xl", width: 1536 },
];

const SliderChildren = ({ children }) => {
	const [windowSize, setWindowSize] = useState("xs");
	const [pages, setPages] = useState([]);
	const [itemsPerPage, setItemsPerPage] = useState(3);
	const [currentPage, setCurrentPage] = useState(1);

	// Detect current device
	useLayoutEffect(() => {
		function catchWindowSize() {
			const currentDevice = screens.reduce(
				(acc, current) =>
					window.innerWidth > current.width ? current.device : acc,
				"sm"
			);
			setWindowSize(currentDevice);
		}

		catchWindowSize();

		window.addEventListener("resize", () => {
			catchWindowSize();
		});
	}, []);

	// Consider optimal nb of items per slider page
	useEffect(() => {
		switch (windowSize) {
			case "xs":
				setItemsPerPage(1);
				break;
			case "sm":
				setItemsPerPage(1);
				break;
			case "md":
				setItemsPerPage(1);
				break;
			case "lg":
				setItemsPerPage(2);
				break;
			case "xl":
				setItemsPerPage(2);
				break;
			case "2xl":
				setItemsPerPage(3);
				break;
			default:
				setItemsPerPage(1);
		}
		setCurrentPage(1);
	}, [windowSize]);

	// Affect items in each slider page
	useEffect(() => {
		if (children) {
			const pagesNeeded = Math.floor(children.length / itemsPerPage);
			const pageCount = pagesNeeded + 1;
			let newArr;

			if (children.length > 1) {
				let accumulator = [];
				for (let x = 0; x < pageCount; x++) {
					accumulator = [...accumulator, []];
				}

				let count = 0;
				newArr = children.reduce((acc, item) => {
					let copy = [...acc];
					if (copy[count].length >= itemsPerPage) count++;
					copy[count] = [...copy[count], item];
					return copy;
				}, accumulator);
			} else {
				newArr = [[children]];
			}

			if (newArr[newArr.length - 1].length === 0) newArr.pop();

			setPages(newArr);
		}
	}, [children, itemsPerPage]);

	return (
		<div className="overflow-x-hidden">
			{children?.length > 0 ? (
				<>
					{/* container cards */}
					<div
						style={{ width: `calc(100% * ${pages.length})` }}
						className={` flex flex-nowrap`}>
						{pages?.map((page, index) => (
							<div
								key={index}
								style={{
									width: `inherit`,
									right: `calc(100% / ${pages.length} * ${currentPage - 1})`,
									transition: "right .5s ease",
								}}
								className={`relative gap-4 grid 
            grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 `}>
								{page?.map((item, index) => (
									<div key={index}>{item}</div>
								))}
							</div>
						))}
					</div>

					{/* container Dots */}
					<div className="flex flex-wrap justify-center gap-4  md:gap-3 mt-16">
						{pages?.map((current, index) => (
							<button
								key={index}
								className={`${
									currentPage === index + 1
										? "bg-secondary"
										: "bg-secondary opacity-50"
								} w-6 h-6 md:w-5 md:h-5  rounded-full`}
								style={{
									transition: "background .5s ease",
								}}
								onClick={() => setCurrentPage(index + 1)}></button>
						))}
					</div>
				</>
			) : (
				<div className="flex justify-center items-center">No data found</div>
			)}
		</div>
	);
};

export default Slider;
