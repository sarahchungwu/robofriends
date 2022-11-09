import React from "react";

const Scoll = (props) =>{
    return (
        <div style={{overflowY:'scroll',border:'1px solid #0ccac4',height:'530px'}}>
            {props.children}
        </div>
    );
};

export default Scoll;