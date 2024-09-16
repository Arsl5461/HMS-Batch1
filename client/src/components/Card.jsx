import React from 'react'

const Card = () => {
  return (
    // <!-- card2 -->
    
   <div class="cards ">
    
      <div class="card border border-danger shadow-lg p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
        <img src="https://cdn-icons-png.flaticon.com/512/12310/12310088.png" class="card-img-top" height="150px" width="20px"></img>
        <div class="card-body text-center">
          <h5 class="card-title">Holistic Approach</h5>
          <p class="card-text">At our hospital, we take a holistic approach to healthcare, addressing not just your physical needs but your emotional and mental wellbeing as well</p>
        </div>
      </div>
      <div class="card border border-danger shadow-lg p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFUwfmlkvPUADbyQVYYy4B2HK2MGSQboafw&s" class="card-img-top" height="170px" width="20px"></img>
        <div class="card-body text-center">
          <h5 class="card-title">Medical Technology</h5>
          <p class="card-text">From our cutting-edge medical technology to our expert team of doctors and nurses, we're always striving to provide the best possible care</p>
        </div>
      </div>
      <div class="card border border-danger shadow-lg p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebIo473rSXET0l7bQLAbb6Kikwn4bZQDQvw&s" class="card-img-top" height="190px" ></img>
        <div class="card-body text-center">
          <h5 class="card-title">24/7 Service</h5>
          <p class="card-text">No matter when you need us, our hospital is always open, so you can get the care you need, when you need it</p>
        </div>
      </div>
    </div>
  )
}

export default Card