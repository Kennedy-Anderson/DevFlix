import React from 'react'

function ButtonLink(props){
    // props => { className: "vindo de antes" , href: " o que for passado "  }
    return(
            <a className= {props.className} href={props.href}>
                {props.children}
            </a>
    );

}
export default ButtonLink;