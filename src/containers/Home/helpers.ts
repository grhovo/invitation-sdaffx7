export const loadImage = (src:string) => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };

    image.src = src;
  });
};
