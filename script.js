const run = document.getElementById("run");

run.addEventListener("click", () => {
  let weekday = parseInt(document.getElementById("weekday").value);
  let notDays = document.getElementById("outDays").value;
  
  const excludedDates = new Set(notDays.split(",")
  .map(date => date.trim())
  .filter(date => date !== "")
  .map(date => `2026-${date}`)
  );

  const startDate = new Date("2026-06-01");
  const endDate = new Date("2026-08-21");
  const results = [];

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    
  if (date.getDay() === weekday) {
    const formattedDate = formatDate(date);
    
    if (!excludedDates.has(formattedDate)) {
      results.push(formattedDate);
      }
    }
  }

  show(results);
});

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function show(dates) {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";
  
  if (dates.length === 0) {
    resultsList.innerHTML = "<li>No matching dates found.</li>";
    return;
  }

  dates.forEach(date => {
    const li = document.createElement("li");
    const displayDate = date.substring(5);
  
    li.textContent = displayDate;
  
    resultsList.appendChild(li);
  });
}
