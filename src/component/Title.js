import React from "react";

const Title = () => {
  return (
    <div class="title">
      <h1>Changez votre vie </h1>
      <h2>achetez une Cactus</h2>
      <button onClick={function msg(){
        alert("Bonjour")
      }}>
        let's start !
        </button>
    </div>
  );
};

export default Title;