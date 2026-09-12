<template>
    <!-- Progress Indicator -->
        <nav class="flex justify-center mb-12">
            <div class="flex items-center gap-8 md:gap-16 w-full max-w-2xl">
                <div class="flex flex-col items-center gap-2 flex-1 relative">
                    <div class="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">1</div>
                    <span class="font-label-lg text-secondary">Delivery</span>
                    <div class="hidden md:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-px bg-outline-variant"></div>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1 relative">
                    <div class="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">2</div>
                    <span class="font-label-lg text-on-surface-variant">Payment</span>
                    <div class="hidden md:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-px bg-outline-variant"></div>
                </div>
                <div class="flex flex-col items-center gap-2 flex-1">
                    <div class="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">3</div>
                    <span class="font-label-lg text-on-surface-variant">Review</span>
                </div>
            </div>
        </nav>
</template>