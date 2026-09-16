import React, { useState } from 'react';
import { Play, ExternalLink, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Video, Film } from 'lucide-react';

interface VideoItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  reelUrl: string;
  highlights: string[];
}

const videos: VideoItem[] = [
  {
    id: 'term-vs-whole-life',
    badge: 'Video 1 • Policy Comparison',
    title: 'Term Vs Whole Life',
    description: 'Not sure whether Term Life or Whole Life is right for you? Watch this video to understand how temporary versus permanent coverage works, who benefits most from each, and how to choose the right financial protection for your family.',
    reelUrl: 'https://www.facebook.com/reel/1611879393885856',
    highlights: [
      'Term Life: high death benefits for lower cost during peak financial years (mortgage, kids, income)',
      'Whole Life: guaranteed lifelong coverage that never expires with fixed level premiums',
      'How to avoid buying the wrong policy structure or paying for coverage that does not fit your goals',
    ],
  },
  {
    id: 'nine-ninety-nine-alert',
    badge: 'Video 2 • Consumer Alert',
    title: 'Life Insurance for $9.99? What you need to know!',
    description: 'Seen those commercials advertising life insurance for $9.99 a month? Watch this video to learn the fine print behind unit-based pricing, 2-year waiting periods, and the true cost of mail-in TV policies.',
    reelUrl: 'https://www.facebook.com/reel/4502233696728225',
    highlights: [
      'What "unit pricing" really means — $9.99 often buys less than $1,000 of coverage for seniors',
      'The 2-year graded death benefit catch: what happens if illness occurs early',
      'How an independent broker helps you find true first-day full coverage at real rates',
    ],
  },
];

export const LifeInsuranceVideoReel: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string>('term-vs-whole-life');

  const activeVideo = videos.find(v => v.id === selectedVideoId) || videos[0];

  const handleSelectVideo = (id: string) => {
    setSelectedVideoId(id);
  };

  return (
    <div id="life-insurance-video-guides" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden my-10 border border-blue-800/40">
      
      {/* Video Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-blue-800/50">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300">
          <Film size={15} />
          <span>Life Insurance Educational Series</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {videos.map((video) => {
            const isSelected = video.id === selectedVideoId;
            return (
              <button
                key={video.id}
                type="button"
                onClick={() => handleSelectVideo(video.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-red-600 text-white shadow-sm ring-1 ring-red-400' 
                    : 'bg-white/10 hover:bg-white/20 text-slate-300'
                }`}
              >
                <Video size={13} />
                <span>{video.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        
        {/* Left Educational Column */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-400/30">
            <Sparkles size={14} className="text-red-300" />
            <span>{activeVideo.badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {activeVideo.title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {activeVideo.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-2.5">
              Key Takeaways from Saanika:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200 inline-block text-left">
              {activeVideo.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              id="btn-watch-life-reel-facebook"
              href={activeVideo.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Watch on Facebook</span>
              <ExternalLink size={15} />
            </a>

            <a
              href="#/book-general"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all cursor-pointer"
            >
              <span>Compare Rates with Saanika</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right Video Reel Preview Card */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <a
            id="card-play-life-reel"
            href={activeVideo.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-[280px] sm:w-[300px] h-[480px] sm:h-[500px] rounded-2xl overflow-hidden border-2 border-slate-700/80 hover:border-red-500 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-slate-950"
            aria-label={`Watch ${activeVideo.title} on Facebook`}
          >
            {/* Background Gradient & Graphic */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-950/70 via-slate-900 to-black pointer-events-none" />
            
            {/* Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-600/20 rounded-full blur-2xl group-hover:bg-red-500/30 transition-all pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-amber-600/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-all pointer-events-none" />

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-between p-5 z-10">
              
              {/* Top Bar inside Card */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/40 border border-red-400/40 text-red-200 text-[11px] font-bold">
                    <Film size={12} />
                    <span>Facebook Reel</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-400 bg-black/40 px-2 py-0.5 rounded">
                    HD Video
                  </span>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <img
                    src="/BM6A8382.jpeg"
                    alt="Saanika Prabhu"
                    className="w-10 h-10 rounded-full object-cover border-2 border-red-400 shadow-sm"
                  />
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Saanika Prabhu</p>
                    <p className="text-[10px] text-red-300">Independent Life Broker</p>
                  </div>
                </div>
              </div>

              {/* Center Play Button & Title */}
              <div className="flex flex-col items-center text-center my-auto py-4">
                <div className="relative mb-4">
                  {/* Pulse Rings */}
                  <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping opacity-75" />
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-red-600 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <Play size={32} className="ml-1 fill-white text-white" />
                  </div>
                </div>

                <p className="text-sm sm:text-base font-extrabold text-white px-3 leading-snug line-clamp-2">
                  {activeVideo.title}
                </p>
                <p className="text-xs text-red-300 mt-1 font-semibold flex items-center gap-1">
                  <span>Tap to play video with sound</span>
                  <ExternalLink size={12} />
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-800/80 text-center">
                <div className="w-full py-2.5 px-3 rounded-xl bg-red-600 group-hover:bg-red-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
                  <span>Watch Video on Facebook</span>
                  <ExternalLink size={14} />
                </div>
                <p className="text-[10px] text-slate-400 mt-2">
                  Free instant streaming • Full audio enabled
                </p>
              </div>

            </div>
          </a>

          <p className="text-[11px] text-slate-400 mt-2.5 text-center flex items-center gap-1">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span>TrueNorth Insurance Educational Series</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LifeInsuranceVideoReel;
