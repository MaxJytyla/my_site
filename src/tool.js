import Contactraw from "./customization/Contact.json";

export function Path(props) {
    return (
		<p class="path"> 
			<span>&nbsp;<i class="fa-brands fa-apple">&nbsp;&nbsp;</i></span>
			<span>&nbsp;&nbsp;<i class="fa fa-folder-open">&nbsp;</i>{props.path}&nbsp;&nbsp;</span>
		</p>
    );
}

export function Code(props) {
    return (
        <p id="code">
            &nbsp;&gt; {props.command} <br/>
        </p>
    );
}



export function ASCII() {
    return (
        <pre>
            <h2>
                <code>
{`
88b           d88                                      88                                     88              
888b         d888                                      88                 ,d                  88              
88\`8b       d8'88                                      88                 88                  88              
88 \`8b     d8' 88  ,adPPYYba,  8b,     ,d8             88  8b       d8  MM88MMM  8b       d8  88  ,adPPYYba,  
88  \`8b   d8'  88  ""     \`Y8   \`Y8, ,8P'              88  \`8b     d8'    88     \`8b     d8'  88  ""     \`Y8  
88   \`8b d8'   88  ,adPPPPP88     )888(                88   \`8b   d8'     88      \`8b   d8'   88  ,adPPPPP88  
88    \`888'    88  88,    ,88   ,d8" "8b,      88,   ,d88    \`8b,d8'      88,      \`8b,d8'    88  88,    ,88  
88     \`8'     88  \`"8bbdP"Y8  8P'     \`Y8      "Y8888P"       Y88'       "Y888      Y88'     88  \`"8bbdP"Y8  
                                                                d8'                   d8'                      
                                                            d8'                   d8'                       
`}</code>                 
            </h2>
        </pre>
    );
}

export function Contact() {
    return (
        <div class="contact">
            <p><i class="fa-solid fa-envelope"></i> Email: {Contactraw.email}</p>
            <p><i class="fa-solid fa-phone"></i> Phone: {Contactraw.phone}</p>
            <p><i class = "fa-solid fa-code-branch"></i> Github: <a href={Contactraw.githuburl}>{Contactraw.github}</a></p>
            <p><i class = "fa-solid fa-user-tie"></i> LinkedIn: <a href={Contactraw.linkedinurl}>{Contactraw.linkedin}</a></p>
        </div>
    );
}
