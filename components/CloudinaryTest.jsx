import { CloudinaryContext, Image, UploadWidget } from 'cloudinary-react';

const CloudinaryTest = () => {
  return (
    <UploadWidget />
    // <CloudinaryContext cloudName="dyawcddd7">
    //   <div>
    //     <Image publicId="sample" width="50" />
    //   </div>
    //   <Image publicId="sample" width="0.5" />
    // </CloudinaryContext>
  );
};

export default CloudinaryTest;
