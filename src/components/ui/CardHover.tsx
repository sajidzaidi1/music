'use client'
import { HoverEffect } from "../ui/card-hover-effect";

 
export default function CardHoverEffectDemo() {
    return (
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    );
  }
  export const projects = [
    {
      title: "Understanding the Music Theory",
      description:
        "Welcome to Demystifying Music Theory, a webinar tailored for individuals eager to deepen their understanding of the foundational principles that govern music. Whether you're a budding musician, a seasoned performer, or simply a music enthusiast seeking to unravel the mysteries behind the melodies, this webinar is your gateway to a richer appreciation of the art form. Join us as we embark on a journey through the fundamental concepts that underpin music theory.",
      link: "https://www.youtube.com/watch?v=UW6t0hjqPoA",
    },
    {
      title: "The Art of Songwriting",
      description:
        " The Art of Songwriting, a webinar dedicated to exploring the intricacies of song creation. Whether you're an aspiring songwriter or a seasoned musician looking to refine your craft, this session promises to provide valuable insights and practical techniques to enhance your songwriting prowess.",
      link: "https://www.youtube.com/watch?v=s9G6dhrZ_AE",
    },
    {
      title: " Melody and Harmony:",
      description:
        "Dive into the world of melody and harmony and learn how to craft memorable hooks and captivating chord progressions. Explore different techniques for developing melodies that stick in the listener's mind and create harmonic textures that enhance your songs.",
      link: "https://www.youtube.com/watch?v=IVa24DPRDVI",
    },
    {
      title: "The Intersection of Music and Visual Arts:",
      description:
        "Investigate the symbiotic relationship between music and visual arts, from album cover design to music videos and multimedia installations. Explore how visual elements enhance the listener's experience and provide new dimensions of meaning to musical compositions.",
      link: "https://www.youtube.com/watch?v=p69JF-Y1c90",
    },
    {
      title: "Creativity and Innovation in Music:",
      description:
        "Delve into the creative process behind music composition and production. From improvisation and experimentation to pushing the boundaries of genre and style, learn how artists harness their imagination to break new ground and redefine musical norms.",
      link: "https://www.youtube.com/watch?v=oVwbyOPL5yo",
    },
    {
      title: "Music as a Form of Storytelling:",
      description:
        "Explore the narrative potential of music and its ability to evoke imagery, emotion, and atmosphere. Discover how composers and songwriters craft musical narratives that transport listeners on a journey of imagination and discovery.",
      link: "https://www.youtube.com/watch?v=9OTmTiDG6QY",
    },
  ];
  