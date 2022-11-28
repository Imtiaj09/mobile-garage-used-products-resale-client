import React from "react";

const Blogs = () => {
  return (
    <section className=" dark:text-black mt-4 mb-4">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          Blog page
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Questions & Answer
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">
              {" "}
              What are the different ways to manage a state in a React
              application?
            </h3>
            <p className="mt-1 dark:text-black">
              <span className="font-bold">Answer:</span> There are four main
              types of state you need to properly manage in your React
              application: <br />
              1. Local state <br /> 2. Global state <br /> 3. Server state{" "}
              <br /> 4. URL state
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              How does prototypical inheritance work?
            </h3>
            <p className="mt-1 dark:text-black">
              <span className="font-bold">Answer: </span>In JavaScript, objects
              have a special hidden property [[Prototype]] (as named in the
              specification), that is either null or references another object.
              That object is called “a prototype”.The Prototypal Inheritance is
              a feature in javascript used to add methods and properties in
              objects.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              What is a unit test? Why should we write unit tests?
            </h3>
            <p className="mt-1 dark:text-black">
              Testing is a method where JavaScript test code is written for a
              web page or web application module. It is then combined with HTML
              as an inline event handler and executed in the browser to test if
              all functionalities are working as desired.Using a unit test
              framework enables us to quickly write and automate our tests and
              integrate them into our development and deployment processes.
              These frameworks often support testing in both front and back-end
              JavaScript code.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">React vs. Angular vs. Vue?</h3>
            <p className="mt-1 dark:text-black">
              React is a UI library, Angular is a fully-fledged front-end
              framework, while Vue.js is a progressive framework.React can be
              used as a UI library to render elements, without enforcing a
              specific project structure, and that’s why it’s not strictly a
              framework.The Vue.js core library focuses on the View layer only.
              It’s called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework. AngularJS,
              the original framework, is an MVC (Model-View-Controller)
              framework. But in Angular 2, there’s no strict association with
              MV*-patterns as it is also component-based.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
