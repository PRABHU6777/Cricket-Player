import React from "react";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtile">
                      {curElem.id}
                    </span>
                    <span className="card-author subtile">{curElem.title}</span>
                    <h2 className="card-title">{curElem.name}</h2>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <img
                      src={curElem.Image}
                      alt="images"
                      className="card-media"
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
