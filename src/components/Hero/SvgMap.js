import React, {Fragment} from 'react';

function SvgMap(props) {
    const sml = <svg width="100%" height="100%">
                    <line x1="64%" y1="55%" x2="85%" y2="69%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                    <line x1="15%" y1="88%" x2="82%" y2="70%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                </svg>
                // TODO(CREATE MED MAP)
    const med = <svg width="100%" height="100%">
                    <line x1="64%" y1="55%" x2="85%" y2="69%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                    <line x1="15%" y1="88%" x2="82%" y2="70%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                </svg>;
    const lg = <svg width="100%" height="100%">
                    <line x1="70%" y1="58%" x2="81%" y2="71%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
                    <line x1="41%" y1="87%" x2="81%" y2="73%" style={{"stroke": "#F3E9D2", "stroke-width": "2", "stroke-dasharray": "10"}} />
               </svg> ;
        
        
    
    return (
        props.size === "" ? sml : props.size ==="md" ? med : lg
    )
}

export default SvgMap
