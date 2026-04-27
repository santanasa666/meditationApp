# Meditation User Story

**Title: Login/Registration**
As a new user, I want to create an account so that my meditation proggress and settings are saved accross all my devices
**Acceptance Criteria:**
1. [The app supports email/password registration]
2. [Users receive clear validation messages for incorrect password or existing emails]
3. [The "Forgot the Password" flow is easily accessible from the login screen]
**Story Points:** [5]

**Title: Homepage **
As a user, I want a personalized greeting with my name and a title so that I feel welcomed and encouraged to meditate
**Acceptance Criteria:**
1. [The system must retrieve and display the user's first name dynamically]
2. [The greeting must follow the format: “Hello, [username]”]
3. [The sub-title “Find your perfect meditation” must be displayed immediately below the greeting]
4. [The text should be styled to be prominent and visually welcoming]
**Story Points:** [2]

**Title: Popular Meditation Cards **
As a user I want to see popular meditation cards so that I can explpore options based on my preferences
**Acceptance criteria**
1. [Display a scrollable list or grid of popular meditation cards]
2. [Each card must include a high-quality background image]
3. [Each card must display a title and a brief description]
4. [Each card must clearly show metadata including category and duration]
**Story points:** [5]

**Title: Daily Featured Meditation**
As a user I want a dailyy featured meditation so that I can quickly access a recommended session
**Acceptance criteria**
1. [A dedicated "Daily Featured" section must be visible on the homepage]
2. [The section must showcase one specific meditation with a larger, hero-style image]
3. [The section must include the title, category, and duration of the featured session]
4. [Clicking the featured section must take the user directly to the player for that specific meditation]
**Story Points:** [3]

**Title: Intuitive navigation Header**
As a user I want intuitive navigation icons so that I can easily move around the app
**Acceptance criteria**
1. [A logo must be fixed in the top-left corner of the homepage]
2. [A settings icon must be fixed in the top-right corner]
3. [Clicking the logo should refresh the homepage or return the user to the top]
4. [Clicking the settings icon must navigate the user to the "Settings" screen]
**Story Points:** [1]



**Title: Exercise Overview and Metadata**
As a <user>, I want to see a banner image and key details about the exercise so that I can immediately identify the session's focus and length
**Acceptance Criteria:**
1. [Display a high-resolution banner image at the top of the screen representing the specific exercise]
2. [Display the exercise title clearly below the image]
3. [Show associated categories and the total duration as metadata labels]
**Story Points:** [2]

**Title: About Section**
As a user I want an "About" sectionfor each exercise so that I can understand its benefits and purpose
**Acceptance Criteria:**
1. [Include a header labeled "about"]
2. [Provide a brief description explaining the meditation's primary focus]
3. [Explicitly mention the specific stress-reducing or mental health benefist of the exercise]
**Story Points:** [1]

**Title: Step-by-step Instructions**
As a user I want an "instructions" section for each exercise> so that I can perform it correctly
**Acceptance Criteria**
1. [Include header labeled "instructions"]
2. [Provide step-by-step written guidance on proper posture]
3. [Include specific details on breathing techniques required for the session]
4. [Use a format that is easy to read while preparing to meditate]
**Story Points:** [2]

**Title: Favorites Management**
As a user, I want an “Add to Favorites” button so that I can easily save an exercise for future practice
**Acceptance Criteria:**
1. [Place a prominent “Add to Favorites” button at the bottom of the detailed page]
2. [The button should provide visual feedback when clicked]
3. [The app must save this exercise to the user’s "Favorites" list in their profile/account]
**Story Points:** [3]

**Title: Top Navigation and Sharing**
As a user, I want navigation icons for sharing and going back so that I can easily manage the exercise page
**Acceptance Criteria:**
1. [Display a "Back" icon in the top-left corner to return the user to the previous screen]
2. [Display a "Share" icon in the top-right corner]
3. [Tapping the "Share" icon should trigger the device’s native sharing menu to send the exercise link to others]
**Story Points:** [2]

**Title: Add to favorites**
As a user, I want to add an item to my favorites so that I can save activities or articles I like for quick access later
**Acceptance Criteria:**
1.[A heart icon with the text "Add to Favorites" must be displayed next to each meditation item]
2. [Outlined heart icon must be used to indicate the item is not currently in Favorites]
3. [Tapping the button must add the item to the user's Faavorites list]
4. [Upon adding, the button text must update to "Remove from Favorites" and the heart icon must change to **Filled**]   
**Story Points:** [3]

**Title: Remove from favorites**
As a user, I want to remove an item from my Favorites so that I can manage my saved content
**Acceptance Criteria:**
1. [The “Remove from Favorites” button with a filled heart icon must be displayed for all items already in the Favorites list]
2. [Tapping the button must immediately remove the item from the Favorites list.]
3. [Upon removal, the heart icon must revert to outlined and the text must change back to “Add to Favorites.”]
4. [The toggle between "Add" and "Remove" must be responsive and update the UI in real-time.]
**Story Points:** [2]

**Title: My Favorites Screen**
As a user I want a "My favorites" screen so that I can view and managee all my saved items in one place
**Acceptance Criteria:**
1. [A dedicated “My Favorites” screen must display a list of all saved items.]
2. [Each list item must include the title, category, and duration.]
3. [Users must be able to tap any item in the list to navigate to its specific detail page or start the activity.]
4. [The list must be organized for easy browsing.]
**Story Points:** [5]

**Title: Sharing the exercises**
As a user, I want to view the calendar for the current month and navigate between months so that I can easily select dates for reminders
**Acceptance Criteria:**
1. [The interface must display the current month with all days visible in a standard grid format]
2. [Navigation arrows must be provided to allow users to move between different months]
3. [The calendar should clearly highligght the current date by default]
**Story Points:** [3]

**Title: Set reminders**
As a user, I want to select a date and time for a reminder so that I can schedule it properly
**Acceptance Criteria**
1. [Display the default status text: “Selected Date: None” and “Selected Time: 20:44” until a manual selection is made.]
2. [Users must be able to tap a specific date on the calendar to select it.]
3. [A time picker must be available to allow users to choose a specific hour and minute for their reminder.]
4. [The "Selected Date" and "Selected Time" labels must update dynamically based on the user's input.]
**Story Points:** [3]

**Title: Add reminders**
As a user, I want to add a reminder after selecting a time so that I can schedule it for a future date and time
**Acceptance Criteria:**
1. [An “Add Reminder” button must be visible and functional once a date and time have been selected.]
2. [Clicking the button must save the reminder to the user's schedule.]
3. [The system should provide a brief confirmation that the reminder was successfully added.]
**Story Points:** [2]

**Title: Manage reminders**
As a user, I want to see a list of all my reminders so that I can manage them easily.
**Acceptance Criteria:**
1. [A dedicated list view must display all currently scheduled reminders.]
2. [Each reminder entry must show the specific selected date and time.]
3. [A red “Delete” button must be placed next to each reminder in the list.]
4. [Clicking the "Delete" button must immediately remove the reminder from the schedule and the list view.]
**Story Points:** [4]
   
**Title: Secure account Logout**
As a user, I want a clear and visible logout button so that I can easily log out of my account when I’m done using the app
**Acceptance Criteria:**
1. [A clear and prominent “Logout” button must be displayed in the app]
2. [Tapping the "Logout" button must successfully end the user's session and automatically redirect them to the login page]
3. [All user session data and authentication tokens must be securely cleared from the device upon logout to ensure secure access.]
**Story Points:** [2]

**Title: Light and Dark Theme**
As a user, I want to switch between light and dark themes so that I can reduce eye strain and customize the app’s visual experience
**Acceptance Criteria:**
1. [A “Theme” toggle or switch must be provided in the settings section, clearly indicating light and dark mode options.]
2. [The UI must allow the user to switch between the light and dark modes seamlessly with a single tap.]
3. [The selected theme must apply immediately across the entire application interface without needing to refresh the page or restart the app.]
**Story Points:** [3]
