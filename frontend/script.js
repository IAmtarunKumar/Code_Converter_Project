let lang = document.querySelector("#lang");
let inputbox = document.querySelector("#inputbox");
let outputbox = document.querySelector("#output");

let convert = document.querySelector("#convert");
let debug = document.querySelector("#debug");
let quality = document.querySelector("#quality");


let url = "https://code-converter-project-backend.onrender.com"

//convert
convert.addEventListener("click", async () => {
  if (lang.value === "") {
    alert("First Select Your Language");
  } else {
    let obj = {
      code: inputbox.value,
      language: lang.value,
    };

    console.log(obj);

    try {
      let res = await fetch(`${url}/convert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data.msg);
        outputbox.innerHTML = `<div style="max-width: 100%; ">${data.msg}</div>`;
      }
    } catch (error) {
      console.log(error);
      alert("Something went Wrong");
    }
  }
});

//debug

debug.addEventListener("click", async () => {
  if (lang.value === "") {
    alert("First Select Your Language");
  } else {
    let obj = {
      code: inputbox.value,
      language: lang.value,
    };

    console.log(obj);

    try {
      let res = await fetch(`${url}/debug`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data.msg);
        outputbox.innerHTML = `<div style="max-width: 100%; ">${data.msg}</div>`;
      }
    } catch (error) {
      console.log(error);
      alert("Something went Wrong");
    }
  }
});

//quality check

quality.addEventListener("click", async () => {
  if (lang.value === "") {
    alert("First Select Your Language");
  } else {
    let obj = {
      code: inputbox.value,
      language: lang.value,
    };

    console.log(obj);

    try {
      let res = await fetch(`${url}/quality`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      if (res.ok) {
        let data = await res.json();
        console.log(data.msg);
        outputbox.innerHTML = `<div  style="max-width: 100%; ">${data.msg}</div>`;
      }
    } catch (error) {
      console.log(error);
      alert("Something went Wrong");
    }
  }
});





document.addEventListener('DOMContentLoaded', function() {
  const copyButton = document.getElementById('copy-button');
  const copyText = document.getElementById('output');

  copyButton.addEventListener('click', function() {
    const range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Text has been copied to clipboard!');
    
  });
});


