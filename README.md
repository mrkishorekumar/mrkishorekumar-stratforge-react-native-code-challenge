# stratforge

this is a react native app built using modern tools like redux toolkit, react-query, and react navigation. the goal is to keep the code clean, organized, and easy to grow as the app gets bigger.

---

## 🧰 tools that i used and why

- **react native** – lets us build real native apps using javascript and typescript.
- **redux toolkit + react-redux + redux-persist** – handles app state in a simple way and keeps data saved even when the app restarts.
- **react-query** – helps us fetch and manage data from the server with less code and fewer bugs.
- **react-navigation** – lets us move between screens easily. i used `native-stack` for better speed and `bottom-tabs` for a smooth ui.
- **fast image** – loads images quickly and efficiently.
- **async storage** – stores data like user settings and login info.
- **document picker** – helps users choose files from their phone.
- **eslint + prettier** – makes sure our code looks clean and is easy to read.

---

## 🗂️ how i organized the code

```
/src
  /assets        # images and fonts
  /components    # reusable ui parts
  /interface     # types for safety
  /routing       # screen navigation setup
  /store         # redux store and logic
  /screens       # full screen views
```

- i used a **feature-first** layout, so each part of the app is in its own folder.
- i separated **redux** (for app state) and **react-query** (for server data).
- this structure helps us stay organized and makes things easier to test and grow later.

---

[watch demo video](./src/assets/video/demo.mp4)
