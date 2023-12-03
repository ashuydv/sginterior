import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYORjHgx8NEzVcw7-e04sc0dTMHkppL3s",
  authDomain: "sadguruinterior-9e0ee.firebaseapp.com",
  projectId: "sadguruinterior-9e0ee",
  storageBucket: "sadguruinterior-9e0ee.appspot.com",
  messagingSenderId: "405316056987",
  appId: "1:405316056987:web:09f5637e4d29427b8b533e",
  measurementId: "G-V23F8VGYV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const handleFormSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  // Create an object to hold form data
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    // Determine which form is being submitted based on the form's ID
    const collectionName =
      form.id === "contactForm" ? "queryform" : "bookingform";

    // Add form data to Firestore
    const docRef = await addDoc(collection(db, collectionName), formObject);
    console.log(`Document written to ${collectionName} with ID: `, docRef.id);

    butterup.toast({
      title: "🎉 Success!",
      message: "Will get back to you shortly",
      location: "top-right",
      type: "success",
    });

    // Optionally, you can reset the form after successful submission
    form.reset();
  } catch (error) {
    console.error("Error adding document: ", error);

    butterup.toast({
      title: "Error!",
      message: "Please try again",
      location: "top-right",
      type: "error",
    });
  }
};

// Attach the form submission handler to the forms
const queryForm = document.getElementById("queryForm");
const bookingForm = document.getElementById("bookingForm");

queryForm.addEventListener("submit", handleFormSubmit);
bookingForm.addEventListener("submit", handleFormSubmit);
