# notification.js
A browser notification library for simplification and error handling abstraction.

## Download & Installation
Probably `npm`. Perhaps `bower` too? Currently, however, the only way is to get the 
`notification.js` file somehow and include it in your project.

## Usage
After installation, there will be a global object called `Notifier` that can be used. If the user
has a browser that is compatible with sending notifications, the user will be asked if the webpage
can send them notifications. If they agree, all is well!

Here are the current uses:
```
Notifier.sendNotification('title', 'message', 'optional icon URL');

Notifier.setIcon('icon URL');
```

## Note:
To be honest, I really did this project to start delving into creating JavaScript libraries.
I realize that a library like this is redundant, at least in its current state. Perhaps it will
grow into something more, perhaps not. However, I feel that this is a decent step in the right
direction to creating much more promising software.