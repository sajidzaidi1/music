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
        text="Basic Music Theory."
        revealText="Basic Music Theory. "
        
      >
        <TextRevealCardTitle>
          Sometimes, you just need to learn Music.
        </TextRevealCardTitle>

        <TextRevealCardDescription>
         <li>Notes and Pitch: At the heart of music lies the concept of pitch, which refers to the highness or lowness of a sound. In Western music, we use a system of twelve distinct pitches, represented by the letters A through G, with sharps (#) and flats (♭) denoting alterations in pitch. These pitches repeat in a cycle known as an octave.</li>
         <li>Scales: Scales are sequences of pitches arranged in ascending or descending order. The most common scale in Western music is the major scale, which consists of seven notes separated by whole and half steps. Other scales, such as the natural minor scale and the chromatic scale, offer different tonal colors and expressive possibilities.</li>
         <li>Intervals: Intervals are the distances between two pitches. They are classified by their size (in terms of the number of steps between pitches) and quality (whether they are major, minor, perfect, augmented, or diminished). Understanding intervals is essential for building chords and melodies.</li>
         <li>Chords: Chords are combinations of three or more notes played simultaneously. The most basic chord is the triad, which consists of a root note, a third, and a fifth. Common types of triads include major, minor, augmented, and diminished chords. By stacking additional thirds on top of a triad, we can create extended chords such as seventh chords and ninth chords.</li>
         <li>Chord Progressions: Chord progressions are sequences of chords that form the harmonic framework of a piece of music. Understanding common chord progressions, such as the I-IV-V or ii-V-I progressions, can help you analyze and create music more effectively.</li>
         <li>Rhythm: Rhythm is the pattern of sounds and silences in music, created by the arrangement of notes and rests. Musical rhythms are typically organized into measures, each containing a fixed number of beats. Time signatures indicate the number of beats per measure and the type of note that receives one beat.</li>
         <li>Key Signatures: Key signatures indicate the key of a piece of music and the pitches that are altered throughout the piece. Major and minor keys are characterized by their unique patterns of sharps or flats. Understanding key signatures is crucial for reading and interpreting written music.</li>
          
        </TextRevealCardDescription>
      </TextRevealCard><br/>
    
    </div>

    
  )
}

export default page