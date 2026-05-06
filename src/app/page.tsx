"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { lazy, Suspense } from "react";

const NavbarStyleApple = lazy(() => import('@/components/navbar/NavbarStyleApple/NavbarStyleApple'));
const ContactCenter = lazy(() => import('@/components/sections/contact/ContactCenter'));
const FeatureCardThree = lazy(() => import('@/components/sections/feature/featureCardThree/FeatureCardThree'));
const FooterCard = lazy(() => import('@/components/sections/footer/FooterCard'));
const HeroBillboardTestimonial = lazy(() => import('@/components/sections/hero/HeroBillboardTestimonial'));
const MetricCardFourteen = lazy(() => import('@/components/sections/metrics/MetricCardFourteen'));
const ProductCardOne = lazy(() => import('@/components/sections/product/ProductCardOne'));
const TestimonialCardSix = lazy(() => import('@/components/sections/testimonial/TestimonialCardSix'));

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="large"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
        <Suspense fallback={<div className="h-20" />}>
          <div id="nav" data-section="nav">
            <NavbarStyleApple
              navItems={[
                { name: "Home", id: "hero" },
                { name: "Speakers", id: "showcase" },
                { name: "Effects", id: "effects" },
                { name: "Simulation", id: "simulation" },
              ]}
            />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-screen" />}>
          <div id="hero" data-section="hero">
            <HeroBillboardTestimonial
              useInvertedBackground={false}
              background={{ variant: "gradient-bars" }}
              title="3D Sound Experience"
              description="Feel the Sound in 3D. Precision-engineered spatial audio technology designed for ultimate clarity and depth."
              testimonials={[
                { name: "Alex R.", handle: "@alexaudio", testimonial: "The spatial sound depth is unparalleled.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-making-music_23-2149199993.jpg" },
                { name: "Sarah M.", handle: "@sarahsound", testimonial: "Changes the way I produce music forever.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-cup-headphones-red-background-high-quality-photo_114579-60709.jpg" },
                { name: "James K.", handle: "@jk_pro", testimonial: "Incredible, crisp details in every note.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-wearing-headphones_23-2148802280.jpg" },
                { name: "Elena V.", handle: "@elena_audio", testimonial: "The best sound experience I've had.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-musician-wearing-headphones_23-2150206724.jpg" },
                { name: "Marcus L.", handle: "@marcus_tech", testimonial: "Future of audio is finally here.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-senior-man-listening-music-headphones-isolated-dark-background_613910-9039.jpg" },
              ]}
              imageSrc="http://img.b2bpic.net/free-photo/abstract-light-painting-dark_23-2149627888.jpg"
              avatars={[
                { src: "http://img.b2bpic.net/free-photo/abstract-light-painting-dark_23-2149627888.jpg", alt: "audio engineer portrait" },
                { src: "http://img.b2bpic.net/free-photo/african-american-music-producer-counting-down-before-starting-recording-session_482257-121235.jpg", alt: "woman music producer studio" },
                { src: "http://img.b2bpic.net/free-photo/close-up-sound-mixer_1359-8.jpg", alt: "electronic music artist portrait" },
                { src: "http://img.b2bpic.net/free-photo/managing-smart-speakers-concept_23-2150170090.jpg", alt: "sound designer headshot" },
                { src: "http://img.b2bpic.net/free-photo/medium-shot-man-making-music_23-2149199993.jpg", alt: "audiophile portrait studio" },
              ]}
              avatarText="Trusted by 500+ audio pros"
              marqueeItems={[
                { type: "text", text: "Ultra-Low Latency" },
                { type: "text", text: "Spatial Accuracy" },
                { type: "text", text: "24-Bit Fidelity" },
                { type: "text", text: "360 Surround" },
                { type: "text", text: "Lossless Audio" },
              ]}
            />
          </div>

          <div id="showcase" data-section="showcase">
            <ProductCardOne
              textboxLayout="default"
              gridVariant="three-columns-all-equal-width"
              useInvertedBackground={true}
              animationType="slide-up"
              products={[
                { id: "s1", name: "Studio Reference", price: "$499", imageSrc: "http://img.b2bpic.net/free-photo/african-american-music-producer-counting-down-before-starting-recording-session_482257-121235.jpg" },
                { id: "s2", name: "Gaming Beast", price: "$299", imageSrc: "http://img.b2bpic.net/free-photo/close-up-sound-mixer_1359-8.jpg" },
                { id: "s3", name: "Pure Portable", price: "$199", imageSrc: "http://img.b2bpic.net/free-photo/managing-smart-speakers-concept_23-2150170090.jpg" },
                { id: "s4", name: "Studio Reference Pro", price: "$599", imageSrc: "http://img.b2bpic.net/free-photo/african-vocal-artist-wearing-blue-shirt-emotionally-writing-song-recording-studio-isolated-blue-background_613910-13864.jpg" },
                { id: "s5", name: "Gaming Beast X", price: "$349", imageSrc: "http://img.b2bpic.net/free-photo/view-vacuum-cleaner-robot-flat-surface-floor_23-2151736836.jpg" },
                { id: "s6", name: "Pure Portable Mini", price: "$149", imageSrc: "http://img.b2bpic.net/free-photo/managing-smart-speakers-concept_23-2150170086.jpg" },
              ]}
              title="Speaker Showcase"
              description="Engineered for excellence, designed for impact."
            />
          </div>

          <div id="effects" data-section="effects">
            <FeatureCardThree
              animationType="slide-up"
              textboxLayout="default"
              gridVariant="four-items-2x2-equal-grid"
              useInvertedBackground={false}
              features={[
                { title: "Bass Drop", description: "Resonant low-frequency impact.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-singer-performing-stage-with-stereo-system-red-wall_140725-95671.jpg" },
                { title: "Hit Sound", description: "Sharp, high-impact transients.", imageSrc: "http://img.b2bpic.net/free-photo/view-retro-looking-jukebox-machine_23-2151426423.jpg" },
                { title: "Click Sound", description: "Crisp precision feedback.", imageSrc: "http://img.b2bpic.net/free-photo/closeup-speakers-membrane-black-background-with-colored-lighting_169016-51527.jpg" },
                { title: "Soft Tap", description: "Gentle, organic texture.", imageSrc: "http://img.b2bpic.net/free-photo/station-recording-speaking-podcast_482257-7773.jpg" },
              ]}
              title="Sound Effects Panel"
              description="Trigger immersive audio layers and visualize your sound profile."
            />
          </div>

          <div id="simulation" data-section="simulation">
            <MetricCardFourteen
              useInvertedBackground={true}
              title="3D Sound Dynamics"
              tag="Performance Stats"
              metrics={[
                { id: "m1", value: "360°", description: "Spatial Coverage" },
                { id: "m2", value: "24bit", description: "Audio Depth" },
                { id: "m3", value: "<5ms", description: "Latency" },
              ]}
              metricsAnimation="blur-reveal"
            />
          </div>

          <div id="features" data-section="features">
            <FeatureCardThree
              animationType="scale-rotate"
              textboxLayout="default"
              gridVariant="three-columns-all-equal-width"
              useInvertedBackground={false}
              features={[
                { title: "Spatial Panning", description: "True 3D sound field mapping.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-glasses-abstract-table_23-2149974214.jpg" },
                { title: "Particle Viz", description: "Visualizing sound waves real-time.", imageSrc: "http://img.b2bpic.net/free-photo/macro-shot-spray-can-nozzle_23-2147839376.jpg" },
                { title: "Crystal Audio", description: "Lossless transmission fidelity.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-singer-performing-stage-red-wall_140725-95665.jpg" },
              ]}
              title="Experience Innovation"
              description="Advanced audio processing meets minimalist design."
            />
          </div>

          <div id="testimonials" data-section="testimonials">
            <TestimonialCardSix
              animationType="slide-up"
              textboxLayout="default"
              useInvertedBackground={true}
              testimonials={[
                { id: "t1", name: "Alex R.", handle: "@alexaudio", testimonial: "Unreal soundscape quality.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-studio_23-2149200029.jpg" },
                { id: "t2", name: "Sarah M.", handle: "@sarahsound", testimonial: "Best spatial audio implementation.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-creates-music-using-musical-keyboard-computer_169016-18825.jpg" },
                { id: "t3", name: "James K.", handle: "@jk_pro", testimonial: "Everything sounds crisp.", imageSrc: "http://img.b2bpic.net/free-photo/asian-architect-woman_53876-31462.jpg" },
                { id: "t4", name: "Elena V.", handle: "@elena_audio", testimonial: "Perfect for my studio.", imageSrc: "http://img.b2bpic.net/free-photo/african-american-sound-producer-editing-tracks-audio-software-console_482257-121910.jpg" },
                { id: "t5", name: "Marcus L.", handle: "@marcus_tech", testimonial: "Total immersion, every time.", imageSrc: "http://img.b2bpic.net/free-photo/african-american-freelancer-listening-podcast-being-focused-online-work_482257-121502.jpg" },
              ]}
              title="Audiophile Community"
              description="What our users say about the spatial sound journey."
            />
          </div>

          <div id="contact" data-section="contact">
            <ContactCenter
              useInvertedBackground={false}
              background={{ variant: "radial-gradient" }}
              title="Stay Connected"
              description="Get early access to our latest 3D audio updates."
              tag="Newsletter"
            />
          </div>

          <div id="footer" data-section="footer">
            <FooterCard
              logoText="3D Sound Experience"
              copyrightText="© 2025 | 3D Sound Experience"
            />
          </div>
        </Suspense>
      </ReactLenis>
    </ThemeProvider>
  );
}