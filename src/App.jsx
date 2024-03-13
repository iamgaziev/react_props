import React, { useState } from "react";
import Input from "./components/Input";
import Screen from "./components/Screen/Screen";
import Images from "./components/Img/Images";
import image1 from "./images/images1.jpg";
import image2 from "./images/images2.jpg";
import image3 from "./images/images3.jpg";
import image4 from "./images/books.jpg";

const App = () => {

  let arrImages = [image1, image2, image3, image4];


  const [text, setText] = useState("");
  const [color, setColor] = useState("#3d61f0");
  const [clickedImg, setClickedImg] = useState(arrImages[0]);

  

  return (
    <div>
      <Input type="text" value={text} callback={setText} />
      <Input type="color" value={color} callback={setColor} />
      <div style={{ display: "flex" }}>
        <Images setClickedImg={setClickedImg} arrImages={arrImages} />
        <Screen text={text} color={color} image={clickedImg} />
      </div>
    </div>
  );
};

export default App;
