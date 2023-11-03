const Shoes = () => {
  return (
    <main className="shoe container">
      <div className="shoe-content">
        <h1>Your Feet Deserves The Best</h1>
        <p>
          We champion continual progress for athletes 
          and sport by taking action to help athletes reach their potential. 
          Every job at NIKE, Inc. is grounded in a team-first mindset, cultivating 
          a culture of innovation and a shared purpose to leave an enduring impact.
        </p>
        <div className="shoe-logo">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on </p>
          <div className="icons">
            <img
              src="/Images/amazon-icon.png"
              alt="amazon-icon"
              height={"25px"}
              width={"35px"}
            />
            <img
              src="/Images/Flipkart.png"
              alt="Flipkart-icon"
              height={"25px"}
              width={"35px"}
            />
            <img
              src="/Images/myntra-logo.png"
              alt="myntra-logo-icon"
              height={"25px"}
              width={"35px"}
            />
          </div>
        </div>
      </div>
      <div className="shoe-image">
        <img
          src="/Images/Nike Image.jpg"
          alt="Nike-image"
          height={"500px"}
          width={"650px"}
        />
      </div>
    </main>
  );
};

export default Shoes;
