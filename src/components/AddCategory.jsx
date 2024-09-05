import { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ onNewCategory }) {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const trimedValue = inputValue.trim();
		if (trimedValue.length <= 1) return;
		onNewCategory(trimedValue);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar gifs por categoria'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
}

AddCategory.propTypes = {
	onNewCategory: PropTypes.func,
};

export default AddCategory;
