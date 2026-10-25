import {assets} from "../assets/assets.js"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
            <img onClick={()=>navigate('/')} src={assets.logo} className="w-32 sm:w-44" alt="logo_image" />
            <button onClick={'/admin'} className="flex items-center gap-2 cursor-pointer rounded-full text-sm bg-primary text-white px-10 py-2.5">Login
                <img src={assets.arrow} className="w-3" alt="arrow_image" />
            </button>
        </div>
    )
}

export default Navbar;