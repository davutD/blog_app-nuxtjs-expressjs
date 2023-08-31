<template>
    <Header/>
    <div class="card-container border m-auto mt-20">
      <div class="card" :class="{ flipped: isFlipped }">
        <div class="card-front">
          <div>
            <Login/>
          </div>
        </div>
        <div class="card-back">
            <div>
                <Register/>
            </div>
        </div>
      </div>
    </div>
    <button @click="toggleFlip">Flip</button>
</template>
  
  <script>
  
  export default {
    setup() {
      const isFlipped = ref(false);
  
      const toggleFlip = () => {
        isFlipped.value = !isFlipped.value;
      };
  
      return {
        isFlipped,
        toggleFlip
      };
    }
  };
  </script>
  
  <style>
  .card-container {
    perspective: 1000px;
    width: auto;
    height: 400px; /* Adjust as needed */
  }
  
  .card {
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
  
  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card-front {
    transform: rotateY(0deg);
  }
  
  .card-back {
    transform: rotateY(180deg);
  }
  
  .flipped {
    transform: rotateY(180deg);
  }
  </style>
  