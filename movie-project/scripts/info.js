const transferredData = sessionStorage.getItem('html');
const infoContainer = document.querySelector(".info");

      if (infoContainer) {
        infoContainer.innerHTML = transferredData;
      } else {
        console.error("Could not find .info container to render the info.");
      }
