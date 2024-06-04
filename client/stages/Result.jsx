import React from 'react';
import { usePlayers, usePlayer } from "@empirica/core/player/classic/react";
import { Button as EmpButton } from '../src/components/Button';

export function Result() {
  const player = usePlayer();
  const players = usePlayers();
  const partner = players.filter((p) => p.id !== player.id)[0];

  const partnerChoice = partner?.round?.get("decision");
  const yourChoice = player?.round?.get("decision");
  const score = player?.round?.get("score") || "TBD";

  console.log("Player round data:", player.round);
  console.log("Your choice:", yourChoice);
  console.log("Partner choice:", partnerChoice);
  console.log("Score:", score);

  return (
      <div>
        <p>You chose: {yourChoice}</p>
        <p>Your partner chose: {partnerChoice}</p>
        <br />
        <p>You get {score} months in jail!</p>

        <EmpButton handleClick={() => player.stage.set("submit", true)}>
          Continue
        </EmpButton>
      </div>
  );
}
