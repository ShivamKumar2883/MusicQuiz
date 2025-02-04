import { useState, useRef } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const mediaRef = useRef(null);

  const songs = [
    { id: 1, name: "Chura liya hai tumne jo dilko", file: "/Chura liya hai tumne jo dilko.mp3" },
    { id: 2, name: "Ghora", file: "/ghora.mp3" },
    { id: 3, name: "Hawa Hawa", file: "/hawa_hawa.mp3" },
    { id: 4, name: "Hawa Hawai", file: "/hawa_hawai.mp3" },
    { id: 5, name: "Kaise Mujhe", file: "/kaise_mujhe.mp3" },
    { id: 6, name: "Khamoshiyan", file: "/khamoshiyan.mp3" },
    { id: 7, name: "Kinna Sona", file: "/kinna_sona.mp3" },
    { id: 8, name: "Labon Ko 2020", file: "/labon_ko_2020.mp3" },
    { id: 9, name: "Muqabla", file: "/muqabla.mp3" },
    { id: 10, name: "Putt Jatt Da", file: "/putt_jatt_da.mp3" },
    { id: 11, name: "Qismat", file: "/qismat.mp3" },
    { id: 12, name: "Raat Di Gedi", file: "/raat_di_gedi.mp3" },
    { id: 13, name: "Race", file: "/race.mp3" },
    { id: 14, name: "Saathiya", file: "/saathiya.mp3" },
    { id: 15, name: "Still Rollin Pritam", file: "/still_rollin_pritam.mp3" },
    { id: 16, name: "Teezab", file: "/teezab.mp3" },
    { id: 17, name: "Tera Ban Jaunga", file: "/tera_ban_jaunga.mp3" },
    { id: 18, name: "Tera Hone Laga Hoon", file: "/tera_hone_laga_hoon.mp3" },
    { id: 19, name: "Tera Mera Rishta Purna", file: "/tera_mera_rishta_purna.mp3" },
    { id: 20, name: "Tere Nam Ke", file: "/tere_nam_ke.mp3" },
  ];

  const handleNext = () => {
    setShowAnswer(false);
    if (currentIndex < songs.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      if (mediaRef.current) {
        mediaRef.current.load(); 
        mediaRef.current.play(); 
      }
    } else {
      setQuizFinished(true);
    }
  };

  const currentSong = songs[currentIndex];
  const isVideo = currentSong.file.endsWith('.mp4');

  return (
    <div className="h-screen flex items-center justify-center bg-[#ffffff] text-black">
      <div className="w-full max-w-lg text-center p-6">
        {!quizFinished ? (
          <>
            <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
              🎵 Guess the Song🎉
            </h1>
            <div className="p-8 rounded-xl shadow-lg border border-gray-300 bg-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Song {currentIndex + 1} of {songs.length}
              </h2>
              {isVideo ? (
                <video ref={mediaRef} controls className="w-full mb-4 border border-gray-400 rounded-lg">
                  <source src={currentSong.file} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              ) : (
                <audio ref={mediaRef} controls className="w-full mb-4 border border-gray-400 rounded-lg">
                  <source src={currentSong.file} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}

              {!showAnswer ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="mt-4 w-full py-3 rounded-lg text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-white shadow-md"
                >
                  Show Answer 👀
                </button>
              ) : (
                <p className="text-xl font-bold text-green-600 mt-4">
                  ✅ Answer: {currentSong.name}
                </p>
              )}

              <button
                onClick={handleNext}
                className="mt-4 w-full py-3 rounded-lg text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white shadow-md"
              >
                {currentIndex < songs.length - 1 ? "Next Song 🎶" : "Finish Quiz 🎉"}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-green-500">Quiz Completed!</h1>
            <p className="mt-4 text-xl text-gray-700">Thank you for participating! 🎧</p>
          </div>
        )}
      </div>
    </div>
  );
}