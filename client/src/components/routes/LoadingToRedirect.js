import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { currentUser } from "../../functions/auth";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(3);
    const history = useHistory();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000)
        // redirect if ..
        count === 0 && history.push('/');
        return () => clearInterval(interval)
    }, [count, history])

    return (
       

        <div className="container p-5 text-center text-danger">
            <h5>Redirect in {count} second</h5>
        </div>
    )
}

export default LoadingToRedirect
