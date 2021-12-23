import React from 'react';
export const Loader = () => {
	return (
		<div className="justify-content-center align-items-center">
			<div
				className="spinner-border"
				style={{ width: '3rem', height: '3rem', color: 'red' }}
				role="status"
			></div>
		</div>
	);
};
