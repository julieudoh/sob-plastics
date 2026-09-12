<template>
    <!-- Top NavBar -->
     <header class="bg-surface border-b border-border-gray fixed w-full top-0 z-50 bg-surface-container-lowest dark:bg-surface-container-lowest border-b border-border-gray dark:border-outline-variant sticky top-0 z-50">
        <div class="flex justify-between items-center px-margin-desktop py-4 max-w-max-width mx-auto">
            <NuxtLink
                class="text-headline-sm font-display font-bold text-primary dark:text-primary-fixed"
                to="/"
            >
                SOB Plastics
            </NuxtLink>
            <nav class="hidden md:flex gap-8 items-center">
                <a class="text-secondary border-b-2 border-secondary pb-1 font-label-lg text-label-lg hover:text-secondary transition-colors cursor-pointer" href="# ">Inventory</a>
                <a class="text-on-surface-variant font-label-lg text-label-lg hover:text-secondary transition-colors cursor-pointer cursor-pointer" href="#">Pricing</a>
                <a class="text-on-surface-variant font-label-lg text-label-lg hover:text-secondary transition-colors cursor-pointer" href="#">Logistics</a>
                <a class="text-on-surface-variant font-label-lg text-label-lg hover:text-secondary transition-colors cursor-pointer" href="#">About Us</a>
            </nav>
            <div class="flex items-center gap-4">
                <NuxtLink to="/login" class="bg-[#1565C0] text-white px-6 py-2 rounded-[6px] font-label-lg text-label-lg hover:bg-primary-container transition-colors flex items-center gap-2 cursor-pointer">
                    <span class="material-symbols-outlined">account_circle</span>
                    <span class="hidden md:inline font-display">Account</span>
                </NuxtLink>
                <NuxtLink to="/cart" class="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg hover:bg-primary-container transition-colors cursor-pointer active:opacity-80">
                    <span class="material-symbols-outlined">shopping_basket</span>
                    <span class="hidden md:inline font-display">Basket</span>
                </NuxtLink>
            </div>
        </div>
    </header>
</template>