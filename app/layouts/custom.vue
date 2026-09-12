<template>
    <div>
        <CheckoutHeader />
        <slot />
        <footer class="mt-auto py-8 border-t border-border-gray">
            <div class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 text-body-sm text-on-surface-variant">
                <p>© 2024 PolyCraft Solutions Ltd. All rights reserved.</p>
                <div class="flex gap-6">
                    <a class="hover:text-secondary" href="#">Security Policy</a>
                    <a class="hover:text-secondary" href="#">Privacy Terms</a>
                    <a class="hover:text-secondary" href="#">Shipping Logistics</a>
                </div>
            </div>
        </footer>
    </div>
</template>