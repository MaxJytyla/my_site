import React from "react";
import head from "./img/me5.png";
import "./styles/main.css";
import Introraw from './customization/Introduction.json'
import Eduraw from './customization/Education.json'


export function ReadIntro() {
    return (
        <span class="text blcok-long">
            {Introraw.intro}
        </span>
    );
}

export function Intro() {
    return (
        <div class="intro">
            <span id="blcok">
                <img src={head} alt={"me with some goats. left to right: reese, oreo, and"}/>
            </span>
            <ReadIntro />
        </div>
    );
}

export function Edu() {
    const result = [];
    Eduraw.schools.map((school) => {
        result.push(
            <div class="edu">
                <span id="logo-block">
                <img src={require(`${school.logo}`)}  alt={"school"} />
                </span>
                <span class="text">
                    <p class="school">{school.name}  </p>
                    <p class="dep">{school.degree} </p>
                    <p class="time">{school.time}  </p>
                </span>
            </div>
        );
        return result;
    });

    return (
        result
    );
}