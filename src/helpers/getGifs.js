const API_KEY = '6jWCKjzUuLLMinbNZX22UL64M6Uo5GER';
const LIMIT = 10;

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${LIMIT}`;
	const response = await fetch(url);
	const { data } = await response.json();
	const gifs = data.map((image) => ({
		id: image.id,
		title: image.title,
		url: image.images.downsized_medium.url,
	}));
	return gifs;
};
