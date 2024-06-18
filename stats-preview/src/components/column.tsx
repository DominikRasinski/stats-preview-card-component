import { HeroImage } from './heroImage';
import { Description } from './description';

export const Column = () => {
  const imageUrl = require('./assets/image-header-desktop.jpg');

  return (
    <div className='flex flex-col justify-center items-center bg-dark-desaturated-blue'>
      <HeroImage image={imageUrl} />
      <Description />
    </div>
  );
};
