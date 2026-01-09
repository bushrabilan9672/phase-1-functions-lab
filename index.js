// 1️⃣ Distance from HQ in blocks
function distanceFromHqInBlocks(pickupBlock) {
  return Math.abs(pickupBlock - 42);
}

// 2️⃣ Distance from HQ in feet
function distanceFromHqInFeet(pickupBlock) {
  return distanceFromHqInBlocks(pickupBlock) * 264;
}

// 3️⃣ Distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4️⃣ Calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  }

  if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  }

  if (distance > 2000 && distance <= 2500) {
    return 25;
  }

  return "cannot travel that far";
}
