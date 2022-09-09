import { useState, useEffect } from "react";
import Header from "../components/Header";
import Dice from "../components/Dice";

export default function App() {
  const [allDice, setAllDice] = useState(allDiceAray);

  function allDiceAray() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        id: i,
        value: i + 1,
      });
    }
    return diceArray;
  }

  return (
    <section className="section">
      <Header />
      <div className="tenzie">
        <div className="tenzie--cont">
          <h1 className="tenzie--title">Tenzies</h1>
          <span className="tenzie--desc">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </span>
          <Dice allDice={allDice} />
        </div>
      </div>
      <p className="footer--text">Built with ❤️ in Naij.</p>
    </section>
  );
}
