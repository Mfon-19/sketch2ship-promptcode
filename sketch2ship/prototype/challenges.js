const CHALLENGES = [
    {
        id: "ch-1",
        title: "The JSON Formatter",
        description: "Extract the name and age from the provided text into a valid JSON object. Do not include any other text.",
        inputData: "User: My name is Alice, I am 28 years old and I work as a designer.",
        target: '{\n  "name": "Alice",\n  "age": 28\n}',
        maxTokens: 50
    },
    {
        id: "ch-2",
        title: "Sentiment Classifier",
        description: "Classify the sentiment of the input as POSITIVE, NEGATIVE, or NEUTRAL. Return ONLY the uppercase word.",
        inputData: "The service was slow and the food was cold, but the waiter was nice.",
        target: "NEGATIVE",
        maxTokens: 15
    },
    {
        id: "ch-3",
        title: "SQL Generator",
        description: "Generate a SQL query to find the names of users who joined in 2023 from the table 'users'.",
        inputData: "",
        target: "SELECT name FROM users WHERE YEAR(join_date) = 2023;",
        maxTokens: 100
    }
];