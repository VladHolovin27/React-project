import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageSearch from './components/ImageSearch/ImageSearch';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [message, setMessage] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [onSubmit, setOnSubmit] = useState('');
  const [load, setLoad] = useState(10);
  const API_KEY = '0eRWt4NkAbCtT-t6NfAT4AkOogtU95I62_77etj_UPQ';
  const BASE_URL = 'https://api.unsplash.com';

  useEffect(() => {
    const fetchImages = async (query, page = 1) => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/search/photos`, {
          params: {
            query: onSubmit,
            page,
            per_page: 12,
          },
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        });
        setImages((prevImg) => [...prevImg, ...response.data.results]);
      } catch (error) {
        setMessage('Не вдалося отримати зображення');
      } finally {
        setIsLoading(false);
      }
    };

    if (onSubmit) {
      fetchImages(onSubmit, load / 10);
    }
  }, [onSubmit, load]);

  const loadingImages = () => {
    setLoad(prev => prev + 10);
  };

  return (
    <div>
      <SearchBar onSubmit={setOnSubmit} />
      <ImageSearch images={images} setImage={setImages} />
      <Loader isLoading={isLoading} />
      <LoadMoreBtn loadingImages={loadingImages} />
      <ErrorMessage message={message} />
    </div>
  );
}

export default App;
