import { ForwardedRef, forwardRef } from 'react';

import { useInView } from 'react-intersection-observer';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
}

const ImageInner = (
  {
    src,
    alt,
    loading = 'lazy',
    placeholder = '/placeholder.png',
    ...other
  }: ImageProps,
  forwardRef: ForwardedRef<HTMLImageElement>
) => {
  const [ref, inView] = useInView();

  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;

    target.src = placeholder;
  };

  return inView ? (
    <img
      ref={forwardRef}
      alt={alt}
      src={src}
      loading={loading}
      {...other}
      onError={onError}
    />
  ) : (
    <img
      ref={ref}
      alt={alt}
      src={placeholder}
      loading={loading}
      {...other}
      onError={onError}
    />
  );
};

const Image = forwardRef(ImageInner);
export default Image;
