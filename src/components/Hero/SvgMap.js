import React from 'react';

function SvgMap(props) {
    const sml = <svg width="100%" height="100%">
                    <line x1="37%" y1="34%" x2="84%" y2="48.5%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                    <line x1="12%" y1="76%" x2="84%" y2="49%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                </svg>
    const med = <svg width="100%" height="100%">
                    <line x1="50%" y1="36%" x2="78%" y2="54%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                    <line x1="22%" y1="76%" x2="78%" y2="55%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                </svg>;
    const lg = <svg width="100%" height="100%">
                    <line x1="47%" y1="35%" x2="69%" y2="55%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
                    <line x1="24%" y1="76%" x2="70%" y2="55%" style={{"stroke": "#F3E9D2", "strokeWidth": "2", "strokeDasharray": "10"}} />
               </svg> ;
        
        
    
    return (
        props.size === "" ? sml : props.size ==="-md" ? med : lg
    )
}

export default SvgMap
