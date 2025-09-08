Table Tennis Scoreboard Web App
Description

This is a simple web application designed to track and manage scores for a two-player table tennis game. The app allows players to increment or decrement their scores, reset the game, and automatically determines the winner when a player reaches at least 11 points with a lead of 2 or more points.

Features

Track scores for two players in real-time.

Increment (+1) and decrement (-1) buttons for each player.

Automatically announces the winner when game conditions are met.

Reset button to start a new game.

Responsive layout with distinct colors for each player.

How to Use

Open index.html in a web browser.

Click the +1 or -1 buttons to update each player’s score.

When a player reaches 11 points and is at least 2 points ahead, a winner is announced.

Click Reset to start a new game at any time.

File Structure
/table-tennis-scoreboard
│
├── index.html        # Main HTML file
├── score-board.css   # CSS styling for layout and colors
└── score-board.js    # JavaScript logic for score tracking and winner determination

Customization

Change the winning score or lead requirement in score-board.js by modifying the checkWinner() function.

Update player colors or styles in score-board.css as desired.

Technologies Used

HTML

CSS

JavaScript

License

This project is open source and free to use for personal or educational purposes.
