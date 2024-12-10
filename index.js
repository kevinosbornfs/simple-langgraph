const { LLM } = require('langgraph.js');

const llm = new LLM({
    model: "gpt-3.5-turbo",
    apiKey: process.env.LLM_API_KEY
});

const promptLLM = async (prompt) => {
    try {
        const response = await llm.generate(prompt);
        console.log("Model Response:", response);
    } catch (error) {
        console.error("Error:", error);
    }
}

const chat = async () => {
    const prompts = [
        "What is the capital of Australia?",
        "Tell me a fun fact about Sydney.",
        "How many people live there?"
    ];

    for (const prompt of prompts) {
        try {
            const response = await llm.generate(prompt);
            console.log(`Q: ${prompt}`);
            console.log(`A: ${response}`);
        } catch (error) {
            console.error("Error:", error);
        }
    }
}


chat();
promptLLM("What is the capital of Australia?");
