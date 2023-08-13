import React from "react";
import { ReactDOM } from "react";
import CoHero from "../components/contact/conHero";
import MessageUs from "../components/contact/messageUs";
import Map from "../components/contact/map";



function Contact() {
    return (
        <div className="">     
            <MessageUs />
            <CoHero />
            <Map/>
        </div>
    )
}


export default Contact;