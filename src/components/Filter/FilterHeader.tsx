import React from 'react';

const FilterHeader = () => {
	return (
		<>
			<div className="filter-block column">
				<div className="titleContainer">
					<span className="title">Filter Items</span>
				</div>
				<div className="descrption">
					<div className="py-1">
						<span className="greyColor">Category: </span>
						<span>Regional</span>
					</div>
					<div className="py-1 pb-2">
						<span className="greyColor">Department: </span>
						<span>French</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default FilterHeader;
