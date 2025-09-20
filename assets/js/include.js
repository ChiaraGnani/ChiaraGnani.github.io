function includeHTML() {
  const includes = document.querySelectorAll("[data-include]");
  let loaded = 0;

  if (includes.length === 0) {
    document.dispatchEvent(new Event("componentsLoaded"));
    return;
  }

  includes.forEach((el) => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch ${file}`);
        return res.text();
      })
      .then((html) => {
        el.innerHTML = html;
        loaded++;
        if (loaded === includes.length) {
          document.dispatchEvent(new Event("componentsLoaded"));
        }
      })
      .catch((err) => {
        console.error("Include error:", err);
        loaded++;
        if (loaded === includes.length) {
          document.dispatchEvent(new Event("componentsLoaded"));
        }
      });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
