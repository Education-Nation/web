import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to={mailto}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;