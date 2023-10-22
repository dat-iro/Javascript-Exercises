const user = {
  id: 1,
  name: "John",
  age: 25,
};

function savelocalData(user) {
  try {
    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
  } catch (error) {
    console.error("Errore!");
  }
}

savelocalData(user);