import * as types from './action-types';

export function saveSimulationResults(startTime, finalTime, simOptions, parameters, response) {
  return {
    type: types.SAVE_SIMULATION_RESULTS,
    startTime,
    finalTime,
    simOptions,
    parameters,
    response
  };
}

export function resetSimulationResults(){
  return {
    type: types.RESET_SIMULATION_RESULTS
  };
}