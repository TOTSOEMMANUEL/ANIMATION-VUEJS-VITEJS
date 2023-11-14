<!-- <template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <div class="check">
       <label><input type="radio" name="anim" value="fade" v-model="anim"/>Fade</label>
       <label><input type="radio" name="anim" value="slide" v-model="anim"/>slide</label>
       <label><input type="radio" name="anim" value="slide-down" v-model="anim"/>slide-down</label>
       <label><input type="radio" name="anim" value="grow-in" v-model="anim"/>grow-in</label>
       <label><input type="radio" name="anim" value="grow-out" v-model="anim"/>grow-out</label>
    </div>

  <router-view v-slot="{Component}">
      <transition :name="anim" mode="out-in">
        <Component :is="Component"/>
      </transition>
  </router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";

const anim = ref('fade')

</script>


<style>
   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   nav{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
   }

   nav a{
    margin: 0 0.5rem;
    color: black;
    text-decoration: dashed;
   }

   nav a.router-link-exact-active{
    color: crimson;
    text-decoration: underline;
   }

   .check{
     display: flex;
     align-items: center;
     justify-content: center;
   }

   .check label{
    margin: 0 0.5rem;
   }

   main{
    padding: 1rem;
    max-width: 768px;
    margin: 0 auto;
    will-change: transform;
   }

   .fade-enter-from, .fade-leave-to{
     opacity: 0;
   }
   .fade-enter-active, .fade-leave-active{
     transition: opacity 0.5s ease-out;
   }


   .slide-enter-from, .slide-leave-to{
     opacity: 0;
     transform: translateX(100%);
   }
   .slide-enter-active, .slide-leave-active{
     transition: 0.3s ease-out;
   }


   .slide-down-enter-from, .slide-down-leave-to{
     opacity: 0;
     transform: translateY(360px);
   }
   .slide-down-enter-active, .slide-down-leave-active{
     transition: 0.2s ease-out;
   }


   .grow-in-enter-from, .grow-in-leave-to{
     opacity: 0;
     transform: scale(0.3);
   }
   .grow-in-enter-active, .grow-in-leave-active{
     transition: 0.2s ease-out;
   }


   .grow-out-enter-from, .grow-out-leave-to{
     opacity: 0;
     transform: scale(1.5);
   }
   .grow-out-enter-active, .grow-out-leave-active{
     transition: 0.4s ease-out;
   }
</style>
 -->



 <template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>

      <router-link to="/part">Part</router-link>
      <router-link to="/gart">Gart</router-link>

      <router-link to="/merci">Merci</router-link>
    </nav>

    <router-view v-slot="{ Component }">
      <transition :name="$route.meta.transition" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
/* import HelloWorld from './components/HelloWorld.vue' */
</script>

<style scoped>

*{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   nav{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
   }

   nav a{
    margin: 0 0.5rem;
    color: black;
    text-decoration: dashed;
   }

   nav a.router-link-exact-active{
    color: crimson;
    text-decoration: underline;
   }

   main{
    padding: 1rem;
    max-width: 768px;
    margin: 0 auto;
    will-change: transform;
   }


   .fade-enter-from, .fade-leave-to{
     opacity: 0;
   }
   .fade-enter-active, .fade-leave-active{
     transition: opacity 0.5s ease-out;
   }


   .slide-enter-from, .slide-leave-to{
     opacity: 0;
     transform: translateX(100%);
   }
   .slide-enter-active, .slide-leave-active{
     transition: 0.3s ease-out;
   }


   .slide-down-enter-from, .slide-down-leave-to{
     opacity: 0;
     transform: translateY(360px);
   }
   .slide-down-enter-active, .slide-down-leave-active{
     transition: 0.2s ease-out;
   }


   .grow-in-enter-from, .grow-in-leave-to{
     opacity: 0;
     transform: scale(0.3);
   }
   .grow-in-enter-active, .grow-in-leave-active{
     transition: 0.2s ease-out;
   }


   .grow-out-enter-from, .grow-out-leave-to{
     opacity: 0;
     transform: scale(1.5);
   }
   .grow-out-enter-active, .grow-out-leave-active{
     transition: 0.4s ease-out;
   }

   .slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-right-enter-from, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-left-enter-from, .slide-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}





.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-right-enter-from,
.slide-fade-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-fade-left-enter-active,
.slide-fade-left-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-left-enter-from,
.slide-fade-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-down-enter-active,
.slide-fade-down-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>