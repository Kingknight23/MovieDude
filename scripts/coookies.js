function setCookie() {
    const acceptCookie = confirm("Do you want to accept the cookie?");
  
    if (acceptCookie) {
      // User accepted the cookie, perform necessary actions
      document.cookie = "myCookie=myValue; SameSite=None; Secure";
    } else {
      // User declined the cookie, handle accordingly
      // You can choose to not set the cookie or perform any other action
    }
  }
  
window.onload = setCookie;