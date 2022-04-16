import {
  Box,
  Button,
  VStack,
  Wrap,
  WrapItem,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import ImagePreview from './ImagePreview';

const ImageUpload = ({ max = 4 }) => {
  const [files, setFiles] = useState([]);
  const [alert, setAlert] = useState('');
  const inputRef = useRef(null);

  const handleChange = event => {
    if (event.target.files.length > max - files.length) {
      setAlert(
        'Max Images limit exceeded. You can only upload a maximum of 4 images'
      );
      inputRef.current.value = '';

      return;
    }
    setAlert('');
    setFiles([...files, ...Array.from(event.target.files)]);
    inputRef.current.value = '';
  };
  return (
    <VStack spacing={8}>
      <Box
        as={Button}
        p={12}
        textAlign={'center'}
        alignSelf={'center'}
        borderWidth={3}
        borderStyle="dashed"
        rounded={0}
        cursor={'pointer'}
        onClick={() => inputRef.current.click()}
        disabled={files.length >= max}
      >
        <input
          disabled={files.length >= max}
          ref={inputRef}
          hidden
          type="file"
          accept="image/png , image/jpeg"
          multiple={true}
          onChange={event => handleChange(event)}
        />
        {files.length >= max
          ? 'Max files selected'
          : `You can select atmost ${
              max - files.length
            } images (only jpeg and png accepted)`}
      </Box>
      <Box justifyContent={'center'}>
        {alert && (
          <Alert status="error">
            <AlertIcon />
            {alert}
          </Alert>
        )}
      </Box>
      <Wrap>
        {files?.map(f => {
          return (
            <WrapItem key={`${Math.random()} ${f}`}>
              <ImagePreview file={f} files={files} setFiles={setFiles} />
            </WrapItem>
          );
        })}
      </Wrap>
    </VStack>
  );
};

export default ImageUpload;
