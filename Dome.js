<!DOCTYPE html>
<html>
  <head>
    <title>Page</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="CSS/styles.css">
  </head>
  <body>
    <nav id="navbar">
      <a href="" id="nav-brand">App</a>
      <ul>
        <li class="nav-item">
            <a href="" class="about-us">About us</a>
            <a href="" class="about-us"><b>About us</b></a>
        </li>
        <li>
            <a href="" class="nav-item btn btn-default">Register</a>
        </li>
      </ul>
    </nav>

    <div class="container">
    <div class="container  ">
      <h1>Welcome to our app</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
        voluptatem.
      </p>
    </div>

    <div id="super-power">
        jhgkjdgkdj
        <div>
            <p id="plenty-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                voluptatem.<br /><br />
                <button id="click-me-btn"> Click me</button>
            </p>
        </div>
        <div>
            <p id="result-text">GIve me resuklt here</p>
        </div>

        <div>
            <button id="minus">-</button>  &nbsp;
            <span id="result-data"> 0 </span> &nbsp; 
            <button id="plus">+</button>
        </div>

    </div>

    <!-- <div id="super-power">
       <p class="name"> Adewale Ayuba</p>
       <p class="name"> Adekola Muhammed</p>
       <span class="name">Hello world</span>
    </div> -->

    <footer id="footer-wrapper">
      <a href="about.html" target="_blank">About us</a>
      <a href="contact.html" target="_blank">Contact us</a>
    </footer>
  </body>

  <script>
<script>

    document.querySelector('#minus').addEventListener('click', () => {
        const initialValue = parseInt(document.querySelector('#result-data').textContent)
        if(initialValue === 0) {
            console.log("You cannot go below zero")
            document.querySelector('#result-data').textContent = 0
        }else{
        const result = initialValue - 1
        document.querySelector('#result-data').textContent = result
        }
    })

    document.querySelector('#plus').addEventListener('click', () => {
        const initialValue = parseInt(document.querySelector('#result-data').textContent)
        const result = initialValue + 1
        document.querySelector('#result-data').textContent = result

    })


const callMe = () => {

const plentyText = document.querySelector('#plenty-text').textContent

document.querySelector('#result-text').textContent = plentyText

 document.querySelector('#click-me-btn').addEventListener('mouseover', callMe)

}


    // const first = document.querySelector(".about-us").innerHTML  
    // console.log("innerHtml: ", first)

    const getFooterElement = () => {
        const footer = document.querySelector("#footer-wrapper");
        console.log("footer: ", footer);
    // const first1 = document.querySelector(".about-us").textContent  
    // console.log("textContent: ", first1)

    // const details = document.querySelector(".about-us"); //[]
    // details.textContent = "Who will buy kilishi"

    // details.innerHTML = "Secon timr updating the text"


    // const getFooterElement = () => {
    //     const footer = document.querySelector("#footer-wrapper");
    //     console.log("footer: ", footer);

    // }

    // const getNavbar = () => {
    //     const navbar = document.querySelector("#navbar");
    //     console.log("navbar: ", navbar);
    // }


    const genericCall = (selector, option="id") => {
     //const result =   (option === "id") ? document.querySelector(`#${selector}`) : document.querySelector(`.${selector}`);
        if(option === "id") {
            const element = document.querySelector(`#${selector}`);
            console.log("element: ", element);

        }else{
            const element = document.querySelector(`.${selector}`);
            console.log("element: ", element);

        }

    }

    genericCall("footer-wrapper")
    genericCall("navbar", "class")


    getFooterElement()

    getNavbar()
    //Write you JS code here
    // const navbar = document.querySelector("#navbar");
    // console.log("here: ", navbar);
    // const aboutUs = document.querySelector(".about-us");
    // console.log("here: ", aboutUs);
  </script>
</html>