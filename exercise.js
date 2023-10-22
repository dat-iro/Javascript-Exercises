const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocalData(user) {
  try {
    const userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
  } catch (error) {
    console.error("Errore!");
  }
}

function getLocalData(key) {
  try {
    const localData = localStorage.getItem(key);
    console.log(localData);
  } catch (error) {
    console.error("Errore!");
  }
}

saveLocalData(user);
getLocalData("user");