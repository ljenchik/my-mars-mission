import { useMediaQuery } from 'react-responsive';
import './Mobile.scss'

const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 390px)",
  });
  
export const Mobile = () => {
    return (
        <div className="mobile">
             <p>Whoops! I'm in mobile mode.</p> 
        </div>
    )
}