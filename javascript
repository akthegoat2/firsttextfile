<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1 id="greeting">Hello World</h1>
    <button onclick="changeGreeting()">Change Message</button>
    <div id="counter"></div>

    <script>
        // Interactive greeting changer
        function changeGreeting() {
            const greetingElement = document.getElementById('greeting');
            greetingElement.textContent = greetingElement.textContent === 'Hello World' 
                ? 'Welcome to JavaScript!' 
                : 'Hello World';
        }

        // Dynamic counter display
        let counter = 0;
        setInterval(() => {
            document.getElementById('counter').textContent = 
                `Page loaded ${counter++} seconds ago`;
        }, 1000);
    </script>
</body>
</html>
