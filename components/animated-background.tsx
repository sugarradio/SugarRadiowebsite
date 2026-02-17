"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "255, 182, 193",
      "255, 192, 203",
      "255, 160, 180",
      "248, 200, 220",
      "255, 218, 233",
    ];

    type ShapeType = "circle" | "star" | "diamond" | "ring" | "note" | "eighth" | "beamed";

    const shapes: {
      x: number;
      y: number;
      size: number;
      speed: number;
      angle: number;
      rotSpeed: number;
      type: ShapeType;
      opacity: number;
      color: string;
      drift: number;
    }[] = [];

    const shapeTypes: ShapeType[] = [
      "circle", "star", "diamond", "ring",
      "note", "note", "eighth", "eighth", "beamed", "beamed",
    ];

    for (let i = 0; i < 55; i++) {
      shapes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 24 + 10,
        speed: Math.random() * 0.5 + 0.15,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        opacity: Math.random() * 0.25 + 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
        drift: (Math.random() - 0.5) * 0.8,
      });
    }

    const drawStar = (
      cx: number,
      cy: number,
      spikes: number,
      outerRadius: number,
      innerRadius: number
    ) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    // Draw a quarter note (filled head + stem)
    const drawQuarterNote = (size: number) => {
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.55, size * 0.4, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // stem
      ctx.beginPath();
      ctx.moveTo(size * 0.45, 0);
      ctx.lineTo(size * 0.45, -size * 1.8);
      ctx.lineWidth = size * 0.1;
      ctx.stroke();
    };

    // Draw an eighth note (filled head + stem + flag)
    const drawEighthNote = (size: number) => {
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.55, size * 0.4, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // stem
      ctx.beginPath();
      ctx.moveTo(size * 0.45, 0);
      ctx.lineTo(size * 0.45, -size * 1.8);
      ctx.lineWidth = size * 0.1;
      ctx.stroke();
      // flag
      ctx.beginPath();
      ctx.moveTo(size * 0.45, -size * 1.8);
      ctx.quadraticCurveTo(size * 1.2, -size * 1.2, size * 0.5, -size * 0.6);
      ctx.lineWidth = size * 0.08;
      ctx.stroke();
    };

    // Draw beamed notes (two eighth notes connected)
    const drawBeamedNotes = (size: number) => {
      const gap = size * 1.0;
      // Left note head
      ctx.beginPath();
      ctx.ellipse(-gap / 2, 0, size * 0.45, size * 0.32, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // Right note head
      ctx.beginPath();
      ctx.ellipse(gap / 2, 0, size * 0.45, size * 0.32, -0.3, 0, Math.PI * 2);
      ctx.fill();
      // Left stem
      ctx.beginPath();
      ctx.moveTo(-gap / 2 + size * 0.35, 0);
      ctx.lineTo(-gap / 2 + size * 0.35, -size * 1.6);
      ctx.lineWidth = size * 0.08;
      ctx.stroke();
      // Right stem
      ctx.beginPath();
      ctx.moveTo(gap / 2 + size * 0.35, 0);
      ctx.lineTo(gap / 2 + size * 0.35, -size * 1.5);
      ctx.lineWidth = size * 0.08;
      ctx.stroke();
      // Beam
      ctx.beginPath();
      ctx.moveTo(-gap / 2 + size * 0.35, -size * 1.6);
      ctx.lineTo(gap / 2 + size * 0.35, -size * 1.5);
      ctx.lineWidth = size * 0.15;
      ctx.stroke();
    };

    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Flowing pastel background waves
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            canvas.height * (0.3 + i * 0.15) +
            Math.sin(x * 0.002 + time * (0.8 + i * 0.3) + i * 1.5) * 80 +
            Math.sin(x * 0.005 + time * (0.5 + i * 0.2)) * 40;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        const alpha = 0.05 + i * 0.025;
        ctx.fillStyle = `rgba(${colors[i]}, ${alpha})`;
        ctx.fill();
      }

      // Floating "SUGAR RADIO" text
      ctx.save();
      const fontSize = Math.min(canvas.width * 0.12, 140);
      ctx.font = `900 ${fontSize}px 'Geist', sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < 3; i++) {
        const yOffset =
          Math.sin(time * 0.6 + i * 2) * 30 + (i - 1) * (canvas.height * 0.3);
        const textAlpha = 0.04 + Math.sin(time * 0.3 + i) * 0.015;
        ctx.fillStyle = `rgba(255, 182, 193, ${textAlpha})`;
        ctx.fillText(
          "SUGAR RADIO",
          canvas.width / 2 + Math.sin(time * 0.4 + i) * 20,
          canvas.height / 2 + yOffset
        );
      }
      ctx.restore();

      // Animated shapes and musical notes
      for (const shape of shapes) {
        shape.angle += shape.rotSpeed;
        shape.x += Math.sin(shape.angle) * shape.speed + shape.drift * 0.1;
        shape.y -= shape.speed * 0.6;

        if (shape.y < -shape.size * 3) {
          shape.y = canvas.height + shape.size * 3;
          shape.x = Math.random() * canvas.width;
        }
        if (shape.x < -shape.size * 3) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size * 3) shape.x = -shape.size;

        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.type === "note" || shape.type === "eighth" || shape.type === "beamed"
          ? Math.sin(time + shape.x * 0.01) * 0.2
          : shape.angle
        );
        ctx.globalAlpha = shape.opacity + Math.sin(time * 2 + shape.x) * 0.04;
        ctx.fillStyle = `rgba(${shape.color}, 1)`;
        ctx.strokeStyle = `rgba(${shape.color}, 0.8)`;
        ctx.lineWidth = 1.5;

        if (shape.type === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (shape.type === "star") {
          drawStar(0, 0, 5, shape.size, shape.size * 0.4);
          ctx.fill();
        } else if (shape.type === "diamond") {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size);
          ctx.lineTo(shape.size * 0.6, 0);
          ctx.lineTo(0, shape.size);
          ctx.lineTo(-shape.size * 0.6, 0);
          ctx.closePath();
          ctx.fill();
        } else if (shape.type === "ring") {
          ctx.beginPath();
          ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (shape.type === "note") {
          drawQuarterNote(shape.size);
        } else if (shape.type === "eighth") {
          drawEighthNote(shape.size);
        } else if (shape.type === "beamed") {
          drawBeamedNotes(shape.size);
        }

        ctx.restore();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: "linear-gradient(135deg, #fff0f5 0%, #ffe4ec 30%, #ffd6e0 60%, #fce4f0 100%)" }}
      aria-hidden="true"
    />
  );
}
