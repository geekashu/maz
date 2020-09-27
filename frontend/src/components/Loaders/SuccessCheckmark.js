import React, {useEffect, useState} from "react";

const SuccessCheckmark = () => {
    const [addSuccess, setAddSuccess] = useState(false);

    useEffect(() => {
        setTimeout(function(){
            setAddSuccess(true);
        }, 1000)

        return () => {
            setAddSuccess(false);
        }
    },[])

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={`circle-loader ${addSuccess ? 'load-complete': ''}`}>
                <div className="checkmark draw" style={{display: addSuccess ? 'block': ''}}></div>
            </div>
        </div>
    )
}

export default SuccessCheckmark;