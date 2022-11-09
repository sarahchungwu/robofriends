import React from "react";


//这里Andrei用的是函数组件
const Card = (props) => {
    const{ name,email } = props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt= 'robots' src={`https://robohash.org/${props.id}?200*200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );

}

export default Card;