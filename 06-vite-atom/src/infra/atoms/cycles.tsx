/* eslint-disable react-hooks/rules-of-hooks */

import { atomWithReset } from "jotai/utils";
import { Cycle, CyclesState } from "../../reducers/cycles/reducer";
import { NewCycleFormData } from "../../pages/Test";

export const todoListAtom = atomWithReset<CyclesState>({
  activeCycleId: null,
  cycles: [],
});

export const createNewCycle = function createNewCycle(data: NewCycleFormData) {
  const id = String(new Date().getTime());
  const newCycle: Cycle = {
    id,
    task: data.task,
    minutesAmount: data.minutesAmount,
    startDate: new Date(),
  };

  return newCycle;
  // setTodoList((state) => {
  //   return {
  //     activeCycleId: id,
  //     cycles: [...state.cycles, newCycle],
  //   };
  // });
  // setAmountSecondsPassed(0);
};
