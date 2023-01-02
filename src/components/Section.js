import React from "react";

export default function Section(props) {
  console.log(props);
  const bgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.bg})`,
  };
  return (
    <section style={bgStyle} id={props.id}>
      <div className="title-group">
        <h1>{props.title}</h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.logo}`}
          alt="title-image"
        />
      </div>
    </section>
  );
}
