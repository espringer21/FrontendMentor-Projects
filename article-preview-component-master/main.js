
function displayShare() {
    const profile = document.getElementById("profile");
    const share = document.getElementById("share");

    // Toggle visibility
    if (profile.style.display === "none") {
      profile.style.display = "flex";
      share.style.display = "none";
    } else {
      profile.style.display = "none";
      share.style.display = "flex";
    }
  }