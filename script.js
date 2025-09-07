// Project data with challenges
const projects = [
    {
        title: "Alcazar Learning",
        category: "AI-Powered Learning Solutions",
        image: "Alcazar Learning.png",
        description: "Led the development of AI-powered mobile and web applications that transform learning through personalized, data-driven experiences. Directed cross-functional teams to build scalable platforms for skill development, with a focus on writing and content creation. Our solutions leverage machine learning to tailor learning paths, track engagement, and optimize content delivery.",
        technologies: ["Mobile & Web Development", "AI/ML Integration", "Data Analysis", "Content Creation", "EdTech Solutions"],
        challenge: {
            question: "What's the #1 most in-demand skill according to 1.5M jobs on LinkedIn/Seek 2024?",
            options: ["Project Management", "Time Management", "Communication"],
            correct: 2,
            xp: 25
        },
        link: "#"
    },
    {
        title: "Peter MacCallum Cancer Centre",
        category: "Medical Education",
        image: "PeterMac.png",
        description: "Developed interactive online programs for medical scientists, simplifying complex genomic topics and enhancing engagement through creative teaching strategies.",
        technologies: ["Genomics", "E-Learning", "Medical Education"],
        challenge: {
            question: "What's the main challenge in teaching genomics?",
            options: ["Technical complexity", "Lack of interest", "Limited resources"],
            correct: 0,
            xp: 25
        },
        link: "#"
    },
    {
        title: "The Florey Institute",
        category: "Neuroscience Research",
        image: "Florey.png",
        description: "Supported neuroscience and biochemistry research teams by ensuring compliance, maintaining equipment, and fostering collaboration in laboratory environments.",
        technologies: ["Research Support", "Lab Management", "Neuroscience"],
        challenge: {
            question: "What's crucial for lab collaboration?",
            options: ["Strict schedules", "Clear communication", "Individual workspaces"],
            correct: 1,
            xp: 25
        },
        link: "#"
    },
    {
        title: "Monash University",
        category: "Science Education",
        image: "Monash.png",
        description: "Created detailed science learning modules, collaborated with academics, and used technology to deliver accessible, high-quality educational content.",
        technologies: ["Curriculum Development", "E-Learning", "Science Education"],
        challenge: {
            question: "What makes educational content accessible?",
            options: ["Complex terminology", "Multiple formats", "Lengthy explanations"],
            correct: 1,
            xp: 25
        },
        link: "#"
    }
];

// Modal functions
function openModal(projectIndex) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const project = projects[projectIndex];

    // Reset scroll position immediately
    modalContent.scrollTop = 0;
    modalContent.scrollTo(0, 0);

    // Create challenge HTML if it exists
    let challengeHTML = '';
    if (project.challenge) {
        challengeHTML = `
            <div class="challenge">
                <h3>🧠 Knowledge Challenge</h3>
                <p class="challenge-question">${project.challenge.question}</p>
                <div class="challenge-options">
                    ${project.challenge.options.map((option, index) => 
                        `<div class="challenge-option" onclick="checkAnswer(${projectIndex}, ${index}, this)">
                            ${option}
                        </div>`
                    ).join('')}
                </div>
                <p id="feedback-${projectIndex}" style="display:none; color: #4CAF50; font-weight: bold; font-size: 1.2em; text-align: center; margin-top: 15px;">
                    🎉 Correct! Challenge completed! 🎉
                </p>
            </div>
        `;
    }

    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p class="category">${project.category}</p>
        <div style="text-align: center; margin: 10px 0 20px;">
            <img src="${project.image}" alt="${project.title}" style="max-width: 90%; max-height: 200px; border: 2px solid #000; object-fit: contain; background: #fff; padding: 10px; margin: 0 auto;">
        </div>
        <p>${project.description}</p>
        <div style="margin: 20px 0;">
            <h3>Technologies & Skills:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                ${project.technologies.map(tech => 
                    `<span style="background: #f0f0f0; padding: 5px 10px; border: 2px solid #000; display: inline-block;">${tech}</span>`
                ).join('')}
            </div>
        </div>
        ${challengeHTML}
        ${project.link !== '#' ? `
        <div style="margin-top: 20px; text-align: center;">
            <a href="${project.link}" target="_blank" style="display: inline-block; padding: 10px 20px; background: #4a90e2; color: white; text-decoration: none; border: 2px solid #000; border-radius: 4px;">
                View Live Demo
            </a>
        </div>
        ` : ''}
        <div style="margin-top: 15px; text-align: center; font-size: 0.8rem; color: #6c757d; font-style: italic;">
            💡 Click outside or press Escape to close
        </div>
    `;

    modal.style.display = 'flex';
    
    // Ensure scroll position is at top after content loads
    setTimeout(() => {
        modalContent.scrollTop = 0;
        modalContent.scrollTo(0, 0);
    }, 50);
    
    // Auto-close modal after 30 seconds if no interaction
    const autoCloseTimer = setTimeout(() => {
        closeModal();
    }, 30000);
    
    // Store timer reference for potential clearing
    modal.autoCloseTimer = autoCloseTimer;
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    // Clear auto-close timer if it exists
    if (modal.autoCloseTimer) {
        clearTimeout(modal.autoCloseTimer);
        modal.autoCloseTimer = null;
    }
    
    // Reset scroll position to top
    modalContent.scrollTop = 0;
    modalContent.scrollTo(0, 0);
    
    modal.style.display = 'none';
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    if (event.target == modal) {
        // Reset scroll position before closing
        modalContent.scrollTop = 0;
        modalContent.scrollTo(0, 0);
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        // Reset scroll position before closing
        modalContent.scrollTop = 0;
        modalContent.scrollTo(0, 0);
        closeModal();
    }
});

// Navigation
function scrollToWorks() {
    const worksSection = document.querySelector('.works-section');
    if (worksSection) {
        worksSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize guide cards
document.addEventListener('DOMContentLoaded', function() {
    const guideCards = document.querySelectorAll('.guide-card');
    
    guideCards.forEach((card) => {
        card.addEventListener('click', scrollToWorks);
        card.style.cursor = 'pointer';
    });
});

// Challenge System
const completedChallenges = new Set();
let completedProjects = new Set();

function showChallengeCompletion() {
    showCelebration('Challenge Complete! 🎉');
}

function markProjectCompleted(projectIndex) {
    const workItem = document.querySelectorAll('.work-item')[projectIndex];
    if (workItem) {
        workItem.classList.add('completed');
    }
}

function updateProjectCompletion() {
    completedProjects.forEach(projectIndex => {
        markProjectCompleted(projectIndex);
    });
}

function checkCompletion() {
    if (completedProjects.size === projects.length) {
        // Show completion modal
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.style.display = 'flex';
        modal.style.zIndex = '2500';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 600px; text-align: center;">
                <span class="close" onclick="this.parentElement.parentElement.style.display='none'" style="position: absolute; top: 15px; right: 20px; font-size: 40px; cursor: pointer; color: #495057; font-weight: bold; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #f8f9fa; border: 2px solid #495057; transition: all 0.2s ease; box-shadow: 3px 3px 0 rgba(73, 80, 87, 0.2);" onmouseover="this.style.background='#e9ecef'; this.style.transform='scale(1.1)'; this.style.boxShadow='4px 4px 0 rgba(73, 80, 87, 0.3)'" onmouseout="this.style.background='#f8f9fa'; this.style.transform='scale(1)'; this.style.boxShadow='3px 3px 0 rgba(73, 80, 87, 0.2)'">&times;</span>
                <h2>🎉 Portfolio Complete! 🎉</h2>
                <p>You've explored all my projects and completed the challenges!</p>
                <div style="margin: 30px 0;">
                    <div style="font-size: 4rem; margin: 20px 0;">🏆</div>
                    <h3>Portfolio Explorer</h3>
                    <p>Thank you for taking the time to explore my work</p>
                </div>
                <p>Interested in collaborating or learning more about my work in neuroscience, education, and AI?</p>
                <div style="margin-top: 30px;">
                    <a href="https://www.linkedin.com/in/reza-tondfekr" target="_blank" style="display: inline-block; padding: 12px 24px; background: #0077b5; color: white; text-decoration: none; border: 2px solid #495057; margin: 10px; border-radius: 4px; box-shadow: 3px 3px 0 rgba(73, 80, 87, 0.2); transition: all 0.2s ease;">
                        Connect on LinkedIn
                    </a>
                    <a href="mailto:r.tondfekr@gmail.com" style="display: inline-block; padding: 12px 24px; background: #6c757d; color: white; text-decoration: none; border: 2px solid #495057; margin: 10px; border-radius: 4px; box-shadow: 3px 3px 0 rgba(73, 80, 87, 0.2); transition: all 0.2s ease;">
                        Send me an Email
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add celebration animation to final page
        createFullScreenConfetti();
    }
}

function checkAnswer(projectIndex, selectedIndex, element) {
    const project = projects[projectIndex];
    const feedback = document.getElementById(`feedback-${projectIndex}`);
    const options = element.parentElement.children;
    
    if (completedChallenges.has(projectIndex)) {
        feedback.textContent = "You've already completed this challenge! 🏆";
        feedback.style.display = 'block';
        return;
    }

    // Disable all options
    for (let option of options) {
        option.style.pointerEvents = 'none';
    }

    if (selectedIndex === project.challenge.correct) {
        element.classList.add('correct');
        
        completedChallenges.add(projectIndex);
        completedProjects.add(projectIndex);
        markProjectCompleted(projectIndex);
        feedback.style.display = 'block';
        showChallengeCompletion();
        
        // Check if all projects are completed
        checkCompletion();
    } else {
        element.classList.add('incorrect');
        const correctOption = options[project.challenge.correct];
        correctOption.classList.add('correct');
        
        feedback.textContent = 'Almost there! Try another project! 🌟';
        feedback.style.display = 'block';
    }
}

function showCelebration(message) {
    // Create celebration text
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.textContent = message;
    document.body.appendChild(celebration);
    celebration.style.display = 'block';
    
    // Create full-screen confetti
    createFullScreenConfetti();
    
    // Remove elements after animation and close modal
    setTimeout(() => {
        celebration.style.display = 'none';
        document.body.removeChild(celebration);
        
        // Close modal after celebration
        closeModal();
    }, 2500);
}

function createFullScreenConfetti() {
    const confettiOverlay = document.createElement('div');
    confettiOverlay.className = 'confetti-overlay';
    document.body.appendChild(confettiOverlay);
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiOverlay.appendChild(confetti);
    }
    
    // Remove confetti overlay after animation
    setTimeout(() => {
        document.body.removeChild(confettiOverlay);
    }, 5000);
}
