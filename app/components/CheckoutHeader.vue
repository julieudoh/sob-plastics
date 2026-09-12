<template>
    <header class="bg-surface-container-lowest dark:bg-surface-container-lowest border-b border-border-gray dark:border-outline-variant sticky top-0 z-50">
        <div class="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop  py-4 max-w-max-width mx-auto">
            <NuxtLink
            class="text-headline-sm font-display font-bold text-primary dark:text-primary-fixed"
            to="/"
            > <span></span>
            SOB Plastics
            </NuxtLink>
            <div class="flex items-center gap-2 text-on-surface-variant font-label-md">
                <span class="material-symbols-outlined text-[18px]">lock</span>
                <span>Secure Checkout</span>
            </div>
            <div class="flex items-center gap-4">
                <NuxtLink class="font-label-md text-label-md text-primary hover:text-red-500" href="#">Cancel Order</NuxtLink>
                <div class="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                    <img alt="Account Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqUYorrjNjD3xtC_Cd8M4hxZfbkXg6v4PFf2WTEw03qGAarrtClLpK4-S3aM_p9cpnlWkhnMPqBKdQl_CBf3QpanySFuavlzAgkcGBA78vioVY0geB3juiGQKH0Q7DZJIJBsZwquJepHYvGtNFcwnDBk9sewytRlCP7S6SRIXao7XmyHKNoJt6k8iEY5HbI2NCO8Owd97fhNEkLGqtFC_vz3Wv5kqx39ClvxiH1M4HuYKrZaVUOoc3vw"/>
                </div>
            </div>
        </div>
    </header> 
</template>