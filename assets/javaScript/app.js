var firebaseConfig = {
  apiKey: "AIzaSyCoxt6f4BnTujkxsuqb5SKyHlFjGtMZeKM",
  authDomain: "train-scheduler-6aaa4.firebaseapp.com",
  databaseURL: "https://train-scheduler-6aaa4.firebaseio.com",
  projectId: "train-scheduler-6aaa4",
  storageBucket: "train-scheduler-6aaa4.appspot.com",
  messagingSenderId: "447891290048",
  appId: "1:447891290048:web:e31b57bff2e0613f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//fill the fire base with initial data when button is clicked
$("addTrain").on("click", function(event) {
  event.preventDefault();

  //get user input from fields and assign to variables
  let trainName = $("#name")
    .val()
    .trim();
  let destination = $("#destination")
    .val()
    .trim();
  let firsTrain = $("#firsTrain")
    .val()
    .trim();
  let frequency = $("#frequency")
    .val()
    .trim();

  //make a local temporaty storage to operate train data
  let tempTrain = {
    name: trainName,
    destination: destination,
    firsTrain: firsTrain,
    frequency: frequency
  };
  //to upload train data to firebase
  database.ref().push(tempTrain);

  //Test values in the console
  console.log("pushed to firebase");
  console.log(tempTrain.name);
  console.log(tempTrain.destination);
  console.log(tempTrain.firsTrain);
  console.log(tempTrain.frequency);
});
