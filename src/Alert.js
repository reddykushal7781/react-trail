import React from 'react'
// import propTypes from 'prop-types';
function Alert(props) {
    return (

        // {/* // Look at this code carefully because it runs only when props.alert is not a null value */}

        props.alert1 && <div>
            <div className={`alert alert-${props.alert1.type} alert-dismissible fade show`} role="alert">
                <strong>{ props.alert1.msg}</strong>  : You should check in on some of those fields below.
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </div>
    )
}

export default Alert;
