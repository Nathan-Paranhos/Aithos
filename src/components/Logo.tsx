import React from "react";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <svg
          width="92"
          height="88"
          viewBox="0 0 120 120"
          role="img"
          aria-labelledby="logoTitle"
        >
          <title id="logoTitle">Aithos Tech – Monograma A</title>

          <defs>
            <linearGradient id="AStroke" x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%" stopColor="#e91f1fff" />
              <stop offset="55%" stopColor="#910e0eff" />
              <stop offset="100%" stopColor="#611313ff" />
            </linearGradient>

            <linearGradient id="AFill" x1="0%" y1="0%" x2="30%" y2="100%">
              <stop offset="0%" stopColor="#26060C" />
              <stop offset="100%" stopColor="#12060A" />
            </linearGradient>

            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <mask id="AChisels">
              <rect x="0" y="0" width="120" height="120" fill="#fff" />
              <polygon points="78,12 100,12 92,28" fill="#000" />
              <polygon points="32,56 42,44 42,62" fill="#000" />
              <polygon points="84,108 104,108 92,92" fill="#000" />
            </mask>
          </defs>

          <g mask="url(#AChisels)" filter="url(#softGlow)">
            <path
              d="
                M60 10
                L108 110
                L88 110
                L75 80
                L45 80
                L32 110
                L12 110
                Z
              "
              fill="url(#AFill)"
            />

            <path
              d="
                M60 10
                L108 110
                L88 110
                L75 80
                L45 80
                L32 110
                L12 110
                Z
              "
              fill="none"
              stroke="url(#AStroke)"
              strokeWidth="6"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            <path
              d="
                M40 58
                Q60 50 80 58
              "
              fill="none"
              stroke="url(#AStroke)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            <path
              d="M60 25 L83 78 L37 78 Z"
              fill="none"
              stroke="url(#AStroke)"
              strokeWidth="2.5"
              opacity="0.8"
            />
          </g>

          <circle cx="38" cy="34" r="2" fill="#b61a1aff" opacity="0.85">
            <animate attributeName="r" values="2;3;2" dur="2.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85;0.4;0.85" dur="2.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="86" cy="40" r="1.6" fill="#c92929ff" opacity="0.8">
            <animate attributeName="r" values="1.6;2.4;1.6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.35;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
          AITHOS <span className="ml-1" style={{ color: "#bd1111ff" }}>TECH</span>
        </h1>
      </div>
    </div>
  );
};
