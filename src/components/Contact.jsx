import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="container contact-card">
        <div class="card md-6 contact-card">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="./assets/cody-dog-image.jpg"
                class="card-img"
                alt="picture of me and my sister"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 id="contact-header">Contact</h3>
                <ul class="list-group">
                  <li class=" contact-list list-group-item">
                    Email: codybonsma@gmail.com
                  </li>
                  <li class=" contact-list list-group-item">
                    Phone: (912) 531-5946
                  </li>
                  <li class=" contact-list list-group-item">
                    Checkout out my{" "}
                    <a href="https://github.com/CodyBonsma">Github</a> page
                  </li>
                  <li class=" contact-list list-group-item">
                    Let's connect on{" "}
                    <a href="https://www.linkedin.com/in/codybonsma/">
                      LinkedIn
                    </a>
                    !
                  </li>
                  <li class=" contact-list list-group-item">
                    Grab a copy of my{" "}
                    <a href="./TECHNICAL RESUME OCT - 2020.pdf">Resume</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
