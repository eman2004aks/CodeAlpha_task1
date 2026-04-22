document.getElementById("btn").addEventListener("click", calculateAge);

function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  // Validation
  if (dobInput === "") {
    result.innerHTML = "⚠️ Please select your Date of Birth!";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    result.innerHTML = "⚠️ Date cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Fix negative days
  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  // Fix negative months
  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `🎉 You are ${years} years, ${months} months, and ${days} days old.`;
}