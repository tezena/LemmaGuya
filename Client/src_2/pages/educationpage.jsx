import React from "react";
import { ReactDOM } from "react";
import Navigation from "../components/NavBar";
import EduHero from "../components/Education/EduHero";
import Card from "../components/Blog/Card";
import DisplayECard from "../components/Education/eduCardDisplay";
import edu from "../components/Blog/eduData";


function Education() {
    return (
        <>
            <EduHero />
            <div className="px-auto">
            <DisplayECard data={edu}/>      

            </div>
        </>
    )
}

export default Education;