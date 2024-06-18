type HeroImageProps = {
  image: string;
};

export const HeroImage = (props: HeroImageProps) => {
  const { image } = props;

  return (
    <div className='w-full'>
      <div className='w-full h-full z-50 bg-soft-violet'></div>
      <img
        src={image}
        alt='hero'
      />
    </div>
  );
};
