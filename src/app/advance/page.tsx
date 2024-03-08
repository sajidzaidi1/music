"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../components/ui/text-reveal-card";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[70rem] rounded-2xl w-full">
      

      <TextRevealCard
        text="Advance Composition."
        revealText="Advance Composition."
        
      >
        <TextRevealCardTitle>
          Sometimes, you just need to learn Music in Advance.
        </TextRevealCardTitle>

        <TextRevealCardDescription>
           <p>
            <li>Extended Harmonies: Experiment with extending traditional chord structures by adding tensions such as ninths, elevenths, and thirteenths. This can add depth and complexity to your harmonic progressions, creating rich and lush soundscapes.</li>
            <li>Modal Interchange: Embrace the concept of borrowing chords from parallel modes to introduce unexpected harmonic twists and colors into your compositions. This technique can breathe new life into familiar progressions and evoke a wide range of emotions.</li>
            <li>Polyrhythms and Polymeters: Challenge conventional rhythmic patterns by layering multiple rhythms or meters simultaneously. This can create intricate rhythmic textures that captivate listeners and add a sense of urgency or complexity to your music.</li>
            <li>Aleatoric and Chance Music: Embrace randomness and unpredictability by incorporating elements of chance into your compositions. Experiment with techniques such as graphic notation or controlled improvisation to introduce spontaneity and serendipity into your musical creations.</li>
            <li>Microtonality: Explore the vast world of microtonal music by incorporating intervals smaller than a semitone into your compositions. This can open up new harmonic possibilities and create exotic and otherworldly sonic landscapes.</li>
            <li>Electronic Manipulation: Embrace technology as a tool for composition by integrating electronic manipulation techniques into your music. Experiment with sampling, granular synthesis, and audio processing to sculpt sounds in ways that transcend the limitations of traditional instruments.</li>
            <li>Formal Experimentation: Challenge traditional forms and structures by experimenting with unconventional organizational techniques. Explore concepts such as through-composition, cyclic form, or aleatory form to create compositions that defy expectations and invite repeated listening.</li>
            </p>
          
        </TextRevealCardDescription>
      </TextRevealCard><br/>
    
    </div>

    
  )
}

export default page