import { useState, useEffect } from "react";
import Header from "../components/Header";
import Dice from "../components/Dice";

export default function App() {
  const [allDice, setAllDice] = useState(allDiceAray());
  const [tenzies, setTenzies] = useState(false);
  const [invalidRoll, setInvalidRoll] = useState(false);

  useEffect(() => {
    const firstDieValue = allDice[0].value;
    const allHeld = allDice.every((die) => die.held);
    const allSameNumber = allDice.every((die) => die.value === firstDieValue);
    if (allHeld && allSameNumber) {
      setTenzies(true);
      setInvalidRoll(false);
    } else {
      setTenzies(false);
    }
  }, [allDice]);

  function randomDieNumber() {
    return Math.ceil(Math.random() * 6);
  }

  function allDiceAray() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      const newDie = {
        id: i + 1,
        value: randomDieNumber(),
        held: false,
      };
      diceArray.push(newDie);
    }
    return diceArray;
  }

  function holdDie(id) {
    setAllDice((prevDiceArray) =>
      prevDiceArray.map((die) =>
        die.id === id ? { ...die, held: !die.held } : die
      )
    );
  }

  function rollUnheldDie() {
    if (tenzies) {
      setAllDice(allDiceAray());
      setTenzies(false);
    } else {
      if (allDice.every((die) => die.held) && !tenzies) {
        setInvalidRoll(true);
      } else {
        setInvalidRoll(false);
      }
      setAllDice((prevDiceArray) =>
        prevDiceArray.map((die) =>
          die.held ? die : { ...die, value: randomDieNumber() }
        )
      );
    }
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
          <Dice
            allDice={allDice}
            holdDie={holdDie}
            rollUnheldDie={rollUnheldDie}
            tenzies={tenzies}
          />
          {invalidRoll && (
            <p className="tenzie--error">
              <span>🚩</span>{" "}
              <span>Invalid roll; All dice aren't the same!</span>
            </p>
          )}
          {tenzies && <p className="tenzie--check">✅</p>}
        </div>
      </div>
      <p className="footer--text">Built with 💟 in Naij.</p>
    </section>
  );
}
