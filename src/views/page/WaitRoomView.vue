<script>
export default {
  name: "WaitRoomView"
}
</script>

<template>
  <nav></nav>
  <section>
    <div class="top-left-container">
      <h1>WaitRoomView</h1>
      <button> create room</button>
    </div>
    <div class="liste-room">
      <div class="room">
        <h2>room 1</h2>
        <div class="inf">
          <span>1/2</span>
        <button>join</button>
        </div>
      </div>
      <div class="room">
        <h2>room 2</h2>
        <button>join</button>
      </div>
      <div class="room">
        <h2>room 3</h2>
        <button>join</button>
      </div>
    </div>
    <div class="footer-pokemon-liste-choice">
      <div>
        <ul>
          <li><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></li>
          <li><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></li>
          <li><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></li>
          <li><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></li>
          <li><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></li>
          <li><img src="@/assets/img/Pokeball-PNG-HD-Image.png" alt=""></li>
        </ul>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Press Start 2P';
  }
  

  .top-left-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    button{
      background-color: #f1c40f;
      border: none;
      border-radius: 5px;
      padding: 5px;
      cursor: pointer;
    }
  }

  .liste-room{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .room{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      margin: 10px;
      padding: 10px;
      border: 1px solid black;
      border-radius: 5px;

      .inf{
        display: flex;
        align-items: center;
        span{
          background-color: #f1c40f;
          border-radius: 5px;
          padding: 5px;
          margin-right: 5px;
          font-size: 12px;
        }
      }

      button{
        background-color: #f1c40f;
        border: none;
        border-radius: 5px;
        padding: 5px;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }

  .footer-pokemon-liste-choice{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: #2c3e50;
    width: 100%;
    align-items: center;
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      li{
        width: 50px;
        height: 50px;
        background-color: #f1c40f;
        border: 1px solid black;
        border-radius: 5px;
        list-style: none;
        margin: 5px;
        img{
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .top-left-container{
      h1{
        font-size: 1.5rem;
      }
      flex-direction: column;
      button{
        width: 80%;
      }
    }
    .liste-room{
      .room{
        width: 80%;
      }
    }
  }

</style>