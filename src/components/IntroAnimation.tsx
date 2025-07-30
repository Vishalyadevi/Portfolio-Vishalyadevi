import React, { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [showAnimation, setShowAnimation] = useState(true);
  const fullText = 'Hey there! I am Vishalya Devi';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Normal typing speed

    // Navigate to home page after exactly 6 seconds
    const navigationTimer = setTimeout(() => {
      setShowAnimation(false);
      onComplete();
    }, 6000); // 6 seconds total

    return () => {
      clearInterval(timer);
      clearTimeout(navigationTimer);
    };
  }, [onComplete]);

  if (!showAnimation) {
    return null; // Remove the fade-out animation entirely
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 flex items-center justify-center z-50 px-4">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white text-center max-w-4xl leading-tight">
        {currentText.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{ animationDelay: `${index * 0.08}s` }} // Slightly faster bounce timing
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IntroAnimation;