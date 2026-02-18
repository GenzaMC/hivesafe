let currentAmount = 0
const goalAmount = 150

export function getDonations() {
  return {
    current: currentAmount,
    goal: goalAmount,
  }
}

export function addDonation(amount: number) {
  currentAmount += amount
}
