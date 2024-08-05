 let currentDate = new Date("2024-09-02");

 const WEEK_TD = document.querySelectorAll(".week tr td:first-child");
 WEEK_TD.forEach((TD)=>{

 TD.textContent = `week ${currentDate.toLocaleDateString('fr').substring(0,5)} - `;
 currentDate.setDate(currentDate.getDate() + 6);
 TD.textContent += currentDate.toLocaleDateString('fr').substring(0,5);
 currentDate.setDate(currentDate.getDate() + 1);
 })

 let weekDay = new Date ("2024-09-02");
 let weekday_th = document.querySelectorAll(".week th:not(:first-child)");
 weekday_th.forEach(TH => {
     TH.textContent = weekDay.toLocaleDateString ('en', { weekday:"long" })
    weekday.setDate(weekday.getDate()+1)
 })

// dayjs.locale("fr")
// let currentDate = dayjs("2024-09-02")
// const WEEK_TD = document.querySelectorAll(".week tr td:first-child");
// WEEK_TD.forEach(TD =>{
// TD.textContent = `semaine du ${currentDate.format("DD/MM")} au `;
// currentDate = currentDate.add(6, 'day');
// TD.textContent += currentDate.format("DD/MM");
// currentDate = currentDate.add(1, 'day');

// })

// let weekday = dayjs ("2024-09-02");

// const WEEKDAY_TH = document.querySelectorAll(".week th:not(:first-child)");
// WEEKDAY_TH.forEach(TH =>{
//     TH.textContent = weekday.format("dddd");
//     weekday = weekday.add(1, 'day');
// })