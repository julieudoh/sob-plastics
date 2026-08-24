<template>
    <div>
        <footer class="bg-primary dark:bg-primary-container text-on-primary py-12 px-margin-desktop">
            <div class="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter">
                <div class="col-span-1 md:col-span-1">
                    <div class="text-headline-sm font-headline-sm font-bold text-on-primary mb-4">SOB Plastics</div>
                        <p class="text-body-sm opacity-80 max-w-xs mb-6">
                            Wholesale Plastics &amp; Catering Distribution. Reliability for the Nigerian trade sector in Lagos, and OgunState.
                        </p>
                        <div class="flex gap-4 items-center">
                            <div class="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/20">
                                <span class="material-symbols-outlined text-on-primary">verified_user</span>
                            </div>
                            <div class="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/20">
                                <span class="material-symbols-outlined text-on-primary">local_shipping</span>
                            </div>
                            <div class="w-12 h-12 bg-white/10 rounded flex items-center justify-center border border-white/20">
                                <span class="material-symbols-outlined text-on-primary">workspace_premium</span>
                            </div>
                        </div>
                    </div>
                    <div class="ml-5">
                        <h4 class="text-label-lg font-label-lg font-bold mb-4">Wholesale &amp; Trade</h4>
                        <ul class="space-y-3">
                            <li><a class="text-label-md hover:text-on-primary transition-colors duration-200" href="#">Nationwide Logistics</a></li>
                            <li><a class="text-label-md hover:text-on-primary transition-colors duration-200" href="#">Request Distribution Quote</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-label-lg font-label-lg font-bold mb-4">Policies</h4>
                        <ul class="flex flex-col gap-2">
                            <li><a class="text-label-md hover:text-on-primary transition-colors duration-200" href="#">Bulk Pricing Policy</a></li>
                            <li><a class="text-label-md hover:text-on-primary transition-colors duration-200" href="#">Privacy Policy</a></li>
                            <li><a class="text-label-md hover:text-on-primary transition-colors duration-200" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-label-lg font-label-lg font-bold mb-4">Contact</h4>
                        <div class="flex flex-col gap-2 text-body-sm opacity-80">
                            <p>SOB Plastics, Sabo Market</p>
                            <p>Sagamu</p>
                            <p class="mt-2">+234 (0) 161 555 0122</p>
                        </div>
                    </div>
                </div>
                <div class="max-w-max-width mx-auto mt-12 pt-8 border-t border-on-primary-fixed-variant flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-body-sm opacity-70">© 2026 SOB Plastics Solutions Nigeria Ltd by Jtech. All rights reserved. Wholesale Plastics &amp; Catering Distribution.</p>
                    <span class="material-symbols-outlined cursor-pointer hover:text-secondary-fixed-dim transition-colors">share</span>
                    <span class="material-symbols-outlined opacity-60 text-xl cursor-pointer hover:opacity-100 transition-opacity">language</span>
                </div>
        </footer>
        <!-- Floating Action Button (Only for relevant desktop screens) -->
        <div class="fixed bottom-8 right-8 z-50 hidden md:block">
            <button class="bg-secondary text-on-secondary w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden">
                <span class="material-symbols-outlined text-3xl">chat</span>
                <span class="absolute right-full bg-primary-container text-on-primary-container px-4 py-2 rounded-lg mr-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-label-lg">Contact Sales Distribution</span>
            </button>
        </div>
    </div>
</template>