import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

function GifExpertApp() {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h3>GifExpertApp</h3>
			<AddCategory onNewCategory={onAddCategory} />
			{categories.length === 0 ? (
				<p className='noResults'>Nada para mostrar</p>
			) : (
				categories.map((category) => (
					<GifGrid key={category} category={category} />
				))
			)}
		</>
	);
}

export default GifExpertApp;
