// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAPtDhXiZeSN_LJ7abeRCeUNQJMW34e9dQ",
  authDomain: "vegetable-quality-classifier.firebaseapp.com",
  projectId: "vegetable-quality-classifier",
  storageBucket: "vegetable-quality-classifier.appspot.com",
  messagingSenderId: "702850336000",
  appId: "1:702850336000:web:a1e2e328eab1fcf2cddfe5",
  measurementId: "G-PEKB7K9CTJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google provider
const provider = new firebase.auth.GoogleAuthProvider();

// Login function
function loginWithGoogle() {
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log("Login Success");
      window.location.href = "main.html";   // Redirect
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Login failed: " + error.message);
    });
}
