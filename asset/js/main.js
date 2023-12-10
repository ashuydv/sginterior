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
// Common setup for Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to handle the submission of the query form
const handleQueryFormSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const docRefQueryForm = await addDoc(
      collection(db, "queryform"),
      formObject
    );
    console.log("Document written to queryform with ID: ", docRefQueryForm.id);

    // Display success message
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

    // Display error message
    butterup.toast({
      title: "Error!",
      message: "Please try again",
      location: "top-right",
      type: "error",
    });
  }
};

// Function to handle the submission of the booking form
const handleBookingFormSubmit = async (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    const docRefBookingForm = await addDoc(
      collection(db, "bookingform"),
      formObject
    );
    console.log(
      "Document written to bookingform with ID: ",
      docRefBookingForm.id
    );

    // Display success message
    butterup.toast({
      title: "🎉 Success!",
      message: "Will get back to you shortly",
      location: "top-right",
      type: "success",
    });

    // Optionally, you can reset the form after successful submission
    form.reset();
    window.location.href = "thank-you.html";
  } catch (error) {
    console.error("Error adding document: ", error);

    // Display error message
    butterup.toast({
      title: "Error!",
      message: "Please try again",
      location: "top-right",
      type: "error",
    });
  }
};

// Attach the form submission handlers to the forms
const queryForm = document.getElementById("queryForm");
const bookingForm = document.getElementById("bookingForm");

if (queryForm) {
  queryForm.addEventListener("submit", handleQueryFormSubmit);
}

if (bookingForm) {
  bookingForm.addEventListener("submit", handleBookingFormSubmit);
}
