import { useState, useEffect } from "react";

/** 
A hook to handle local storage. 

Local storage can be used like a state variable. To initialize, pass the key and a default value:

const [val, setVal] = useLocalStorage("my-val", "default value");

*/
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("Juno Error: useLocalStorage error: ", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Optionally allow value to be a function, so it can be used just as useState:
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // save to our state:
      setStoredValue(valueToStore);
      // persist to local storage:
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log("Juno Error: useLocalStorage error: ", error);
      return initialValue;
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
