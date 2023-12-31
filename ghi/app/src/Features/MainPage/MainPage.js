import Carousel from "../Carousel/carousel";

function MainPage() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center mb-0">
        <h1 className="display-5 fw-bold bigger-text">DrivenCare</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            The premiere solution for automobile dealership
            management!
          </p>
        </div>
      </div>
      <Carousel />
    </>

  );
}

export default MainPage;
