# StreamMate

This project is based on the popular video conferencing application, Zoom, developed using Vanilla JavaScript. It leverages WebRTC for peer-to-peer video communication and Socket.IO for signaling and real-time communication between users. The application allows users to join video calls, create and join rooms, and communicate seamlessly with high-quality video and audio.

Features:

  - Real-Time Video and Audio Communication: High-quality video and audio calling using WebRTC technology.
  - Peer-to-Peer Connections: Direct peer-to-peer connections for efficient and low-latency communication.
  - Room Creation and Joining: Users can create unique rooms and share room IDs to invite others.
  - User Interface: Intuitive user interface for a seamless video calling experience.
  - Signaling Server: Implementation of a signaling server using Socket.IO for establishing connections.
  - Chat Functionality: Real-time text chat within the video call for enhanced communication.
  - Mute/Unmute: Option to mute/unmute microphone and turn on/off video during the call.
  - Screen Sharing: Ability to share your screen with other participants in the call.
  - Responsive Design: Ensures a consistent experience across different devices and screen sizes.

Technologies Used:

  - Vanilla JavaScript: Core language for building the application.
  - WebRTC: For real-time peer-to-peer video and audio communication.
  - Socket.IO: For real-time signaling and communication between users.
  - HTML5 & CSS3: For structuring and styling the user interface.
  - Node.js: Server-side platform for handling signaling server with Socket.IO.

Installation and Setup:

  - Clone the repository:

```
  git clone https://github.com/JosiasBatista/StreamMate
  cd StreamMate
```

  - Install dependencies:

```
  npm install
```

  - Start the server:

```
npm start
```

  - Open your browser and navigate to:

    http://localhost:3000

  - Usage:

    - Create a new room or join an existing room by entering the room ID.
    - Share the room ID with others to invite them to the call.
    - Enjoy real-time video and audio communication with other participants.

  - Future Enhancements:

    - Share your screen if needed for presentations or collaborations.
    - Recording Calls: Add functionality to record video calls.
    - File Sharing: Allow participants to share files during the call.
    - User Authentication: Implement user authentication and authorization.
    - Improved UI/UX: Enhance the user interface and user experience with additional features.