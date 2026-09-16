import React, { useRef, useState } from 'react';
import { Camera, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { useBrokerPhoto } from '../hooks/useBrokerPhoto';

interface BrokerPhotoProps {
  mode?: 'portrait' | 'avatar';
  className?: string;
}

export const BrokerPhoto: React.FC<BrokerPhotoProps> = ({
  mode = 'portrait',
  className = '',
}) => {
  const { currentSrc, hasError, isSaving, handleImageError, savePhoto } = useBrokerPhoto();
  const [isDragging, setIsDragging] = useState(false);
  const [justSaved, setJustSaved] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (e.g. JPEG, PNG)');
      return;
    }
    await savePhoto(file);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 3000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const triggerPicker = () => {
    fileInputRef.current?.click();
  };

  if (mode === 'avatar') {
    return (
      <div 
        className={`relative group inline-block ${className}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/*" 
          className="hidden" 
          onChange={onFileChange}
        />
        
        {hasError ? (
          <button
            type="button"
            onClick={triggerPicker}
            className="w-40 h-40 rounded-full border-4 border-dashed border-tn-accent bg-red-50 flex flex-col items-center justify-center text-center p-3 cursor-pointer hover:bg-red-100 transition-colors"
            title="Click to select BM6A8382.jpeg"
          >
            <Upload size={28} className="text-tn-accent mb-1" />
            <span className="text-xs font-bold text-tn-primary">Select Photo</span>
            <span className="text-[10px] text-gray-500">BM6A8382.jpeg</span>
          </button>
        ) : (
          <div className="relative">
            <img 
              id="saanika-note-image"
              src={currentSrc} 
              alt="Saanika Prabhu, Licensed Texas Insurance Broker" 
              className="rounded-full w-40 h-40 object-cover object-[center_15%] shadow-lg border-4 border-white bg-slate-100"
              onError={handleImageError}
              referrerPolicy="no-referrer" 
            />
            {/* Hover change button */}
            <button
              type="button"
              onClick={triggerPicker}
              className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity cursor-pointer text-xs font-semibold"
            >
              <Camera size={22} className="mb-1" />
              <span>Update Photo</span>
            </button>
          </div>
        )}

        {justSaved && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1 whitespace-nowrap">
            <CheckCircle2 size={12} /> Photo Saved!
          </div>
        )}
      </div>
    );
  }

  // Portrait mode (About Me Page)
  return (
    <div 
      className={`relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm transition-all ${
        isDragging ? 'border-tn-accent ring-2 ring-tn-accent/30 bg-red-50/20' : ''
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input 
        ref={fileInputRef}
        type="file" 
        accept="image/*" 
        className="hidden" 
        onChange={onFileChange}
      />

      {hasError ? (
        <div className="p-8 text-center flex flex-col items-center justify-center min-h-[360px] bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl m-2">
          <div className="w-14 h-14 rounded-full bg-red-50 text-tn-accent flex items-center justify-center mb-3">
            <Camera size={28} />
          </div>
          <h4 className="text-base font-bold text-tn-primary mb-1">Upload BM6A8382.jpeg</h4>
          <p className="text-xs text-gray-600 mb-4 max-w-xs">
            Drop your original photo file here or click below to place it without modification.
          </p>
          <button
            type="button"
            onClick={triggerPicker}
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-tn-accent text-white rounded-lg text-sm font-semibold hover:bg-tn-accent/90 transition-colors shadow-sm cursor-pointer"
          >
            <Upload size={16} />
            {isSaving ? 'Saving Photo...' : 'Select BM6A8382.jpeg'}
          </button>
        </div>
      ) : (
        <div className="relative">
          <img 
            id="broker-profile-image"
            src={currentSrc} 
            alt="Saanika Prabhu, Licensed Texas Insurance Broker" 
            className="w-full h-auto object-contain block bg-slate-50"
            onError={handleImageError}
            referrerPolicy="no-referrer"
          />

          {/* Discreet hover control bar */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              type="button"
              onClick={triggerPicker}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 hover:bg-white text-tn-primary text-xs font-medium rounded-md shadow-md border border-slate-200 backdrop-blur-xs transition-colors cursor-pointer"
              title="Click to select or change photo"
            >
              <Camera size={14} className="text-tn-accent" />
              <span>Change Photo</span>
            </button>
          </div>

          {/* Drag over overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-tn-accent/80 text-white flex flex-col items-center justify-center p-4 backdrop-blur-xs">
              <Upload size={40} className="mb-2 animate-bounce" />
              <p className="font-bold text-sm">Drop BM6A8382.jpeg here</p>
            </div>
          )}
        </div>
      )}

      {justSaved && (
        <div className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow-md flex items-center gap-1.5 animate-fade-in">
          <CheckCircle2 size={14} /> Photo placed successfully!
        </div>
      )}
    </div>
  );
};

export default BrokerPhoto;
