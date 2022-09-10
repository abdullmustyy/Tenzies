export default function Dice({ allDice, holdDie, rollUnheldDie, tenzies }) {
  const diceElements = allDice.map((die) => {
    const styles = {
      backgroundColor: die.held ? "#5035FF" : "#cdc8f2",
      color: die.held ? "#ddd9f7" : "#2B283A",
    };

    return (
      <div
        className="tenzie--die"
        onClick={() => holdDie(die.id)}
        style={styles}
      >
        <h3 className="tenzie--die-no">{die.value}</h3>
      </div>
    );
  });

  return (
    <section className="tenzie--dice-section">
      <div className="tenzie--grid">{diceElements}</div>
      <button className="tenzie--btn" onClick={rollUnheldDie}>
        {tenzies ? "Reset Game" : "Roll"}
      </button>
    </section>
  );
}
