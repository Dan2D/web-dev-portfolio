import React from 'react';

function SvgMap(props) {
    const sml = <svg width="100%" height="100%">
                    <line x1="64%" y1="55%" x2="85%" y2="69%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                    <line x1="15%" y1="88%" x2="82%" y2="70%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                </svg>
    const med = <svg width="100%" height="100%">
                    <line x1="51%" y1="57%" x2="71%" y2="72%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                    <line x1="21%" y1="91%" x2="72%" y2="73%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                </svg>;
    const lg = <svg width="100%" height="100%">
                    <line x1="70%" y1="58%" x2="81%" y2="71%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                    <line x1="41%" y1="87%" x2="81%" y2="73%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
               </svg> ;
        
        
    
    return (
        props.size === "" ? sml : props.size ==="-md" ? med : lg
    )
}

export default SvgMap
