export default function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  let sec = Math.floor(turns * (3600 / turnsSpeed));

  return {
    turns: turns,
    seconds: sec,
  }
}
