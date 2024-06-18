import { HeroImage } from './heroImage';
import { Description } from './description';

export const Column = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-dark-desaturated-blue'>
      <HeroImage image={''} />
      <Description />
    </div>
  );
};
