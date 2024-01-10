import React from "react";
import Pubraw from "./customization/Publication.json";
import "./styles/main.css";


export function Pub() {
    const journal = [];
    Pubraw.journal.map((paper) => {
        journal.push(
            <li><span>
                <b>{paper.title}</b><br/>
                {paper.author} <br/>
                {paper.organization}  <br/>
                <a href={paper.link} target="_blank"  rel="noreferrer">[Paper]</a>
            </span></li>
        );
    });
    const conference = [];
 
    return (
        
        <div class="pub-list">
			<p></p>
			<ul>
				{journal}
			</ul>

		</div>
    );
}

export default Pub;