import React from "react";
import { Button } from "../components/Button";

export function Introduction({ next }) {
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        The prisoners dilemma
      </h3>
      <div className="mt-2 mb-6">
        <p className="text-sm text-gray-500">
          In this game, you will be partnered with another experiment participant.
        </p>
        <p className="text-sm text-gray-500">In <strong>each round of the game</strong>, you and your partner will:</p>
        <ul className="text-sm text-grey-500 list-disc">
          <li>Choose whether to work together or to look out for your own interests</li>
          <li>See each other's choices and the results of your choices</li>
        </ul>
      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}
