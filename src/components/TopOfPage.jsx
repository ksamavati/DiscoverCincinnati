import React from 'react'

const TopOfPage = () => {

	const scroll = () => {
		{window.scrollTo(0, 0)}
	}

	return (
		<div onClick={scroll} className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></div>
	)
}

export default TopOfPage