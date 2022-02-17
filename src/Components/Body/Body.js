import React from 'react'
import modelS from '../model-s.jpg'
import model3 from '../model-3.png'
import modelX from '../model-x.jpg'
import modelY from '../model-y.jpg'
import solarRoof from '../solar-roof.jpg'
import solarPanel from '../solar-panel.jpg'

export const Body = () => {
  return (
    <>
      <div className="body-wrapper container">
        {/********Row 1********* */}
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "inherit" }}>
              <img src={modelS} alt="..." class="card-img-top card-img" />
              <div className="card-body modelS">
                <h5 className="card-title" style={{ textShadow: "1px 1px white" }}>Model S</h5>
              </div>
              <div className="btns">
                <a href="#" className="btn btn-p bttn">Custom Order</a>
                <a href="#" className="btn btn-s">Existing Inventory</a>
              </div>
            </div>
          </div>
        </div>

        {/******Row 2******* */}
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col">
            <div className="card" style={{ width: "inherit", height: "60vh" }}>
              <img src={model3} alt="..." class="card-img-top card-img" />
              <div className="card-body modelS">
                <h5 className="card-title" style={{ color: "#f1f1f1", textShadow: "1px 1px black" }}>Model 3</h5>
              </div>
              <div className="btns">
                <a href="#" className="btn btn-p">Custom Order</a>
                <a href="#" className="btn btn-s">Existing Inventory</a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: "inherit", height: "60vh" }}>
              <img src={modelX} alt="..." class="card-img-top card-img" />
              <div className="card-body modelS">
                <h5 className="card-title" style={{textAlign: "start"}}>Model X</h5>
              </div>
              <div className="btns">
                <a href="#" className="btn btn-p">Custom Order</a>
                <a href="#" className="btn btn-s">Existing Inventory</a>
              </div>
            </div>
          </div>
        </div>

        {/********Row 3******** */}
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col">
            <div className="card" style={{ width: "inherit" }}>
              <img src={modelY} alt="..." class="card-img-top card-img" style={{height: "120vh"}}/>
              <div className="card-body modelS">
                <h5 className="card-title" style={{textAlign: "center", color: "#f1f1f1"}}>Model Y</h5>
              </div>
              <div className="btns">
                <a href="#" className="btn btn-p">Custom Order</a>
                <a href="#" className="btn btn-s">Existing Inventory</a>
              </div>
            </div>
          </div>

          <div className="col">
          <div className="card" style={{ width: "inherit", height: "58vh" }}>
              <img src={solarRoof} alt="..." class="card-img-top card-img"/>
              <div className="card-body modelS">
                <h5 className="card-title" style={{textAlign: "start"}}>Solar Roof</h5>
              </div>
              <div className="btns">
                <a href="#" className="btn btn-p">Custom Order</a>
                <a href="#" className="btn btn-s">Existing Inventory</a>
              </div>
            </div>

            <div className="card" style={{ width: "inherit", height: "58vh", marginTop: "4vh" }}>
              <img src={solarPanel} alt="..." class="card-img-top card-img"/>
              <div className="card-body modelS">
                <h5 className="card-title" style={{textAlign: "start", color: "white", textShadow: "1px 1px black"}}>Solar Panel</h5>
              </div>
              <div className="btns">
                <a href="#" className="btn btn-p">Custom Order</a>
                <a href="#" className="btn btn-s">Existing Inventory</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
