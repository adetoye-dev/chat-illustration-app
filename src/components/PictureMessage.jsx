const PictureMessage = () => {
  return (
    <div className="flex gap-3 justify-end mt-5">
      <div className="picture w-14 rounded-xl overflow-hidden aspect-square">
        <img src="/images/dog-image-1.jpg" alt="picture message" />
      </div>
      <div className="picture w-14 rounded-xl overflow-hidden aspect-square">
        <img src="/images/dog-image-2.jpg" alt="picture message" />
      </div>
      <div className="picture w-14 rounded-xl overflow-hidden aspect-square">
        <img src="/images/dog-image-3.jpg" alt="picture message" />
      </div>
    </div>
  );
};

export default PictureMessage;
