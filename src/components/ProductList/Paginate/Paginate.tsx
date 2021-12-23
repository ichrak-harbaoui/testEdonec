import React from 'react';

type IProps = {
	currentPage: number;
	setCurrentPage: (active: number) => void;
	totalProducts: number;
	productPerPage: number;
};

const Paginate = ({ currentPage, setCurrentPage, totalProducts, productPerPage }: IProps) => {
	const totalPages = Math.ceil(totalProducts / productPerPage);
	let pages = [];

	for (let p = 1; p <= totalPages; p++) {
		pages.push(p);
	}

	return (
		<ul className="pagination">
			<li className={`page-item ${currentPage === 1 && `disabled`}`}>
				<button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
					&laquo;
				</button>
			</li>
			{pages.map((page) => (
				<li
					key={page}
					className={`page-item ${page === currentPage && `active`}`}
					onClick={() => setCurrentPage(page)}
				>
					<button className="page-link">{page}</button>
				</li>
			))}
			<li className={`page-item ${currentPage === totalPages && `disabled`}`}>
				<button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
					&raquo;
				</button>
			</li>
		</ul>
	);
};

export default Paginate;
