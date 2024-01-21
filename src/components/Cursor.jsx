import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = cursorRef.current.querySelectorAll('.circle');

    const colors = [
      '#6bb3ff',
      '#4887ca',
      '#336aa4',
      '#24507f',
      '#1b497b',
      '#0c3764',
      '#322ea7',
      '#1f37ab',
      '#13375e',
      '#06203b',
      '#031931',
      '#0c0e5d',
      '#4887ca',
      '#281563',
      '#4887ca',
      '#4887ca',
      '#4887ca',
      '#4887ca',
      '#4887ca',
      '#4887ca',
      '#4887ca',
      '#4887ca',
    ];

    circles.forEach((circle, index) => {
      // Using dataset to store custom data
      circle.dataset.x = 0;
      circle.dataset.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        // Accessing custom data using dataset
        circle.dataset.x = x;
        circle.dataset.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.dataset.x - x) * 0.3;
        y += (nextCircle.dataset.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    document.addEventListener('mousemove', handleMouseMove);
    animateCircles();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef}>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

export default Cursor;
