import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import { getPhotos } from '../apiService/photos.js';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../components/Loader/Loader';
import Button from '../components/Button/Button';

import { useEffect, useState } from 'react';

const initImages = [
  {
    id: 3573351,
    avg_color: '#374824',
    src: {
      original:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
      large:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
      medium:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
      small:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
  {
    id: 35733515,
    avg_color: '#374824',
    src: {
      original:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
      large:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
      medium:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
      small:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
];

export default function Photos() {
  const [images, setImages] = useState(initImages);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = inputValue => {
    if (inputValue.text === query) {
      toast('You already searched this query 🙂');
      return;
    }
    console.log(inputValue.text);
    setQuery(inputValue.text);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getData() {
      setIsLoading(true);
      try {
        const data = await getPhotos(query, page);
        if (data.photos.length === 0) {
          toast.error('No images found');
          return;
        }
        console.log(data.photos);
        setImages(prevImages => [...prevImages, ...data.photos]);
      } catch (error) {
        toast.error('Something went wrong! Try again.');
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [query, page]);

  return (
    <>
      {images.length === 0 && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}

      <Form onSubmit={handleQuery} />
      {isLoading && <Loader />}
      <PhotosGallery images={images} />
      <Button onClick={() => setPage(prev => prev + 1)} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load more'}
      </Button>

      <Toaster position="top-right" />
    </>
  );
}
