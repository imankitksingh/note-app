Using localStorage in web applications we can store data persistently on the client-side. Key naming is crucial for organizing the data in localStorage because it gives-
1. Clarity: Descriptive keys make it easier to understand what data is stored.
2. Avoiding collisions: Unique and structured names help prevent overwriting or conflicting data across different parts of your app.
3. Manageability: It’s easier to find and update specific data when the keys are well-named (e.g., user_data, theme_preference, etc.).

useState hook - it is used to manage my state of data. in my application i've used it multiple times like for title, content.
useEffect hook - it is used to perform side effects tasks like fetching Data from an API, updating UI element, setting up event listeners. it also helps us to get rid of unnecessary re-rendering based on dependency inside []. i've used it in my update title, content section that will only render when i want to edit my note
