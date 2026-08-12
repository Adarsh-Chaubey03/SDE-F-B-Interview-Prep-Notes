# How would you build a chat application where multiple users can communicate at the same time?

```text
WebSocket

Client ←────────→ Server
       persistent
       connection
```

**WebSocket** is a communication protocol that provides a **persistent, full-duplex connection** between a client and a server over a single TCP connection.

It is commonly used for real-time applications such as:

* Chat applications
* Live notifications
* Online gaming
* Live tracking
* Real-time dashboards

```text
Client
   │
   │ WebSocket Handshake
   ↓
Server
   │
   │ Connection Established
   ↓
Persistent Connection
   ↕
Client ↔ Server
```
