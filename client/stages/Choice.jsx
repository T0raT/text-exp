import React from 'react';
import { usePlayer } from "@empirica/core/player/classic/react";
import Button  from 'react-bootstrap/Button';
import { Button as EmpButton } from '../src/components/Button'


export function Choice() {
  const player = usePlayer();
  let playerChoice = null; // Would save player choice into a variable in a more complex game.

  function onClick (choice) {
    console.log(`Your choice: ${choice}`)
    player.round.set("decision", choice);
    player.stage.set("submit", true);
  };


  return (
      <div>
        <h2>🙀 You and your partner in crime have been arrested! 🙀</h2>
        <ul className="list-disc list-inside">
          <li>
            If you both 🤐🤐 keep silent, you will both get <strong>2 months</strong> in jail.
          </li>
          <li>
            If you 📣 testify against your partner and he 🤐 keeps silent, <strong>you will only spend 1 month in jail</strong>.
          </li>
          <li>
            If you 🤐 keep silent, but your partner 📣 testifies, you get <strong>12 months</strong> in jail.
          </li>
          <li>
            If you both 📣📣 testify, you both get <strong>6 months</strong> in
            jail.
          </li>
        </ul>
        <br/>
        <div className="flex justify-center"><p><strong>What do you do?</strong></p></div>
        <div className="flex justify-center">
          <EmpButton className="m-2" handleClick={() => onClick('silent')}>🤐 Keep silent</EmpButton>
          <EmpButton className="m-2" handleClick={() => onClick('testify')}>📣 Testify</EmpButton>
        </div>
      </div>

  );
}