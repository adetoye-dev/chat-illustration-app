const Picture = ({ url }) => {
  return (
    <div className="picture w-12 rounded-xl overflow-hidden aspect-square">
      <img src={`/images/${url}`} alt="picture message" />
    </div>
  );
};

const PictureMessage = () => {
  return (
    <div className="flex gap-3 justify-end mt-3">
      <Picture url="dog-image-1.jpg" />
      <Picture url="dog-image-2.jpg" />
      <Picture url="dog-image-3.jpg" />
    </div>
  );
};

export default PictureMessage;
