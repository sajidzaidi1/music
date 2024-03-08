'use client'
import { HoverEffect } from "../../components/ui/card-hover-effect";


export default function CardHoverEffectDemo() {
  return (
   
    <div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Guitar",
    description:
      "Welcome to the wonderful world of the guitar, a versatile and expressive instrument that has captivated musicians and audiences alike for centuries. Whether you're picking up the guitar for the first time or seeking to deepen your skills and knowledge, this note is dedicated to guiding you on your journey of musical discovery.",
    link: "https://www.youtube.com/watch?v=w-Zt5Kbf3TM",
   
  },
  {
    title: "Voilin",
    description:
      "Welcome to the enchanting world of the violin, an instrument that has captured the hearts and imaginations of musicians and listeners for centuries. Whether you're just beginning your journey with the violin or seeking to deepen your skills and understanding, this note is dedicated to guiding you on your melodic adventure.",
    link: "https://www.youtube.com/watch?v=SOei_3VW3jA",
  },
  {
    title: "Piano",
    description:
      "Welcome to the captivating world of the piano, where melodies dance, harmonies intertwine, and emotions are expressed through the elegant touch of the keys. Whether you're embarking on your first steps at the piano or seeking to elevate your playing to new heights, this note is dedicated to guiding you on your musical journey.",
    link: "https://www.youtube.com/watch?v=QBH6IpRkVDs&list=PLpOuhygfD7QnP46wUgQudOySX_z2UOhXs",
  },
  {
    title: "Drum",
    description:
      "Welcome to the rhythmic world of the drums, where beats pulse, rhythms groove, and energy flows through the air. Whether you're stepping up to the drum kit for the first time or seeking to expand your rhythmic horizons, this note is dedicated to guiding you on your percussive journey.",
    link: "https://www.youtube.com/watch?v=AeY871aeq7A",
  },
  {
    title: "Flute",
    description:
      "Welcome to the serene and enchanting world of the flute, where melodies soar, emotions flow, and the breath becomes music. Whether you're picking up the flute for the first time or seeking to deepen your connection with this elegant instrument, this note is dedicated to guiding you on your melodic journey.",
    link: "https://www.youtube.com/watch?v=m9pudD4FS5M",
  },
  {
    title: "Trumpet",
    description:
      "The trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group ranges from the piccolo trumpet—with the highest register in the brass family—to the bass trumpet, pitched one octave below the standard B♭ or C trumpet.",
    link: "https://www.youtube.com/watch?v=62IIrTS9OJ0&list=PLNx36bBDh4Joa1liPlSeaEKK90eWljyqR",

  },
];