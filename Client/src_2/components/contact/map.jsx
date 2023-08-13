import React from "react";
import { ReactDOM } from "react";

function Map() {
    return (
        <div className=" h-50 w-100 bg-black">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.556733997803!2d38.76667179709238!3d9.005069349452281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85b0052ec8cf%3A0x1bf2572894d59929!2zQWJlcnVzIENvbXBsZXggfCBCb2xlIERlbWJlbCB8IOGKoOGJoOGIqeGItSDhiIXhipXhjLsgfCDhiabhiIwg4Yuw4Yid4Ymg4YiN!5e0!3m2!1sen!2set!4v1691528453789!5m2!1sen!2set" style={{ width:"100%", height:"400px", border: "0", allowfullscreen: " ", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
        </div>
    )
}


export default Map;