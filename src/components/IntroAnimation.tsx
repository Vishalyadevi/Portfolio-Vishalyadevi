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

    // Navigate to home page after exactly 7 seconds
    const navigationTimer = setTimeout(() => {
      setShowAnimation(false);
      onComplete();
    }, 7000); // 7 seconds total

    return () => {
      clearInterval(timer);
      clearTimeout(navigationTimer);
    };
  }, [onComplete]);

  if (!showAnimation) {
    return null; // Remove the fade-out animation entirely
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 flex items-center justify-center z-50">
      <div className="text-6xl font-bold text-white text-center">
        {currentText.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block animate-bounce"
            style={{ animationDelay: `${index * 0.1}s` }} // Normal bounce timing
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IntroAnimation;