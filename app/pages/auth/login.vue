<template>
    <div class="min-h-screen flex items-center justify-center">
        <main class="w-full min-h-screen flex flex-col md:flex-row bg-surface-container-lowest px-margin-mobile md:px-margin-desktop py-12 overflow-hidden shadow-2xl">
            <!-- Left Side: Industrial Imagery & Branding -->
            <section class="flex w-full md:w-1/2 relative overflow-hidden bg-primary items-center justify-center p-12">
            <!-- Background Image with data-alt -->
                <div class="absolute inset-0 z-0 bg-primary-container">
                    <NuxtImg class="w-full h-full object-cover opacity-30 mix-blend-overlay" alt="A vast, high-tech industrial warehouse featuring rows of organized logistics shelving and automated manufacturing equipment" src="/images/login-factory-view.jfif" />
                </div>
                <!-- Overlay -->
                <div class="absolute inset-0 industrial-overlay z-10"></div>
                <!-- Content -->
                <div class="relative z-20 flex flex-col max-w-lg text-on-primary">
                    <div class="mb-12">
                        <span class="text-headline-md font-headline-md font-bold tracking-tight">SOB Plastics</span>
                    </div>
                    <h2 class="text-headline-lg font-headline-lg mb-6">Nigeria's Leading Wholesale Partner</h2>
                    <p class="text-body-lg font-body-lg text-on-primary-container mb-12 opacity-90 leading-relaxed">Access our secure trade portal for exclusive wholesale pricing and streamlined procurement. Reliable distribution across Lagos, Ogunstate, and nationwide for industrial plastics and catering supplies.</p>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-on-primary-fixed-variant/30">
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary-container">verified</span>
                            <div>
                                <p class="text-label-lg font-label-lg">SON Certified</p>
                                <p class="text-body-sm font-body-sm opacity-70">Standards Organisation of Nigeria compliant.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <span class="material-symbols-outlined text-secondary-container">corporate_fare</span>
                            <div>
                                <p class="text-label-lg font-label-lg">NACCIMA Member</p>
                                <p class="text-body-sm font-body-sm opacity-70">Nigerian Association of Chambers of Commerce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Right Side: Login Form -->
            <section class="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 md:px-margin-desktop bg-surface-container-lowest relative">
                <div class="w-full max-w-md" style="opacity: 1; transform: translateY(0px); transition: 0.6s cubic-bezier(0.22, 1, 0.36, 1);">
                    <!-- Heading Group -->
                    <header class="mt-10 text-left">
                        <h1 class="text-headline-md font-headline-md text-primary mb-2">Welcome Back</h1>
                        <p class="text-body-md font-body-md text-on-surface-variant">Access your procurement portal and trade pricing.</p>
                    </header>
                    <!-- Form -->
                    <form class="space-y-6"  onsubmit="return false;">
                    <!-- id="loginForm" -->
                        <!-- Email Field -->
                        <div class="space-y-2">
                            <label class="text-label-lg font-label-lg text-primary block" for="email">Email address</label>
                            <div class="relative group">
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors">mail</span>
                                <input id="email" class="w-full pl-10 pr-4 py-3 bg-surface border border-border-gray rounded-lg text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"  name="email" placeholder="name@company.com" required type="email" >
                            <!-- id="email" -->
                            </div>
                        </div>
                        <!-- Password Field -->
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <label class="text-label-lg font-label-lg text-primary" for="password">Password</label>
                                <a class="text-label-md font-label-md text-secondary hover:underline transition-all" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                            <div class="relative group">
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors">lock</span>
                                <input id="password" class="w-full pl-10 pr-12 py-3 bg-surface border border-border-gray rounded-lg text-body-md font-body-md text-on-surface focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"  name="password" placeholder="••••••••" required type="password">
                                <!-- id="password" -->
                                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors focus:outline-none" onclick="togglePasswordVisibility()" type="button">
                                    <span class="material-symbols-outlined" >visibility</span>
                                    <!-- id="visibilityIcon" -->
                                </button>
                            </div>
                        </div>
                        <!-- Remember Me & Actions -->
                        <div class="flex items-center">
                            <input class="w-4 h-4 text-secondary border-border-gray rounded focus:ring-secondary cursor-pointer"  name="remember" type="checkbox">
                            <!-- id="remember" -->
                            <label class="ml-2 text-body-sm font-body-sm text-on-surface-variant cursor-pointer" for="remember">Remember Me</label>
                        </div>
                        <!-- Submit Button -->
                        <button class="w-full bg-secondary text-on-primary py-4 rounded-lg font-label-lg text-label-lg hover:bg-primary-container active:scale-95 transition-all duration-200 shadow-md" type="submit">
                            Login
                        </button>
                    </form>
                    <!-- Footer Text -->
                    <div class="mt-4 text-center">
                        <p class="text-body-sm font-body-sm text-on-surface-variant">
                            Don't have a trade account? 
                            <NuxtLink class="text-secondary font-bold hover:underline" to="/auth/register">
                                Register Account
                            </NuxtLink>
                        </p>
                    </div>
                    <!-- Trust Badges -->
                    <div class="mt-16 pt-8 border-t border-border-gray flex flex-wrap justify-center items-center gap-6">
                        <div class="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <span class="material-symbols-outlined text-[18px] text-success">lock</span>
                            <span class="text-label-md font-label-md text-primary">SSL Encryption</span>
                        </div>
                        <div class="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <span class="material-symbols-outlined text-[18px] text-secondary">verified_user</span>
                            <span class="text-label-md font-label-md text-primary">Secure Checkout</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>