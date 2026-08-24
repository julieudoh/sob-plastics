<template>
  <nav class="bg-surface-container-lowest dark:bg-surface-container-lowest border-b border-border-gray dark:border-outline-variant sticky top-0 z-50">
    <div class="flex justify-between items-center w-full px-margin-desktop py-3 max-w-max-width mx-auto">
      <div class="flex items-center gap-8">
        <NuxtLink
          class="text-headline-sm font-display font-bold text-primary dark:text-primary-fixed"
          to="/"
        >
          SOB Plastics
        </NuxtLink>
        <div class="hidden lg:flex items-center gap-6">
          <a
            class="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-display"
            href="#"
          >
          <!-- class="text-secondary dark:text-secondary-fixed border-b-2 border-secondary dark:border-secondary-fixed pb-1 font-bold text-label-md font-display" -->
          Plastics</a>
          <a
            class="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-display"
            href="#"
          >Catering</a>
          <a
            class="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-display"
            href="#"
          >Bulk Supplies</a>
          <a
            class="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-display"
            href="#"
          >Compliance</a>
          <a
            class="text-on-surface-variant dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 text-label-md font-display"
            href="#"
          >About Us</a>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="hidden sm:flex sm:ml-4 items-center bg-surface-container-low px-2 py-2 rounded-lg border border-border-gray">
          <span class="material-symbols-outlined text-on-surface-variant mr-2">search</span>
          <input
            class="bg-transparent border-none focus:ring-0 text-body-sm w-48 outline-0"
            placeholder="SKU or Product Name..."
            type="text"
          >
        </div>
        <NuxtLink to="/auth/login">
          <button class="flex items-center gap-2 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer">
            <span class="material-symbols-outlined">account_circle</span>
            <span class="hidden md:inline font-display">Account</span>
          </button>
        </NuxtLink>
        <NuxtLink to="/checkout">
        <button class="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg hover:bg-primary-container transition-colors cursor-pointer active:opacity-80">
          <span class="material-symbols-outlined">shopping_basket</span>
          <span class="hidden md:inline font-display">Basket</span>
        </button>
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
