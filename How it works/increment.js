const domContainer = document.querySelector("#root");

const myElement = (
  <div>
    <h1 id="display">0</h1>
    <div>
      <button id="button">Increment +</button>
    </div>
  </div>
);

ReactDom.render(myElement, domContainer);
