const NotFoundPage = () => {
  return (
    <div className='center-container'>
      <img
        className='image-not-found'
        src={require("../images/404.jpg")}
        alt='notFoundImage'
      />
    </div>
  );
};

export default NotFoundPage;
