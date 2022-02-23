import SignModal from "../views/sign-modal.js";

const Profile = (function() {
  const template = `
    <div class="profile-container flex">
      <div class="profile-button button">
        <span class="profile-icon material-icons-outlined"> account_circle </span>
      </div>
      <div class="profile-dropdown dropdown note-form">
        <div class="profile-dropdown-content dropdown-content">
          <div class="profile-dropdown-item dropdown-signup">
            <a href="#" class="profile-dropdown-link">
              <span class="profile-dropdown-icon material-icons-outlined"> login </span>
              <span class="profile-dropdown-text"> Sign up </span>
            </a>
          </div>
          <div class="profile-dropdown-item dropdown-logout"> 
            <a href="#" class="profile-dropdown-link">
              <span class="profile-dropdown-icon material-icons-outlined"> exit_to_app </span>
              <span class="profile-dropdown-text"> Logout </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    ${SignModal}
  `;

  const listenClick = function() {
    const profileButton = document.querySelector(".profile-button");
    const profileDropdown = document.querySelector(".profile-dropdown");
    profileButton.addEventListener("click", () => {
      profileDropdown.classList.toggle("dropdown--visible");
    });

    const signupButton = document.querySelector(".dropdown-signup");
    const overlay = document.querySelector(".overlay");
    const signModal = document.querySelector(".sign-modal");
    signupButton.addEventListener('click', () => {
      profileDropdown.classList.toggle("dropdown--visible");
      overlay.classList.add("overlay--visible");
      signModal.classList.add("sign-modal--visible");
    })
  }

  return {
    toString() {
      return template;
    },
    addListeners() {
      SignModal.addListeners();
      listenClick();
    },
  }
})()

export default Profile;