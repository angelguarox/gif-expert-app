import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

function useFetchGifs(category) {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await getGifs(category);
		setImages(newImages);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		images,
		isLoading,
	};
}

export default useFetchGifs;
