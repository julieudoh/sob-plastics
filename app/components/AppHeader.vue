<script setup>
  const openNav = ref(false)

  const navLinks = [
    {name:'Plastics', path:'/products'},
    {name:'Catering', path: '/products'},
    {name:'Bulk Supplies', path:'/bulk-supplies'},
    {name:'About Us', path:'/about-us'}        
  ]

  const toggleMenu = () => {
    openNav.value = !openNav.value
    console.log(openNav.value)
  }
</script>
<template>
  <header class="bg-surface-container-lowest dark:bg-surface-container-lowest border-b border-border-gray dark:border-outline-variant sticky top-0 z-50 max-w-screen">
    <nav class="flex justify-between items-center w-full px-margin-mobile lg:px-margin-desktop py-3 max-w-max-width mx-auto">
        <div class="flex justify-between items-center w-full px-margin-desktop py-3 max-w-max-width mx-auto">
          <NuxtLink
              class="text-headline-sm font-display font-bold text-primary dark:text-primary-fixed"
              to="/"
          >
              SOB Plastics
          </NuxtLink>
          <ul class="hidden lg:flex items-center gap-6">
            <li v-for="link in navLinks" :key="link.path">
                <NuxtLink 
                :to="{path:link.path, query: {select: 'plastics'} }"
                class="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-lg font-display"
                > {{ link.name }} </NuxtLink>
            </li>
          </ul>
          <div class="hidden lg:flex items-center gap-6">
            <div class="hidden sm:flex sm:ml-4 items-center bg-surface-container-low px-2 py-2 rounded-lg border border-border-gray">
              <span class="material-symbols-outlined text-on-surface-variant mr-2">search</span>
              <input
                class="bg-transparent border-none focus:ring-0 text-body-sm w-48 outline-0"
                placeholder="SKU or Product Name..."
                type="text"
              >
            </div>
            <NuxtLink class="hidden sm:flex" to="/auth/login">
              <button class="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer">
                <span class="material-symbols-outlined">account_circle</span>
                <span class="hidden md:inline font-display">Account</span>
              </button>
            </NuxtLink>
            <NuxtLink to="/cart" class="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg hover:bg-primary-container transition-colors cursor-pointer active:opacity-80">
              <span class="material-symbols-outlined">shopping_basket</span>
              <span class="hidden md:inline font-display">Basket</span>
            </NuxtLink>
          </div>
        </div>
        <button class="lg:hidden flex cursor-pointer" @click="toggleMenu">
          <span class="material-symbols-outlined">
            {{ openNav ? 'close' : 'menu' }}
          </span>
          <!-- <span class="material-symbols-outlined cursor-pointer">
            close
          </span> -->
        </button>
      
      <Transition
        enter-active-class="transition-[max-width] duration-300 ease-in-out"
        enter-from-class="max-w-0"
        enter-to-class="max-w-[50vw]"
        leave-active-class="transition-[max-width] duration-300 ease-in-out"
        leave-from-class="max-w-[50vw]"
        leave-to-class="max-w-0"
        >
        <div 
        v-if="openNav"
        class="absolute w-[50vw] h-screen text-center lg:static lg:hidden left-0 top-18 bg-white items-center overflow-hidden pt-7"
        >
          <ul class="flex flex-col pt-3 gap-10 ">
              <li v-for="link in navLinks" :key="link.path">
                  <NuxtLink 
                  :to="link.path"
                  class="w-full text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-body-lg font-display"
                  > {{ link.name }} </NuxtLink>
              </li>
            </ul>
        </div>
      </Transition>

    </nav>
    
  </header>
</template>
