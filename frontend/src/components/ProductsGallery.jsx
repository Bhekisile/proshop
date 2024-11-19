import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductsGallery = ({ product }) => {

  const images = product?.image?.reduce((acc, image) => {
    return [
      ...acc,  
      {
      original: image.original,
      thumbnail: image.thumbnail,
    },
  ];
  }, []) || [];  // Fallback to an empty array if reduce fails

  return (
    <ImageGallery items={images} />
  );
};

export default ProductsGallery;