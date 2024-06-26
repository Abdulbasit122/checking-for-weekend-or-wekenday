function checkDay() {
  const day = document.getElementById("day").value.toLowerCase();
  const result = document.getElementById("result");

  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const weekends = ["saturday", "sunday"];

  if (weekdays.includes(day)) {
    result.textContent = "It is a Weekday.";
    result.style.color = "blue";
  } else if (weekends.includes(day)) {
    result.textContent = "It is a Weekend.";
    result.style.color = "green";
  } else {
    result.textContent = "Please enter a valid day of the week.";
    result.style.color = "red";
  }
}
