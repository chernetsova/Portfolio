export const idb = window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB ||
            window.shimIndexedDB;

export default function createCollectionsIndexedDB() {
  if(!idb) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }
  const request = idb.open("orders", 1);

  request.onerror = (event) => {
    console.log("Request error", event)
  }

  request.onupgradeneeded = (event) => {
    const db = request.result;

    if (!db.objectStoreNames.contains("userOrder")) {
      db.createObjectStore('userOrder', {
        keyPath: "id"
      })
    }
  }

  request.onsuccess = () => {}

}
