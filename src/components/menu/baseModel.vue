<template>
  <Transition name="modal-outer">      
    <div v-show='modelActive' 
         class='absolute w-full bg-primary bg-opacity-40 h-screen top-0 left-0 flex justify-center '>
        <Transition name="modal-inner"> 
          <div v-if='modelActive'
            class=' bg-primary self-start w-full h-screen ' >
              
              <button  @click="$emit('close-model')" 
                class='py-2 w-full flex justify-end '>
                  <span></span> 
                  <img src="../new_incons/svgexport-100.svg" alt="" class=' p-3 mr-5   mt-5 rounded-full bg-secondary'>
              </button>
              <slot/>
              
          </div>
        </Transition>
    </div>
   </Transition> 
</template>

<script setup>
    
    defineProps({
        modelActive:{
            type:Boolean,
            default:false
        }
    })
    defineEmits(["close-model"])
     
    
</script>
<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>

