"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../../components/ui/text-reveal-card";



const page = () => {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[90rem] rounded-2xl w-full">
      

      <TextRevealCard
        text="Song Writting."
        revealText="Song Writting."
        
        
      >
        <TextRevealCardTitle>
          Song Writting.
        </TextRevealCardTitle>

        <TextRevealCardDescription>
      
            <li>Find Your Inspiration: Inspiration is the spark that ignites the creative flame. Seek inspiration from your own experiences, observations, and emotions. Draw from personal stories, moments of joy or heartache, or the beauty of the world around you. Keep a journal to capture fleeting thoughts and fleeting melodies that may blossom into full-fledged songs.</li>
            <li>Hone Your Craft: Like any skill, songwriting requires dedication and practice. Study the work of songwriters you admire, dissecting their lyrics, melodies, and song structures. Experiment with different songwriting techniques, from traditional verse-chorus-bridge formats to more unconventional approaches. Embrace the process of trial and error, allowing yourself to grow and evolve as a songwriter with each new song you write.</li>
            <li>Capture Authenticity: Authenticity is the heart and soul of great songwriting. Be true to yourself and your unique voice, avoiding the temptation to mimic the style or sound of others. Write from a place of honesty and vulnerability, sharing your truth with the world through your music. Don't be afraid to reveal your flaws and imperfections; it's often these raw, unfiltered moments that resonate most deeply with listeners.</li>
            <li>Craft Memorable Melodies: Melody is the vehicle through which your lyrics come to life, so invest time and effort into crafting memorable melodies that captivate listeners from the first note. Experiment with different melodic patterns, intervals, and rhythms to find the perfect musical expression for your lyrics. Pay attention to the emotional arc of your melody, ensuring that it complements and enhances the lyrical content of your song.</li>
            <li>Tell Compelling Stories: Every song is a story waiting to be told. Whether you're spinning tales of love and longing, triumph and tragedy, or hope and resilience, strive to create narratives that resonate deeply with your audience. Use vivid imagery, sensory details, and evocative language to paint a vivid picture in the minds of listeners, transporting them to another time and place with your words.</li>
            <li>Embrace Collaboration: Songwriting is often a collaborative process, so don't hesitate to collaborate with other musicians, lyricists, or producers. Collaborative songwriting can bring fresh perspectives, new ideas, and unexpected magic to your music. Be open to feedback and constructive criticism, viewing collaboration as an opportunity for growth and learning.</li>
            <li>Trust the Process: The songwriting journey is filled with highs and lows, breakthroughs and setbacks. Trust in your creativity and the process of creation, knowing that each song you write brings you one step closer to realizing your artistic vision. Embrace the joy of creation, celebrating the small victories along the way and persevering through the inevitable challenges.</li>
           
          
        </TextRevealCardDescription>
      </TextRevealCard><br/>
    
    </div>

    
  )
}

export default page