<template>
    <div>
        <main class="min-h-screen flex-grow flex items-center justify-center py-12 px-margin-mobile md:px-margin-desktop">
            <div class="max-w-6xl w-full grid grid-cols-1 md:grid-cols-5 glass-panel rounded-xl overflow-hidden shadow-sm">
                <!-- Left Branding/Visual Section -->
                <div class="md:col-span-2 relative bg-primary-container p-12 flex flex-col justify-between overflow-hidden min-h-100">
                    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <NuxtImg class="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="A vast, high-tech industrial warehouse featuring rows of organized logistics shelving and automated manufacturing equipment" src="/images/login-factory-view.jfif" />
                    </div>
                    <div class="relative z-10">
                        <div class="mb-8">
                            <span class="text-label-md font-label-md uppercase tracking-widest text-secondary-fixed-dim">Wholesale Partner Program</span>
                            <h1 class="text-headline-lg font-headline-lg text-on-primary mt-4">Create Your Account</h1>
                            <p class="text-body-lg font-body-lg text-on-primary-container mt-4 leading-relaxed">Join Nigeria's leading wholesale network for plastics and catering supplies.</p>
                        </div>
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="bg-secondary/20 p-2 rounded-lg">
                                    <span class="material-symbols-outlined text-secondary-fixed">percent</span>
                                </div>
                                <div>
                                    <h3 class="text-label-lg font-label-lg text-on-primary">Wholesale Trade Pricing</h3>
                                    <p class="text-body-sm font-body-sm text-on-primary-container">Access exclusive pricing on high-volume plastic and catering orders.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-secondary/20 p-2 rounded-lg">
                                    <span class="material-symbols-outlined text-secondary-fixed">credit_card</span>
                                </div>
                                <div>
                                    <h3 class="text-label-lg font-label-lg text-on-primary">Flexible Payment Terms for Trade Partners</h3>
                                    <p class="text-body-sm font-body-sm text-on-primary-container">Simplify procurement with flexible payment options for registered entities.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="bg-secondary/20 p-2 rounded-lg">
                                    <span class="material-symbols-outlined text-secondary-fixed">local_shipping</span>
                                </div>
                                <div>
                                    <h3 class="text-label-lg font-label-lg text-on-primary">Regional Distribution</h3>
                                    <p class="text-body-sm font-body-sm text-on-primary-container">Strategic hubs in Lagos, OgunState, and Nationwide for rapid fulfillment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative z-10 mt-12 pt-8 border-t border-on-primary-fixed-variant">
                        <p class="text-body-sm font-body-sm text-on-primary-container flex items-center gap-2"><span class="material-symbols-outlined text-warm-gold" style="font-variation-settings: 'FILL' 1;">verified</span> SON &amp; NACCIMA Certified Industrial Partner</p>
                    </div>
                </div>
                
                <!-- Right Form Section -->
                <div class="md:col-span-3 bg-white p-8 md:p-12">
                    <form class="space-y-8">
                        <!-- Section 1: Personal Details -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-primary material-symbols-outlined">person</span>
                                <h2 class="text-headline-sm font-headline-sm text-primary">Account Details</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="flex flex-col gap-1.5">
                                    <label class="text-label-lg font-label-lg text-on-surface-variant" for="fullName">Full Name</label>
                                    <input id="fullName" class="bg-surface border-border-gray rounded-lg px-4 py-3 text-body-md font-body-md" name="fullName" placeholder="e.g. Robert Jensen" required type="text"/>
                                </div>
                                <div class="flex flex-col gap-1.5">
                                    <label class="text-label-lg font-label-lg text-on-surface-variant" for="phone">Phone Number</label>
                                    <input id="phone" class="bg-surface border-border-gray rounded-lg px-4 py-3 text-body-md font-body-md" name="phone" placeholder="e.g. +234 800 000 0000" required type="tel"/>
                                </div>
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label class="text-label-lg font-label-lg text-on-surface-variant" for="email">Business Email</label>
                                <input id="email" class="bg-surface border-border-gray rounded-lg px-4 py-3 text-body-md font-body-md" name="email" placeholder="name@company.com" required type="email"/>
                            </div>
                        </div>
                        <!-- Section 2: Business Information -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-primary material-symbols-outlined">business</span>
                                <h2 class="text-headline-sm font-headline-sm text-primary">Store Information (Optional)</h2>
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label class="text-label-lg font-label-lg text-on-surface-variant" for="companyName">Business/Store Name</label>
                                <input id="companyName" class="bg-surface border-border-gray rounded-lg px-4 py-3 text-body-md font-body-md" name="companyName" placeholder="Legal Entity Name" required type="text"/>
                            </div>
                        </div>
                        <!-- Section 3: Industry -->
                        <div class="space-y-4">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="text-primary material-symbols-outlined">location_on</span>
                                <h2 class="text-headline-sm font-headline-sm text-primary">Delivery Address</h2>
                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label class="text-label-lg font-label-lg text-on-surface-variant" for="address">Full Street Address</label>
                                <textarea id="address" class="bg-surface border-border-gray rounded-lg px-4 py-3 text-body-md font-body-md min-h-25" name="address" placeholder="Enter your full delivery address in Nigeria" required></textarea>
                            </div>
                        </div>
                        <!-- Actions & Trust Signal -->
                        <div class="pt-6 border-t border-border-gray">
                            <div class="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg mb-6">
                                <span class="material-symbols-outlined text-secondary" style="font-variation-settings: 'FILL' 1;">info</span>
                                <p class="text-body-sm font-body-sm text-on-surface-variant">
                                    <span class="font-bold">Trust signal:</span> 
                                    Your application will be reviewed by our team within 24 hours. You will receive a notification via email.
                                </p>
                            </div>
                            <button class="w-full bg-secondary text-white py-4 rounded-lg text-label-lg font-label-lg hover:bg-on-secondary-fixed-variant transition-all transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit">Create Account 
                                <span class="material-symbols-outlined">person_add</span>
                            </button>
                            <p class="text-center mt-4 text-body-sm font-body-sm text-on-surface-variant">
                                By submitting, you agree to our <a class="text-secondary underline" href="#">Trade Terms &amp; Conditions</a>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

