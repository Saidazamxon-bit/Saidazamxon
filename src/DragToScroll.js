// src/DragToScroll.js
import React, { useState, useEffect } from 'react';

const DragToScroll = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    document.body.style.cursor = 'grabbing'; // Dragging holatiga o'tish
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientY - startY;
    window.scrollTo(0, scrollY - distance); // Sahifani pastga yoki yuqoriga surish
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setScrollY(window.scrollY); // Scroll holatini saqlash
    document.body.style.cursor = 'grab'; // Kursorni qayta o'zgartirish
  };

  // Mousemove va mouseup hodisalarini window ob'ektiga qo'shish
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, scrollY, startY]);

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#3498db',
        cursor: 'grab',
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)', // Markazga joylash
      }}
    >
      Drag me
    </div>
  );
};

export default DragToScroll;
