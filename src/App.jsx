import { useState } from "react";
import "./assets/css/App.css";

function Header({ score }) {
  return (
    <div className="header">
      <ul className="logo">
        <li>Taş</li>
        <li>Kağıt</li>
        <li>Makas</li>
      </ul>
      <div className="score">
        <p>SKOR</p>
        <h2>{score}</h2>
      </div>
    </div>
  );
}

function Game({ handleClickedStartGame }) {
  return (
    <div className="game-img">
      <div className="game-img-box">
        <button onClick={() => handleClickedStartGame("kagit")}>
          <img src="./img/kagit-logo.svg" alt="" />
        </button>
        <button onClick={() => handleClickedStartGame("makas")}>
          <img src="./img/makas-logo.svg" alt="" />
        </button>
      </div>
      <div className="tas-img">
        <button onClick={() => handleClickedStartGame("tas")}>
          <img src="./img/tas-logo.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

function RulesBtn() {
  const showModal = () => {
    const modal = document.querySelector("#modal");
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="rules">
      <a onClick={() => showModal()}>Rules</a>
    </div>
  );
}

function RulesHtml() {
  const closeModal = () => {
    const modal = document.querySelector("#modal");
    if (modal) {
      modal.close();
    }
  };

  return (
    <dialog id="modal">
      <div className="rules-container">
        <h3>KURALLAR</h3>
        <a onClick={() => closeModal} >
          <img src="./img/rules-close.png" alt="" />
        </a>
      </div>
    </dialog>
  );
}

function Picked({ text, img }) {
  return (
    <div className="picked-box">
      <button>
        <img src={img} alt="" />
      </button>
      <p>{text}</p>
    </div>
  );
}

function Result({ text }) {
  return (
    <div class="result">
      <h1>{text}</h1>
      <a onClick={() => window.location.reload()}>TEKRAR OYNA</a>
    </div>
  );
}

function App() {
  const [component, setComponent] = useState(null);
  const [score, setScore] = useState(0);

  function handleClickedStartGame(secim) {
    let rastgeleSayi = Math.round(Math.random() * 2);

    if (secim === "tas") {
      setComponent(
        <div className="picked">
          <Picked img={"./img/tas-logo.svg"} text={"SEÇİMİNİZ"} />
          <Picked
            img={"./img/secim-background-oval.svg"}
            text={"SİZİN SEÇİMİNİZ"}
          />
        </div>
      );

      setTimeout(function () {
        setComponent(
          <>
            <Result
              text={
                (rastgeleSayi === 0 && "BERABERE") ||
                (rastgeleSayi === 1 && "KAYBETTİNİZ") ||
                (rastgeleSayi === 2 && "KAZANDINIZ")
              }
            />
            <div className="picked">
              <Picked img={"./img/tas-logo.svg"} text={"SEÇİMİNİZ"} />
              <Picked
                img={
                  (rastgeleSayi === 0 && "./img/tas-logo.svg") ||
                  (rastgeleSayi === 1 && "./img/kagit-logo.svg") ||
                  (rastgeleSayi === 2 && "./img/makas-logo.svg")
                }
                text={"SİZİN SEÇİMİNİZ"}
              />
            </div>
          </>
        );
        if (rastgeleSayi === 2) {
          setScore(score + 1);
        }
      }, 1000);
    } else if (secim === "kagit") {
      setComponent(
        <div className="picked">
          <Picked img={"./img/kagit-logo.svg"} text={"SEÇİMİNİZ"} />
          <Picked
            img={"./img/secim-background-oval.svg"}
            text={"SİZİN SEÇİMİNİZ"}
          />
        </div>
      );
      setTimeout(function () {
        setComponent(
          <>
            <Result
              text={
                (rastgeleSayi === 0 && "KAZANDINIZ") ||
                (rastgeleSayi === 1 && "BERABERE") ||
                (rastgeleSayi === 2 && "KAYBETTİNİZ")
              }
            />
            <div className="picked">
              <Picked img={"./img/kagit-logo.svg"} text={"SEÇİMİNİZ"} />
              <Picked
                img={
                  (rastgeleSayi === 0 && "./img/tas-logo.svg") ||
                  (rastgeleSayi === 1 && "./img/kagit-logo.svg") ||
                  (rastgeleSayi === 2 && "./img/makas-logo.svg")
                }
                text={"SİZİN SEÇİMİNİZ"}
              />
            </div>
          </>
        );
        if (rastgeleSayi === 0) {
          setScore(score + 1);
        }
      }, 1000);
    } else if (secim === "makas") {
      setComponent(
        <div className="picked">
          <Picked img={"./img/makas-logo.svg"} text={"SEÇİMİNİZ"} />
          <Picked
            img={"./img/secim-background-oval.svg"}
            text={"SİZİN SEÇİMİNİZ"}
          />
        </div>
      );
      setTimeout(function () {
        setComponent(
          <>
            <Result
              text={
                (rastgeleSayi === 0 && "KAYBETTİNİZ") ||
                (rastgeleSayi === 1 && "KAZANDINIZ") ||
                (rastgeleSayi === 2 && "BERABERE")
              }
            />
            <div className="picked">
              <Picked img={"./img/makas-logo.svg"} text={"SEÇİMİNİZ"} />
              <Picked
                img={
                  (rastgeleSayi === 0 && "./img/tas-logo.svg") ||
                  (rastgeleSayi === 1 && "./img/kagit-logo.svg") ||
                  (rastgeleSayi === 2 && "./img/makas-logo.svg")
                }
                text={"SİZİN SEÇİMİNİZ"}
              />
            </div>
          </>
        );
        if (rastgeleSayi === 1) {
          setScore(score + 1);
        }
      }, 1000);
    }
  }

  return (
    <div className="container">
      <Header score={score} />

      {!component && <Game handleClickedStartGame={handleClickedStartGame} />}

      {component}
      <RulesBtn />
      <RulesHtml />
    </div>
  );
}

export default App;
