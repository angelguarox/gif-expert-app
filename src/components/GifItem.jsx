import PropTypes from 'prop-types';

function GifItem({ title, url }) {
	return (
		<div className='card'>
			<img src={url} alt={title} />
			{title ? <p>{title}</p> : <p>--Without description--</p>}
		</div>
	);
}

GifItem.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
};

export default GifItem;
