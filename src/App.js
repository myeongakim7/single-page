import "./App.css";
// 외부적인 방식 (아웃라인요소)
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <>
      {/* header + nav */}
      <Header />
      {/* 디즈니 대표 섹션 */}
      <Section title="Disney" logo="logo-dp.png" bg="bg1.jpg" id="title" />
      {/* 디즈니 플러스*/}
      <Section title="Disney +" logo="logo-d.png" bg="bg2.jpg" id="disney" />
      {/* 마블 */}
      <Section title="Marvel" logo="logo-m.png" bg="bg3.jpg" id="marvel" />
      {/* 스타워즈 */}
      <Section title="Star Wars" logo="logo-s.png" bg="bg4.jpg" id="starwars" />
      {/* 네셔널지오그래피 */}
      <Section
        title="National Geography"
        logo="logo-ng.png"
        bg="bg5.jpg"
        id="NGO"
      />
      {/* 20세기 스튜디오 */}
      <Section
        title="20th Centry Studios"
        logo="logo-20.png"
        bg="bg3.jpg"
        id="20th"
      />
    </>
  );
}

export default App;
