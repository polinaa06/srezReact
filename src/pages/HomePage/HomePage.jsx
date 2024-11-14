
import { SliderComponent } from "../../components/Slider/Slider";


export function HomePage() {
    return (
        <>
            <div className="banner">
                <h2>Создай свой стиль с нами</h2>
            </div>

            <div className="gallery">
                <h2>Галерея</h2>

                <div className="slider">
                    <SliderComponent />
                </div>
            </div>
        </>
    )
}