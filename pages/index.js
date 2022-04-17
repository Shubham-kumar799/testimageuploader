import ImageUpload from '../components/ImageUpload';
import { useState } from 'react';

const Home = () => {
  const [files, setFiles] = useState([]);
  return <ImageUpload files={files} setFiles={setFiles} />;
};

export default Home;
