import "./Button.css";
import { MdOutlineArrowOutward } from "react-icons/md";

const Button = ({ text, href }) => {
    return (
        <div>
            <a
                href={href}
                className="inline-flex items-center gap-2 py-2 px-7 bg-orange rounded-full font-medium text-white" target="blank">
                {text}
                <MdOutlineArrowOutward className="text-2xl" />
            </a>
        </div>
    );
};

export default Button;
