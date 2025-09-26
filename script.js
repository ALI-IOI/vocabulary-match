let selectedCard = null;
        let score = 0;
        let matches = 0;
        let attempts = 0;
        let matchedPairs = new Set();

        const hints = {
            triangle: "This shape has the fewest sides possible for a polygon",
            rectangle: "Think of a door or window - it has four corners, all 90 degrees",
            circle: "This shape has no corners and is perfectly round",
            angle: "When two lines meet, they create this measurement",
            perimeter: "If you walked around the edge of a shape, you'd measure this",
            area: "This tells you how much paint you'd need to fill a shape"
        };

        const definitions = {
            triangle: "A polygon with three sides and three angles",
            rectangle: "A quadrilateral with four right angles and opposite sides equal",
            circle: "A round shape where all points are the same distance from the center",
            angle: "The space between two intersecting lines, measured in degrees",
            perimeter: "The distance around the outside of a shape",
            area: "The amount of space inside a shape, measured in square units"
        };

        function selectCard(card) {
            if (card.classList.contains('matched')) return;

            if (selectedCard === card) {
                card.classList.remove('selected');
                selectedCard = null;
                return;
            }

            if (selectedCard) {
                selectedCard.classList.remove('selected');
                checkMatch(selectedCard, card);
                selectedCard = null;
            } else {
                card.classList.add('selected');
                selectedCard = card;
            }
        }

        function checkMatch(card1, card2) {
            attempts++;
            document.getElementById('attempts').textContent = attempts;

            const term1 = card1.dataset.term || card1.dataset.definition;
            const term2 = card2.dataset.term || card2.dataset.definition;

            if (term1 === term2 && card1.dataset.term !== card2.dataset.term) {
                // Correct match
                card1.classList.add('matched');
                card2.classList.add('matched');
                
                // Add celebration animation
                showCelebration(card1);
                showCelebration(card2);
                
                matches++;
                score += 10;
                matchedPairs.add(term1);
                
                updateScore();
                
                if (matches === 6) {
                    setTimeout(() => {
                        document.getElementById('completionMessage').style.display = 'block';
                    }, 1000);
                }
            } else {
                // Incorrect match - brief red flash
                card1.style.borderColor = '#ff6b6b';
                card2.style.borderColor = '#ff6b6b';
                
                setTimeout(() => {
                    card1.style.borderColor = 'transparent';
                    card2.style.borderColor = 'transparent';
                }, 500);
                
                if (score > 0) score -= 2;
                updateScore();
            }
        }

        function showCelebration(card) {
            const celebration = document.createElement('div');
            celebration.className = 'celebration';
            celebration.textContent = '✨';
            card.appendChild(celebration);
            
            setTimeout(() => {
                celebration.remove();
            }, 1000);
        }

        function updateScore() {
            document.getElementById('score').textContent = score;
            document.getElementById('matches').textContent = matches;
        }

        function showHint() {
            if (selectedCard) {
                const term = selectedCard.dataset.term || selectedCard.dataset.definition;
                const hint = hints[term];
                document.getElementById('hintText').textContent = `💡 Hint: ${hint}`;
            } else {
                document.getElementById('hintText').textContent = "💡 Select a term first to get a hint!";
            }
        }

        function showDefinition() {
            if (selectedCard && selectedCard.dataset.term) {
                const term = selectedCard.dataset.term;
                const definition = definitions[term];
                document.getElementById('hintText').textContent = `📖 Definition: ${definition}`;
            } else if (selectedCard && selectedCard.dataset.definition) {
                document.getElementById('hintText').textContent = "📖 This is already a definition! Try selecting a term instead.";
            } else {
                document.getElementById('hintText').textContent = "📖 Select a term first to see its definition!";
            }
        }

        function resetGame() {
            selectedCard = null;
            score = 0;
            matches = 0;
            attempts = 0;
            matchedPairs.clear();
            
            document.querySelectorAll('.term-card, .definition-card').forEach(card => {
                card.classList.remove('selected', 'matched');
                card.style.borderColor = 'transparent';
            });
            
            document.getElementById('completionMessage').style.display = 'none';
            document.getElementById('hintText').textContent = '';
            
            updateScore();
            
            // Shuffle the cards
            shuffleCards();
        }

        function shuffleCards() {
            const termColumn = document.querySelector('.column:first-child');
            const defColumn = document.querySelector('.column:last-child');
            
            const termCards = Array.from(termColumn.querySelectorAll('.term-card'));
            const defCards = Array.from(defColumn.querySelectorAll('.definition-card'));
            
            // Shuffle arrays
            termCards.sort(() => Math.random() - 0.5);
            defCards.sort(() => Math.random() - 0.5);
            
            // Re-append in new order
            termCards.forEach(card => termColumn.appendChild(card));
            defCards.forEach(card => defColumn.appendChild(card));
        }

        // Initialize with shuffled cards
        shuffleCards();