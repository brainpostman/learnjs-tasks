let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  let messagesReadWhen = new WeakMap();

  messagesReadWhen.set(messages[0], new Date());
  messagesReadWhen.set(messages[1], new Date());
  messagesReadWhen.set(messages[2], new Date());
