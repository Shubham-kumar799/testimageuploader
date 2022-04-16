import { Flex, IconButton, Image } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ImagePreview = ({ file, setFiles, files }) => {
  return (
    <Flex
      alignItems={'center'}
      borderColor={'gray.100'}
      borderWidth={2}
      flexDirection={'column'}
      position="relative"
    >
      <IconButton
        top={'-15%'}
        position={'absolute'}
        variant={'outline'}
        colorScheme="red"
        rounded={'full'}
        icon={<DeleteIcon />}
        bgColor={'red.50'}
        onClick={() => setFiles(files.filter(f => f.name != file.name))}
      />
      <Image
        w={150}
        h={150}
        objectFit="contain"
        src={URL.createObjectURL(file)}
      />
    </Flex>
  );
};

export default ImagePreview;
