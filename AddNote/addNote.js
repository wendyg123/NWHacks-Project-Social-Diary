function assignEmotion(e) {
    emotion_element = document.getElementById("emotion");
    emotion_element.innerHTML = e;

    // figure this out
    face_element = document.querySelector('img');

    if (e ==='hopeful') {
        face_element.src = "Images/hopeful.png";
    } else if (e === "sad") {
        face_element.src = "Images/sad.png";
    } else if (e === "lonely") {
        face_element.src = "Images/lonely.png";
    } else if (e === "hopeless") {
        face_element.src = "Images/hopeless.png";
    } else if (e === "stressed") {
        face_element.src = "Images/stressed.png";
    } else if (e === "angry") {
        face_element.src = "Images/angry.png";
    } else if (e === "anxious") {
        face_element.src = "Images/anxious.png";
    } else if (e === "worried") {
        face_element.src = "Images/worried.png";
    }
}