import React from 'react'

const Card1 = () => {
  return (
    <div class="cards " style={{marginTop:"30px"}}>
    <div class="card border border-danger shadow-lg p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
      <img src="https://shalamarhospital.org.pk/wp-content/uploads/2024/05/solidarity_15191435.png" class="card-img-top" height="150px" width="20px"></img>
      <div class="card-body text-center">
        <h5 class="card-title">Compassionate Care</h5>
        <p class="card-text">When you choose our hospital, you can rest assured that you're getting personalized, compassionate care that's tailored to your needs</p>
      </div>
    </div>
    <div class="card border border-danger shadow-lg p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
      <img src="https://shalamarhospital.org.pk/wp-content/uploads/2024/05/challenge_8790457.png" class="card-img-top" height="150px" width="20px"></img>
      <div class="card-body text-center">
        <h5 class="card-title">Commited to Excellence</h5>
        <p class="card-text">Our hospital is committed to excellence in everything we do, whether it's treating a minor illness or performing a complex surgery</p>
      </div>
    </div>
    <div class="card border border-danger shadow-lg p-3 mb-5 bg-body rounded" style={{width: "18rem"}}>
      <img src="https://shalamarhospital.org.pk/wp-content/uploads/2024/05/confidential_12003971.png" class="card-img-top" height="130px" width="20px"></img>
      <div class="card-body text-center">
        <h5 class="card-title">Confidentiality</h5>
        <p class="card-text">From our commitment to patient privacy and confidentiality to our rigorous safety protocols, you can trust that you're in good hands at our hospital</p>
      </div>
    </div>
  </div>
  )
}

export default Card1