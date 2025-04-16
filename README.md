# REALTIME-COLLABRATIVE-DOCUMENT-EDITOR

Company : CODTECH IT SOLUTIONS

Name : Pasumarthi Vajrasree

intern ID : CT06WU89

Domain : Full Stack DEvelopment

Duration : 6weeks

Mentor : Neela Santhosh

I created a real-time collaborative document editor completely on my own utilizing Node. js, Express, Socket. io, and React. js. This project was developed in Visual Studio Code and showcases a contemporary method for real-time, multi-user collaboration. The application allows several users to concurrently edit a shared document, with all modifications instantly shown in real time across all connected users. It effectively imitates the fundamental functionality of collaborative platforms like Google Docs, but in a much simpler and educational manner, enabling me to comprehend how real-time data synchronization and state management operate between frontend and backend systems.

The process began with the creation of a project folder in Visual Studio Code. After accessing the folder in the editor, I initialized the backend using Node. js by executing `npm init -y` to generate a package. json file. I subsequently installed the necessary dependencies including express for the backend server, socket. io for real-time bidirectional communication between clients and server, and cors to facilitate cross-origin resource sharing, which is particularly crucial when the frontend and backend function on different ports during development. This established the foundational environment for managing both server-side logic and real-time messaging.

After setting up the environment, I generated a backend file where I configured the server. js file. Within this file, I imported the necessary modules and created an instance of the Express app. I also established an HTTP server and initialized a new Socket. io server instance with CORS settings to permit communication from the React frontend operating on port 3000. A global variable `documentText` was created to maintain the current content of the shared document. This variable is synchronized in real time between all clients.

The main component of the backend logic is the socket connection handler. When a user connects, a log entry is printed to the terminal displaying their socket ID, and the current version of the document is sent to the newly connected user through `socket. emit`. This guarantees that every new participant begins with the latest version of the document. When a user modifies the document, the `edit` event is emitted alongside the new text content. The server processes this text, updates the global `documentText`, and then broadcasts the updates to all other connected users using `socket. broadcast. emit`. This broadcasting functionality is what allows real-time updates to spread across all active sessions.

With the backend functional, I shifted my focus to creating the frontend using React. I set up a new React app within a `client` subfolder by using the command `npx create-react-app client`, then moved into that directory and installed `socket. io-client`, which enables the React app to interact with the backend socket server. Within the main React component file, I initiated a connection to the backend server using `io('http://localhost:4000')` and established the application state using the `useState` and `useEffect` hooks.

The React component displays a `

output:

