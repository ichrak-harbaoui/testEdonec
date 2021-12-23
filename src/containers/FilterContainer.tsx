import React, { useState } from 'react';

const FilterContainer = () => {
	const colors = [
		{ name: 'blue', color: 'rgb(110, 178, 251)' },
		{ name: 'green', color: 'rgb(0, 211, 202)' },
		{ name: 'red', color: 'rgb(246, 47, 94)' },
		{ name: 'orange', color: 'rgb(254, 92, 7)' },
		{ name: 'yellow', color: 'rgb(248, 231, 28)' },
		{ name: 'pistache', color: 'rgb(126, 211, 33)' },
		{ name: 'purple', color: 'rgb(144, 19, 254)' },
	];
	const sizes = [
		{ title: 'XS', checked: false },
		{ title: 'S', checked: false },
		{ title: 'M', checked: false },
		{ title: 'L', checked: false },
		{ title: 'XL', checked: false },
	];
	const [sizesstate, setstate] = useState(sizes);

	return (
		<div className="filter-container" style={{ width: '18rem', backgroundColor: '#fff' }}>
			<div className="filter-header">
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
			<div className="filter-body">
				<div className="colorBlock">
					<div className="color-block">Color</div>
					<div className="descrption">
						<fieldset id="group1">
							{colors.map((el) => (
								<input style={{ color: el.color }} type="radio" key={el.name} name="group1" />
							))}
						</fieldset>
					</div>
				</div>
				<div>
					<div className="colorBlock">
						<div className="color-block">Sizes</div>
						{sizesstate.map((el) => (
							<span
								style={{
									backgroundColor: el.checked ? '#f62f5e' : '#efefef',
									color: el.checked ? 'white' : 'black',
								}}
								onClick={() => {
									const findsize = sizesstate.findIndex((siz) => siz.title === el.title);
									const newobject = sizesstate.map((size) => {
										if (size.title === el.title)
											return { title: size.title, checked: !size.checked };
										return size;
									});
									setstate(newobject);
								}}
								className="spancheckboxFilter"
							>
								{el.title}
							</span>
						))}
						<div className="footerBlock">
							<div
								color="primary"
								className="buttonFilter "
								style={{ borderRadius: 24, height: 35, width: 90 }}
							>
								<span className="submitButtonText">Apply</span>
							</div>

							<div style={{ color: '#f62f5e' }}>
								<span>Clear All</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterContainer;
