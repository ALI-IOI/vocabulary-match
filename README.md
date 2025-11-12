**Title:** Geometry Vocabulary Match
#### Video Demo: https://youtu.be/g2wdtHopNCM
#### Description:
This project is an interactive, web-based matching game designed to help users learn and practice geometry vocabulary in an engaging way. Built with **HTML**, **CSS**, and **JavaScript**, the application provides a clean, user-friendly interface that is both educational and fun.

Key features include:
* **Dynamic Gameplay:** Users select term and definition cards to find correct pairs.
* **Real-Time Scoring:** The game tracks the score, total attempts, and successful matches, providing immediate feedback.
* **Rich Visual Feedback:** The interface uses CSS transitions and animations to highlight selected cards, celebrate correct matches, and provide a polished user experience.
* **Responsive Design:** The layout adapts seamlessly to different screen sizes, ensuring it works perfectly on both desktop and mobile devices.
* **Hint System:** A built-in hint mechanism provides assistance to players, making the game more accessible for all learning levels.
* **Game State Control:** A "Play Again" feature allows users to reset the game board and scores to enjoy multiple rounds.


## 📋 Structure

### Header Section
- **Title**: "Geometry Vocabulary Match" with emoji decorations
- **Score Board**: Tracks three metrics:
  - Current score
  - Number of matches completed (out of 6)
  - Total attempts made

### Hint System
- **Two hint buttons**:
  - 💡 "Get Hint" - Provides contextual clues
  - 📖 "Show Definition" - Reveals the full definition
- **Hint display area** - Shows hint text dynamically

### Game Area (Two-Column Layout)

**Left Column - Terms (6 cards)**:
- Triangle
- Rectangle
- Circle
- Angle
- Perimeter
- Area

**Right Column - Definitions (6 cards)**:
- Each card contains the definition for its corresponding term
- Cards are clickable and use `data-definition` attributes to match with terms

### Key Features

1. **Data Attributes**: Each card uses `data-term` or `data-definition` attributes to enable matching logic
2. **Click Handlers**: All cards use `onclick="selectCard(this)"` to trigger selection
3. **Completion Message**: Hidden initially, appears when all matches are found with a "Play Again" button
4. **Creator Credit**: Attribution footer for me (Mohammad Ali)

## 🔗 Dependencies
- `styles.css` - Visual styling
- `script.js` - Game logic and interactivity

## 🎮 Game Flow
1. Player clicks a term card
2. Player clicks a definition card
3. Game checks if they match
4. Score updates based on correctness
5. Matched pairs are disabled/highlighted
6. Completion message shows when all 6 pairs are matched

This is a clean, educational matching game focused on geometry vocabulary for students!
