import { useMediaQuery } from 'react-responsive';
import './Laptop.css'

const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
export const Laptop = () => {
    return (
        <div className="laptop">
            <p>Whoops! I'm in laptop mode.</p>
            <p>But if you see anything below me, I am now in Big Screen mode</p>
        </div>
    )
}