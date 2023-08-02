function saturdayFun(activity = "roller-skate") {
  console.log(`This Saturday, I want to ${activity}!`);
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  console.log(`This Monday, I will ${activity}.`);
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function supportive(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
