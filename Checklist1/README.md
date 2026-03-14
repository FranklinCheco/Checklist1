# CS50 Final Project – To-Do App

## 📌 Overview
This project is a **Neon Vice City–themed To-Do App** built with **HTML, CSS, and JavaScript**.  
It allows users to add tasks, set start and deadline dates, track progress from 0% to completion, search tasks, delete unwanted tasks, receive deadline notifications, hear a sound when tasks are completed, and view a log of completed tasks.  
The design emphasizes simplicity, interactivity, persistence, responsiveness, and a glowing neon aesthetic.

---

## 🎨 Features
- **Add Tasks Safely**  
  - Input validation prevents empty or duplicate tasks.  
  - Special characters are stripped for safety.  

- **Progress Tracking**  
  - Tasks start at **0% completion**.  
  - Progress can be incremented in steps until 100%.  
  - Completed tasks are automatically marked and summarized.  

- **Start & Deadline Dates**  
  - Each task can have a **start date** and an optional **deadline date**.  
  - Mini calendar inputs (`<input type="date">`) make date selection easy.  
  - Option for “No deadline” if left blank.  

- **Deadline Notifications**  
  - Alerts appear when a task’s deadline is **less than 5 minutes away**.  
  - Keeps you mission‑ready for time‑critical tasks.  

- **Completion Sound**  
  - A short **“bling” sound** plays when a task reaches 100%.  
  - Adds feedback and celebration for completed tasks.  

- **Completed Tasks Log**  
  - All completed tasks are recorded in a log at the footer.  
  - Includes timestamps for when tasks were completed.  
  - A **Clear All** button lets you reset the log.  

- **Search Functionality**  
  - Regex-based search for flexible matching.  
  - Unicode search for advanced text matching.  

- **Restart Button**  
  - Resets the app back to its initial state.  

- **Delete Tasks**  
  - Each task has a **Delete button**.  
  - Removes unwanted tasks permanently from the list and storage.  

- **Persistent Storage**  
  - Tasks, dates, progress, and completed log are saved in `localStorage`.  
  - Survive refresh/restart without losing data.  

- **Responsive Design**  
  - Fully responsive across **desktop, laptop, tablet, and mobile**.  
  - Buttons and inputs scale and stack automatically—no zooming required.  

---

## 🛠️ Technologies Used
- **HTML5** – Structure of the app.  
- **CSS3** – Neon Vice City theme styling + responsive media queries.  
- **JavaScript (ES6+)** – Core logic, validation, async operations, persistence, deletion, progress tracking, date handling, notifications, and sound playback.  

---

## 🚀 How to Run
1. Clone or download the project files.  
2. Place a sound file named `bling.mp3` in the project folder.  
3. Open `index.html` in your browser.  
4. Add tasks using the input box.  
5. Set start and deadline dates using the mini calendar inputs.  
6. Increment progress until tasks are complete.  
7. Receive alerts when deadlines are near.  
8. Hear a “bling” when tasks are completed.  
9. View completed tasks in the log at the footer.  
10. Delete unwanted tasks or clear the log as needed.  
11. Refresh/restart the app—your tasks and log remain saved.  
12. Use on desktop, laptop, tablet, or mobile—UI adapts automatically.  

---

## 📖 What I Learned
- How to structure a web app with **HTML, CSS, and JS**.  
- The importance of **input validation**, **error handling**, and **persistent storage**.  
- Using **regex** and **Unicode flags** for searching.  
- Implementing **progress tracking** from 0% to 100%.  
- Designing a **responsive, interactive UI** with styled inputs and buttons.  
- Adding **delete functionality** for better task management.  
- Integrating **start and deadline dates** with calendar inputs.  
- Creating **deadline notifications** for time‑critical tasks.  
- Adding **sound feedback** for completed tasks.  
- Maintaining a **completed tasks log** with timestamps.  

---

## ✅ Next Steps (Future Improvements)
- Editable tasks with checkboxes for completion.  
- Persistent progress tracking with finer granularity (not just +10%).  
- Integration with a backend API for real task management.  
- Notifications/reminders for upcoming deadlines across devices.  
- Customizable sounds for different events.  

---

## 🎓 CS50 Reflection
This project represents my journey through CS50—combining problem-solving, coding fundamentals, and creativity.  
It’s not just a to-do app; it’s proof that I can build something functional, stylish, and extensible.  
