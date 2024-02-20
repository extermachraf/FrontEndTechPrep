import React from "react";

const Popup = ({ id, header, body, footer, onClose }) => {
    return (
        <div id={id || "Modal"} className="modal">
            <div className="content-modal">
                <div className="header">
                    <span onClick={onClose} className="close-modal">&times;</span>
                    <h2>{header ? header : "header"}</h2>
                </div>
                <div className="booody">
                    {body ? (
                        body
                    ) : (
                        <div>
                            <p>this is our body content for the modal popup</p>
                        </div>
                    )}
                </div>
                <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
            </div>
        </div>
    );
};

export default Popup;
