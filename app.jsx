function Info() {
  return (
    <div className="">
      <img src="/cus-1.svg" alt="" />
      <div className="info">
        <h3>Susan Smith</h3>
        <p>WEB DEVELOPER</p>
      </div>
    </div>
  );
}

function Control() {
  return (
    <div className="control">
      <div className="arow">
        <i className="bx bx-chevron-left"></i>
      </div>
      <div className="arow">
        <i className="bx bx-chevron-right"></i>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="">
      <Info />
      <p>
        I'm baby meggings twee health goth +1 . Bicycle rights tumeric
        chartreuse before the sold out chambray pop-up. Shaman humblebrag
        pickled coloring book salvia hoodie, cold-pressed four dollar toast
        everyday carry
      </p>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="text-center card">
      <Content />
      <Control />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<ReviewCard />);
