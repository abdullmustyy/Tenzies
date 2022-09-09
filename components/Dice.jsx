export default function Dice(props) {
  const diceElements = props.allDice.map((dice) => {
    return <div className="tenzie--die">{dice.value}</div>;
  });

  return (
    <section className="tenzie--dice-section">
      <div className="tenzie--grid">{diceElements}</div>
      <button className="tenzie--btn">Roll</button>
    </section>
  );
}
