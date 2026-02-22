document.addEventListener('DOMContentLoaded', () => {
    const challengeSelect = document.getElementById('challenge-selector');
    const promptInput = document.getElementById('prompt-input');
    const runBtn = document.getElementById('run-btn');
    const llmOutput = document.getElementById('llm-output');
    const targetOutput = document.getElementById('target-output');
    const scoreVal = document.getElementById('score-val');
    const scoreDisplay = document.getElementById('score-display');
    const currentTokens = document.getElementById('current-tokens');
    const historyList = document.getElementById('history-list');

    let currentChallenge = CHALLENGES[0];

    // Initialize Challenges
    CHALLENGES.forEach(ch => {
        const opt = document.createElement('option');
        opt.value = ch.id;
        opt.textContent = ch.title;
        challengeSelect.appendChild(opt);
    });

    const loadChallenge = (id) => {
        currentChallenge = CHALLENGES.find(c => c.id === id);
        document.getElementById('challenge-title').textContent = currentChallenge.title;
        document.getElementById('challenge-desc').textContent = currentChallenge.description;
        document.getElementById('max-tokens').textContent = currentChallenge.maxTokens;
        targetOutput.textContent = currentChallenge.target;
        llmOutput.textContent = "Waiting for execution...";
        scoreDisplay.classList.add('hidden');
    };

    challengeSelect.addEventListener('change', (e) => loadChallenge(e.target.value));
    
    promptInput.addEventListener('input', () => {
        const tokens = Math.ceil(promptInput.value.length / 4); // Basic approximation
        currentTokens.textContent = tokens;
        currentTokens.style.color = tokens > currentChallenge.maxTokens ? 'red' : 'inherit';
    });

    runBtn.addEventListener('click', async () => {
        const prompt = promptInput.value;
        const tokens = Math.ceil(prompt.length / 4);

        if (tokens > currentChallenge.maxTokens) {
            alert("Prompt exceeds token limit!");
            return;
        }

        runBtn.disabled = true;
        llmOutput.textContent = "Thinking...";

        // Simulate API delay
        setTimeout(() => {
            const result = simulateLLM(prompt, currentChallenge);
            llmOutput.textContent = result;
            
            const score = calculateScore(result, currentChallenge.target);
            scoreVal.textContent = score;
            scoreDisplay.classList.remove('hidden');
            
            addToHistory(prompt, score);
            runBtn.disabled = false;
        }, 800);
    });

    function simulateLLM(prompt, challenge) {
        // Extremely basic simulation logic based on keywords in prompt
        const lowerPrompt = prompt.toLowerCase();
        if (lowerPrompt.includes("json") || lowerPrompt.includes("extract")) {
            return challenge.target; // Mocking correct behavior for correct-looking prompt
        }
        if (challenge.id === "ch-2") {
             return "NEGATIVE";
        }
        return "Error: Prompt did not specify desired output format correctly.";
    }

    function calculateScore(output, target) {
        if (output.trim() === target.trim()) return 100;
        
        // Simple Levenshtein-ish similarity
        const out = output.trim();
        const tar = target.trim();
        let matches = 0;
        const minLen = Math.min(out.length, tar.length);
        for(let i=0; i<minLen; i++) {
            if(out[i] === tar[i]) matches++;
        }
        return Math.floor((matches / Math.max(out.length, tar.length)) * 100);
    }

    function addToHistory(prompt, score) {
        const li = document.createElement('li');
        li.textContent = `Score: ${score}% | "${prompt.substring(0, 20)}..."`;
        li.onclick = () => promptInput.value = prompt;
        historyList.prepend(li);
    }

    loadChallenge("ch-1");
});