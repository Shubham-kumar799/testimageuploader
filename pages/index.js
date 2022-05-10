import ImageUpload from '../components/ImageUpload';
import { useState } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
const Home = () => {
  const [files, setFiles] = useState([]);

  const handleClick = async () => {
    try {
      if (files.length === 0) return;
      // const result = await axios.post(
      //   'https://api.cloudinary.com/v1_1/dyawcddd7/image/upload',
      //   { files }
      // );
      Cloudinary.v2.uploader.unsigned_upload(
        files[0],
        'flppcrxe',
        options,
        result => console.log(' callback result', result)
      );

      console.log('result -> ', result);
    } catch (error) {
      console.log('uploading image error', error);
    }
  };
  return (
    <Flex alignItems={'center'} direction={'column'}>
      <ImageUpload files={files} setFiles={setFiles} />
      <Button onClick={handleClick}>Upload</Button>
    </Flex>
  );
};

export default Home;
