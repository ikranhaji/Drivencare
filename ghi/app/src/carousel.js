import mazda from "./images/mazda.png"
import toyota from "./images/toyotarav4.jpeg"

function Carousel() {
    return (
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style={{ transitionDuration: '0.01s' }}>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={toyota} class="d-block mx-auto w-50" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={mazda} class="d-block mx-auto w-50" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={toyota} class="d-block mx-auto w-50" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={mazda} class="d-block mx-auto w-50" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;
