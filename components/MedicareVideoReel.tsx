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
    id: 'new-to-medicare',
    badge: 'Video 1 • Overview',
    title: 'New to Medicare? Watch this video',
    description: 'Starting Medicare can feel overwhelming with all the mail and phone calls you receive. Watch this concise video walkthrough to quickly understand your baseline rights, timelines, and how to avoid costly missteps.',
    reelUrl: 'https://www.facebook.com/reel/1096791789342793',
    highlights: [
      'What happens when you turn 65 and how enrollment triggers work',
      'The real difference between Original Medicare, Advantage, and Supplements',
      'How to avoid permanent late enrollment penalty fees for Parts B & D',
    ],
  },
  {
    id: 'do-i-need-part-b',
    badge: 'Video 2 • Crucial Decision',
    title: 'Do I need Part B?',
    description: 'Wondering if you can delay or skip Medicare Part B? If you or your spouse are still actively working with employer health insurance, watch this video to understand the rules and avoid paying lifelong penalty fees.',
    reelUrl: 'https://www.facebook.com/reel/1775601460449783',
    highlights: [
      'The 20-employee rule: when employer group coverage counts as primary',
      'Why COBRA, VA benefits, and retiree coverage do NOT exempt you from Part B',
      'How the 8-month Special Enrollment Period (SEP) works when you retire',
    ],
  },
];

export const MedicareVideoReel: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string>('new-to-medicare');

  const activeVideo = videos.find(v => v.id === selectedVideoId) || videos[0];

  const handleSelectVideo = (id: string) => {
    setSelectedVideoId(id);
  };

  return (
    <div id="medicare-video-guides" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden my-8 border border-blue-800/40">
      
      {/* Video Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-blue-800/50">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-300">
          <Film size={15} />
          <span>Educational Video Library</span>
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
                    ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-400' 
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
            <Sparkles size={14} className="text-blue-300" />
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
              Key Highlights Covered in the Video:
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
              id="btn-watch-reel-facebook"
              href={activeVideo.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Watch on Facebook</span>
              <ExternalLink size={15} />
            </a>

            <a
              href="#/book-medicare"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold border border-white/20 transition-all cursor-pointer"
            >
              <span>Schedule Free Review</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right Video Reel Preview Card (Option 3 Workaround) */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <a
            id="card-play-medicare-reel"
            href={activeVideo.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-[280px] sm:w-[300px] h-[480px] sm:h-[500px] rounded-2xl overflow-hidden border-2 border-slate-700/80 hover:border-blue-400 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-slate-950"
            aria-label={`Watch ${activeVideo.title} on Facebook`}
          >
            {/* Background Gradient & Graphic */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900 to-black pointer-events-none" />
            
            {/* Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-600/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all pointer-events-none" />

            {/* Content Overlay */}
            <div className="relative h-full flex flex-col justify-between p-5 z-10">
              
              {/* Top Bar inside Card */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-600/40 border border-blue-400/40 text-blue-200 text-[11px] font-bold">
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
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 shadow-sm"
                  />
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">Saanika Prabhu</p>
                    <p className="text-[10px] text-blue-300">Licensed Medicare Broker</p>
                  </div>
                </div>
              </div>

              {/* Center Play Button & Title */}
              <div className="flex flex-col items-center text-center my-auto py-4">
                <div className="relative mb-4">
                  {/* Pulse Rings */}
                  <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping opacity-75" />
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                    <Play size={32} className="ml-1 fill-white text-white" />
                  </div>
                </div>

                <p className="text-sm sm:text-base font-extrabold text-white px-3 leading-snug line-clamp-2">
                  {activeVideo.title}
                </p>
                <p className="text-xs text-blue-300 mt-1 font-semibold flex items-center gap-1">
                  <span>Tap to play video with sound</span>
                  <ExternalLink size={12} />
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-800/80 text-center">
                <div className="w-full py-2.5 px-3 rounded-xl bg-blue-600 group-hover:bg-blue-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md">
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

export default MedicareVideoReel;
